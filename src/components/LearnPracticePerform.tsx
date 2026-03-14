import { Play } from "lucide-react";
import achievePerformance from "/achieve-performance.png";
import achieveChoir from "/achieve-choir.png";

const LearnPracticePerform = () => {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Learn, Practice &amp; Perform</h2>
            <p className="text-muted-foreground">
              Muziclub is all about <span className="text-primary font-semibold">living music</span> — making music a part of your life. Our model has the right balance of discipline and flexibility that is needed to learn music.
            </p>
            <ul className="space-y-4">
              {[
                { label: "Personalized Focus", detail: "1-on-1 classes designed with your pace and goals in mind" },
                { label: "Practice Facilities", detail: "Dedicated practice rooms at all 3 Pune academy centres" },
                { label: "Perform Every Week", detail: "Sunday Jam sessions give every student a live stage experience" },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <img
              src={achievePerformance}
              alt="Muziclub online classes"
              className="rounded-2xl w-full object-cover shadow-xl col-span-2 h-64"
            />
            <img
              src={achieveChoir}
              alt="Muziclub choir performance"
              className="rounded-2xl w-full h-full object-cover shadow-xl"
            />
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-secondary h-40">
              <img src="/achieve-karaoke.png" alt="Muziclub karaoke" className="w-full h-full object-cover mix-blend-overlay opacity-80" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnPracticePerform;
