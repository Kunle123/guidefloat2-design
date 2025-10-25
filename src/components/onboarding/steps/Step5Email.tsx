import { motion } from "framer-motion";
import { FormInput } from "../FormInput";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Mail, Info } from "lucide-react";

interface Step5Props {
  data: {
    senderName: string;
    senderEmail: string;
    domain: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step5Email = ({ data, onUpdate, onNext, onBack }: Step5Props) => {
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
          <Mail className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Set up your communication basics</h2>
        <p className="text-sm text-muted-foreground">
          Configure how your emails will appear to recipients
        </p>
      </div>

      <div className="space-y-4">
        <FormInput
          id="senderName"
          label="Sender Name"
          placeholder="Your Name"
          value={data.senderName}
          onChange={(e) => onUpdate({ senderName: e.target.value })}
          tooltip="This name will appear in email 'From' fields"
          autoFocus
        />

        <FormInput
          id="senderEmail"
          type="email"
          label="Sender Email"
          placeholder="you@company.com"
          value={data.senderEmail}
          onChange={(e) => onUpdate({ senderEmail: e.target.value })}
          tooltip="Your primary email for sending campaigns"
        />

        <FormInput
          id="domain"
          label="Domain"
          placeholder="company.com"
          value={data.domain}
          onChange={(e) => onUpdate({ domain: e.target.value })}
          tooltip="Your company domain for branding"
        />

        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription className="text-sm">
            We'll guide you later when you connect Gmail/Outlook and install your tracking pixel.
          </AlertDescription>
        </Alert>
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={onBack} variant="outline" size="lg">
          Back
        </Button>
        <Button onClick={onNext} variant="cta" size="lg" className="min-w-32">
          Next
        </Button>
      </div>
    </motion.div>
  );
};
