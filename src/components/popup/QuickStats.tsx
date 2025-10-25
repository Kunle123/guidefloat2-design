import { Card } from "@/components/ui/card";
import { TrendingUp, CheckCircle2 } from "lucide-react";

export const QuickStats = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Card className="p-3 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <TrendingUp className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold">12</p>
            <p className="text-xs text-muted-foreground">Active Guides</p>
          </div>
        </div>
      </Card>

      <Card className="p-3 hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle2 className="h-4 w-4 text-success" />
          </div>
          <div>
            <p className="text-2xl font-bold">87%</p>
            <p className="text-xs text-muted-foreground">Completion</p>
          </div>
        </div>
      </Card>
    </div>
  );
};
