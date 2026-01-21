import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Flame, Mail, Lock, User, ArrowLeft, Eye, Crown } from "lucide-react";

type UserRole = "viewer" | "creator" | null;

const Signup = () => {
  const [step, setStep] = useState<"role" | "details">("role");
  const [role, setRole] = useState<UserRole>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setStep("details");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", { role, ...formData });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Back Link */}
          <button 
            onClick={() => step === "details" ? setStep("role") : null}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {step === "details" ? "Back to role selection" : (
              <Link to="/">Back to Home</Link>
            )}
          </button>

          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <Flame className="w-10 h-10 text-primary" />
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-foreground">HELL</span>
              <span className="hellbo-gradient-text">BO</span>
            </span>
          </div>

          {step === "role" ? (
            <>
              {/* Role Selection */}
              <h1 className="text-3xl font-bold mb-2">Join Hellbo</h1>
              <p className="text-muted-foreground mb-8">
                Choose how you want to use the platform
              </p>

              <div className="space-y-4">
                <button
                  onClick={() => handleRoleSelect("viewer")}
                  className="w-full p-6 rounded-xl border-2 border-border hover:border-primary bg-card transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Eye className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Viewer</h3>
                      <p className="text-sm text-muted-foreground">
                        Browse creators, subscribe, and access exclusive content
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => handleRoleSelect("creator")}
                  className="w-full p-6 rounded-xl border-2 border-border hover:border-hellbo-gold bg-card transition-all text-left group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 px-3 py-1 bg-hellbo-gold text-background text-xs font-semibold rounded-bl-lg">
                    Earn 85%
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-hellbo-gold/10 flex items-center justify-center group-hover:bg-hellbo-gold/20 transition-colors">
                      <Crown className="w-7 h-7 text-hellbo-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Creator</h3>
                      <p className="text-sm text-muted-foreground">
                        Upload content, build your audience, and monetize your work
                      </p>
                    </div>
                  </div>
                </button>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-8">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </>
          ) : (
            <>
              {/* Details Form */}
              <div className="flex items-center gap-2 mb-8">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  role === "creator" ? "bg-hellbo-gold/10" : "bg-primary/10"
                }`}>
                  {role === "creator" ? (
                    <Crown className="w-5 h-5 text-hellbo-gold" />
                  ) : (
                    <Eye className="w-5 h-5 text-primary" />
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  Creating a {role} account
                </span>
              </div>

              <h1 className="text-3xl font-bold mb-2">Create your account</h1>
              <p className="text-muted-foreground mb-8">
                Fill in your details to get started
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-12 h-12 bg-muted/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="pl-12 h-12 bg-muted/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="pl-12 h-12 bg-muted/50"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="pl-12 h-12 bg-muted/50"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <Checkbox 
                    id="terms" 
                    checked={formData.agreeTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                    className="mt-1"
                    required
                  />
                  <label htmlFor="terms" className="text-sm cursor-pointer">
                    I agree to the{" "}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a>
                    {" "}and{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </label>
                </div>

                <Button 
                  variant={role === "creator" ? "gold" : "hero"} 
                  size="lg" 
                  className="w-full"
                  disabled={!formData.agreeTerms}
                >
                  Create Account
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-8">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>

      {/* Right Panel - Decorative */}
      <div className="hidden lg:flex flex-1 items-center justify-center bg-gradient-to-br from-primary/20 via-background to-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        </div>
        <div className="relative z-10 text-center">
          <Flame className="w-32 h-32 text-primary mx-auto mb-8 animate-glow-pulse" />
          <h2 className="text-4xl font-bold mb-4">
            {role === "creator" ? (
              <>
                Start<br />
                <span className="hellbo-gradient-text">Earning Today</span>
              </>
            ) : (
              <>
                Discover<br />
                <span className="hellbo-gradient-text">Premium Content</span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground max-w-xs mx-auto">
            {role === "creator" 
              ? "Join thousands of creators earning 85% of their content revenue"
              : "Subscribe to exclusive content from your favorite creators"
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
