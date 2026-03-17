import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
  const [startIdx, setStartIdx] = useState(0);
  const visible = 4;
  const canPrev = startIdx > 0;
  const canNext = startIdx + visible < courses.length;

  return (
    <section className="py-16" style={{ background: "#1a1a2e" }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Our Online Music Courses
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => canPrev && setStartIdx(startIdx - 1)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canPrev ? "border-white/30 text-white hover:bg-white/10" : "border-white/10 text-white/20 cursor-default"}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => canNext && setStartIdx(startIdx + 1)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canNext ? "border-white/30 text-white hover:bg-white/10" : "border-white/10 text-white/20 cursor-default"}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.slice(startIdx, startIdx + visible).map((course, i) => (
            <div
              key={course.slug}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                  }}
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-white text-lg mb-2">{course.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed flex-1 mb-4">
                  {course.desc}
                </p>
                <Link
                  to={`/courses/${course.slug}`}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-colors self-start"
                >
                  Explore Course & Fees
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
