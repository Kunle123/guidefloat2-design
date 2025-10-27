import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "./ProgressBar";
import { Step1Platform } from "./steps/Step1Platform";
import { Step2Welcome } from "./steps/Step2Welcome";
import { Step2Business } from "./steps/Step2Business";
import { Step3Goals } from "./steps/Step3Goals";
import { Step4CRM } from "./steps/Step4CRM";
import { Step5Email } from "./steps/Step5Email";
import { Step6Invite } from "./steps/Step6Invite";
import { SuccessScreen } from "./SuccessScreen";

interface FormData {
  // Step 1
  firstName: string;
  lastName: string;
  email: string;
  // Step 2
  companyName: string;
  website: string;
  companySize: string;
  industry: string;
  // Step 3
  role: string;
  primaryGoal: string;
  // Step 4
  contactName: string;
  contactEmail: string;
  dealName: string;
  dealValue: string;
  // Step 5
  senderName: string;
  senderEmail: string;
  domain: string;
  // Step 6
  platform: string;
  teammates: string;
}

const TOTAL_STEPS = 7;

export const OnboardingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    website: "",
    companySize: "",
    industry: "",
    role: "",
    primaryGoal: "",
    contactName: "",
    contactEmail: "",
    dealName: "",
    dealValue: "",
    senderName: "",
    senderEmail: "",
    domain: "",
    platform: "",
    teammates: "",
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = async () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      // Save to chrome storage when moving to success screen
      try {
        const w = window as any;
        if (w.chrome && w.chrome.storage) {
          await w.chrome.storage.local.set({ guidefloatData: formData });
          console.log('User data saved to chrome storage');
        } else {
          // Fallback to localStorage for testing
          localStorage.setItem('guidefloatData', JSON.stringify(formData));
          console.log('User data saved to localStorage');
        }
      } catch (error) {
        console.error('Failed to save data:', error);
      }
      setCurrentStep(TOTAL_STEPS + 1); // Success screen
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleLaunchHubSpot = () => {
    console.log("Launching platform with data:", formData);
    
    // Build affiliate URL based on platform
    const platformUrls: Record<string, string> = {
      hubspot: `https://app.hubspot.com/signup?email=${encodeURIComponent(formData.email)}&company=${encodeURIComponent(formData.companyName)}`,
      shopify: `https://www.shopify.com/signup?ref=guidefloat&email=${encodeURIComponent(formData.email)}`,
      semrush: `https://www.semrush.com/signup/?ref=guidefloat&email=${encodeURIComponent(formData.email)}`
    };
    
    const url = platformUrls[formData.platform] || platformUrls.hubspot;
    window.open(url, "_blank");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Platform
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2Welcome
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <Step2Business
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <Step3Goals
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return (
          <Step4CRM
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 6:
        return (
          <Step5Email
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 7:
        return (
          <Step6Invite
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 8:
        const platformNames: Record<string, string> = {
          hubspot: "HubSpot",
          shopify: "Shopify", 
          semrush: "SEMrush"
        };
        return (
          <SuccessScreen 
            onLaunchHubSpot={handleLaunchHubSpot}
            platformName={platformNames[formData.platform] || "HubSpot"}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[var(--gradient-subtle)]">
      <Card className="w-full max-w-2xl p-8 md:p-12 shadow-[var(--shadow-card)]">
        {currentStep <= TOTAL_STEPS && (
          <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
        )}
        
        <AnimatePresence mode="wait">
          {renderStep()}
        </AnimatePresence>
      </Card>
    </div>
  );
};
