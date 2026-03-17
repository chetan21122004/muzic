import { useState } from "react";
import { Play } from "lucide-react";

const students = [
  {
    name: "Malay Kale",
    age: "Drums",
    duration: "1:34",
    img: "/instructor/Subham Chand Sahu_Drums.webp",
  },
  {
    name: "Arushi Deshpande",
    age: "Guitar",
    duration: "0:55",
    img: "/instructor/Harsh-Bagle-guitar.webp",
  },
  {
    name: "Nirav Chakrabarti",
    age: "Guitar",
    duration: "1:12",
    img: "/homepage_banners/instrument.png",
  },
  {
    name: "Charan & Varun Raavi",
    age: "Keyboard",
    duration: "0:48",
    img: "/homepage_banners/banner_3.png",
  },
];

const StarSingers = () => {
  const [activeIdx, setActiveIdx] = useState(2);

  return (
    <section className="py-16" style={{ background: "#1e1e2e" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white italic mb-10">
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
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-white/5 text-white/70"
                }`}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 shrink-0">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold truncate">
                    {s.name} | {s.age}
                  </p>
                </div>
                <span className="text-sm font-bold shrink-0 opacity-70">
                  {s.duration}
                </span>
              </button>
            ))}
            {/* Scrollbar decoration */}
            <div className="flex justify-center pt-4">
              <div className="w-1 h-8 rounded-full bg-white/20" />
            </div>
          </div>

          {/* Right: Overlapping video cards (Artium style) */}
          <div className="lg:flex-1 flex items-center justify-center">
            <div className="relative w-full max-w-lg h-72">
              {students.map((s, i) => {
                const offset = i - activeIdx;
                const isActive = i === activeIdx;
                return (
                  <div
                    key={i}
                    className="absolute top-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 cursor-pointer"
                    style={{
                      width: isActive ? "280px" : "200px",
                      height: isActive ? "280px" : "240px",
                      left: `${50 + offset * 30}%`,
                      transform: `translateX(-50%) scale(${isActive ? 1 : 0.85})`,
                      zIndex: isActive ? 10 : 5 - Math.abs(offset),
                      opacity: Math.abs(offset) > 2 ? 0 : 1,
                    }}
                    onClick={() => setActiveIdx(i)}
                  >
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`rounded-full border-2 border-white/80 flex items-center justify-center bg-black/30 backdrop-blur-sm ${isActive ? "w-14 h-14" : "w-10 h-10"}`}>
                        <Play className={`text-white ml-0.5 ${isActive ? "w-6 h-6" : "w-4 h-4"}`} fill="white" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarSingers;
