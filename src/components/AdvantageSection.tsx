import { Award, Users, BookOpen, Monitor, Trophy, MapPin } from "lucide-react";

const advantages = [
  { icon: "🎓", title: "13+ Years of Excellence", sub: "Teaching music since our inception" },
  { icon: "⭐", title: "Rated 4.8 on Google", sub: "Across Baner, Pimple Saudagar & Hinjawadi" },
  { icon: "🎵", title: "Guru Gyan & Colourful Chords", sub: "Exclusive resources and masterclasses" },
  { icon: "💻", title: "1-on-1 Online & Academy", sub: "Group classes capped at 3 students" },
  { icon: "🥁", title: "Sunday Jam — Every Week", sub: "Live performances for all students" },
  { icon: "📍", title: "3 Centres + Online UK", sub: "Baner · Pimple Saudagar · Hinjawadi" },
];

const AdvantageSection = () => {
  return (
    <section className="bg-[#f7f7f9] py-16 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            The <span className="text-primary">Muziclub</span> Advantage
          </h2>
          <p className="text-gray-400 mt-2 text-sm">Why 14,000+ students choose to learn music with us</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="text-sm font-bold text-gray-800 leading-snug">{item.title}</p>
              <p className="text-xs text-gray-400 mt-1 leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
