import { BookOpen, Mic, Trophy, Building2, Music4, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const advantages = [
  {
    icon: BookOpen,
    title: "Performance based curriculum designed by music maestros",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Mic,
    title: "1:1 Live Classes in vocals and instruments by certified music teachers",
    gradient: "from-rose-400 to-pink-600",
  },
  {
    icon: Trophy,
    title: "Exclusive Live masterclasses by industry legends",
    gradient: "from-violet-400 to-purple-600",
  },
  {
    icon: Building2,
    title: "Practice facilities at all 3 Pune academy centres",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    icon: Music4,
    title: "Sunday Jam! Every student gets to perform for an audience",
    gradient: "from-emerald-400 to-green-600",
  },
  {
    icon: TrendingUp,
    title: "Goal based progress ladder to track your musical evolution",
    gradient: "from-yellow-400 to-amber-600",
  },
];

const AdvantageSection = () => {
  return (
    <section className="py-20 bg-[hsl(240,20%,10%)] relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            The Muziclub <span className="text-primary">Advantage</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm p-8 hover:bg-white/[0.06] transition-all duration-500"
              >
                {/* Icon container with gradient */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>

                <p className="text-white/80 text-[15px] leading-relaxed font-medium">
                  {item.title}
                </p>

                {/* Subtle glow on hover */}
                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500 -z-10`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
