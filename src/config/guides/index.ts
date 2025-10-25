import { GuideConfig } from "@/types/guide";
import { hubspotGuide } from "./hubspot";

// Central registry of all available guides
export const guides: Record<string, GuideConfig> = {
  "hubspot-setup": hubspotGuide,
  // Future guides can be added here
  // "salesforce-setup": salesforceGuide,
  // "slack-integration": slackGuide,
};

export const getGuideById = (id: string): GuideConfig | undefined => {
  return guides[id];
};

export const getAllGuides = (): GuideConfig[] => {
  return Object.values(guides);
};
