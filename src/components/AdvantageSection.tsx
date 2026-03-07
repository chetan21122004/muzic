import { Award, Users, BookOpen, Monitor, Trophy, MapPin } from "lucide-react";

const advantages = [
  { icon: Award, title: "14,000+ Students Taught", sub: "Rich experience across all age groups" },
  { icon: Users, title: "Highly Rated 4.8 ⭐ on Google", sub: "Based on 345+ reviews across centres" },
  { icon: BookOpen, title: "Indian Classical to Western Grade Exams", sub: "Trinity, ABRSM, RSL, G.M.V. Mandal" },
  { icon: Monitor, title: "1-on-1 Online & Academy Classes", sub: "Personalized focus and flexible scheduling" },
  { icon: Trophy, title: "Perform Every Week at Sunday Jam", sub: "Live performance opportunity for all students" },
  { icon: MapPin, title: "3 Centres in Pune + Online", sub: "Baner · Pimple Saudagar · Hinjawadi" },
];

const AdvantageSection = () => {
  return (
    <section className="bg-surface-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-surface-light-foreground">
            The Muziclub Advantage
          </h2>
          <p className="text-muted-foreground mt-2 text-sm">Why 14,000+ students choose to learn and live music with us</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {advantages.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-semibold text-surface-light-foreground max-w-[200px]">{item.title}</p>
              <p className="text-xs text-muted-foreground max-w-[180px]">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
