import { motion } from "framer-motion";
import { FormInput } from "../FormInput";
import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";

interface Step4Props {
  data: {
    contactName: string;
    contactEmail: string;
    dealName: string;
    dealValue: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step4CRM = ({ data, onUpdate, onNext, onBack }: Step4Props) => {
  const handleSkip = () => {
    onUpdate({
      contactName: "",
      contactEmail: "",
      dealName: "",
      dealValue: "",
    });
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
          <Database className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Get your CRM started</h2>
        <p className="text-sm text-muted-foreground">
          We'll pre-fill a sample contact and deal to help HubSpot initialize your workspace.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            First Contact
          </h3>
          <FormInput
            id="contactName"
            label="Contact Name"
            placeholder="John Doe"
            value={data.contactName}
            onChange={(e) => onUpdate({ contactName: e.target.value })}
            tooltip="Add your first customer or lead"
            autoFocus
          />
          <FormInput
            id="contactEmail"
            type="email"
            label="Contact Email"
            placeholder="john@example.com"
            value={data.contactEmail}
            onChange={(e) => onUpdate({ contactEmail: e.target.value })}
          />
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            First Deal
          </h3>
          <FormInput
            id="dealName"
            label="Deal Name"
            placeholder="Q1 Partnership"
            value={data.dealName}
            onChange={(e) => onUpdate({ dealName: e.target.value })}
            tooltip="Name your first sales opportunity"
          />
          <FormInput
            id="dealValue"
            type="number"
            label="Deal Value (Optional)"
            placeholder="5000"
            value={data.dealValue}
            onChange={(e) => onUpdate({ dealValue: e.target.value })}
          />
        </div>
      </div>

      <div className="flex items-center justify-between pt-4">
        <Button onClick={onBack} variant="outline" size="lg">
          Back
        </Button>
        <div className="flex gap-3">
          <Button onClick={handleSkip} variant="ghost" size="lg">
            Skip for now
          </Button>
          <Button onClick={onNext} variant="cta" size="lg" className="min-w-32">
            Next
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
