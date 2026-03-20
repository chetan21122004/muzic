import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sonya Meher",
    location: "Hindustani Vocals Student",
    img: "https://img.youtube.com/vi/QOy61MeG0xc/hqdefault.jpg",
    text: "A proud mother to 2 children, singing is my passion. Learning Hindustani Vocals at Muziclub since 2015 has been an incredible journey. The teachers are incredibly patient and encouraging.",
  },
  {
    name: "Preetish Pratihari",
    location: "Guitar Student (Trinity Grade 7)",
    img: "https://img.youtube.com/vi/7CnKhSLG_7E/hqdefault.jpg",
    text: "I have been learning guitar with Muziclub on and off for more than 7 years. The expert guidance from the faculty artist helped me reach Trinity Rock & Pop Level 6. Highly recommended!",
  },
  {
    name: "Malay Kale",
    location: "Drums Student",
    img: "https://img.youtube.com/vi/fd94YZG0Mgw/hqdefault.jpg",
    text: "Learning drums at Muziclub has been amazing. The teachers make classes highly interactive and always encourage two-way discussions. They even supported me in starting my own YouTube channel!",
  },
  {
    name: "Anusha Bhatia",
    location: "Western Vocals Student",
    img: "https://img.youtube.com/vi/RghXPi_oSfQ/hqdefault.jpg",
    text: "I believe in 'Sing because you love it, not because you can'. I've been learning Western Vocals here for a year and the environment is extremely supportive. Getting to perform live is a big plus.",
  },
  {
    name: "Akshit Dhall",
    location: "Independent Singer-Songwriter",
    img: "https://img.youtube.com/vi/qdRIdz-h-DI/hqdefault.jpg",
    text: "As an independent artist, the mentors here helped me refine my original songs. I now perform 90-120 minute live sets! It's a great place to hone your skills and meet fellow musicians.",
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Muziclub's Student Testimonials
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => canPrev && setStartIdx(startIdx - 1)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canPrev ? "border-gray-300 text-gray-900 hover:bg-gray-100" : "border-gray-200 text-gray-300 cursor-default"}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => canNext && setStartIdx(startIdx + 1)}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${canNext ? "border-gray-300 text-gray-900 hover:bg-gray-100" : "border-gray-200 text-gray-300 cursor-default"}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.slice(startIdx, startIdx + visible).map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm hover:shadow-lg hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Red quote mark */}
              <div className="text-primary text-4xl font-black leading-none mb-3 opacity-80">"</div>
              {/* 5 star rating */}
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, s) => (
                  <span key={s} className="text-primary text-sm">★</span>
                ))}
              </div>
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-gray-100 mb-4 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
                />
              </div>
              <h3 className="font-extrabold text-gray-900 text-lg">{t.name}</h3>
              <p className="text-primary text-xs font-semibold mt-0.5 mb-3 uppercase tracking-wide">{t.location}</p>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-4">
                {t.text}
              </p>
              <button className="text-primary font-bold text-xs mt-4 uppercase tracking-wider hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
