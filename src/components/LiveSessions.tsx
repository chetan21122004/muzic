import { Play } from "lucide-react";

const instructors = [
  { name: "Harsh Bagle", instrument: "Guitar", img: "/instructor/Harsh-Bagle-guitar.webp" },
  { name: "Jeet Goswami", instrument: "Piano / Keyboard", img: "/instructor/jeet_Goswami-piano.webp" },
  { name: "Subham Chand Sahu", instrument: "Drums", img: "/instructor/Subham Chand Sahu_Drums.webp" },
  { name: "Kshitij Kumar Choudhary", instrument: "Western Vocals", img: "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp" },
];

const LiveSessions = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">Meet Our Faculty Artists</h2>
          <p className="text-muted-foreground text-sm mt-1">Qualified, experienced, and passionate about music education</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((t, i) => (
            <div key={i} className="relative group cursor-pointer">
              <div className="w-full aspect-square rounded-xl overflow-hidden bg-secondary">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder.svg"; }}
                />
              </div>
              <div className="absolute inset-0 bg-background/50 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-primary">{t.instrument}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveSessions;
