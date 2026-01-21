import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreatorCard from "@/components/CreatorCard";
import { Crown, Flame, Star } from "lucide-react";

const teamMembers = [
  {
    id: "team-1",
    name: "Luna Noir",
    username: "lunanoir",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop",
    category: "Art Director",
    subscribers: 28340,
    videoCount: 156,
    rating: 4.9,
    isVerified: true,
    isTeam: true,
    subscriptionPrice: 19.99,
  },
  {
    id: "team-2",
    name: "Phoenix Ray",
    username: "phoenixray",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=400&h=200&fit=crop",
    category: "Lead Creator",
    subscribers: 45230,
    videoCount: 234,
    rating: 4.8,
    isVerified: true,
    isTeam: true,
    subscriptionPrice: 24.99,
  },
  {
    id: "team-3",
    name: "Scarlet Vex",
    username: "scarletvex",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1557683311-eac922347aa1?w=400&h=200&fit=crop",
    category: "Content Lead",
    subscribers: 32100,
    videoCount: 189,
    rating: 4.9,
    isVerified: true,
    isTeam: true,
    subscriptionPrice: 21.99,
  },
  {
    id: "team-4",
    name: "Dante Blaze",
    username: "danteblaze",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=400&h=200&fit=crop",
    category: "Creative Director",
    subscribers: 52400,
    videoCount: 278,
    rating: 4.9,
    isVerified: true,
    isTeam: true,
    subscriptionPrice: 29.99,
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hellbo-gold/10 text-hellbo-gold text-sm font-medium mb-6">
              <Crown className="w-4 h-4" />
              <span>Official Team</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Hellbo{" "}
              <span className="hellbo-gradient-text">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet our featured official creators. The faces behind Hellbo Media 
              delivering exclusive, premium content you won't find anywhere else.
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="hellbo-card rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-hellbo-gold/10 mb-4">
                <Crown className="w-6 h-6 text-hellbo-gold" />
              </div>
              <h3 className="font-semibold mb-2">Official Creators</h3>
              <p className="text-sm text-muted-foreground">
                Hand-picked creators representing the Hellbo brand
              </p>
            </div>
            <div className="hellbo-card rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
                <Flame className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Exclusive Content</h3>
              <p className="text-sm text-muted-foreground">
                Premium content only available on Hellbo Media
              </p>
            </div>
            <div className="hellbo-card rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-hellbo-gold/10 mb-4">
                <Star className="w-6 h-6 text-hellbo-gold" />
              </div>
              <h3 className="font-semibold mb-2">Top Quality</h3>
              <p className="text-sm text-muted-foreground">
                Highest production value and engagement standards
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <CreatorCard key={member.id} {...member} />
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="mt-16 text-center">
            <div className="hellbo-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Want to Join the Team?
              </h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for exceptional creators to join Hellbo Team. 
                If you have what it takes, we'd love to hear from you.
              </p>
              <button className="hellbo-gradient text-primary-foreground px-8 py-3 rounded-xl font-semibold hellbo-glow transition-transform hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
