import { Play } from "lucide-react";
import starVideo from "@/assets/star-singer-video.jpg";

const singers = [
  { name: "Prashanthi", age: "14 yrs", tag: "Hot" },
  { name: "Soorya Anand", age: "18 yrs", tag: "Hot" },
  { name: "Vandana Gautam", age: "42 yrs", tag: "" },
  { name: "Sadna", age: "11 yrs", tag: "" },
];

const StarSingers = () => {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-10">Star Singers of Artium Academy</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 space-y-3">
            {singers.map((s, i) => (
              <div key={i} className="flex items-center gap-3 bg-secondary rounded-lg px-4 py-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Play className="w-3 h-3 text-primary" />
                </div>
                <span className="text-foreground text-sm font-medium">{s.name}</span>
                <span className="text-muted-foreground text-xs">| {s.age}</span>
                {s.tag && (
                  <span className="ml-auto bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {s.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="flex-1 relative">
            <img src={starVideo} alt="Star singer performing" className="w-full rounded-xl object-cover aspect-video" />
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
