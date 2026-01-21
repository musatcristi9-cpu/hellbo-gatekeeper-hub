import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Crown, Star, Calendar, MapPin, Video, Clock, Sparkles } from "lucide-react";

const meetGreetEvents = [
  {
    id: "1",
    creator: "Luna Noir",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    title: "Exclusive Art Session",
    description: "Join me for an intimate virtual session where I'll share exclusive insights into my creative process.",
    type: "Virtual",
    duration: "60 minutes",
    minPrice: 299,
    slots: 3,
    category: "Art",
  },
  {
    id: "2",
    creator: "Marcus Flex",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    title: "Personal Training Session",
    description: "Get a personalized workout plan and 1-on-1 coaching session with exclusive content access.",
    type: "Virtual",
    duration: "90 minutes",
    minPrice: 199,
    slots: 5,
    category: "Fitness",
  },
  {
    id: "3",
    creator: "Alex Storm",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    title: "Tech Mentorship Call",
    description: "Private mentorship session covering career advice, code reviews, and industry insights.",
    type: "Virtual",
    duration: "45 minutes",
    minPrice: 149,
    slots: 8,
    category: "Tech",
  },
];

const MeetGreet = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 md:pt-28 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hellbo-gold/10 text-hellbo-gold text-sm font-medium mb-6">
              <Crown className="w-4 h-4" />
              <span>Premium Experiences</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Meet &{" "}
              <span className="hellbo-gradient-text">Greet</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book exclusive one-on-one sessions with your favorite creators. 
              Premium experiences with minimum pricing thresholds.
            </p>
          </div>

          {/* Available Sessions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Available Sessions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {meetGreetEvents.map((event) => (
                <div key={event.id} className="hellbo-card rounded-2xl overflow-hidden">
                  <div className="p-6">
                    {/* Creator */}
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={event.avatar}
                        alt={event.creator}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary"
                      />
                      <div>
                        <h3 className="font-semibold">{event.creator}</h3>
                        <Badge variant="secondary" className="text-xs">{event.category}</Badge>
                      </div>
                    </div>

                    {/* Event Info */}
                    <h4 className="text-xl font-bold mb-2">{event.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-1">
                        <Video className="w-4 h-4" />
                        {event.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Sparkles className="w-4 h-4" />
                        {event.slots} slots left
                      </div>
                    </div>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-muted-foreground">Starting from</span>
                        <p className="text-2xl font-bold hellbo-gradient-text">${event.minPrice}</p>
                      </div>
                      <Button variant="hero">
                        Request
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Request Form */}
          <div className="max-w-2xl mx-auto">
            <div className="hellbo-card rounded-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Request a Custom Experience</h2>
                <p className="text-muted-foreground">
                  Can't find what you're looking for? Submit a custom request.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Your Name</label>
                    <Input placeholder="Enter your name" className="bg-muted/50" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" className="bg-muted/50" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Preferred Creator</label>
                  <Input placeholder="Enter creator name or username" className="bg-muted/50" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Budget Range</label>
                  <Input placeholder="e.g., $200 - $500" className="bg-muted/50" />
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Request Details</label>
                  <Textarea 
                    placeholder="Describe the experience you're looking for..."
                    className="bg-muted/50 min-h-[120px]"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Submit Request
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  All Meet & Greet experiences have a minimum pricing threshold of $100. 
                  Requests are subject to creator availability.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MeetGreet;
