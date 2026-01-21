import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedCreators from "@/components/FeaturedCreators";
import CategorySection from "@/components/CategorySection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import AgeVerificationGate from "@/components/AgeVerificationGate";

const Index = () => {
  const [isVerified, setIsVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verified = localStorage.getItem("hellbo_age_verified");
    setIsVerified(verified === "true");
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!isVerified) {
    return <AgeVerificationGate onVerified={() => setIsVerified(true)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedCreators />
        <CategorySection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
