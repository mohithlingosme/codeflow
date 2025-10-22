
export interface Tool {
  name: string;
  description: string;
}

export interface Phase {
  phaseName: string;
  description: string;
  activities: string[];
  tools: Tool[];
}

export interface SdlcPlan {
  projectName: string;
  projectSummary: string;
  phases: Phase[];
}
