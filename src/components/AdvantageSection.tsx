import { Award, Users, BookOpen, Monitor, Trophy, BarChart3 } from "lucide-react";

const advantages = [
  { icon: Award, title: "Performance-based curriculum taught by certified Music Professors" },
  { icon: Users, title: "1-on-1 online classes to learn from certified Music teachers" },
  { icon: BookOpen, title: "Adopt our structured learning path to enhance skills" },
  { icon: Monitor, title: "Practice Smart with digital tools to accelerate learning" },
  { icon: Trophy, title: "Motivating goal Every student gets to perform live on the Live Stage" },
  { icon: BarChart3, title: "Goal based programs to track your musical journey" },
];

const AdvantageSection = () => {
  return (
    <section className="bg-surface-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-surface-light-foreground mb-12">
          Artium Advantage
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {advantages.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm text-surface-light-foreground/80 max-w-[200px]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
