import { useState } from "react";
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

const guideSteps = [
  {
    id: 1,
    title: "Welcome to HubSpot Setup",
    description: "We'll walk you through setting up your HubSpot workspace step by step. This should take about 15 minutes.",
    action: "Get Started",
    illustration: "welcome",
  },
  {
    id: 2,
    title: "Enter Your Business Details",
    description: "Fill in your company name, website, and basic information. We've pre-filled what we can from your profile.",
    action: "Fill Details",
    illustration: "form",
  },
  {
    id: 3,
    title: "Choose Your Primary Goal",
    description: "Select what you want to accomplish with HubSpot. This helps us customize your dashboard.",
    action: "Select Goal",
    illustration: "target",
  },
  {
    id: 4,
    title: "Add Your First Contact",
    description: "Create a sample contact to initialize your CRM. You can import more contacts later.",
    action: "Add Contact",
    illustration: "contact",
  },
  {
    id: 5,
    title: "Set Up Email Tracking",
    description: "Connect your email to track opens and clicks. We'll guide you through Gmail or Outlook setup.",
    action: "Connect Email",
    illustration: "email",
  },
  {
    id: 6,
    title: "Create Your First Deal",
    description: "Add a sample deal to see how the sales pipeline works in HubSpot.",
    action: "Create Deal",
    illustration: "deal",
  },
  {
    id: 7,
    title: "Customize Your Dashboard",
    description: "Choose which widgets and metrics you want to see on your main dashboard.",
    action: "Customize",
    illustration: "dashboard",
  },
  {
    id: 8,
    title: "Setup Complete!",
    description: "Congratulations! Your HubSpot workspace is ready. You can now start managing your business.",
    action: "Launch HubSpot",
    illustration: "success",
  },
];

const GuideExecution = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const progress = (currentStep / guideSteps.length) * 100;
  const currentStepData = guideSteps[currentStep - 1];

  const handleNext = () => {
    if (currentStep < guideSteps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Guide complete
      navigate("/popup");
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

  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          size="lg"
          className="gap-2 shadow-lg"
          onClick={() => setIsMinimized(false)}
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Guide in Progress ({currentStep}/{guideSteps.length})
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
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-muted/50">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(25_100%_60%)] flex items-center justify-center">
                <Check className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">HubSpot Setup Guide</h3>
                <p className="text-xs text-muted-foreground">
                  Step {currentStep} of {guideSteps.length}
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
          <div className="px-4 py-3 border-b">
            <Progress value={progress} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              {Math.round(progress)}% Complete
            </p>
          </div>

          {/* Current Step Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Step Illustration */}
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-[hsl(25_100%_60%)]/10 rounded-lg flex items-center justify-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-[hsl(25_100%_60%)] flex items-center justify-center">
                  {currentStep === guideSteps.length ? (
                    <Check className="h-10 w-10 text-white" />
                  ) : (
                    <AlertCircle className="h-10 w-10 text-white" />
                  )}
                </div>
              </div>

              {/* Step Info */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <Badge className="mt-0.5">Step {currentStep}</Badge>
                  {currentStep === guideSteps.length && (
                    <Badge className="bg-success text-success-foreground mt-0.5">
                      Complete
                    </Badge>
                  )}
                </div>

                <h2 className="text-2xl font-bold">{currentStepData.title}</h2>
                <p className="text-muted-foreground">{currentStepData.description}</p>
              </div>

              {/* Action Button */}
              <Button
                className="w-full"
                size="lg"
                variant="cta"
                onClick={handleNext}
              >
                {currentStepData.action}
              </Button>

              {/* Helper Info */}
              {currentStep < guideSteps.length && (
                <div className="flex items-start gap-2 p-3 bg-muted rounded-lg">
                  <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    This step will open in a new window. Return here when complete to continue.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Footer Actions */}
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
                  disabled={currentStep === guideSteps.length}
                  className="gap-1"
                >
                  Skip
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Spotlight Indicator (simulated) */}
      <div className="fixed top-1/3 left-1/4 z-40 pointer-events-none">
        <div className="relative">
          <div className="w-4 h-4 rounded-full bg-primary animate-pulse shadow-lg shadow-primary/50" />
          <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping" />
        </div>
      </div>
    </div>
  );
};

export default GuideExecution;
