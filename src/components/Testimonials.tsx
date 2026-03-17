import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sneha M.",
    location: "Maharashtra",
    img: "/instructor/Neelima-Hindustani_Vocals.webp",
    text: "Music learning at Muziclub is superb and exponential. The team is very friendly and knowledgeable. I've built so much confidence performing on stage.",
  },
  {
    name: "Rahul K.",
    location: "Pune",
    img: "/instructor/Harsh-Bagle-guitar.webp",
    text: "My learning at Muziclub taught me so much about the importance of practice. It was a truly enriching experience with the most knowledgeable teachers.",
  },
  {
    name: "Aryan P.",
    location: "Maharashtra",
    img: "/instructor/Subham Chand Sahu_Drums.webp",
    text: "Muziclub is the best place for beginners who don't have a music background. Passion, hard work, and online classes — it's a complete package.",
  },
  {
    name: "Priya S.",
    location: "Pune",
    img: "/instructor/jeet_Goswami-piano.webp",
    text: "My lessons at Muziclub are something I look forward to. They are pitched at my personal needs and the teacher genuinely cares about my progress.",
  },
  {
    name: "Vikram D.",
    location: "Maharashtra",
    img: "/homepage_banners/banner_1.png",
    text: "The Sunday Jam sessions are the highlight of my week. Getting to perform live every week is something I never expected from a music school. Absolutely love it.",
  },
];

const Testimonials = () => {
  const [startIdx, setStartIdx] = useState(0);
  const visible = 4;
  const canPrev = startIdx > 0;
  const canNext = startIdx + visible < testimonials.length;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Muziclub's Student Testimonials
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => canPrev && setStartIdx(startIdx - 1)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canPrev ? "border-gray-300 text-foreground hover:bg-gray-100" : "border-gray-200 text-gray-300 cursor-default"}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => canNext && setStartIdx(startIdx + 1)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canNext ? "border-gray-300 text-foreground hover:bg-gray-100" : "border-gray-200 text-gray-300 cursor-default"}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.slice(startIdx, startIdx + visible).map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Large circular avatar */}
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gray-100 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
                />
              </div>
              <h3 className="font-extrabold text-foreground text-lg">{t.name}</h3>
              <p className="text-muted-foreground text-sm mt-0.5 mb-4">{t.location}</p>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                {t.text}
              </p>
              <button className="text-primary font-semibold text-sm mt-4 hover:underline">
                read more
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
