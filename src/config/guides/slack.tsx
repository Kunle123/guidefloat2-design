import { GuideConfig } from "@/types/guide";

// Example: Future Slack integration guide with its own branding
export const slackGuide: GuideConfig = {
  id: "slack-integration",
  title: "Slack Integration Guide",
  description: "Connect and configure Slack for your workspace",
  category: "Communication",
  estimatedTime: "10 min",
  difficulty: "Beginner",
  branding: {
    primaryColor: "270 100% 64%", // Slack Purple
    secondaryColor: "174 100% 38%", // Slack Teal
    accentColor: "203 100% 50%", // Slack Blue
    fontFamily: "'Lato', sans-serif",
  },
  steps: [
    {
      id: 1,
      title: "Connect Your Workspace",
      description: "Link your Slack workspace to begin integration.",
      // Steps would have actual components here
    },
    {
      id: 2,
      title: "Configure Notifications",
      description: "Set up how you want to receive notifications.",
    },
  ],
};
