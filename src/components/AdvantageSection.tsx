import { motion } from "framer-motion";
import advCurriculum from "@/assets/adv-curriculum.png";
import advLiveClass from "@/assets/adv-live-class.png";
import advMasterclass from "@/assets/adv-masterclass.png";
import advPractice from "@/assets/adv-practice.png";
import advPerform from "@/assets/adv-perform.png";
import advProgress from "@/assets/adv-progress.png";

const advantages = [
  { image: advCurriculum, title: "Performance based curriculum designed by music maestros" },
  { image: advLiveClass, title: "In-person classes in vocals and instruments by certified music teachers" },
  { image: advMasterclass, title: "Exclusive Live masterclasses by industry legends" },
  { image: advPractice, title: "Practice facilities at all 3 Pune academy centres" },
  { image: advPerform, title: "Sunday Jam! Every student gets to perform for an audience" },
  { image: advProgress, title: "Goal based progress ladder to track your musical evolution" },
];

const AdvantageSection = () => {
  return (
    <section className="py-12 lg:py-20 relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10 lg:mb-14">
          <p className="text-primary font-semibold text-[10px] sm:text-xs lg:text-sm tracking-widest uppercase mb-2 lg:mb-3">Why Choose Us</p>
          <h2 className="text-[2rem] leading-[1.15] sm:text-4xl lg:text-5xl lg:leading-tight font-extrabold text-foreground px-2 lg:px-0">
            The <span className="font-core">muziclub</span> <span className="text-primary">Advantage</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-8">
          {advantages.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="group relative rounded-[1.25rem] lg:rounded-2xl border border-border bg-background p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 lg:mb-5 rounded-[0.85rem] lg:rounded-2xl bg-secondary flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img src={item.image} alt={item.title} className="w-8 h-8 sm:w-10 sm:h-10 lg:w-20 lg:h-20 object-contain" loading="lazy" />
              </div>
              <p className="text-foreground/80 text-[11px] sm:text-[13px] lg:text-[15px] leading-snug sm:leading-relaxed font-semibold lg:font-medium max-w-[240px] mx-auto">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
