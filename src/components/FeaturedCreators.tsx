import CreatorCard from "./CreatorCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";
import { Link } from "react-router-dom";

const mockCreators = [
  {
    id: "1",
    name: "Alex Storm",
    username: "alexstorm",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=400&h=200&fit=crop",
    category: "Tech",
    subscribers: 15420,
    videoCount: 89,
    rating: 4.9,
    isVerified: true,
    subscriptionPrice: 14.99,
  },
  {
    id: "2",
    name: "Luna Noir",
    username: "lunanoir",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop",
    category: "Art",
    subscribers: 28340,
    videoCount: 156,
    rating: 4.8,
    isVerified: true,
    isTeam: true,
    subscriptionPrice: 19.99,
  },
  {
    id: "3",
    name: "Marcus Flex",
    username: "marcusflex",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=200&fit=crop",
    category: "Fitness",
    subscribers: 45670,
    videoCount: 234,
    rating: 4.9,
    isVerified: true,
    subscriptionPrice: 12.99,
  },
  {
    id: "4",
    name: "Sophia Chen",
    username: "sophiachen",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=200&fit=crop",
    category: "Music",
    subscribers: 32100,
    videoCount: 98,
    rating: 4.7,
    isVerified: true,
    subscriptionPrice: 9.99,
  },
];

const FeaturedCreators = () => {
  return (
    <section className="py-20 md:py-28 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 text-primary mb-2">
              <Flame className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wider">Featured</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Top Creators
            </h2>
            <p className="text-muted-foreground mt-2">
              Discover the most popular creators on Hellbo
            </p>
          </div>
          <Button variant="ghost" className="group" asChild>
            <Link to="/creators">
              View All Creators
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockCreators.map((creator) => (
            <CreatorCard key={creator.id} {...creator} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCreators;
