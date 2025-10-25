import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles } from "lucide-react";
import Confetti from "react-confetti";
import { useWindowSize } from "@/hooks/use-window-size";

interface SuccessScreenProps {
  onLaunchHubSpot: () => void;
}

export const SuccessScreen = ({ onLaunchHubSpot }: SuccessScreenProps) => {
  const { width, height } = useWindowSize();

  return (
    <>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={500}
        gravity={0.3}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8"
      >
        <div className="relative inline-block">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-success/20 to-success/5"
          >
            <CheckCircle2 className="h-12 w-12 text-success" />
          </motion.div>
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute -top-2 -right-2"
          >
            <Sparkles className="h-8 w-8 text-primary" />
          </motion.div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-primary to-[hsl(25_100%_60%)] bg-clip-text text-transparent">
            Awesome — you're all set!
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            We've saved your details and will walk you through HubSpot's setup next.
          </p>
        </div>

        <div className="bg-muted/50 border border-border rounded-lg p-6 max-w-md mx-auto space-y-3">
          <p className="text-sm font-medium">What happens next?</p>
          <ul className="text-sm text-muted-foreground space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="text-success mt-0.5">✓</span>
              <span>You stay in control — we only fill what you see</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success mt-0.5">✓</span>
              <span>Your information is pre-filled in HubSpot's forms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-success mt-0.5">✓</span>
              <span>Complete the remaining setup steps in minutes</span>
            </li>
          </ul>
        </div>

        <Button 
          onClick={onLaunchHubSpot} 
          variant="cta" 
          size="lg"
          className="text-lg px-8 py-6 h-auto"
        >
          Launch HubSpot Setup
        </Button>

        <p className="text-xs text-muted-foreground">
          Clicking above will open HubSpot in a new window
        </p>
      </motion.div>
    </>
  );
};
