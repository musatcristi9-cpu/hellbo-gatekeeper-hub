import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Flame, Shield, AlertTriangle } from "lucide-react";

interface AgeVerificationGateProps {
  onVerified: () => void;
}

const AgeVerificationGate = ({ onVerified }: AgeVerificationGateProps) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const canProceed = termsAccepted && privacyAccepted && cookiesAccepted;

  const handleEnter = () => {
    if (canProceed) {
      localStorage.setItem("hellbo_age_verified", "true");
      onVerified();
    }
  };

  const handleExit = () => {
    window.location.href = "https://google.com";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="relative z-10 w-full max-w-lg mx-4 animate-fade-in">
        <div className="hellbo-card rounded-2xl p-8 md:p-10">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Flame className="w-12 h-12 text-primary animate-glow-pulse" />
              </div>
              <span className="text-3xl font-bold tracking-tight">
                <span className="text-foreground">HELL</span>
                <span className="hellbo-gradient-text">BO</span>
              </span>
            </div>
          </div>

          {/* Warning */}
          <div className="flex items-center justify-center gap-2 mb-6 text-primary">
            <AlertTriangle className="w-5 h-5" />
            <span className="text-sm font-medium">Age-Restricted Content</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
            Age Verification Required
          </h1>

          <p className="text-muted-foreground text-center mb-8">
            This platform contains premium content intended for adults only. 
            You must verify that you are of legal age in your jurisdiction to continue.
          </p>

          {/* Checkboxes */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Checkbox 
                id="age" 
                checked={termsAccepted}
                onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="age" className="text-sm cursor-pointer">
                I confirm that I am at least 18 years old (or the legal age in my jurisdiction) and agree to the{" "}
                <button 
                  onClick={() => setShowTerms(true)} 
                  className="text-primary hover:underline"
                >
                  Terms of Service
                </button>
              </label>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Checkbox 
                id="privacy" 
                checked={privacyAccepted}
                onCheckedChange={(checked) => setPrivacyAccepted(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="privacy" className="text-sm cursor-pointer">
                I have read and accept the{" "}
                <button 
                  onClick={() => setShowPrivacy(true)} 
                  className="text-primary hover:underline"
                >
                  Privacy Policy
                </button>
              </label>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
              <Checkbox 
                id="cookies" 
                checked={cookiesAccepted}
                onCheckedChange={(checked) => setCookiesAccepted(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="cookies" className="text-sm cursor-pointer">
                I consent to the use of cookies and similar technologies for analytics and personalization
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={handleExit}
            >
              Exit
            </Button>
            <Button 
              variant="hero" 
              className="flex-1"
              disabled={!canProceed}
              onClick={handleEnter}
            >
              <Shield className="w-4 h-4" />
              Enter Hellbo
            </Button>
          </div>

          {/* Security note */}
          <p className="text-xs text-muted-foreground text-center mt-6">
            <Shield className="w-3 h-3 inline mr-1" />
            Your privacy is protected. We do not store verification data.
          </p>
        </div>
      </div>

      {/* Terms Modal */}
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground space-y-4">
            <p><strong>1. Acceptance of Terms</strong></p>
            <p>By accessing Hellbo Media, you agree to be bound by these Terms of Service. If you do not agree, you may not access the platform.</p>
            
            <p><strong>2. Age Requirement</strong></p>
            <p>You must be at least 18 years of age or the legal age of majority in your jurisdiction to use this platform.</p>
            
            <p><strong>3. User Conduct</strong></p>
            <p>Users must comply with all applicable laws and regulations. Prohibited content includes anything illegal, harmful, or violating third-party rights.</p>
            
            <p><strong>4. Creator Obligations</strong></p>
            <p>Creators are responsible for ensuring all uploaded content complies with platform guidelines and applicable laws.</p>
            
            <p><strong>5. Payment Terms</strong></p>
            <p>Platform commission is 15%. Creators receive 85% of revenue generated from their content.</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Modal */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>
          <div className="text-sm text-muted-foreground space-y-4">
            <p><strong>1. Information Collection</strong></p>
            <p>We collect information you provide directly, including account details and payment information.</p>
            
            <p><strong>2. Use of Information</strong></p>
            <p>Your information is used to provide and improve our services, process payments, and communicate with you.</p>
            
            <p><strong>3. Data Security</strong></p>
            <p>We implement industry-standard security measures to protect your personal information.</p>
            
            <p><strong>4. Data Sharing</strong></p>
            <p>We do not sell your personal information. Data may be shared with service providers necessary for platform operation.</p>
            
            <p><strong>5. Your Rights</strong></p>
            <p>You have the right to access, correct, or delete your personal information at any time.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AgeVerificationGate;
