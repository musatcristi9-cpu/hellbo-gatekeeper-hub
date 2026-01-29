import { Link } from "react-router-dom";
import { 
  Drama, 
  Target, 
  Dumbbell, 
  Crown, 
  Swords,
  Flame,
  Zap,
  Hand,
  Heart,
  Shield,
  Star,
  Clapperboard,
  Video,
  ArrowUpFromLine,
  Trophy,
  Users,
  Medal,
  Shirt,
  Sparkles,
  PersonStanding,
  Skull,
  CircleDot,
  Crosshair,
  MoreHorizontal,
  type LucideIcon
} from "lucide-react";

interface Category {
  name: string;
  icon: LucideIcon;
  count: number;
  color: string;
}

const categories: Category[] = [
  { name: "Roleplay Scenarios", icon: Drama, count: 1240, color: "from-purple-500 to-pink-500" },
  { name: "Real-Life Challenges", icon: Target, count: 890, color: "from-blue-500 to-cyan-500" },
  { name: "Strength Test", icon: Dumbbell, count: 1560, color: "from-red-500 to-orange-500" },
  { name: "Pro Wrestling", icon: Crown, count: 780, color: "from-amber-500 to-yellow-500" },
  { name: "Grappling and Jiu-jitsu", icon: Swords, count: 2340, color: "from-rose-500 to-red-500" },
  { name: "Flex Show", icon: Flame, count: 920, color: "from-orange-500 to-amber-500" },
  { name: "Casual Training", icon: Zap, count: 650, color: "from-yellow-500 to-lime-500" },
  { name: "Sensory Interaction", icon: Hand, count: 480, color: "from-pink-500 to-rose-500" },
  { name: "Niche Interests", icon: Heart, count: 1120, color: "from-fuchsia-500 to-pink-500" },
  { name: "Authority & Control", icon: Shield, count: 870, color: "from-slate-500 to-zinc-500" },
  { name: "Superhero Themes", icon: Star, count: 560, color: "from-blue-500 to-indigo-500" },
  { name: "Entertainment", icon: Clapperboard, count: 1890, color: "from-violet-500 to-purple-500" },
  { name: "Behind the Scenes", icon: Video, count: 720, color: "from-cyan-500 to-teal-500" },
  { name: "Lift & Carry", icon: ArrowUpFromLine, count: 940, color: "from-emerald-500 to-green-500" },
  { name: "Competitive Endurance", icon: Trophy, count: 680, color: "from-amber-500 to-orange-500" },
  { name: "Mixed Skill Matches", icon: Users, count: 1450, color: "from-indigo-500 to-blue-500" },
  { name: "Mature Personas", icon: Medal, count: 890, color: "from-stone-500 to-neutral-500" },
  { name: "Military Themes", icon: Shirt, count: 620, color: "from-green-600 to-emerald-600" },
  { name: "Youthful Personas", icon: Sparkles, count: 780, color: "from-sky-500 to-blue-500" },
  { name: "Athletic Builds", icon: PersonStanding, count: 1670, color: "from-teal-500 to-cyan-500" },
  { name: "Lighthearted Content", icon: Sparkles, count: 540, color: "from-lime-500 to-green-500" },
  { name: "No Rules Combat", icon: Skull, count: 390, color: "from-red-600 to-rose-600" },
  { name: "Grappling Arts", icon: CircleDot, count: 1120, color: "from-purple-600 to-violet-600" },
  { name: "Mixed Martial Arts", icon: Crosshair, count: 2100, color: "from-red-500 to-pink-500" },
  { name: "Brazilian Jiu-Jitsu", icon: CircleDot, count: 1780, color: "from-blue-600 to-indigo-600" },
  { name: "Boxing", icon: Swords, count: 1340, color: "from-rose-600 to-red-600" },
  { name: "And More...", icon: MoreHorizontal, count: 5000, color: "from-zinc-500 to-slate-500" },
];

const CategorySection = () => {
  return (
    <section className="py-20 md:py-28 bg-hellbo-darker">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Categories
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Find creators in your favorite categories and discover new interests
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/creators?category=${category.name.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl p-6 md:p-8 bg-card border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:scale-[1.02]"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count.toLocaleString()} creators
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
