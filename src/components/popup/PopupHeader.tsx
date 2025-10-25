import { Button } from "@/components/ui/button";
import { Plus, Compass } from "lucide-react";

export const PopupHeader = () => {
  return (
    <div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[hsl(25_100%_60%)] flex items-center justify-center">
            <Compass className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-lg font-bold">GuideFloat</h1>
        </div>
        <Button size="sm" className="gap-2">
          <Plus className="h-4 w-4" />
          New Guide
        </Button>
      </div>
    </div>
  );
};
