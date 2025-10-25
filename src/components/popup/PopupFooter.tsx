import { Button } from "@/components/ui/button";
import { Settings, HelpCircle, Info } from "lucide-react";

export const PopupFooter = () => {
  return (
    <div className="sticky bottom-0 bg-background border-t px-4 py-2">
      <div className="flex items-center justify-around">
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
          <Settings className="h-4 w-4" />
          <span className="text-xs">Settings</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
          <HelpCircle className="h-4 w-4" />
          <span className="text-xs">Help</span>
        </Button>
        <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
          <Info className="h-4 w-4" />
          <span className="text-xs">About</span>
        </Button>
      </div>
    </div>
  );
};
