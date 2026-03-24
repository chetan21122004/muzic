import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "The Muziclub Academic Board",
    bullets: [
      "Building the gold standard in music education",
      "Making learning fun & accessible to all ages",
      "Online & In-Person Classes Available"
    ],
    cta1: { label: "Explore courses", to: "/online-programs" },
    cta2: { label: "Walk-in Free Trial", to: "/contact" },
    bannerImg: "/banners_new/1.png",
    sideImg: "/new_imgs/Copy of DSC00298 (1).webp",
  },
  {
    title: "Certified Music Courses with Graded Levels",
    bullets: [
      "Expertly crafted curriculums",
      "Aligned with globally recognised exams — Trinity, ABRSM",
      "Online & In-Person Classes Available"
    ],
    cta1: { label: "Explore courses", to: "/online-programs" },
    cta2: { label: "Walk-in Free Trial", to: "/contact" },
    bannerImg: "/banners_new/3.png",
    sideImg: "/new_imgs/Copy of DSC00504.webp",
  },
  {
    title: "Step into the Spotlight with Muziclub Performances",
    bullets: [
      "Showcase your music talent globally",
      "Compete, perform, and rise to stardom"
    ],
    cta1: { label: "Watch performances", to: "/student-showcase" },
    cta2: { label: "Walk-in Free Trial", to: "/contact" },
    bannerImg: "/banners_new/2.png",
    sideImg: "/new_imgs/Copy of DSC00677 (1).webp",
  },
  {
    title: "Live the Music with Our Community",
    bullets: [
      "Join thousands of students and mentors",
      "Exclusive access to masterclasses and workshops",
      "Online & In-Person Classes Available"
    ],
    cta1: { label: "Explore activities", to: "/about" },
    cta2: { label: "Walk-in Free Trial", to: "/contact" },
    bannerImg: "/banners_new/4.png",
    sideImg: "/new_imgs/Copy of DSC00590.webp",
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

      {/* Red Gradient Overlay (Mobile: Solid deep red fading, Desktop: Right-to-left) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#e31837]/90 via-[#9b0914]/95 to-[#050505] lg:bg-gradient-to-r lg:from-[#9b0914] lg:via-[#9b0914]/80 lg:to-transparent z-0 pointer-events-none mix-blend-multiply lg:mix-blend-normal"></div>
      {/* Additional mobile-only gradient to boost the red pop */}
      <div className="absolute inset-0 bg-[#b9091b]/50 lg:hidden z-0 pointer-events-none"></div>

      {/* Main Content Area */}
      <div className="relative flex-1 container mx-auto px-5 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-64 lg:pb-32 pt-20 lg:pt-16 z-10 lg:pl-12 xl:pl-28">

        {/* Left Side: Text */}
        <div className={`transition-all duration-700 w-full lg:w-[55%] max-w-[22rem] sm:max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left ${animating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>

          {/* Elegant Serif Title */}
          <div className="min-h-[105px] sm:min-h-[135px] lg:min-h-0 flex flex-col justify-end lg:justify-start">
            <h1 className="text-[2rem] sm:text-4xl md:text-[3.25rem] font-serif font-medium text-white leading-[1.25] lg:leading-[1.12] mb-6 lg:mb-6 drop-shadow-2xl tracking-tight">
              {slide.title}
            </h1>
          </div>

          {/* Bulleted Description */}
          <div className="min-h-[120px] sm:min-h-[110px] lg:min-h-0 flex flex-col justify-start w-full">
            <ul className="mb-8 lg:mb-10 space-y-3 pl-1 w-full">
              {slide.bullets.map((b, i) => (
                <li key={i} className="flex items-start lg:items-center justify-center lg:justify-start gap-2.5 lg:gap-3 text-white/95 text-[14px] sm:text-[15px] lg:text-base font-medium drop-shadow-md leading-snug text-center lg:text-left">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff2a40] lg:bg-white shrink-0 shadow-[0_0_8px_rgba(255,42,64,0.8)] lg:shadow-lg mt-1.5 lg:mt-0"></div>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col w-full sm:w-auto sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-4 lg:pb-0 pb-8">
            <Link
              to={slide.cta2.to}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 lg:py-3.5 rounded-2xl sm:rounded-md bg-[#d81b3b] text-white text-[15px] font-bold transition-transform hover:scale-105 shadow-[0_8px_20px_rgba(216,27,59,0.3)] order-1 sm:order-2"
            >
              {slide.cta2.label}
            </Link>
            <Link
              to={slide.cta1.to}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3.5 lg:py-3.5 rounded-2xl sm:rounded-md bg-white/5 lg:bg-white text-white lg:text-[#111] border border-white/20 lg:border-none text-[15px] font-bold transition-transform hover:scale-105 shadow-lg order-2 sm:order-1 backdrop-blur-md lg:backdrop-blur-none"
            >
              {slide.cta1.label}
            </Link>
          </div>
        </div>

        {/* Right Side: Featured Image (Desktop Only) */}
        <div className={`hidden lg:flex w-full lg:w-[40%] justify-end mt-12 lg:mt-0 transition-all duration-700 delay-100 ${animating ? "opacity-0 translate-x-8" : "opacity-100 translate-x-0"}`}>
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-4 border-white/10 group bg-black/40 xl:mr-10">
            <img
              src={slide.sideImg}
              alt="Muziclub Student Highlight"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter group-hover:brightness-110"
            />
            {/* Elegant inner glow overlay */}
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem] pointer-events-none transition-all duration-500 group-hover:ring-white/40"></div>
          </div>
        </div>

      </div>

      {/* Slider Indicator Dots */}
      <div className="absolute bottom-[230px] lg:bottom-24 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2.5 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${activeIdx === i ? "w-2.5 h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "w-1.5 h-1.5 bg-white/30 hover:bg-white/60"
              }`}
          />
        ))}
      </div>

      {/* Bottom Trust Makers Bar Container */}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden border-t-2 border-[#1a1a1a] lg:border-white/5 bg-[#0a0a0a] lg:bg-black/20 lg:backdrop-blur-[2px]">
        {/* Subtle dark gradient backing for desktop only */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none"></div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-8 grid grid-cols-2 lg:flex lg:justify-between items-center gap-y-8 gap-x-2 lg:gap-0">

          {/* 25,000 Students Taught */}
          <div className="flex flex-col items-center w-full lg:w-auto text-center lg:px-6 xl:px-8 group">
            <div className="text-[32px] sm:text-[34px] lg:text-[42px] font-black text-white leading-none mb-1.5 lg:mb-2 tracking-tighter transition-transform duration-500 group-hover:scale-105">
              25,000<span className="text-[#e31837]">+</span>
            </div>
            <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#a0a0a0] lg:text-white/60 font-black uppercase tracking-[0.2em] leading-tight">Students Taught</div>
          </div>

          <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>

          {/* 75 Expert Instructors */}
          <div className="flex flex-col items-center w-full lg:w-auto text-center lg:px-6 xl:px-8 group">
            <div className="text-[32px] sm:text-[34px] lg:text-[42px] font-black text-white leading-none mb-1.5 lg:mb-2 tracking-tighter transition-transform duration-500 group-hover:scale-105">
              75<span className="text-[#e31837]">+</span>
            </div>
            <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#a0a0a0] lg:text-white/60 font-black uppercase tracking-[0.2em] leading-tight">Expert Instructors</div>
          </div>

          <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>

          {/* 16+ Years of Excellence */}
          <div className="flex flex-col items-center w-full lg:w-auto text-center lg:px-6 xl:px-8 group">
            <div className="text-[32px] sm:text-[34px] lg:text-[42px] font-black text-white leading-none mb-1.5 lg:mb-2 tracking-tighter transition-transform duration-500 group-hover:scale-105">
              16<span className="text-[#e31837]">+</span>
            </div>
            <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#a0a0a0] lg:text-white/60 font-black uppercase tracking-[0.2em] leading-tight">Years<br className="lg:hidden" /> of Excellence</div>
          </div>

          <div className="hidden lg:block w-[1px] h-12 bg-white/10"></div>

          {/* Google Rating */}
          <div className="flex flex-col items-center w-full lg:w-auto text-center lg:px-6 xl:px-8 group">
            <div className="flex items-center gap-1.5 lg:gap-2.5 mb-1.5 lg:mb-2 transition-transform duration-500 group-hover:scale-105">
              <div className="bg-white p-1 lg:p-1.5 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div className="text-[28px] sm:text-[34px] lg:text-[42px] font-black text-white leading-none tracking-tighter">
                4.9
              </div>
            </div>
            <div className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#a0a0a0] lg:text-white/60 font-black uppercase tracking-[0.2em] flex flex-col items-center gap-0.5 lg:gap-1">
              Google Rating
              <div className="flex text-[#FABB05] text-[8px] lg:text-[10px] tracking-widest gap-0.5 mt-0.5">
                ★★★★★
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
