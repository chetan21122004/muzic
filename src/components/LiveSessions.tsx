import { Play } from "lucide-react";
import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher3 from "@/assets/teacher3.jpg";
import teacher4 from "@/assets/teacher4.jpg";

const teachers = [
  { img: teacher1, name: "Sonu Nigam", date: "4 Jan 2023" },
  { img: teacher2, name: "KS Chithra", date: "20 Apr 2023" },
  { img: teacher3, name: "Aruna Sairam", date: "12 Jul 2023" },
  { img: teacher4, name: "Shubha Mudgal", date: "29 Sep 2023" },
];

const LiveSessions = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-10">Live and Interactive Singing Sessions</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((t, i) => (
            <div key={i} className="relative group cursor-pointer">
              <img src={t.img} alt={t.name} className="w-full aspect-square object-cover rounded-xl" />
              <div className="absolute inset-0 bg-background/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                </div>
              </div>
              <div className="mt-3">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveSessions;
