import { useState } from "react";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const students = [
  {
    name: "Malay Kale",
    instrument: "Drums",
    label: "PFM Pune | Intermediate",
    duration: "1:34",
    img: "/instructor/Subham Chand Sahu_Drums.webp",
    video: "https://muziclub.com/student-showcase/",
  },
  {
    name: "Arushi Deshpande",
    instrument: "Guitar",
    label: "Acoustic | Beginner–Intermediate",
    duration: "0:55",
    img: "/instructor/Harsh-Bagle-guitar.webp",
    video: "https://muziclub.com/student-showcase/",
  },
  {
    name: "Nirav Chakrabarti",
    instrument: "Guitar",
    label: "Rock Guitar | Intermediate",
    duration: "1:12",
    img: "/homepage_banners/instrument.png",
    video: "https://muziclub.com/student-showcase/",
  },
  {
    name: "Charan & Varun Raavi",
    instrument: "Keyboard",
    label: "Keyboard | Beginner",
    duration: "0:48",
    img: "/homepage_banners/banner_3.png",
    video: "https://muziclub.com/student-showcase/",
  },
];

const StarSingers = () => {
  const [activeIdx, setActiveIdx] = useState(2); // default highlighted like Artium

  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
              Muziclub Buzz
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Student Showcase
            </h2>
            <p className="text-gray-400 text-sm mt-2">
              Our students don't just learn music — they perform it at Sunday Jams
            </p>
          </div>
          <Link
            to="/student-showcase"
            className="text-sm font-semibold text-primary hover:underline mt-4 sm:mt-0 shrink-0"
          >
            View all showcases →
          </Link>
        </div>

        {/* Artium-style: left playlist sidebar + right featured video */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left: Playlist list */}
          <div className="lg:w-[38%] space-y-2">
            {students.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 text-left ${
                  activeIdx === i
                    ? "bg-primary text-white"
                    : "hover:bg-white/5 text-gray-300"
                }`}
              >
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 shrink-0">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                    }}
                  />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-bold leading-tight truncate ${activeIdx === i ? "text-white" : "text-gray-200"}`}>
                    {s.name}
                  </p>
                  <p className={`text-xs mt-0.5 truncate ${activeIdx === i ? "text-white/80" : "text-gray-500"}`}>
                    {s.label}
                  </p>
                </div>

                {/* Duration */}
                <span className={`text-xs font-bold shrink-0 ${activeIdx === i ? "text-white/90" : "text-gray-500"}`}>
                  {s.duration}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Featured video */}
          <div className="lg:flex-1">
            <a
              href={students[activeIdx].video}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block rounded-2xl overflow-hidden aspect-video bg-gray-800"
            >
              <img
                src={students[activeIdx].img}
                alt={students[activeIdx].name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                }}
              />
              {/* Gradient + play */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-primary ml-1" fill="currentColor" />
                </div>
              </div>
              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-extrabold text-xl leading-tight">
                  {students[activeIdx].name}
                </p>
                <p className="text-primary text-sm font-semibold mt-1">
                  {students[activeIdx].instrument} · {students[activeIdx].label}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarSingers;
