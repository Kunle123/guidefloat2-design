import { motion } from "framer-motion";
import { FormInput } from "../FormInput";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sparkles } from "lucide-react";

interface Step2Props {
  data: {
    firstName: string;
    lastName: string;
    email: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step2Welcome = ({ data, onUpdate, onNext, onBack }: Step2Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!data.firstName.trim()) newErrors.firstName = "First name is required";
    if (!data.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      onNext();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleNext();
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
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome! Let's get started</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          We'll collect a few details to pre-fill your setup and save you time.
        </p>
      </div>

      <div className="space-y-4" onKeyPress={handleKeyPress}>
        <div className="grid grid-cols-2 gap-4">
          <FormInput
            id="firstName"
            label="First Name"
            value={data.firstName}
            onChange={(e) => onUpdate({ firstName: e.target.value })}
            error={errors.firstName}
            isValid={!errors.firstName && data.firstName.length > 0}
            autoFocus
          />
          <FormInput
            id="lastName"
            label="Last Name"
            value={data.lastName}
            onChange={(e) => onUpdate({ lastName: e.target.value })}
            error={errors.lastName}
            isValid={!errors.lastName && data.lastName.length > 0}
          />
        </div>

        <FormInput
          id="email"
          type="email"
          label="Email Address"
          value={data.email}
          onChange={(e) => onUpdate({ email: e.target.value })}
          tooltip="We'll use this to set up your account"
          error={errors.email}
          isValid={!errors.email && data.email.length > 0 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)}
        />
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={onBack} variant="outline" size="lg">
          Back
        </Button>
        <Button onClick={handleNext} variant="cta" size="lg" className="min-w-32">
          Continue →
        </Button>
      </div>

      <p className="text-xs text-center text-muted-foreground">
        🔒 We don't store passwords or billing info
      </p>
    </motion.div>
  );
};
