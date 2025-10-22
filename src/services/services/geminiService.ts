import { GoogleGenAI, Type } from "@google/genai";
// Assuming SdlcPlan type is defined in a relative file path
import { UserRoles } from "./types.js";  // ✅ required in ESM
import { SdlcPlan } from "@/types.ts";

// --- Configuration and Initialization ---

// Check for API Key in the environment
if (!process.env.VITE_GEMINI_API_KEY) {
    // This will stop the script if the key is missing
    throw new Error("GEMINI_API_KEY environment variable not set");
}

let ai: GoogleGenAI | null = null;
/**
 * Ensures a single, initialized instance of the GoogleGenAI client.
 * @returns {GoogleGenAI} The initialized AI client instance.
 */
function getAiInstance(): GoogleGenAI {
    if (!ai) {
        // Initialize the client with the environment variable key
        ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });
    }
    return ai;
}

/**
 * Defines the required structure for the generated SDLC plan using the Type API.
 * This schema enforces a predictable JSON output from the Gemini model.
 */
const responseSchema = {
    type: Type.OBJECT,
    properties: {
        projectName: {
            type: Type.STRING,
            description: "A creative and fitting name for the user's project based on their description."
        },
        projectSummary: {
            type: Type.STRING,
            description: "A brief, one-paragraph summary of the proposed project and its goals."
        },
        phases: {
            type: Type.ARRAY,
            description: "An array of objects, where each object represents a phase of the Software Development Life Cycle (SDLC).",
            items: {
                type: Type.OBJECT,
                properties: {
                    phaseName: {
                        type: Type.STRING,
                        description: "The name of the SDLC phase (e.g., 'Planning and Requirements', 'Design', 'Implementation')."
                    },
                    description: {
                        type: Type.STRING,
                        description: "A one-paragraph description of what this phase entails for the specific project type."
                    },
                    activities: {
                        type: Type.ARRAY,
                        description: "A list of key activities to be performed during this phase.",
                        items: { type: Type.STRING }
                    },
                    tools: {
                        type: Type.ARRAY,
                        description: "A list of recommended tools for this phase.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                name: {
                                    type: Type.STRING,
                                    description: "The name of the tool."
                                },
                                description: {
                                    type: Type.STRING,
                                    description: "A brief description of what the tool is used for."
                                }
                            },
                            required: ["name", "description"]
                        }
                    }
                },
                required: ["phaseName", "description", "activities", "tools"]
            }
        }
    },
    required: ["projectName", "projectSummary", "phases"]
};

// --- Main Service Function ---

/**
 * Generates a comprehensive Software Development Life Cycle (SDLC) plan based on the given project type and description.
 * It uses the Gemini API's structured output feature to ensure the response adheres to the defined JSON schema.
 * * @param {string} projectType - The type of project (e.g., Web Development, Mobile App Development).
 * @param {string} description - A description of the user's project.
 * @returns {Promise<SdlcPlan>} A promise that resolves to an SDLC plan object.
 */
export const generateSdlcPlan = async (projectType: string, description: string): Promise<SdlcPlan> => {
    // 1. Construct the detailed prompt
    const prompt = `
        You are an expert AI Developer Mentor. Your task is to generate a comprehensive Software Development Life Cycle (SDLC) plan for a user.

        The user has selected the project type: "${projectType}"
        And provided this description: "${description}"

        Based on this information, create a tailored SDLC plan. The plan should be structured, detailed, and provide actionable guidance. 
        Follow the provided JSON schema precisely. Use the context below to inform your recommendations for activities and tools for the specified project type. Ensure the tools you recommend are real and relevant for each phase.

        --- CONTEXT: SDLC FRAMEWORK BY PROJECT TYPE ---
        
        1. General Software Development: Classic SDLC. Tools: Jira, Confluence, Figma, VS Code, Git, JUnit, Jenkins, Docker, Sentry.
        2. Web Development: Focus on responsiveness & scalability. Tools: Asana, Figma, React/Vue, Node.js, Cypress, Vercel/Netlify, Lighthouse.
        3. Mobile App Development: Device-specific constraints. Tools: Xcode/Android Studio, Flutter/React Native, Sketch, Firebase Test Lab, Fastlane, Crashlytics.
        4. Artificial Intelligence: Data-centric phases. Tools: Miro, TensorFlow Extended (TFX), Python, Jupyter, Scikit-learn, Kubeflow, AWS SageMaker, MLflow.
        5. Machine Learning: Iterative modeling. Tools: Trello, H2O.ai, Pandas/NumPy, XGBoost/Keras, TensorBoard, FastAPI, BentoML, Evidently AI.
        6. Cybersecurity: Secure SDLC (SSDLC). Tools: ThreatModeler, SonarLint, OWASP, Burp Suite, Metasploit, Ansible, Vault, Splunk.
        7. Cloud Computing: Scalability and IaC. Tools: AWS Cost Explorer, Terraform, AWS Lambda/Google Cloud Functions, Kubernetes, JMeter, Chaos Monkey, AWS CodePipeline.
        8. Blockchain & Cryptocurrency: Consensus and smart contracts. Tools: Ganache, Remix IDE, Solidity, Truffle/Hardhat, MythX, Infura, Etherscan.
        9. Data Science and Analytics: Focus on insights. Tools: Tableau Prep, dbdiagram.io, Python/Pandas, SQL, Power BI/Tableau Server, Apache Airflow.
        10. IoT: Hardware-software integration. Tools: ThingSpeak, Fritzing, Arduino IDE, Node-RED, Wireshark, AWS IoT Core, Balena, Grafana.
        11. Embedded Systems: Resource-constrained hardware. Tools: Simulink, Altium Designer, Keil uVision, GCC, JTAG debuggers, FreeRTOS.
        12. AR/VR Metaverse: Immersive 3D experiences. Tools: Miro, Blender, Unity/Unreal Engine, C#, Oculus Store, SteamVR, Unity Analytics.
        13. Enterprise Software: Integration-heavy business processes. Tools: Microsoft Project, Enterprise Architect, Java/Spring, Salesforce Apex, LoadRunner, Azure DevOps, MuleSoft, ServiceNow.
        14. Game Development: Focus on mechanics and graphics. Tools: Milanote, Blender, Unity/Unreal, TestFlight, Steamworks, Unity Analytics.
    `;

    try {
        const aiInstance = getAiInstance();

        // 2. Call the Gemini API with structured output configuration
        const response = await aiInstance.models.generateContent({
            model: "gemini-2.5-flash",
            // Correct format for contents: an array of Content objects
            contents: [{ role: "user", parts: [{ text: prompt }] }],
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema, 
                temperature: 0.7,
            },
        });

        // The generated content will be a JSON string inside the text property
        const jsonText = response.text.trim();
        let plan: SdlcPlan;

        // 3. Parse the JSON response, handling potential parsing errors
        try {
            // Parse the JSON string into the SdlcPlan type
            plan = JSON.parse(jsonText) as SdlcPlan;
        } catch (parseError) {
            console.error("Failed to parse JSON from Gemini API response:", jsonText);
            // Throw a specific error for malformed JSON
            throw new Error("AI service did not return valid JSON and failed to generate the plan.");
        }

        // 4. Return the structured plan
        return plan;
    } catch (error) {
        // 5. Handle general API call failures (network issues, rate limits, etc.)
        console.error("Error generating content from Gemini API:", error);
        throw new Error("Failed to communicate with or receive data from AI service.");
    }
};
