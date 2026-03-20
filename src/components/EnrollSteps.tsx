import { useState } from "react";
import { CalendarCheck, Headphones, CreditCard, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import stepBookTrial from "@/assets/step-book-trial.png";
import stepTryClass from "@/assets/step-try-class.png";
import stepPayEnrol from "@/assets/step-pay-enrol.png";
import stepPerform from "@/assets/step-perform.png";

const steps = [
  {
    icon: CalendarCheck,
    image: stepBookTrial,
    step: "01",
    label: "Book A Free Trial",
    title: "Select your favourite course and book a free trial class at your convenient time",
    color: "from-primary to-rose-600",
    glow: "red",
  },
  {
    icon: Headphones,
    image: stepTryClass,
    step: "02",
    label: "Try Before You Buy",
    title: "Get personalised guidance from our Academic Expert in the free trial class",
    color: "from-rose-600 to-red-800",
    glow: "rose",
  },
  {
    icon: CreditCard,
    image: stepPayEnrol,
    step: "03",
    label: "Pay and Enrol",
    title: "Begin your 1:1 live and customised learning sessions with Muziclub Certified Teachers",
    color: "from-red-800 to-red-950",
    glow: "crimson",
  },
  {
    icon: Sparkles,
    image: stepPerform,
    step: "04",
    label: "Learn, Practice & Perform",
    title: "Get Exclusive Access to Live Masterclasses, Sunday Jams and Digital Learning Tools",
    color: "from-primary to-red-900",
    glow: "red",
  },
];

const glowColors: Record<string, string> = {
  red:     "shadow-red-500/25",
  rose:    "shadow-rose-600/25",
  crimson: "shadow-red-800/25",
};

const EnrollSteps = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#0a0a0d" }}>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Getting Started
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            How to <span className="text-primary">Enrol</span> in Music Lessons?
          </h2>
        </motion.div>

        {/* Desktop: Interactive timeline */}
        <div className="hidden lg:block">
          {/* Step selectors row */}
          <div className="flex items-center justify-between mb-12 max-w-4xl mx-auto relative">
            {/* Progress line */}
            <div className="absolute top-6 left-[60px] right-[60px] h-[2px] bg-white/10" />
            <motion.div
              className="absolute top-6 left-[60px] h-[2px] bg-gradient-to-r from-primary to-primary/60"
              initial={false}
              animate={{ width: `${(activeStep / (steps.length - 1)) * (100 - 15)}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />

            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === activeStep;
              const isPast = i < activeStep;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="relative z-10 flex flex-col items-center gap-3 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-br ${s.color} shadow-xl ${glowColors[s.glow]}`
                        : isPast
                        ? "bg-primary/20 border-2 border-primary/40"
                        : "bg-white/5 border-2 border-white/10"
                    }`}
                    animate={isActive ? { boxShadow: ["0 0 20px rgba(139,92,246,0.3)", "0 0 40px rgba(139,92,246,0.1)", "0 0 20px rgba(139,92,246,0.3)"] } : {}}
                    transition={isActive ? { duration: 2, repeat: Infinity } : {}}
                  >
                    <Icon className={`w-5 h-5 ${isActive || isPast ? "text-white" : "text-white/40"}`} />
                  </motion.div>
                  <span className={`text-xs font-bold tracking-wide transition-colors ${isActive ? "text-white" : "text-white/40"}`}>
                    Step {s.step}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Active step content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm overflow-hidden">
                <div className="flex items-center">
                  {/* Image side */}
                  <div className="w-2/5 p-10 flex items-center justify-center">
                    <motion.img
                      src={steps[activeStep].image}
                      alt={steps[activeStep].label}
                      className="w-56 h-56 object-contain drop-shadow-2xl"
                      initial={{ scale: 0.8, rotate: -5 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  {/* Text side */}
                  <div className="w-3/5 p-10 border-l border-white/[0.06]">
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${steps[activeStep].color} mb-5`}>
                      <span className="text-white text-xs font-bold tracking-wider">
                        STEP {steps[activeStep].step}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white mb-4">
                      {steps[activeStep].label}
                    </h3>
                    <p className="text-white/60 text-base leading-relaxed mb-6">
                      {steps[activeStep].title}
                    </p>
                    {activeStep < steps.length - 1 ? (
                      <button
                        onClick={() => setActiveStep((prev) => prev + 1)}
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Next Step <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg"
                      >
                        Book Your Free Trial <ChevronRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Vertical timeline cards */}
        <div className="lg:hidden space-y-6">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-4 items-start"
              >
                {/* Timeline line + circle */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${s.color} flex items-center justify-center shadow-lg ${glowColors[s.glow]}`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-[2px] h-16 bg-gradient-to-b from-white/20 to-transparent mt-2" />
                  )}
                </div>

                {/* Card */}
                <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 flex-1 -mt-1">
                  <span className={`inline-block text-[10px] font-bold tracking-widest text-white/40 mb-1`}>
                    STEP {s.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{s.label}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{s.title}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnrollSteps;
