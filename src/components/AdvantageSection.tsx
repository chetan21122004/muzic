const advantages = [
  {
    icon: "⭐",
    title: "Performance based curriculum designed by music maestros",
  },
  {
    icon: "🎵",
    title: "1:1 Live Classes in vocals and instruments by certified music teachers",
  },
  {
    icon: "🏅",
    title: "Exclusive Live masterclasses by industry legends",
  },
  {
    icon: "🎛️",
    title: "Practice facilities at all 3 Pune academy centres",
  },
  {
    icon: "🏆",
    title: "Sunday Jam! Every student gets to perform for an audience",
  },
  {
    icon: "📊",
    title: "Goal based progress ladder to track your musical evolution",
  },
];

const AdvantageSection = () => {
  return (
    <section className="py-16" style={{ background: "#1e1e2e" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12">
          Muziclub Advantage
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {advantages.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center text-4xl">
                {item.icon}
              </div>
              <p className="text-white/70 text-sm leading-relaxed max-w-[220px] mx-auto">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
