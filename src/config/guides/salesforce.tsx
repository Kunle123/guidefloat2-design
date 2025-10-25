import { GuideConfig } from "@/types/guide";

// Example: Future Salesforce guide with its own branding
export const salesforceGuide: GuideConfig = {
  id: "salesforce-setup",
  title: "Salesforce Setup Guide",
  description: "Complete setup guide for Salesforce CRM",
  category: "CRM & Sales",
  estimatedTime: "20 min",
  difficulty: "Intermediate",
  branding: {
    primaryColor: "203 87% 51%", // Salesforce Blue
    secondaryColor: "202 100% 40%", // Darker Salesforce Blue
    accentColor: "203 87% 63%", // Lighter blue for accents
    fontFamily: "'Inter', sans-serif",
  },
  steps: [
    {
      id: 1,
      title: "Welcome to Salesforce",
      description: "Get started with your Salesforce workspace setup.",
      // Steps would have actual components here
    },
    {
      id: 2,
      title: "Configure Your Org",
      description: "Set up your Salesforce organization settings.",
    },
  ],
};
