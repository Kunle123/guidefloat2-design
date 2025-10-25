import { ComponentType } from "react";

export interface GuideStep {
  id: number;
  title: string;
  description: string;
  component?: ComponentType<any>;
}

export interface GuideBranding {
  primaryColor: string; // HSL format
  secondaryColor?: string; // HSL format
  accentColor?: string; // HSL format
  fontFamily?: string;
  logo?: string;
}

export interface GuideConfig {
  id: string;
  title: string;
  description: string;
  category: string;
  estimatedTime: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  branding: GuideBranding;
  steps: GuideStep[];
}
