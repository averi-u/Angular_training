export interface ProblemStep {
  id: string;
  title: string;
  prompt: string;
}

export interface Problem {
  id: string;
  title: string;
  topic: string; // e.g. Algebra, Probability, etc.
  steps: ProblemStep[];
}

export interface TimingMetric {
  stepId: string;
  msFocused: number; // time user spent actively on this step
  clicks: number;
  reads: number; // focus-in events
  annotations: number;
}

export interface Annotation {
  id: string;
  stepId: string;
  text: string;
  source: 'ai' | 'user';
  createdAt: number;
}