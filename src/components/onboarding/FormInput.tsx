import { forwardRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  tooltip?: string;
  error?: string;
  isValid?: boolean;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, tooltip, error, isValid, className, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor={props.id} className="text-sm font-medium">
            {label}
          </Label>
          <div className="flex items-center gap-2">
            {isValid && (
              <Check className="h-4 w-4 text-success animate-scale-in" />
            )}
            {tooltip && (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger type="button">
                    <Info className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent side="top" className="max-w-xs">
                    <p className="text-sm">{tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )}
          </div>
        </div>
        <Input
          ref={ref}
          className={cn(
            "transition-all",
            isFocused && "ring-2 ring-primary/20",
            isValid && "border-success",
            error && "border-destructive",
            className
          )}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {error && (
          <p className="text-sm text-destructive animate-fade-in">{error}</p>
        )}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
