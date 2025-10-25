import { PopupHeader } from "@/components/popup/PopupHeader";
import { QuickStats } from "@/components/popup/QuickStats";
import { RecentGuides } from "@/components/popup/RecentGuides";
import { CategoryChips } from "@/components/popup/CategoryChips";
import { FeaturedGuide } from "@/components/popup/FeaturedGuide";
import { SearchBar } from "@/components/popup/SearchBar";
import { PopupFooter } from "@/components/popup/PopupFooter";

const ExtensionPopup = () => {
  return (
    <div className="w-[400px] h-[600px] bg-background overflow-y-auto">
      <div className="flex flex-col h-full">
        <PopupHeader />
        
        <div className="flex-1 px-4 pb-4 space-y-4">
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
