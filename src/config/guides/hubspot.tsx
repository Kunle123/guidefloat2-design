import { GuideConfig } from "@/types/guide";
import { Step1Welcome } from "@/components/onboarding/steps/Step1Welcome";
import { Step2Business } from "@/components/onboarding/steps/Step2Business";
import { Step3Goals } from "@/components/onboarding/steps/Step3Goals";
import { Step4CRM } from "@/components/onboarding/steps/Step4CRM";
import { Step5Email } from "@/components/onboarding/steps/Step5Email";
import { Step6Invite } from "@/components/onboarding/steps/Step6Invite";

export const hubspotGuide: GuideConfig = {
  id: "hubspot-setup",
  title: "HubSpot Setup Guide",
  description: "Complete setup guide for HubSpot CRM",
  category: "CRM & Sales",
  estimatedTime: "15 min",
  difficulty: "Beginner",
  branding: {
    primaryColor: "18 100% 56%", // HubSpot Orange
    secondaryColor: "207 92% 54%", // HubSpot Blue
    accentColor: "18 100% 64%", // Lighter orange for accents
    fontFamily: "'Lexend', sans-serif",
  },
  steps: [
    {
      id: 1,
      title: "Welcome to HubSpot Setup",
      description: "We'll walk you through setting up your HubSpot workspace step by step.",
      component: Step1Welcome,
    },
    {
      id: 2,
      title: "Business Information",
      description: "Tell us about your company to customize your experience.",
      component: Step2Business,
    },
    {
      id: 3,
      title: "Goals & Objectives",
      description: "Define what you want to accomplish with HubSpot.",
      component: Step3Goals,
    },
    {
      id: 4,
      title: "CRM Setup",
      description: "Add your first contact and deal to get started.",
      component: Step4CRM,
    },
    {
      id: 5,
      title: "Email Configuration",
      description: "Set up email tracking and communication settings.",
      component: Step5Email,
    },
    {
      id: 6,
      title: "Team & Dashboard",
      description: "Invite teammates and customize your dashboard.",
      component: Step6Invite,
    },
  ],
};
