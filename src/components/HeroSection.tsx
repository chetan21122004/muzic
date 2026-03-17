import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    tag: "Online & Academy",
    title: "Music Classes Online & In-Person",
    desc: "Muziclub provides 1-on-1 Online Music Classes and Academy Classes in Guitar, Keyboard, Indian & Western Vocals, Drums, and more — from Qualified Teachers.",
    cta1: { label: "Book Free Trial", to: "/contact" },
    cta2: { label: "Explore Courses", to: "/online-programs" },
    photos: [
      "/instructor/Harsh-Bagle-guitar.webp",
      "/homepage_banners/banner_1.png",
      "/instructor/jeet_Goswami-piano.webp",
      "/instructor/Subham Chand Sahu_Drums.webp",
    ],
  },
  {
    tag: "International Certifications",
    title: "Certified Music Courses with Graded Levels",
    desc: "Expertly crafted curriculums aligned with globally recognised music exams — Trinity College London, ABRSM, RSL, and G.M.V. Mandal.",
    cta1: { label: "Book Free Trial", to: "/contact" },
    cta2: { label: "Know More", to: "/online-programs" },
    photos: [
      "/homepage_banners/banner_3.png",
      "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp",
      "/instructor/Neelima-Hindustani-Vocals.webp",
      "/homepage_banners/banner_4.png",
    ],
  },
  {
    tag: "Sunday Jam Sessions",
    title: "Perform Live — Every Single Week",
    desc: "Every Muziclub student gets to perform at our weekly Sunday Jams — a live stage experience that builds real confidence and artistry.",
    cta1: { label: "Book Free Trial", to: "/contact" },
    cta2: { label: "Student Showcases", to: "/student-showcase" },
    photos: [
      "/homepage_banners/singing.png",
      "/instructor/Harsh-Bagle-guitar.webp",
      "/homepage_banners/banner_1.png",
      "/instructor/Subham Chand Sahu_Drums.webp",
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
      }, 300);
    },
    [animating]
  );

  useEffect(() => {
    const timer = setInterval(() => goTo(activeIdx + 1), 6000);
    return () => clearInterval(timer);
  }, [activeIdx, goTo]);

  const slide = slides[activeIdx];

  return (
    <section className="bg-white">
      {/* Full-width slider — fixed height so every slide is identical */}
      <div
        className="relative w-full flex h-[480px] sm:h-[540px] lg:h-[620px] overflow-hidden"
        style={{ background: "#2b2b3d" }}
      >
        {/* ── LEFT PANEL (text) ── */}
        <div className="relative z-10 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 w-full lg:w-[42%] shrink-0 overflow-hidden">
          {/* Tag */}
          <div
            className={`transition-all duration-500 ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}
          >
            <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-6">
              {slide.tag}
            </span>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.18] mb-5">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-white/65 text-sm md:text-base leading-relaxed mb-9 max-w-sm">
              {slide.desc}
            </p>

            {/* CTAs — matching Artium: outline + filled pink */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to={slide.cta2.to}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-white/50 text-white text-sm font-bold hover:bg-white/10 transition-colors"
              >
                {slide.cta2.label}
              </Link>
              <Link
                to={slide.cta1.to}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
              >
                {slide.cta1.label}
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex gap-6 mt-10 pt-8 border-t border-white/10">
              <div>
                <p className="text-xl font-extrabold text-white">14,000+</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">Students</p>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <p className="text-xl font-extrabold text-white">13+ Yrs</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">Experience</p>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <p className="text-xl font-extrabold text-white">4.8 ⭐</p>
                <p className="text-[10px] text-white/50 uppercase tracking-wider mt-0.5">Google</p>
              </div>
            </div>
          </div>

          {/* Prev / Next arrows (left side) */}
          <div className="absolute left-6 bottom-8 flex gap-2 z-20">
            <button
              onClick={() => goTo(activeIdx - 1)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => goTo(activeIdx + 1)}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide dot indicators */}
          <div className="absolute right-6 bottom-8 flex gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`transition-all duration-400 rounded-full ${activeIdx === i ? "w-5 h-2 bg-primary" : "w-2 h-2 bg-white/30 hover:bg-white/60"
                  }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL (photo mosaic) ── */}
        <div
          className={`hidden lg:flex flex-col flex-1 gap-1 p-1 transition-opacity duration-500 ${animating ? "opacity-0" : "opacity-100"
            }`}
        >
          {/* Top full-width image */}
          <div className="flex-[3] overflow-hidden">
            <img
              key={`${activeIdx}-0`}
              src={slide.photos[0]}
              alt="Muzicclub"
              className="w-full h-full object-cover object-center"
              onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
            />
          </div>
          {/* Bottom row — 3 slices */}
          <div className="flex-[2] flex gap-1">
            <div className="flex-1 overflow-hidden">
              <img
                key={`${activeIdx}-1`}
                src={slide.photos[1]}
                alt="Muziclub"
                className="w-full h-full object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_3.png"; }}
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex-1 overflow-hidden">
                <img
                  key={`${activeIdx}-2`}
                  src={slide.photos[2]}
                  alt="Muziclub"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_4.png"; }}
                />
              </div>
              <div className="flex-1 overflow-hidden">
                <img
                  key={`${activeIdx}-3`}
                  src={slide.photos[3]}
                  alt="Muziclub"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/singing.png"; }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: single full-bleed image behind panel, faded */}
        <div
          className="absolute inset-0 lg:hidden z-0"
          style={{ opacity: 0.15 }}
        >
          <img
            src={slide.photos[0]}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
          />
        </div>
      </div>

      {/* Stats Strip — contained */}
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-[#f7f7f9] border border-gray-100 rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-transform">
            <p className="text-2xl md:text-3xl font-extrabold text-gray-900">14,000+</p>
            <p className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-wider">Students Taught</p>
          </div>
          <div className="bg-[#f7f7f9] border border-gray-100 rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-transform">
            <p className="text-2xl md:text-3xl font-extrabold text-gray-900">13+ Years</p>
            <p className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-wider">Of Excellence</p>
          </div>
          <div className="bg-[#f7f7f9] border border-gray-100 rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-transform">
            <p className="text-2xl md:text-3xl font-extrabold text-gray-900">4 Centres</p>
            <p className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-wider">Pune & UK</p>
          </div>
          <div className="bg-[#f7f7f9] border border-gray-100 rounded-2xl p-5 text-center hover:-translate-y-0.5 transition-transform">
            <div className="flex items-center justify-center gap-1">
              <p className="text-2xl md:text-3xl font-extrabold text-gray-900">4.8</p>
              <span className="text-2xl">⭐</span>
            </div>
            <p className="text-xs text-gray-400 font-bold mt-1 uppercase tracking-wider">Google Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
