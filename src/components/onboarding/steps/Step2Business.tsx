import { motion } from "framer-motion";
import { FormInput } from "../FormInput";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Building2 } from "lucide-react";

interface Step2Props {
  data: {
    companyName: string;
    website: string;
    companySize: string;
    industry: string;
  };
  onUpdate: (data: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const companySizes = [
  "Solo",
  "2-5 employees",
  "6-25 employees",
  "26-100 employees",
  "100+ employees",
];

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "E-commerce",
  "Education",
  "Manufacturing",
  "Consulting",
  "Real Estate",
  "Marketing & Advertising",
  "Other",
];

export const Step2Business = ({ data, onUpdate, onNext, onBack }: Step2Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!data.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!data.website.trim()) newErrors.website = "Website is required";
    if (!data.companySize) newErrors.companySize = "Please select company size";
    if (!data.industry) newErrors.industry = "Please select an industry";

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
          <Building2 className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Tell us about your business</h2>
        <p className="text-sm text-muted-foreground">
          This helps us match your setup to the right HubSpot modules.
        </p>
      </div>

      <div className="space-y-4">
        <FormInput
          id="companyName"
          label="Company Name"
          value={data.companyName}
          onChange={(e) => onUpdate({ companyName: e.target.value })}
          error={errors.companyName}
          isValid={!errors.companyName && data.companyName.length > 0}
          autoFocus
        />

        <FormInput
          id="website"
          label="Website / Domain"
          placeholder="www.example.com"
          value={data.website}
          onChange={(e) => onUpdate({ website: e.target.value })}
          tooltip="Your company's primary website"
          error={errors.website}
          isValid={!errors.website && data.website.length > 0}
        />

        <div className="space-y-2">
          <Label>Company Size</Label>
          <Select value={data.companySize} onValueChange={(value) => onUpdate({ companySize: value })}>
            <SelectTrigger className={errors.companySize ? "border-destructive" : ""}>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {companySizes.map((size) => (
                <SelectItem key={size} value={size}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.companySize && (
            <p className="text-sm text-destructive">{errors.companySize}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label>Industry</Label>
          <Select value={data.industry} onValueChange={(value) => onUpdate({ industry: value })}>
            <SelectTrigger className={errors.industry ? "border-destructive" : ""}>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.industry && (
            <p className="text-sm text-destructive">{errors.industry}</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button onClick={onBack} variant="outline" size="lg">
          Back
        </Button>
        <Button onClick={handleNext} variant="cta" size="lg" className="min-w-32">
          Continue
        </Button>
      </div>
    </motion.div>
  );
};
