import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const platforms = [
    {
      name: "HubSpot",
      tagline: "CRM Setup",
      description: "Connect contacts, deals, and automation in minutes",
      icon: "🎯",
      color: "from-primary/20 to-primary/5",
    },
    {
      name: "Shopify",
      tagline: "Store Setup",
      description: "Launch your online store with products and payments",
      icon: "🛍️",
      color: "from-secondary/20 to-secondary/5",
    },
    {
      name: "SEMrush",
      tagline: "SEO Setup",
      description: "Track rankings, keywords, and competitors effortlessly",
      icon: "📊",
      color: "from-success/20 to-success/5",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Choose Your Platform",
      description: "Select which SaaS tool you want to set up first",
    },
    {
      number: "2",
      title: "Fill Once, Use Everywhere",
      description: "Answer key questions about your business just one time",
    },
    {
      number: "3",
      title: "Guided Navigation",
      description: "We'll take you to the right page and show you what to do",
    },
    {
      number: "4",
      title: "Autofill & Assist",
      description: "Watch as we fill forms and guide you through each step",
    },
    {
      number: "5",
      title: "Complete & Repeat",
      description: "Finish one platform, then seamlessly move to the next",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Setup Assistant for SaaS Tools
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            One Assistant for Your
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Entire SaaS Setup
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Connect HubSpot, Shopify, and SEMrush in minutes — guided, autofilled, and stress-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 h-14 bg-gradient-to-r from-primary to-primary/90 hover:shadow-[var(--shadow-elegant)]"
            >
              Add to Chrome (Free)
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 h-14"
              asChild
            >
              <Link to="/guide/hubspot-setup">
                Try Demo
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>No account required</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-success" />
              <span>Privacy-first</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-success" />
              <span>Works instantly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Selection Tiles */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Setup Assistant
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Start with any platform. We'll remember your info and make the next ones even faster.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <Card
              key={platform.name}
              className="p-6 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                {platform.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{platform.name}</h3>
              <p className="text-sm font-medium text-primary mb-2">{platform.tagline}</p>
              <p className="text-muted-foreground mb-4">{platform.description}</p>
              <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                Start Setup
                <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16 bg-muted/50 rounded-3xl my-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Five simple steps from zero to fully configured
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex gap-6 items-start animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Demo Placeholder */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how our assistant guides you through the entire setup process
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-2xl border-2 border-border flex items-center justify-center shadow-[var(--shadow-card)]">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <p className="text-muted-foreground">Demo video coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            More Integrations Coming Soon
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're adding new platforms regularly to make your SaaS journey even smoother
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 opacity-60">
          {["Salesforce", "Mailchimp", "Google Analytics", "Stripe", "Slack", "Zendesk"].map((name) => (
            <div
              key={name}
              className="px-6 py-3 bg-muted rounded-full text-sm font-medium"
            >
              {name}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 border-t border-border mt-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Setup Assistant</h3>
            <p className="text-sm text-muted-foreground">
              Simplifying SaaS onboarding, one platform at a time.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Affiliate Disclosure</h4>
            <p className="text-sm text-muted-foreground">
              We may earn commissions from platform referrals. This helps us keep the assistant free for you.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12 pt-8 border-t border-border text-sm text-muted-foreground">
          <p>© 2025 Setup Assistant. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;