import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "The Muziclub Academic Board",
    bullets: [
      "Building the gold standard in music education",
      "Making learning fun & accessible to all ages"
    ],
    cta1: { label: "Explore courses", to: "/online-programs" },
    cta2: { label: "Book a free trial", to: "/contact" },
    bannerImg: "/banners_new/1.png",
  },
  {
    title: "Certified Music Courses with Graded Levels",
    bullets: [
      "Expertly crafted curriculums",
      "Aligned with globally recognised exams — Trinity, ABRSM"
    ],
    cta1: { label: "Explore courses", to: "/online-programs" },
    cta2: { label: "Book a free trial", to: "/contact" },
    bannerImg: "/banners_new/2.png",
  },
  {
    title: "Step into the Spotlight with Muziclub Superstar",
    bullets: [
      "Showcase your music talent globally",
      "Compete, perform, and rise to stardom"
    ],
    cta1: { label: "Explore courses", to: "/student-showcase" },
    cta2: { label: "Book a free trial", to: "/contact" },
    bannerImg: "/banners_new/3.png",
  },
  {
    title: "Live the Music with Our Community",
    bullets: [
      "Join thousands of students and mentors",
      "Exclusive access to masterclasses and workshops"
    ],
    cta1: { label: "Explore activities", to: "/about" },
    cta2: { label: "Book a free trial", to: "/contact" },
    bannerImg: "/banners_new/4.png",
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
    <section className="relative w-full bg-[#110103] overflow-hidden min-h-[580px] lg:min-h-[640px] flex flex-col">
      {/* Banner Background Cascade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${activeIdx === i ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <img
            src={s.bannerImg}
            alt={s.title}
            className="w-full h-full object-cover object-right lg:object-[70%_center] filter brightness-[0.85]"
          />
        </div>
      ))}

      {/* Red Gradient Overlay (Mostly Red Theme as requested) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#9b0914] via-[#9b0914]/80 to-transparent lg:to-black/20 z-0 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="relative flex-1 container mx-auto px-6 lg:px-16 flex flex-col justify-center pb-24 lg:pb-32 pt-16 z-10 lg:pl-28">
        <div className={`transition-all duration-700 w-full lg:w-[50%] max-w-xl ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
          {/* Elegant Serif Title */}
          <h1 className="text-4xl md:text-[3.25rem] font-serif font-medium text-white leading-[1.12] mb-6 drop-shadow-xl tracking-tight">
            {slide.title}
          </h1>

          {/* Bulleted Description */}
          <ul className="mb-10 space-y-3 pl-1">
            {slide.bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-white/95 text-[15px] sm:text-base font-medium drop-shadow-md">
                <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0 shadow-lg"></div>
                {b}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to={slide.cta1.to}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-white text-[#111] text-[15px] font-bold transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              {slide.cta1.label}
            </Link>
            <Link
              to={slide.cta2.to}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-md bg-[#e31837] text-white text-[15px] font-bold transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              {slide.cta2.label}
            </Link>
          </div>
        </div>
      </div>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${activeIdx === i ? "w-2.5 h-2.5 bg-white shadow-md shadow-black/50" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/80"
              }`}
          />
        ))}
      </div>

      {/* Bottom Trust Makers Bar Container */}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden border-t border-white/5 bg-black/20 backdrop-blur-[2px]">
        {/* Subtle dark gradient backing so the stats stand out on the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-wrap justify-center lg:justify-between items-center gap-y-10 gap-x-4 lg:gap-0">

          {/* 10,000+ Students Taught */}
          <div className="flex flex-col items-center w-[42%] lg:w-auto text-center lg:px-6 xl:px-8 group">
            <div className="text-[38px] lg:text-[42px] font-black text-white leading-none mb-2 drop-shadow-lg tracking-tighter transition-transform duration-500 group-hover:scale-105">
              10,000<span className="text-[#ff2a40]">+</span>
            </div>
            <div className="text-[10px] lg:text-[11px] text-white/60 font-bold uppercase tracking-[0.2em]">Students Taught</div>
          </div>

          <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>

          {/* 50+ Expert Instructors */}
          <div className="flex flex-col items-center w-[42%] lg:w-auto text-center lg:px-6 xl:px-8 group">
            <div className="text-[38px] lg:text-[42px] font-black text-white leading-none mb-2 drop-shadow-lg tracking-tighter transition-transform duration-500 group-hover:scale-105">
              50<span className="text-[#ff2a40]">+</span>
            </div>
            <div className="text-[10px] lg:text-[11px] text-white/60 font-bold uppercase tracking-[0.2em]">Expert Instructors</div>
          </div>

          <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>

          {/* 14+ Years of Excellence */}
          <div className="flex flex-col items-center w-[42%] lg:w-auto text-center lg:px-6 xl:px-8 group">
            <div className="text-[38px] lg:text-[42px] font-black text-white leading-none mb-2 drop-shadow-lg tracking-tighter transition-transform duration-500 group-hover:scale-105">
              14<span className="text-[#ff2a40]">+</span>
            </div>
            <div className="text-[10px] lg:text-[11px] text-white/60 font-bold uppercase tracking-[0.2em]">Years of Excellence</div>
          </div>

          <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>

          {/* 4.8/5 Average Rating */}
          <div className="flex flex-col items-center w-[42%] lg:w-auto text-center lg:px-6 xl:px-8 group">
            <div className="flex items-baseline justify-center text-[38px] lg:text-[42px] font-black text-white leading-none mb-2 drop-shadow-lg tracking-tighter transition-transform duration-500 group-hover:scale-105">
              4.8<span className="text-[#ff2a40] text-[20px] lg:text-[24px] ml-0.5">/5</span>
            </div>
            <div className="text-[10px] lg:text-[11px] text-white/60 font-bold uppercase tracking-[0.2em] flex flex-col items-center gap-1">
              Average Rating
              <div className="flex text-[#ff2a40] text-[9px] tracking-widest gap-0.5">
                ★★★★★
              </div>
            </div>          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
