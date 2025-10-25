import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Star, Clock, TrendingUp, Filter, ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const guides = [
  {
    id: "hubspot-setup",
    title: "HubSpot CRM Complete Setup",
    description: "Launch your HubSpot workspace with pre-filled data and save 20+ setup steps",
    category: "Marketing",
    difficulty: "Beginner",
    time: "15 min",
    progress: 65,
    isAffiliate: true,
    featured: true,
  },
  {
    id: "shopify-setup",
    title: "Shopify Store Launch",
    description: "Set up your complete e-commerce store from scratch to first sale",
    category: "E-commerce",
    difficulty: "Intermediate",
    time: "45 min",
    progress: 30,
    isAffiliate: true,
    featured: false,
  },
  {
    id: "google-ads",
    title: "Google Ads Campaign Setup",
    description: "Create your first profitable ad campaign with expert guidance",
    category: "Advertising",
    difficulty: "Intermediate",
    time: "30 min",
    progress: 90,
    isAffiliate: false,
    featured: false,
  },
  {
    id: "wordpress-blog",
    title: "WordPress Blog Launch",
    description: "Build and publish your first professional blog in under an hour",
    category: "Business",
    difficulty: "Beginner",
    time: "40 min",
    progress: 0,
    isAffiliate: true,
    featured: false,
  },
  {
    id: "stripe-payment",
    title: "Stripe Payment Integration",
    description: "Add payment processing to your website with Stripe",
    category: "Development",
    difficulty: "Advanced",
    time: "25 min",
    progress: 0,
    isAffiliate: false,
    featured: false,
  },
  {
    id: "mailchimp-automation",
    title: "Mailchimp Email Automation",
    description: "Set up automated email sequences to nurture leads",
    category: "Marketing",
    difficulty: "Intermediate",
    time: "20 min",
    progress: 0,
    isAffiliate: true,
    featured: false,
  },
];

const GuideLibrary = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [difficultyFilter, setDifficultyFilter] = useState("all");

  const featuredGuide = guides.find(g => g.featured);
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "all" || guide.category === categoryFilter;
    const matchesDifficulty = difficultyFilter === "all" || guide.difficulty === difficultyFilter;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold">Guide Library</h1>
          </div>
        </div>
      </header>

      {/* Hero Section - Featured Guide */}
      {featuredGuide && (
        <section className="bg-gradient-to-br from-primary/10 to-[hsl(25_100%_60%)]/10 border-b">
          <div className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-[hsl(25_100%_60%)] flex items-center justify-center flex-shrink-0">
                  <Star className="h-12 w-12 text-white" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <Badge className="mb-2">Featured Guide</Badge>
                      <h2 className="text-3xl font-bold mb-2">{featuredGuide.title}</h2>
                      <p className="text-muted-foreground">{featuredGuide.description}</p>
                    </div>
                    {featuredGuide.isAffiliate && (
                      <Badge className="bg-success text-success-foreground">Affiliate</Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredGuide.time}
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4" />
                      {featuredGuide.difficulty}
                    </div>
                    <Badge variant="secondary">{featuredGuide.category}</Badge>
                  </div>
                  {featuredGuide.progress > 0 && (
                    <div className="space-y-2">
                      <Progress value={featuredGuide.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">{featuredGuide.progress}% complete</p>
                    </div>
                  )}
                  <Button
                    size="lg"
                    variant="cta"
                    className="gap-2"
                    onClick={() => navigate(`/guide/${featuredGuide.id}`)}
                  >
                    <Play className="h-4 w-4" />
                    {featuredGuide.progress > 0 ? "Continue Guide" : "Start Guide"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filters */}
      <section className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search guides..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Marketing">Marketing</SelectItem>
                  <SelectItem value="E-commerce">E-commerce</SelectItem>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Advertising">Advertising</SelectItem>
                  <SelectItem value="Development">Development</SelectItem>
                </SelectContent>
              </Select>
              <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="Beginner">Beginner</SelectItem>
                  <SelectItem value="Intermediate">Intermediate</SelectItem>
                  <SelectItem value="Advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">
              {filteredGuides.length} {filteredGuides.length === 1 ? "Guide" : "Guides"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <Card
                key={guide.id}
                className="overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => navigate(`/guide/${guide.id}`)}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-[hsl(25_100%_60%)]/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-[hsl(25_100%_60%)] flex items-center justify-center">
                    <Play className="h-8 w-8 text-white" />
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-1">
                        {guide.title}
                      </h3>
                      {guide.isAffiliate && (
                        <Badge variant="outline" className="text-xs flex-shrink-0">
                          Affiliate
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {guide.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      {guide.difficulty}
                    </div>
                  </div>

                  <Badge variant="secondary" className="text-xs">
                    {guide.category}
                  </Badge>

                  {guide.progress > 0 && (
                    <div className="space-y-1 pt-2">
                      <Progress value={guide.progress} className="h-1.5" />
                      <p className="text-xs text-muted-foreground">{guide.progress}% complete</p>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuideLibrary;
