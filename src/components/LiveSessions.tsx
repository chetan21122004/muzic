import { Play } from "lucide-react";

const sessions = [
  {
    name: "Harsh Bagle",
    date: "12 Jan 2026",
    img: "/instructor/Harsh-Bagle-guitar.webp",
  },
  {
    name: "Jeet Goswami",
    date: "26 Jan 2026",
    img: "/instructor/jeet_Goswami-piano.webp",
  },
  {
    name: "Subham Chand Sahu",
    date: "9 Feb 2026",
    img: "/instructor/Subham Chand Sahu_Drums.webp",
  },
  {
    name: "Kshitij Kumar",
    date: "23 Feb 2026",
    img: "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp",
  },
];

const LiveSessions = () => {
  return (
    <section className="py-16" style={{ background: "#f5f5f5" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          Live and Interactive Singing Sessions
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((s, i) => (
            <div key={i} className="group cursor-pointer">
              {/* Portrait card with gradient border — fixed using wrapper div */}
              <div
                className="p-[3px] rounded-2xl"
                style={{ background: "linear-gradient(135deg, hsl(356,91%,47%), hsl(356,91%,30%), hsl(356,91%,47%))" }}
              >
                <div className="relative rounded-[14px] overflow-hidden aspect-[3/4] bg-gray-200">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                    }}
                  />
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Info below */}
              <div className="mt-3">
                <p className="font-bold text-gray-900 text-base">{s.name}</p>
                <p className="text-gray-500 text-sm mt-0.5">{s.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveSessions;
