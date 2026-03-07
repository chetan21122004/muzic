import { Play } from "lucide-react";
import studentMalayDrums from "@/assets/student-malay-drums.jpg";
import studentArushiGuitar from "@/assets/student-arushi-guitar.jpg";
import studentNiravGuitar from "@/assets/student-nirav-guitar.jpg";
import studentShowcase from "@/assets/student-showcase.jpg";

const students = [
  { name: "Malay Kale", instrument: "Drums", tag: "🥁", img: studentMalayDrums, desc: "No One Knows – Drums Cover" },
  { name: "Arushi Deshpande", instrument: "Guitar", tag: "🎸", img: studentArushiGuitar, desc: "James Arthur covers & originals" },
  { name: "Nirav Chakrabarti", instrument: "Guitar", tag: "🎸", img: studentNiravGuitar, desc: "Master Of Puppets – Metallica Cover" },
  { name: "Akshit Dhall", instrument: "Western Vocals", tag: "🎤", img: studentShowcase, desc: "Original compositions — singer-songwriter" },
];

const StarSingers = () => {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">Student Showcase</h2>
          <p className="text-muted-foreground text-sm mt-1">Our students don't just learn music — they perform it</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-3">
            {students.map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3 hover:border-primary/40 border border-transparent transition-colors cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm">
                  {s.tag}
                </div>
                <div className="flex-1">
                  <p className="text-foreground text-sm font-medium">{s.name}</p>
                  <p className="text-muted-foreground text-xs">{s.desc}</p>
                </div>
                <span className="text-primary text-xs font-semibold">{s.instrument}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 relative">
            <img src={studentArushiGuitar} alt="Muziclub student performance" className="w-full rounded-xl object-cover aspect-video" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StarSingers;
