import { Link } from "react-router-dom";
import { 
  Gamepad2, 
  Music2, 
  Palette, 
  Dumbbell, 
  BookOpen, 
  Camera,
  Code,
  Sparkles
} from "lucide-react";

const categories = [
  { name: "Gaming", icon: Gamepad2, count: 1240, color: "from-purple-500 to-pink-500" },
  { name: "Music", icon: Music2, count: 890, color: "from-blue-500 to-cyan-500" },
  { name: "Art", icon: Palette, count: 650, color: "from-orange-500 to-red-500" },
  { name: "Fitness", icon: Dumbbell, count: 780, color: "from-green-500 to-emerald-500" },
  { name: "Education", icon: BookOpen, count: 450, color: "from-yellow-500 to-orange-500" },
  { name: "Photography", icon: Camera, count: 520, color: "from-pink-500 to-rose-500" },
  { name: "Tech", icon: Code, count: 680, color: "from-cyan-500 to-blue-500" },
  { name: "Lifestyle", icon: Sparkles, count: 920, color: "from-violet-500 to-purple-500" },
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
