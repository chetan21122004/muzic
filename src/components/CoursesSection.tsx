import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const courses = [
  {
    img: "/homepage_banners/instrument.png",
    title: "Guitar",
    desc: "Acoustic & electric guitar classes — from Bollywood strumming to Rock & Pop. RSL & Trinity certifications available.",
    slug: "guitar-acoustic",
  },
  {
    img: "/homepage_banners/banner_3.png",
    title: "Piano / Keyboard",
    desc: "From Western Classical to Pop songs. Expert teachers guide you to international certifications.",
    slug: "piano",
  },
  {
    img: "/homepage_banners/singing.png",
    title: "Bollywood Vocals",
    desc: "Sing your favourite Hindi film songs while developing professional vocal technique and stage confidence.",
    slug: "popular-film-music-hindi",
  },
  {
    img: "/instructor/Neelima-Hindustani_Vocals.webp",
    title: "Indian Classical Vocals",
    desc: "Master Hindustani and Carnatic classical traditions with qualified and experienced music gurus.",
    slug: "hindustani-classical-vocal",
  },
  {
    img: "/homepage_banners/banner_4.png",
    title: "Drums",
    desc: "Learn rhythm and groove from qualified drum instructors. Perform live at our weekly Sunday Jam sessions.",
    slug: "drums",
  },
  {
    img: "/homepage_banners/banner_1.png",
    title: "Western Vocals",
    desc: "Explore Western classical singing, pop, and stage performance skills for any audience.",
    slug: "western-vocal",
  },
];

const CoursesSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    el?.addEventListener("scroll", checkScroll);
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("a")?.offsetWidth ?? 320;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 24 : cardWidth + 24, behavior: "smooth" });
  };

  return (
    <section className="bg-foreground py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-background">
              Our Online Music Courses
            </h2>
          </motion.div>

          {/* Nav Arrows */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:bg-primary hover:border-primary hover:text-primary-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-background/20 disabled:hover:text-background/60 transition-all duration-200"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:bg-primary hover:border-primary hover:text-primary-foreground disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:border-background/20 disabled:hover:text-background/60 transition-all duration-200"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="snap-start"
            >
              <Link
                to={`/courses/${course.slug}`}
                className="group block w-[280px] md:w-[320px] shrink-0 rounded-2xl overflow-hidden bg-background/5 border border-background/10 hover:border-primary/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="text-lg font-bold text-background">{course.title}</h3>
                  <p className="text-xs text-background/50 leading-relaxed line-clamp-3">
                    {course.desc}
                  </p>
                  <div className="pt-1">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-background/70 border border-background/15 rounded-full px-4 py-2 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                      Explore Course & Fees
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex sm:hidden items-center justify-center gap-3 mt-6">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:bg-primary hover:border-primary hover:text-primary-foreground disabled:opacity-30 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background/60 hover:bg-primary hover:border-primary hover:text-primary-foreground disabled:opacity-30 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
