import { Users, Video, DollarSign, Star } from "lucide-react";

const stats = [
  {
    label: "Active Creators",
    value: "12,000+",
    icon: Users,
    description: "Verified content creators",
  },
  {
    label: "Premium Videos",
    value: "250,000+",
    icon: Video,
    description: "Exclusive content available",
  },
  {
    label: "Creator Earnings",
    value: "$45M+",
    icon: DollarSign,
    description: "Paid out to creators",
  },
  {
    label: "Average Rating",
    value: "4.8",
    icon: Star,
    description: "Based on user reviews",
  },
];

const StatsSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold hellbo-gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
