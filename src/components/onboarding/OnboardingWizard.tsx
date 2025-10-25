import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "./ProgressBar";
import { Step1Welcome } from "./steps/Step1Welcome";
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
  teammates: string;
  dashboardFocus: string;
}

const TOTAL_STEPS = 6;

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
    teammates: "",
    dashboardFocus: "",
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setCurrentStep(TOTAL_STEPS + 1); // Success screen
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleLaunchHubSpot = () => {
    // In a real implementation, this would include the affiliate ID
    const hubspotUrl = `https://www.hubspot.com/products/get-started?utm_source=affiliate`;
    window.open(hubspotUrl, '_blank');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1Welcome
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <Step2Business
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 3:
        return (
          <Step3Goals
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 4:
        return (
          <Step4CRM
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 5:
        return (
          <Step5Email
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 6:
        return (
          <Step6Invite
            data={formData}
            onUpdate={updateFormData}
            onNext={handleNext}
            onBack={handleBack}
          />
        );
      case 7:
        return <SuccessScreen onLaunchHubSpot={handleLaunchHubSpot} />;
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
