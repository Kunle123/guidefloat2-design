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
    platform: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const platforms = [
  { 
    value: "hubspot", 
    label: "HubSpot", 
    description: "CRM & Marketing Hub",
    icon: "📊"
  },
  { 
    value: "shopify", 
    label: "Shopify", 
    description: "E-commerce Platform",
    icon: "🛍️"
  },
  { 
    value: "semrush", 
    label: "SEMrush", 
    description: "SEO & Marketing Analytics",
    icon: "📈"
  },
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
        <h2 className="text-2xl font-bold">Choose your platform</h2>
        <p className="text-sm text-muted-foreground">
          Select which platform you want to set up first
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-3">
          <Label>Select Platform to Set Up</Label>
          <div className="grid grid-cols-1 gap-3">
            {platforms.map((platform) => (
              <Card
                key={platform.value}
                className={cn(
                  "p-6 cursor-pointer transition-all hover:shadow-lg border-2",
                  data.platform === platform.value
                    ? "border-primary bg-primary/5 shadow-md"
                    : "border-border hover:border-primary/50"
                )}
                onClick={() => onUpdate({ platform: platform.value })}
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{platform.icon}</div>
                  <div className="flex-1 text-left">
                    <h3 className="font-semibold text-lg">{platform.label}</h3>
                    <p className="text-sm text-muted-foreground">{platform.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <FormInput
          id="teammates"
          label="Invite Teammates (Optional)"
          placeholder="colleague@company.com, another@company.com"
          value={data.teammates}
          onChange={(e) => onUpdate({ teammates: e.target.value })}
          tooltip="Separate multiple emails with commas"
        />
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
