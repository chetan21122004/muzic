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
      "/homepage_banners/banner_1.png",
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
      "/homepage_banners/banner_3.png",
      "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp",
      "/instructor/Neelima-Hindustani_Vocals.webp",
      "/homepage_banners/banner_4.png",
      "/instructor/Harsh-Bagle-guitar.webp",
      "/homepage_banners/banner_1.png",
    ],
  },
  {
    tag: "Sunday Jam Sessions",
    title: "Step into the Spotlight with Muziclub Superstar",
    desc: "Showcase your music talent globally with Muziclub Superstar — compete, perform, and rise to stardom.",
    cta1: { label: "Book a Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/student-showcase" },
    photos: [
      "/homepage_banners/singing.png",
      "/instructor/Harsh-Bagle-guitar.webp",
      "/homepage_banners/banner_1.png",
      "/instructor/Subham Chand Sahu_Drums.webp",
      "/homepage_banners/banner_3.png",
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
    <section className="relative w-full" style={{ background: "#0a0a0d" }}>
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
            <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-md">
              ● {slide.desc}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to={slide.cta1.to}
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-gradient-to-r from-primary to-rose-600 text-white text-sm font-bold hover:from-rose-600 hover:to-primary transition-all shadow-lg shadow-primary/30 glow-red"
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

          {/* Arrows */}
          <div className="flex gap-2 mt-10">
            <button
              onClick={() => goTo(activeIdx - 1)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => goTo(activeIdx + 1)}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* RIGHT — Photo Mosaic (Artium-style 2x3 grid) */}
        <div
          className={`hidden lg:grid relative flex-1 grid-cols-3 grid-rows-2 gap-1 p-1 transition-opacity duration-500 ${animating ? "opacity-0" : "opacity-100"}`}
        >
          {slide.photos.map((src, i) => (
            <div key={`${activeIdx}-${i}`} className="overflow-hidden relative">
              <img
                src={src}
                alt="Muziclub"
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
              />
              {/* Name overlay on some photos */}
              {i < 3 && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                  <p className="text-white text-[10px] font-medium truncate">
                    {["Guitar Faculty", "Muziclub Students", "Piano Faculty"][i]}
                  </p>
                </div>
              )}
            </div>
          ))}
          {/* Floating "Book a Free Trial" badge on last cell */}
          <div className="absolute bottom-4 right-4 z-20">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full shadow-lg shadow-primary/30 hover:bg-primary/90 transition-colors"
            >
              <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-[10px]">▶</span>
              Book a Free Trial
            </Link>
          </div>
        </div>

        {/* Mobile: single background image */}
        <div className="absolute inset-0 lg:hidden z-0 opacity-15">
          <img
            src={slide.photos[0]}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
