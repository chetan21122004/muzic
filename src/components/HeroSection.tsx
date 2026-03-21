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
    images: [
      "/new_imgs/Copy of DSC00298 (1).webp",
      "/new_imgs/Copy of DSC00403.webp",
      "/new_imgs/Copy of DSC00504.webp"
    ],
  },
  {
    tag: "International Certifications",
    title: "Certified Music Courses with Graded Levels",
    desc: "Expertly crafted curriculums aligned with globally recognised music exams — Trinity College London, ABRSM, RSL.",
    cta1: { label: "Book a Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/online-programs" },
    images: [
      "/new_imgs/Copy of DSC00590.webp",
      "/new_imgs/Copy of DSC00642 (2).webp",
      "/new_imgs/Copy of DSC00711 (1).webp"
    ],
  },
  {
    tag: "Sunday Jam Sessions",
    title: "Step into the Spotlight with Muziclub Superstar",
    desc: "Showcase your music talent globally with Muziclub Superstar — compete, perform, and rise to stardom.",
    cta1: { label: "Book a Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/student-showcase" },
    images: [
      "/new_imgs/DSC00762 (1).webp",
      "/new_imgs/DSC01210 (1).webp",
      "/new_imgs/Copy of DSC00677 (1).webp"
    ],
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
    <section className="relative w-full bg-black overflow-hidden">
      {/* Rotated Vertical Image Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-50">
        <img
          src="/visuals/8.png"
          alt="Hero Background"
          className="absolute top-1/2 left-1/2 w-[150vh] h-[150vw] max-w-none object-cover -translate-x-1/2 -translate-y-1/2 -rotate-90 filter contrast-125 saturate-50"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-transparent z-0 pointer-events-none"></div>

      <div className="relative flex min-h-[520px] sm:min-h-[560px] lg:min-h-[620px]">
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

        {/* RIGHT — Crazy 3D Floating Photo Cascade */}
        <div className="hidden lg:flex relative flex-1 p-5 items-center justify-center perspective-[2000px]">
          {slides.map((s, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIdx === i && !animating ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-90 translate-y-10 pointer-events-none"} flex items-center justify-center`}
            >
              <div className="relative w-full max-w-[520px] aspect-square flex items-center justify-center group cursor-default">
                {/* Main Center Image */}
                <div className="absolute w-[60%] h-[75%] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-2 border-white/10 z-20 transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-3 translate-y-0">
                  <img src={s.images[0]} alt="" className="w-full h-full object-cover filter contrast-[1.15] saturate-50 group-hover:saturate-100 transition-all duration-700" />
                </div>

                {/* Top Left Floating Image */}
                <div className="absolute w-[45%] h-[55%] -top-[5%] -left-[5%] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/20 z-10 transform -rotate-[12deg] transition-all duration-700 group-hover:translate-x-[-15px] group-hover:translate-y-[-15px] group-hover:-rotate-[15deg]">
                  <img src={s.images[1]} alt="" className="w-full h-full object-cover filter contrast-[1.15] saturate-50 group-hover:saturate-100 transition-all duration-700" />
                </div>

                {/* Bottom Right Floating Image */}
                <div className="absolute w-[50%] h-[50%] -bottom-[5%] -right-[5%] rounded-[2rem] overflow-hidden shadow-[0_45px_70px_rgba(0,0,0,0.8)] border-4 border-white/20 z-30 transform rotate-[8deg] transition-all duration-700 group-hover:translate-x-[20px] group-hover:translate-y-[15px] group-hover:rotate-[12deg] group-hover:scale-110">
                  <img src={s.images[2]} alt="" className="w-full h-full object-cover filter contrast-[1.15] saturate-50 group-hover:saturate-100 transition-all duration-700" />
                </div>

                {/* Cinematic Glowing Orbs */}
                <div className="absolute w-72 h-72 bg-primary/20 rounded-full blur-[80px] -z-10 group-hover:bg-primary/30 transition-colors duration-700"></div>
                <div className="absolute bottom-0 left-10 w-40 h-40 bg-secondary/20 rounded-full blur-[60px] -z-10 transition-colors duration-700"></div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-8 right-8 z-40">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-6 py-3 rounded-full shadow-2xl shadow-primary/40 hover:bg-[#c40812] transition-colors">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</span>
              Book a Free Trial
            </Link>
          </div>
        </div>

        {/* Mobile bg element */}
        <div className="absolute inset-0 lg:hidden z-0 opacity-20 flex items-center justify-center pointer-events-none overflow-hidden">
          <img src={slide.images[0]} alt="" className="w-full h-full object-cover mix-blend-overlay filter saturate-50 contrast-125" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
