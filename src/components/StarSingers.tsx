import { useState } from "react";
import { Play } from "lucide-react";
import { showcaseStudents } from "@/data/studentShowcase";

// Filter to get top 5 students that have a YouTube ID
const students = showcaseStudents
  .filter((s) => s.youtubeId && s.category !== "Faculty Band" && s.category !== "Band Performance")
  .slice(0, 5)
  .map((s) => ({
    name: s.name,
    tag: s.instrument,
    song: s.song || "Student Showcase",
    img: `https://img.youtube.com/vi/${s.youtubeId}/hqdefault.jpg`,
    youtubeId: s.youtubeId,
  }));

const StarSingers = () => {
  const [activeIdx, setActiveIdx] = useState(2);

  if (students.length === 0) return null;

  return (
    <section className="py-16" style={{ background: "#0a0a0d" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white italic mb-10 text-center lg:text-left">
          Star Students of Muziclub
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Playlist */}
          <div className="lg:w-[35%] space-y-1">
            {students.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 text-left ${
                  activeIdx === i
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                    : "hover:bg-white/5 text-white/70"
                }`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 shrink-0">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">
                    {s.name}
                  </p>
                  <p className={`text-xs truncate ${activeIdx === i ? "text-white/80" : "text-white/50"}`}>
                    {s.tag} • {s.song}
                  </p>
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activeIdx === i ? "bg-white text-primary" : "bg-white/10 text-white"}`}>
                  <Play className="w-3 h-3 ml-0.5" fill="currentColor" />
                </div>
              </button>
            ))}
          </div>

          {/* Right: Overlapping video cards (Artium style) */}
          <div className="lg:flex-1 flex items-center justify-center mt-10 lg:mt-0">
            <div className="relative w-full max-w-lg h-72 hidden md:block">
              {students.map((s, i) => {
                const offset = i - activeIdx;
                const isActive = i === activeIdx;
                return (
                  <div
                    key={i}
                    className="absolute top-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer bg-black"
                    style={{
                      width: isActive ? "320px" : "220px",
                      height: isActive ? "280px" : "240px",
                      left: `${50 + offset * 30}%`,
                      transform: `translateX(-50%) scale(${isActive ? 1 : 0.85})`,
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                      opacity: Math.abs(offset) > 2 ? 0 : 1,
                    }}
                    onClick={() => setActiveIdx(i)}
                  >
                    {isActive ? (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${s.youtubeId}?autoplay=1&mute=1`}
                        title={s.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <>
                        <img
                          src={s.img}
                          alt={s.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 backdrop-blur-sm">
                            <Play className="text-white ml-0.5 w-5 h-5" fill="white" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Mobile fallback for right side */}
            <div className="md:hidden w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black relative">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${students[activeIdx].youtubeId}?autoplay=1&mute=1`}
                title={students[activeIdx].name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarSingers;
