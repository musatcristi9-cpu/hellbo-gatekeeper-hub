import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Crown, ArrowRight, DollarSign, Shield, Zap } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="hellbo-card rounded-3xl p-8 md:p-16 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hellbo-gold/10 text-hellbo-gold text-sm font-medium mb-8">
              <Crown className="w-4 h-4" />
              <span>Start Earning Today</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Become a{" "}
              <span className="hellbo-gradient-text">Hellbo Creator</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Join thousands of creators monetizing their content. 
              Keep 85% of your earnings with our industry-leading creator payout.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center gap-2 p-4">
                <DollarSign className="w-8 h-8 text-hellbo-gold" />
                <span className="font-semibold">85% Earnings</span>
                <span className="text-sm text-muted-foreground">Industry-leading payout</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                <Shield className="w-8 h-8 text-primary" />
                <span className="font-semibold">Secure Payments</span>
                <span className="text-sm text-muted-foreground">Fast & reliable payouts</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                <Zap className="w-8 h-8 text-primary" />
                <span className="font-semibold">Easy Setup</span>
                <span className="text-sm text-muted-foreground">Start in minutes</span>
              </div>
            </div>

            {/* CTA */}
            <Button variant="hero" size="xl" className="group" asChild>
              <Link to="/signup">
                Start Creating
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
