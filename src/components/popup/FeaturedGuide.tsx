import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const FeaturedGuide = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold">Featured Guide</h2>
      <Card className="p-4 bg-gradient-to-br from-primary/5 to-[hsl(25_100%_60%)]/5 border-primary/20 hover:shadow-lg transition-all">
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-[hsl(25_100%_60%)] flex items-center justify-center flex-shrink-0">
              <Star className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold">HubSpot CRM Complete Setup</h3>
                <Badge className="bg-success text-success-foreground">
                  Affiliate
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Launch your HubSpot workspace with pre-filled data and earn commission
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>15 min</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span>Beginner</span>
            </div>
          </div>

          <Button
            className="w-full"
            variant="cta"
            onClick={() => navigate("/guide/hubspot-setup")}
          >
            Start Guide
          </Button>
        </div>
      </Card>
    </div>
  );
};
