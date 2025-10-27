import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Step1Props {
  data: {
    platform: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
}

const platforms = [
  { 
    value: "hubspot", 
    label: "HubSpot", 
    description: "CRM & Marketing Hub",
    icon: "📊",
    color: "from-orange-500/20 to-orange-500/5"
  },
  { 
    value: "shopify", 
    label: "Shopify", 
    description: "E-commerce Platform",
    icon: "🛍️",
    color: "from-green-500/20 to-green-500/5"
  },
  { 
    value: "semrush", 
    label: "SEMrush", 
    description: "SEO & Marketing Analytics",
    icon: "📈",
    color: "from-blue-500/20 to-blue-500/5"
  },
];

export const Step1Platform = ({ data, onUpdate, onNext }: Step1Props) => {
  const handleNext = () => {
    if (data.platform) {
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
          <span className="text-3xl">🚀</span>
        </div>
        <h2 className="text-2xl font-bold">Choose Your Platform</h2>
        <p className="text-sm text-muted-foreground">
          Select which platform you want to set up. We'll customize the experience for you.
        </p>
      </div>

      <div className="space-y-4">
        <Label>Select Your Platform</Label>
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
                <div 
                  className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br",
                    platform.color
                  )}
                >
                  <span className="text-4xl">{platform.icon}</span>
                </div>
                <div className="flex-1 text-left">
                  <h3 className="font-semibold text-lg">{platform.label}</h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {!data.platform && (
          <p className="text-xs text-muted-foreground text-center mt-2">
            Please select a platform to continue
          </p>
        )}
      </div>

      <div className="flex justify-end pt-4">
        <Button 
          onClick={handleNext} 
          variant="cta" 
          size="lg" 
          disabled={!data.platform}
        >
          Continue →
        </Button>
      </div>
    </motion.div>
  );
};
