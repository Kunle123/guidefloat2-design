import { PopupHeader } from "@/components/popup/PopupHeader";
import { QuickStats } from "@/components/popup/QuickStats";
import { RecentGuides } from "@/components/popup/RecentGuides";
import { CategoryChips } from "@/components/popup/CategoryChips";
import { FeaturedGuide } from "@/components/popup/FeaturedGuide";
import { SearchBar } from "@/components/popup/SearchBar";
import { PopupFooter } from "@/components/popup/PopupFooter";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Rocket } from "lucide-react";

const ExtensionPopup = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[400px] h-[600px] bg-background overflow-y-auto">
      <div className="flex flex-col h-full">
        <PopupHeader />
        
        <div className="flex-1 px-4 pb-4 space-y-4">
          <Button 
            variant="cta" 
            className="w-full gap-2"
            onClick={() => navigate("/onboarding")}
          >
            <Rocket className="h-4 w-4" />
            Start New Setup
          </Button>
          
          <SearchBar />
          <QuickStats />
          <CategoryChips />
          <FeaturedGuide />
          <RecentGuides />
        </div>

        <PopupFooter />
      </div>
    </div>
  );
};

export default ExtensionPopup;
