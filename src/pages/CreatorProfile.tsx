import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  Users, 
  Video, 
  Crown, 
  MessageSquare, 
  Heart,
  Play,
  Lock,
  DollarSign
} from "lucide-react";

const mockCreator = {
  id: "1",
  name: "Luna Noir",
  username: "lunanoir",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
  coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=400&fit=crop",
  category: "Art",
  subscribers: 28340,
  videoCount: 156,
  rating: 4.8,
  isVerified: true,
  isTeam: true,
  subscriptionPrice: 19.99,
  description: "Digital artist and creative director. I create immersive visual experiences and share exclusive behind-the-scenes content of my creative process. Join me for weekly art tutorials, process videos, and exclusive content you won't find anywhere else.",
  videos: [
    { id: "v1", title: "Abstract Art Process", thumbnail: "https://images.unsplash.com/photo-1549490349-8643362247b5?w=400&h=225&fit=crop", duration: "15:32", views: 12500, isPremium: true, price: 4.99 },
    { id: "v2", title: "Digital Painting Tutorial", thumbnail: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=225&fit=crop", duration: "22:15", views: 8900, isPremium: true, price: 6.99 },
    { id: "v3", title: "Color Theory Basics", thumbnail: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=225&fit=crop", duration: "18:45", views: 15200, isPremium: false },
    { id: "v4", title: "Creative Workflow", thumbnail: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=225&fit=crop", duration: "28:10", views: 7600, isPremium: true, price: 9.99 },
    { id: "v5", title: "Texture Techniques", thumbnail: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=400&h=225&fit=crop", duration: "12:30", views: 9800, isPremium: true, price: 3.99 },
    { id: "v6", title: "Concept Art Basics", thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=225&fit=crop", duration: "35:20", views: 11200, isPremium: false },
  ],
  subscriptionTiers: [
    { name: "Basic", price: 9.99, features: ["Access to exclusive videos", "Monthly Q&A session", "Discord community access"] },
    { name: "Premium", price: 19.99, features: ["All Basic features", "Early access to content", "1-on-1 art critiques", "Downloadable resources"] },
    { name: "VIP", price: 49.99, features: ["All Premium features", "Weekly live sessions", "Custom artwork requests", "Behind-the-scenes access"] },
  ],
};

const CreatorProfile = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16 md:pt-20">
        {/* Cover Image */}
        <div className="relative h-48 md:h-72 lg:h-80 overflow-hidden">
          <img
            src={mockCreator.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4">
          {/* Profile Header */}
          <div className="relative -mt-16 md:-mt-20 mb-8">
            <div className="flex flex-col md:flex-row md:items-end gap-6">
              {/* Avatar */}
              <div className="relative">
                <img
                  src={mockCreator.avatar}
                  alt={mockCreator.name}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border-4 border-background shadow-xl"
                />
                {mockCreator.isVerified && (
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <Star className="w-5 h-5 text-primary-foreground fill-current" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h1 className="text-3xl md:text-4xl font-bold">{mockCreator.name}</h1>
                  {mockCreator.isTeam && (
                    <Badge className="bg-hellbo-gold text-background">
                      <Crown className="w-3 h-3 mr-1" />
                      Hellbo Team
                    </Badge>
                  )}
                  <Badge variant="secondary">{mockCreator.category}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">@{mockCreator.username}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{mockCreator.subscribers.toLocaleString()}</span>
                    <span className="text-muted-foreground">subscribers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-primary" />
                    <span className="font-semibold">{mockCreator.videoCount}</span>
                    <span className="text-muted-foreground">videos</span>
                  </div>
                  <div className="flex items-center gap-2 text-hellbo-gold">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-semibold">{mockCreator.rating}</span>
                    <span className="text-muted-foreground">rating</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="outline" size="lg">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
                <Button variant="hero" size="lg">
                  <Crown className="w-4 h-4 mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-3xl mb-8">
            {mockCreator.description}
          </p>

          {/* Tabs */}
          <Tabs defaultValue="videos" className="mb-16">
            <TabsList className="bg-muted/50 mb-8">
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
            </TabsList>

            {/* Videos Tab */}
            <TabsContent value="videos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockCreator.videos.map((video) => (
                  <div key={video.id} className="group cursor-pointer">
                    <div className="relative rounded-xl overflow-hidden mb-3">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center hellbo-glow">
                          <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                        </div>
                      </div>
                      
                      {/* Duration */}
                      <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-xs text-white">
                        {video.duration}
                      </div>

                      {/* Premium Badge */}
                      {video.isPremium && (
                        <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 rounded bg-primary/90 text-xs text-white">
                          <Lock className="w-3 h-3" />
                          ${video.price}
                        </div>
                      )}
                    </div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {video.views.toLocaleString()} views
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Subscriptions Tab */}
            <TabsContent value="subscriptions">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockCreator.subscriptionTiers.map((tier, index) => (
                  <div 
                    key={tier.name}
                    className={`hellbo-card rounded-2xl p-6 ${
                      index === 1 ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    {index === 1 && (
                      <Badge className="mb-4 bg-primary">Most Popular</Badge>
                    )}
                    <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-3xl font-bold hellbo-gradient-text">${tier.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Heart className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant={index === 1 ? "hero" : "outline"} 
                      className="w-full"
                    >
                      Subscribe
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="about">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold mb-4">About {mockCreator.name}</h3>
                <p className="text-muted-foreground mb-6">
                  {mockCreator.description}
                </p>
                <div className="hellbo-card rounded-xl p-6">
                  <h4 className="font-semibold mb-4">Custom Requests</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in personalized content? Send a custom request and get a quote.
                  </p>
                  <Button variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Request
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreatorProfile;
