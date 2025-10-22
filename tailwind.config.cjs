module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./devcore-ai-sdlc-planner/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        accent: "#22C55E",
        surface: "#1F2937",
        background: "#0B0F19",
        text: "#E5E7EB",
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
