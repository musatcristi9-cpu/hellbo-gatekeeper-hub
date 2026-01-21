import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Users, Video, Star, Crown } from "lucide-react";

interface CreatorCardProps {
  id: string;
  name: string;
  username: string;
  avatar: string;
  coverImage: string;
  category: string;
  subscribers: number;
  videoCount: number;
  rating: number;
  isVerified?: boolean;
  isTeam?: boolean;
  subscriptionPrice?: number;
}

const CreatorCard = ({
  id,
  name,
  username,
  avatar,
  coverImage,
  category,
  subscribers,
  videoCount,
  rating,
  isVerified = false,
  isTeam = false,
  subscriptionPrice = 9.99,
}: CreatorCardProps) => {
  return (
    <Link 
      to={`/creator/${id}`}
      className="group block"
    >
      <div className="hellbo-card rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
        {/* Cover Image */}
        <div className="relative h-32 md:h-40 overflow-hidden">
          <img
            src={coverImage}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Preview Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center hellbo-glow">
              <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
            </div>
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isTeam && (
              <Badge className="bg-hellbo-gold text-background">
                <Crown className="w-3 h-3 mr-1" />
                Official
              </Badge>
            )}
            {isVerified && !isTeam && (
              <Badge variant="secondary" className="bg-primary/80 text-primary-foreground">
                Verified
              </Badge>
            )}
          </div>

          {/* Category */}
          <Badge 
            variant="secondary" 
            className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm"
          >
            {category}
          </Badge>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5">
          {/* Avatar & Name */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative">
              <img
                src={avatar}
                alt={name}
                className="w-12 h-12 rounded-full object-cover border-2 border-primary"
              />
              {isVerified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <Star className="w-3 h-3 text-primary-foreground fill-current" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                {name}
              </h3>
              <p className="text-sm text-muted-foreground truncate">@{username}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{subscribers.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Video className="w-4 h-4" />
              <span>{videoCount} videos</span>
            </div>
            <div className="flex items-center gap-1 text-hellbo-gold">
              <Star className="w-4 h-4 fill-current" />
              <span>{rating.toFixed(1)}</span>
            </div>
          </div>

          {/* Subscribe Button */}
          <Button variant="hero" className="w-full" size="sm">
            Subscribe · ${subscriptionPrice}/mo
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default CreatorCard;
