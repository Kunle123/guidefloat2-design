import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Target, Users, TrendingUp, Mail, BarChart } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step3Props {
  data: {
    role: string;
    primaryGoal: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const roles = [
  { value: "owner", label: "Owner" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "operations", label: "Operations" },
];

const goals = [
  { value: "leads", label: "Generate more leads", icon: Users },
  { value: "pipeline", label: "Track sales pipeline", icon: TrendingUp },
  { value: "automation", label: "Automate email follow-ups", icon: Mail },
  { value: "analytics", label: "Understand my marketing data", icon: BarChart },
];

export const Step3Goals = ({ data, onUpdate, onNext, onBack }: Step3Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!data.role) newErrors.role = "Please select your role";
    if (!data.primaryGoal) newErrors.primaryGoal = "Please select your primary goal";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <div className="text-center space-y-3">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 mb-4">
          <Target className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">What brings you to HubSpot?</h2>
        <p className="text-sm text-muted-foreground">
          Help us personalize your experience
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Your Role</Label>
          <div className="flex flex-wrap gap-2">
            {roles.map((role) => (
              <Button
                key={role.value}
                type="button"
                variant={data.role === role.value ? "default" : "outline"}
                className={cn(
                  "transition-all",
                  data.role === role.value && "ring-2 ring-primary/20"
                )}
                onClick={() => onUpdate({ role: role.value })}
              >
                {role.label}
              </Button>
            ))}
          </div>
          {errors.role && (
            <p className="text-sm text-destructive">{errors.role}</p>
          )}
        </div>

        <div className="space-y-3">
          <Label>Primary Goal</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {goals.map((goal) => {
              const Icon = goal.icon;
              return (
                <Card
                  key={goal.value}
                  className={cn(
                    "p-4 cursor-pointer transition-all hover:shadow-md border-2",
                    data.primaryGoal === goal.value
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  )}
                  onClick={() => onUpdate({ primaryGoal: goal.value })}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <Icon className={cn(
                        "h-5 w-5",
                        data.primaryGoal === goal.value ? "text-primary" : "text-muted-foreground"
                      )} />
                    </div>
                    <span className="font-medium text-sm">{goal.label}</span>
                  </div>
                </Card>
              );
            })}
          </div>
          {errors.primaryGoal && (
            <p className="text-sm text-destructive">{errors.primaryGoal}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={onBack} variant="outline" size="lg">
          Back
        </Button>
        <Button onClick={handleNext} variant="cta" size="lg" className="min-w-32">
          Next
        </Button>
      </div>
    </motion.div>
  );
};
