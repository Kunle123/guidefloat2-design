import { useState, ComponentType, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  X,
  Minimize2,
  Maximize2,
  ChevronRight,
  ChevronLeft,
  RotateCcw,
  HelpCircle,
  Check,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate, useParams } from "react-router-dom";
import { getGuideById } from "@/config/guides";
import { AnimatePresence } from "framer-motion";
import { SuccessScreen } from "@/components/onboarding/SuccessScreen";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  website: string;
  companySize: string;
  industry: string;
  role: string;
  primaryGoal: string;
  contactName: string;
  contactEmail: string;
  dealName: string;
  dealValue: string;
  senderName: string;
  senderEmail: string;
  domain: string;
  teammates: string;
  dashboardFocus: string;
}

const GuideExecution = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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

  const guide = getGuideById(id || "hubspot-setup");
  
  if (!guide) {
    navigate("/library");
    return null;
  }

  const progress = (currentStep / guide.steps.length) * 100;
  const currentStepData = guide.steps[currentStep - 1];
  const isComplete = currentStep > guide.steps.length;

  // Apply guide branding dynamically
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--guide-primary', guide.branding.primaryColor);
    root.style.setProperty('--guide-secondary', guide.branding.secondaryColor || guide.branding.primaryColor);
    root.style.setProperty('--guide-accent', guide.branding.accentColor || guide.branding.primaryColor);
    
    return () => {
      root.style.removeProperty('--guide-primary');
      root.style.removeProperty('--guide-secondary');
      root.style.removeProperty('--guide-accent');
    };
  }, [guide.branding]);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const handleNext = () => {
    if (currentStep <= guide.steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(1);
  };

  const handleClose = () => {
    navigate(-1);
  };

  const handleLaunchApp = () => {
    const appUrl = `https://www.hubspot.com/products/get-started?utm_source=affiliate`;
    window.open(appUrl, '_blank');
    navigate("/popup");
  };

  const renderStepContent = () => {
    if (isComplete) {
      return <SuccessScreen onLaunchHubSpot={handleLaunchApp} />;
    }

    const StepComponent = currentStepData.component as ComponentType<any>;
    
    if (!StepComponent) {
      return (
        <div className="space-y-6">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-[hsl(25_100%_60%)]/10 rounded-lg flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-[hsl(25_100%_60%)] flex items-center justify-center">
              <AlertCircle className="h-10 w-10 text-white" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Badge className="mt-0.5">Step {currentStep}</Badge>
            </div>
            <h2 className="text-2xl font-bold">{currentStepData.title}</h2>
            <p className="text-muted-foreground">{currentStepData.description}</p>
          </div>
          <Button className="w-full" size="lg" variant="cta" onClick={handleNext}>
            Continue
          </Button>
        </div>
      );
    }

    return (
      <StepComponent
        data={formData}
        onUpdate={updateFormData}
        onNext={handleNext}
        onBack={handlePrevious}
      />
    );
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="gap-2 shadow-lg"
          onClick={() => setIsMinimized(false)}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Guide in Progress ({currentStep}/{guide.steps.length})
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 p-4 flex items-center justify-center">
      {/* Floating Widget */}
      <Card
        className={cn(
          "shadow-2xl transition-all",
          isExpanded ? "w-full max-w-4xl h-[600px]" : "w-full max-w-sm h-[500px]"
        )}
        style={{
          fontFamily: guide.branding.fontFamily || 'inherit',
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-muted/50">
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, hsl(var(--guide-primary)), hsl(var(--guide-accent)))`,
                }}
              >
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{guide.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {isComplete ? "Complete!" : `Step ${currentStep} of ${guide.steps.length}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(!isExpanded)}
                className="h-8 w-8"
              >
                {isExpanded ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(true)}
                className="h-8 w-8"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Progress Bar */}
          {!isComplete && (
            <div className="px-4 py-3 border-b">
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                {Math.round(progress)}% Complete
              </p>
            </div>
          )}

          {/* Current Step Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              {renderStepContent()}
            </AnimatePresence>
          </div>

          {/* Footer Actions */}
          {!isComplete && (
            <div className="p-4 border-t bg-muted/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handlePrevious}
                    disabled={currentStep === 1}
                    className="gap-1"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Previous
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRestart}
                    className="gap-1"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Restart
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleNext}
                    disabled={currentStep > guide.steps.length}
                    className="gap-1"
                  >
                    Skip
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default GuideExecution;
