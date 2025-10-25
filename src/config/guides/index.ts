import { GuideConfig } from "@/types/guide";
import { hubspotGuide } from "./hubspot";
import { salesforceGuide } from "./salesforce";
import { slackGuide } from "./slack";

// Central registry of all available guides
export const guides: Record<string, GuideConfig> = {
  "hubspot-setup": hubspotGuide,
  "salesforce-setup": salesforceGuide,
  "slack-integration": slackGuide,
};

export const getGuideById = (id: string): GuideConfig | undefined => {
  return guides[id];
};

export const getAllGuides = (): GuideConfig[] => {
  return Object.values(guides);
};
