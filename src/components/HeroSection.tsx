import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ChevronRight } from "lucide-react";

const heroImages = [
  "/homepage_banners/banner_1.png",
  "/homepage_banners/banner_2.png",
  "/homepage_banners/banner_3.png",
  "/homepage_banners/banner_4.png",
];

const heroWords = ["Guitar", "Piano", "Vocals", "Drums"];

const HeroSection = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [currentWordIdx, setCurrentWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWordIdx((prev) => (prev + 1) % heroWords.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-background overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background images */}
      {heroImages.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
            idx === currentImageIdx ? "opacity-20" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-primary/8 blur-[100px]" />

      {/* Animated lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          animate={{ y: ["100%", "-100%"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container relative mx-auto px-4 py-20 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-xs font-semibold tracking-widest uppercase">
                Pune's Premier Music Academy
              </span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] text-foreground tracking-tight"
              >
                Learn &amp; Live
              </motion.h1>

              <div className="h-[1.1em] text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentWordIdx}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="block text-primary"
                  >
                    {heroWords[currentWordIdx]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed"
            >
              Online &amp; Academy classes in Guitar, Keyboard, Indian &amp; Western Vocals,
              Drums &amp; more — from qualified, passionate teachers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-semibold px-8 h-13 rounded-full group"
              >
                Online Classes Enquiry
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-foreground/5 text-sm font-semibold px-8 h-13 rounded-full backdrop-blur-sm"
              >
                <Play className="w-4 h-4 mr-1 fill-current" />
                Academy Classes Enquiry
              </Button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex items-center gap-8 pt-6 border-t border-border/50"
            >
              {[
                { value: "13+", label: "Years" },
                { value: "5000+", label: "Students" },
                { value: "3", label: "Centres" },
                { value: "4.8★", label: "Google Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual — rotating image showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-[420px] h-[420px]">
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Inner ring */}
              <motion.div
                className="absolute inset-8 rounded-full border border-primary/10"
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />

              {/* Center image */}
              <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl shadow-primary/20">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIdx}
                    src={heroImages[currentImageIdx]}
                    alt="Muziclub Music Classes"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>

              {/* Floating instrument labels */}
              {[
                { label: "🎸 Guitar", top: "5%", left: "50%", delay: 0 },
                { label: "🎹 Piano", top: "50%", right: "-5%", delay: 0.5 },
                { label: "🎤 Vocals", bottom: "5%", left: "50%", delay: 1 },
                { label: "🥁 Drums", top: "50%", left: "-5%", delay: 1.5 },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + item.delay, type: "spring" }}
                  className="absolute bg-card/90 backdrop-blur-md border border-border rounded-full px-4 py-2 text-xs font-semibold text-foreground shadow-lg"
                  style={{
                    top: item.top,
                    left: item.left,
                    right: (item as any).right,
                    bottom: (item as any).bottom,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
