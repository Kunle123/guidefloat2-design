import { ComponentType } from "react";

export interface GuideStep {
  id: number;
  title: string;
  description: string;
  component?: ComponentType<any>;
}

export interface GuideConfig {
  id: string;
  title: string;
  description: string;
  category: string;
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  steps: GuideStep[];
}
