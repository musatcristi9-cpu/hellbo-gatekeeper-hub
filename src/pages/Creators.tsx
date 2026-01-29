import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreatorCard from "@/components/CreatorCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, SlidersHorizontal, X } from "lucide-react";

const allCreators = [
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
  {
    id: "5",
    name: "Jake Rivers",
    username: "jakerivers",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
    category: "Gaming",
    subscribers: 67890,
    videoCount: 312,
    rating: 4.8,
    isVerified: true,
    subscriptionPrice: 7.99,
  },
  {
    id: "6",
    name: "Emma Rose",
    username: "emmarose",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    category: "Photography",
    subscribers: 23450,
    videoCount: 145,
    rating: 4.9,
    isVerified: true,
    subscriptionPrice: 11.99,
  },
  {
    id: "7",
    name: "David Kim",
    username: "davidkim",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
    category: "Education",
    subscribers: 18920,
    videoCount: 78,
    rating: 4.6,
    isVerified: true,
    subscriptionPrice: 14.99,
  },
  {
    id: "8",
    name: "Mia Johnson",
    username: "miajohnson",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=200&fit=crop",
    category: "Lifestyle",
    subscribers: 41200,
    videoCount: 189,
    rating: 4.7,
    isVerified: true,
    subscriptionPrice: 9.99,
  },
];

const categories = ["All", "Roleplay Scenarios", "Real-Life Challenges", "Strength Test", "Pro Wrestling", "Grappling and Jiu-jitsu", "Flex Show", "Casual Training", "Sensory Interaction", "Fetish", "Muscle of Steel", "Best ABS", "Mixed Martial Arts", "Brazilian Jiu-Jitsu", "Boxing"];

const Creators = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCreators = allCreators.filter((creator) => {
    const matchesSearch = creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         creator.username.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || creator.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Discover Creators</h1>
            <p className="text-muted-foreground">
              Find and subscribe to your favorite content creators
            </p>
          </div>

          {/* Search & Filters */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search creators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card border-border"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <Button
                variant="outline"
                className="h-12 px-6"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Category Filters */}
            <div className={`flex flex-wrap gap-2 ${showFilters ? 'block' : 'md:block hidden'}`}>
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`cursor-pointer px-4 py-2 text-sm transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-6">
            Showing {filteredCreators.length} creators
          </p>

          {/* Creators Grid */}
          {filteredCreators.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCreators.map((creator) => (
                <CreatorCard key={creator.id} {...creator} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No creators found</p>
              <p className="text-sm text-muted-foreground mt-2">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Creators;
