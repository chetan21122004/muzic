import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const courses = [
  { img: "/new_imgs/Copy of DSC00711 (1).webp", title: "Guitar", desc: "Acoustic & electric guitar classes — from Bollywood strumming to Rock & Pop. RSL & Trinity certifications available.", slug: "guitar-acoustic" },
  { img: "/new_imgs/Copy of DSC00504.webp", title: "Piano / Keyboard", desc: "From Western Classical to Pop songs. Expert teachers guide you to international certifications.", slug: "piano" },
  { img: "/new_imgs/DSC01210 (1).webp", title: "Bollywood Vocals", desc: "Sing your favourite Hindi film songs while developing professional vocal technique and stage confidence.", slug: "popular-film-music-hindi" },
  { img: "/instructor/Neelima-Hindustani_Vocals.webp", title: "Indian Classical Vocals", desc: "Master Hindustani classical traditions with qualified and experienced music gurus.", slug: "hindustani-classical-vocal" },
  { img: "/new_imgs/Copy of DSC00456 (1).webp", title: "Drums", desc: "Learn rhythm and groove from qualified drum instructors. Perform live at our weekly Sunday Jam sessions.", slug: "drums" },
  { img: "/new_imgs/DSC00762 (1).webp", title: "Western Vocals", desc: "Explore Western classical singing, pop, and stage performance skills for any audience.", slug: "western-vocal" },
];

const CoursesSection = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visible = 4;
  const canPrev = startIdx > 0;
  const canNext = startIdx + visible < courses.length;

  return (
    <section className="py-12 lg:py-16 relative bg-cover bg-center" style={{ backgroundImage: "url('/visuals/2.png')" }}>
      <div className="absolute inset-0 bg-background/95 md:bg-background/90 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-row items-center justify-between gap-4 mb-8 lg:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground max-w-[65%] lg:max-w-full leading-tight">Our Online Music Courses</h2>
          <div className="flex gap-1.5 lg:gap-2 shrink-0">
            <button onClick={() => canPrev && setStartIdx(startIdx - 1)} className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border flex items-center justify-center transition-colors ${canPrev ? "border-border text-foreground hover:bg-secondary" : "border-border/50 text-muted-foreground/30 cursor-default"}`}>
              <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
            <button onClick={() => canNext && setStartIdx(startIdx + 1)} className={`w-8 h-8 lg:w-10 lg:h-10 rounded-full border flex items-center justify-center transition-colors ${canNext ? "border-border text-foreground hover:bg-secondary" : "border-border/50 text-muted-foreground/30 cursor-default"}`}>
              <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:gap-5">
          {courses.slice(startIdx, startIdx + visible).map((course) => (
            <div key={course.slug} className="group/card rounded-2xl lg:rounded-[1.25rem] overflow-hidden border border-border bg-background hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 flex flex-row lg:flex-col items-stretch h-36 sm:h-40 lg:h-auto">
              <div className="w-[35%] sm:w-[40%] lg:w-full h-full lg:h-48 shrink-0 overflow-hidden relative border-r lg:border-r-0 lg:border-b border-border/50 lg:border-transparent bg-secondary/30">
                <img src={course.img} alt={course.title} loading="lazy" decoding="async" className="absolute lg:static inset-0 w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }} />
              </div>
              <div className="p-3.5 sm:p-5 lg:p-5 flex flex-col flex-1 justify-center lg:justify-start overflow-hidden">
                <h3 className="font-bold text-foreground text-[14px] sm:text-base lg:text-lg mb-1 lg:mb-2 leading-tight truncate lg:whitespace-normal">{course.title}</h3>
                <p className="text-muted-foreground text-[11px] sm:text-xs lg:text-sm leading-snug lg:leading-relaxed flex-1 mb-2.5 lg:mb-4 line-clamp-2 lg:line-clamp-none">{course.desc}</p>
                <Link to={`/courses/${course.slug}`} className="inline-flex items-center justify-center px-4 py-1.5 lg:px-5 lg:py-2.5 rounded-full bg-primary/10 lg:bg-primary text-primary lg:text-primary-foreground text-[10px] sm:text-[11px] lg:text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-colors self-start shadow-none lg:shadow-lg lg:shadow-primary/20 shrink-0">
                  Explore<span className="hidden lg:inline">&nbsp;Course</span> →
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
