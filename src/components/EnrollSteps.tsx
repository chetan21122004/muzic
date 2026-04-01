import { useState, useEffect } from "react";
import { CalendarCheck, Headphones, CreditCard, Sparkles, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import stepBookTrial from "@/assets/step-book-trial.png";
import stepTryClass from "@/assets/step-try-class.png";
import stepPayEnrol from "@/assets/step-pay-enrol.png";
import stepPerform from "@/assets/step-perform.png";

const steps = [
  { icon: CalendarCheck, image: stepBookTrial, step: "01", label: "Book A Free Trial", title: "Select your favourite course and book a free trial class at your convenient time" },
  { icon: Headphones, image: stepTryClass, step: "02", label: "Try Before You Buy", title: "Get personalised guidance from our Academic Expert in the free trial class" },
  { icon: CreditCard, image: stepPayEnrol, step: "03", label: "Pay and Enroll", title: "Begin your In-person and customised learning sessions with muziclub certified teachers" },
  { icon: Sparkles, image: stepPerform, step: "04", label: "Learn, Practice & Perform", title: "Get Exclusive Access to Live Masterclasses, Sunday Jams and Digital Learning Tools" },
];

const EnrollSteps = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4500); // 4.5 seconds per slide
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Getting Started</p>
          <h2 className="font-core text-3xl md:text-5xl font-extrabold text-foreground">
            How to <span className="text-primary">Enroll</span> in Music Lessons?
          </h2>
        </motion.div>

        {/* Desktop */}
        <div className="hidden lg:block" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          <div className="flex items-center justify-between mb-12 max-w-4xl mx-auto relative">
            <div className="absolute top-6 left-[60px] right-[60px] h-[2px] bg-border" />
            <motion.div className="absolute top-6 left-[60px] h-[2px] bg-primary" initial={false} animate={{ width: `${(activeStep / (steps.length - 1)) * (100 - 15)}%` }} transition={{ duration: 0.5, ease: "easeInOut" }} />
            {steps.map((s, i) => {
              const Icon = s.icon;
              const isActive = i === activeStep;
              const isPast = i < activeStep;
              return (
                <motion.button key={i} onClick={() => setActiveStep(i)} className="relative z-10 flex flex-col items-center gap-3 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? "bg-primary shadow-xl shadow-primary/30" : isPast ? "bg-primary/20 border-2 border-primary/40" : "bg-secondary border-2 border-border"}`}>
                    <Icon className={`w-5 h-5 ${isActive ? "text-white" : isPast ? "text-primary" : "text-muted-foreground"}`} />
                  </div>
                  <span className={`text-xs font-bold tracking-wide transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`}>Step {s.step}</span>
                </motion.button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={activeStep} initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -20, scale: 0.97 }} transition={{ duration: 0.4 }} className="max-w-4xl mx-auto">
              <div className="rounded-3xl border border-border bg-secondary overflow-hidden">
                <div className="flex items-center">
                  <div className="w-2/5 p-10 flex items-center justify-center">
                    <motion.img src={steps[activeStep].image} alt={steps[activeStep].label} className="w-56 h-56 object-contain drop-shadow-2xl" initial={{ scale: 0.8, rotate: -5 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.5 }} />
                  </div>
                  <div className="w-3/5 p-10 border-l border-border">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary mb-5">
                      <span className="text-primary-foreground text-xs font-bold tracking-wider">STEP {steps[activeStep].step}</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-foreground mb-4">{steps[activeStep].label}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed mb-6">{steps[activeStep].title}</p>
                    {activeStep < steps.length - 1 ? (
                      <button onClick={() => setActiveStep((p) => p + 1)} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                        Next Step <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-[#c40812] transition-colors shadow-lg">
                        Book Your Free Trial <ChevronRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile */}
        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isActive = activeStep === i;
            return (
              <motion.div key={i} onClick={() => setActiveStep(i)} className={`border cursor-pointer ${isActive ? 'border-primary shadow-lg shadow-primary/20' : 'border-border opacity-70'} rounded-2xl bg-secondary p-5 overflow-hidden transition-all duration-300`}>
                <div className="flex gap-4 items-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${isActive ? 'bg-primary text-white' : 'bg-primary/20 text-primary'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="inline-block text-[10px] font-bold tracking-widest text-muted-foreground mb-1">STEP {s.step}</span>
                    <h3 className={`text-lg font-bold leading-tight transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{s.label}</h3>
                  </div>
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mt-4 pt-4 border-t border-border overflow-hidden">
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.title}</p>
                      <div className="flex justify-center mb-2">
                        <img src={s.image} alt={s.label} className="w-40 h-40 object-contain drop-shadow-xl" />
                      </div>
                      <div className="text-center mt-5">
                        {i < steps.length - 1 ? (
                          <button onClick={(e) => { e.stopPropagation(); setActiveStep(p => p + 1); }} className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all">
                            Next Step <ChevronRight className="w-4 h-4" />
                          </button>
                        ) : (
                          <a href="/contact" onClick={(e) => e.stopPropagation()} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-lg hover:bg-[#c40812] transition-colors">
                            Book Free Trial <ChevronRight className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnrollSteps;
