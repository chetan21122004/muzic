import { Play } from "lucide-react";

const sessions = [
  {
    name: "Harsh Bagle",
    instrument: "Guitar",
    date: "12 Jan 2025",
    topic: "Rock & Bollywood Guitar — Live Masterclass",
    img: "/instructor/Harsh-Bagle-guitar.webp",
    duration: "1:12",
  },
  {
    name: "Jeet Goswami",
    instrument: "Piano / Keyboard",
    date: "26 Jan 2025",
    topic: "Chords, Scales & Song Arrangement Workshop",
    img: "/instructor/jeet_Goswami-piano.webp",
    duration: "0:58",
  },
  {
    name: "Subham Chand Sahu",
    instrument: "Drums",
    date: "9 Feb 2025",
    topic: "Rhythm Grooves — Beginner to Intermediate",
    img: "/instructor/Subham Chand Sahu_Drums.webp",
    duration: "1:05",
  },
  {
    name: "Kshitij Kumar Choudhary",
    instrument: "Western Vocals",
    date: "23 Feb 2025",
    topic: "Breath Control & Stage Confidence",
    img: "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp",
    duration: "0:54",
  },
];

const LiveSessions = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
            Live &amp; Interactive
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Live Music Sessions
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            Exclusive masterclasses with our faculty artists — free for all students
          </p>
        </div>

        {/* 4-col card grid — matches Artium's session cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((s, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                  }}
                />
                {/* Dark overlay + play button on hover */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-primary ml-0.5" fill="currentColor" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2 py-0.5 rounded-md">
                  {s.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <p className="text-[11px] text-gray-400 mb-1">{s.date}</p>
                <p className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 mb-2">
                  {s.topic}
                </p>
                <div className="flex items-center gap-2 pt-2 border-t border-gray-50">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                    {s.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-800">{s.name}</p>
                    <p className="text-[10px] text-primary">{s.instrument}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveSessions;
