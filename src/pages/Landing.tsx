import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, Shield, ArrowRight, Check } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Free Chrome Extension</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            One assistant for your{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-[hsl(25_100%_60%)] bg-clip-text text-transparent">
              entire SaaS setup
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop switching tabs and filling forms. GuideFloat automates your HubSpot, Shopify, 
            and SEMrush setup — so you can focus on growing your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="cta" 
              size="lg"
              className="text-lg px-8 py-6 h-auto gap-2"
              onClick={() => navigate("/popup")}
            >
              Add to Chrome (Free)
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 h-auto"
            >
              Watch Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            ✨ No credit card required • 🔒 Your data stays private
          </p>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-muted-foreground">Set up your entire SaaS stack in 3 simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 text-center space-y-4 border-2 hover:border-primary/50 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h3 className="text-xl font-semibold">Tell us about your business</h3>
            <p className="text-muted-foreground">
              Answer a few quick questions about your company, goals, and which platforms you want to set up
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 border-2 hover:border-primary/50 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h3 className="text-xl font-semibold">Launch your platform</h3>
            <p className="text-muted-foreground">
              Click to open your chosen platform. GuideFloat will activate automatically and guide you through setup
            </p>
          </Card>

          <Card className="p-6 text-center space-y-4 border-2 hover:border-primary/50 transition-all">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h3 className="text-xl font-semibold">Watch it autofill</h3>
            <p className="text-muted-foreground">
              Your information is automatically filled in. Just review, confirm, and you're done in minutes
            </p>
          </Card>
        </div>
      </div>

      {/* Platform Support */}
      <div className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Platforms</h2>
          <p className="text-muted-foreground">Automate setup for your favorite SaaS tools</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-8 text-center space-y-3 hover:shadow-lg transition-all">
            <div className="text-5xl mb-2">📊</div>
            <h3 className="text-2xl font-bold">HubSpot</h3>
            <p className="text-sm text-muted-foreground">
              CRM setup, contact import, domain connection, tracking pixels
            </p>
          </Card>

          <Card className="p-8 text-center space-y-3 hover:shadow-lg transition-all">
            <div className="text-5xl mb-2">🛍️</div>
            <h3 className="text-2xl font-bold">Shopify</h3>
            <p className="text-sm text-muted-foreground">
              Store creation, payment setup, product import, theme configuration
            </p>
          </Card>

          <Card className="p-8 text-center space-y-3 hover:shadow-lg transition-all">
            <div className="text-5xl mb-2">📈</div>
            <h3 className="text-2xl font-bold">SEMrush</h3>
            <p className="text-sm text-muted-foreground">
              Analytics connection, domain verification, SEO project setup
            </p>
          </Card>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why choose GuideFloat?</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Save hours of setup time</h3>
                <p className="text-muted-foreground">
                  What takes hours manually happens in minutes with GuideFloat's smart automation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Stay in control</h3>
                <p className="text-muted-foreground">
                  You review every step. We only fill what you see — no hidden actions or surprises
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Setup done right</h3>
                <p className="text-muted-foreground">
                  Follow best practices and avoid common mistakes with guided, step-by-step setup
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <Card className="p-12 text-center bg-gradient-to-br from-primary/10 to-[hsl(25_100%_60%)]/10 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to automate your SaaS setup?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join businesses saving hours on platform configuration. Get started in under 2 minutes.
          </p>
          <Button 
            variant="cta" 
            size="lg"
            className="text-lg px-8 py-6 h-auto gap-2"
            onClick={() => navigate("/popup")}
          >
            Add to Chrome — It's Free
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2025 GuideFloat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
