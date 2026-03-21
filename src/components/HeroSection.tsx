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
    photos: [
      "/instructor/Harsh-Bagle-guitar.webp",
      "/new_imgs/Copy of DSC00298 (1).webp",
      "/instructor/jeet_Goswami-piano.webp",
      "/instructor/Subham Chand Sahu_Drums.webp",
      "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp",
      "/instructor/Neelima-Hindustani_Vocals.webp",
    ],
  },
  {
    tag: "International Certifications",
    title: "Certified Music Courses with Graded Levels",
    desc: "Expertly crafted curriculums aligned with globally recognised music exams — Trinity College London, ABRSM, RSL.",
    cta1: { label: "Book a Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/online-programs" },
    photos: [
      "/new_imgs/Copy of DSC00403.webp",
      "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp",
      "/instructor/Neelima-Hindustani_Vocals.webp",
      "/new_imgs/Copy of DSC00456 (1).webp",
      "/instructor/Harsh-Bagle-guitar.webp",
      "/new_imgs/Copy of DSC00504.webp",
    ],
  },
  {
    tag: "Sunday Jam Sessions",
    title: "Step into the Spotlight with Muziclub Superstar",
    desc: "Showcase your music talent globally with Muziclub Superstar — compete, perform, and rise to stardom.",
    cta1: { label: "Book a Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/student-showcase" },
    photos: [
      "/new_imgs/Copy of DSC00590.webp",
      "/instructor/Harsh-Bagle-guitar.webp",
      "/new_imgs/Copy of DSC00642 (2).webp",
      "/instructor/Subham Chand Sahu_Drums.webp",
      "/new_imgs/Copy of DSC00677 (1).webp",
      "/instructor/jeet_Goswami-piano.webp",
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
    <section className="relative w-full" style={{ background: "#0b0b0c" }}>
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

        {/* RIGHT — Photo Mosaic */}
        <div className="hidden lg:flex relative flex-1 p-5 items-center justify-center">
          {/* Layout 0 */}
          <div className={`absolute inset-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIdx === 0 && !animating ? "opacity-100 scale-100 blur-none pointer-events-auto" : "opacity-0 scale-95 blur-sm pointer-events-none"} flex flex-col justify-center`}>
            <div className="w-full h-[550px] grid grid-cols-4 grid-rows-2 gap-4">
              <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden shadow-2xl"><img src={slides[0].photos[0]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[0].photos[1]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[0].photos[2]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[0].photos[3]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[0].photos[4]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
            </div>
          </div>
          
          {/* Layout 1 */}
          <div className={`absolute inset-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIdx === 1 && !animating ? "opacity-100 scale-100 blur-none pointer-events-auto" : "opacity-0 scale-95 blur-sm pointer-events-none"} flex flex-col justify-center`}>
            <div className="w-full h-[550px] grid grid-cols-3 grid-rows-2 gap-4">
              <div className="col-span-1 row-span-2 rounded-[2rem] overflow-hidden shadow-2xl"><img src={slides[1].photos[0]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-2 row-span-1 rounded-[2rem] overflow-hidden shadow-2xl"><img src={slides[1].photos[1]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[1].photos[2]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[1].photos[3]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
            </div>
          </div>

          {/* Layout 2 */}
          <div className={`absolute inset-8 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeIdx === 2 && !animating ? "opacity-100 scale-100 blur-none pointer-events-auto" : "opacity-0 scale-95 blur-sm pointer-events-none"} flex flex-col justify-center`}>
            <div className="w-full h-[550px] grid grid-cols-3 grid-rows-2 gap-4">
              <div className="col-span-2 row-span-1 rounded-[2rem] overflow-hidden shadow-2xl"><img src={slides[2].photos[0]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[2].photos[1]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[2].photos[2]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[2].photos[3]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
              <div className="col-span-1 row-span-1 rounded-[1.5rem] overflow-hidden shadow-lg"><img src={slides[2].photos[4]} alt="Muziclub" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" /></div>
            </div>
          </div>

          <div className="absolute bottom-8 right-8 z-30">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-6 py-3 rounded-full shadow-2xl shadow-primary/40 hover:bg-[#c40812] transition-colors">
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</span>
              Book a Free Trial
            </Link>
          </div>
        </div>

        {/* Mobile bg */}
        <div className="absolute inset-0 lg:hidden z-0 opacity-15">
          <img src={slide.photos[0]} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
