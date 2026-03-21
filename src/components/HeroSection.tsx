import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    tag: "Online & Academy",
    title: "The Muziclub Academic Board",
    desc: "Building the gold standard in music education to make learning fun & accessible to people of all ages.",
    cta1: { label: "Book a Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/online-programs" },
    illustration: "/illustrations/Playing Music-bro.svg",
  },
  {
    tag: "International Certifications",
    title: "Certified Music Courses with Graded Levels",
    desc: "Expertly crafted curriculums aligned with globally recognised music exams — Trinity College London, ABRSM, RSL.",
    cta1: { label: "Book a Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/online-programs" },
    illustration: "/illustrations/Compose music-bro.svg",
  },
  {
    tag: "Sunday Jam Sessions",
    title: "Step into the Spotlight with Muziclub Superstar",
    desc: "Showcase your music talent globally with Muziclub Superstar — compete, perform, and rise to stardom.",
    cta1: { label: "Book a Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/student-showcase" },
    illustration: "/illustrations/jazz piano-amico.svg",
  },
];

const HeroSection = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActiveIdx((idx + slides.length) % slides.length);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(activeIdx + 1), 6000);
    return () => clearInterval(timer);
  }, [activeIdx, goTo]);

  const slide = slides[activeIdx];

  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/visuals/1.png')" }}>
      <div className="absolute inset-0 bg-black/80 lg:bg-black/80 z-0 pointer-events-none"></div>
      <div className="flex min-h-[520px] sm:min-h-[560px] lg:min-h-[620px]">
        {/* LEFT — Text */}
        <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 w-full lg:w-[42%] shrink-0">
          <div className={`transition-all duration-500 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-5">
              {slide.tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.15] mb-5">
              {slide.title}
            </h1>
            <p className="text-[#d1d1d6] text-sm leading-relaxed mb-6 max-w-md">
              ● {slide.desc}
            </p>

            {/* Stats Block Redesigned */}
            <div className="inline-flex flex-wrap items-center gap-5 sm:gap-8 mb-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-4 shadow-2xl">
              <div className="flex flex-col">
                <p className="text-white font-black text-2xl lg:text-3xl leading-none mb-1.5">10k<span className="text-primary">+</span></p>
                <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">Students</p>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden sm:block" />
              <div className="flex flex-col">
                <p className="text-white font-black text-2xl lg:text-3xl leading-none mb-1.5">50<span className="text-primary">+</span></p>
                <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">Tutors</p>
              </div>
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden sm:block" />
              <div className="flex flex-col">
                <p className="text-white font-black text-2xl lg:text-3xl leading-none mb-1.5">14<span className="text-primary">+</span></p>
                <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] font-bold">Years Exp.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to={slide.cta1.to}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary hover:bg-[#c40812] text-primary-foreground text-sm font-bold transition-all shadow-lg shadow-primary/30"
              >
                {slide.cta1.label}
              </Link>
              <Link
                to={slide.cta2.to}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                {slide.cta2.label}
              </Link>
            </div>
          </div>

          <div className="flex gap-2 mt-10">
            <button onClick={() => goTo(activeIdx - 1)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors" aria-label="Previous">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => goTo(activeIdx + 1)} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors" aria-label="Next">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* RIGHT — Dynamic Vector Illustration */}
        <div className="hidden lg:flex relative flex-1 p-5 items-center justify-center">
          {slides.map((s, i) => (
            <div 
              key={i} 
              className={`absolute inset-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIdx === i && !animating ? "opacity-100 scale-100 blur-none pointer-events-auto" : "opacity-0 scale-95 blur-sm pointer-events-none"} flex flex-col justify-center items-center`}
            >
              <img src={s.illustration} alt={s.title} className="w-full max-w-[500px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-700 hover:-translate-y-4" />
            </div>
          ))}

          <div className="absolute bottom-8 right-8 z-30">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-6 py-3 rounded-full shadow-2xl shadow-primary/40 hover:bg-[#c40812] transition-colors">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</span>
              Book a Free Trial
            </Link>
          </div>
        </div>

        {/* Mobile bg */}
        <div className="absolute inset-0 lg:hidden z-0 opacity-10 flex items-center justify-center pointer-events-none overflow-hidden">
          <img src={slide.illustration} alt="" className="w-[150%] max-w-none h-auto object-contain opacity-20 blur-sm mix-blend-screen" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
