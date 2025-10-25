import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  "Marketing",
  "E-commerce",
  "Business",
  "Analytics",
  "Design",
  "Development",
  "Advertising",
  "Sales",
];

export const CategoryChips = () => {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-semibold">Categories</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex gap-2">
          {categories.map((category) => (
            <Badge
              key={category}
              variant="outline"
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors px-3 py-1.5"
            >
              {category}
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
};
