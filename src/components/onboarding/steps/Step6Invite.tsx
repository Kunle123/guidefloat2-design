import { motion } from "framer-motion";
import { FormInput } from "../FormInput";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Step6Props {
  data: {
    teammates: string;
    dashboardFocus: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const dashboards = [
  { value: "sales", label: "Sales", description: "Pipeline tracking & deals" },
  { value: "marketing", label: "Marketing", description: "Campaigns & analytics" },
  { value: "service", label: "Service", description: "Customer support & tickets" },
];

export const Step6Invite = ({ data, onUpdate, onNext, onBack }: Step6Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFinish = async () => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    onNext();
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
          <UserPlus className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Almost done — who's joining you?</h2>
        <p className="text-sm text-muted-foreground">
          Invite your team and customize your dashboard
        </p>
      </div>

      <div className="space-y-6">
        <FormInput
          id="teammates"
          label="Invite Teammates (Optional)"
          placeholder="colleague@company.com, another@company.com"
          value={data.teammates}
          onChange={(e) => onUpdate({ teammates: e.target.value })}
          tooltip="Separate multiple emails with commas"
          autoFocus
        />

        <div className="space-y-3">
          <Label>Choose Dashboard Focus</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {dashboards.map((dashboard) => (
              <Card
                key={dashboard.value}
                className={cn(
                  "p-4 cursor-pointer transition-all hover:shadow-md border-2",
                  data.dashboardFocus === dashboard.value
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                )}
                onClick={() => onUpdate({ dashboardFocus: dashboard.value })}
              >
                <div className="text-center space-y-1">
                  <h3 className="font-semibold">{dashboard.label}</h3>
                  <p className="text-xs text-muted-foreground">{dashboard.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={onBack} variant="outline" size="lg" disabled={isSubmitting}>
          Back
        </Button>
        <Button 
          onClick={handleFinish} 
          variant="cta" 
          size="lg" 
          className="min-w-32"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Saving..." : "Finish Setup →"}
        </Button>
      </div>
    </motion.div>
  );
};
