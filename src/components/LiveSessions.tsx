import { Play } from "lucide-react";

const sessions = [
  { name: "Harsh Bagle", date: "12 Jan 2026", img: "/instructor/Harsh-Bagle-guitar.webp" },
  { name: "Jeet Goswami", date: "26 Jan 2026", img: "/instructor/jeet_Goswami-piano.webp" },
  { name: "Subham Chand Sahu", date: "9 Feb 2026", img: "/instructor/Subham Chand Sahu_Drums.webp" },
  { name: "Kshitij Kumar", date: "23 Feb 2026", img: "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp" },
];

const LiveSessions = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-10">
          Live and Interactive Singing Sessions
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {sessions.map((s, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="p-[3px] rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(358,93%,47%), hsl(358,93%,30%), hsl(358,93%,47%))" }}>
                <div className="relative rounded-[14px] overflow-hidden aspect-[3/4] bg-secondary">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full border-2 border-white/80 flex items-center justify-center bg-black/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="font-bold text-foreground text-base">{s.name}</p>
                <p className="text-muted-foreground text-sm mt-0.5">{s.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveSessions;
