import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const recentGuides = [
  {
    id: 1,
    title: "HubSpot CRM Setup",
    progress: 65,
    timeLeft: "10 min left",
    category: "Marketing",
  },
  {
    id: 2,
    title: "Shopify Store Launch",
    progress: 30,
    timeLeft: "25 min left",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "Google Ads Campaign",
    progress: 90,
    timeLeft: "3 min left",
    category: "Advertising",
  },
];

export const RecentGuides = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Recent Guides</h2>
        <button
          className="text-xs text-primary hover:underline"
          onClick={() => navigate("/library")}
        >
          View All
        </button>
      </div>

      <div className="space-y-2">
        {recentGuides.map((guide) => (
          <Card
            key={guide.id}
            className="p-3 hover:shadow-md transition-all cursor-pointer group"
            onClick={() => navigate(`/guide/${guide.id}`)}
          >
            <div className="space-y-2">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                    {guide.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="text-xs px-2 py-0">
                      {guide.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {guide.timeLeft}
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="space-y-1">
                <Progress value={guide.progress} className="h-1.5" />
                <p className="text-xs text-muted-foreground">{guide.progress}% complete</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
