import { useState, useEffect } from "react";

const phrases = [
  { keyword: "LEARN", text: "music from the best teachers with personalized 1-on-1 classes tailored to your goals" },
  { keyword: "PRACTICE", text: "music anytime with personal teachers and practice rooms to perfect your skill" },
  { keyword: "PERFORM", text: "like a pro in front of a huge audience. muziclub showcase is waiting for you!" },
];

const LearnPracticePerform = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveIdx((prev) => (prev + 1) % phrases.length), 3000);
    return () => clearInterval(timer);
  }, []);

  const current = phrases[activeIdx];

  return (
    <section className="py-20" style={{ background: "#0b0b0c" }}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Music: Learn, Practice, Perform</h2>
          <p className="text-[#d1d1d6]/50 text-sm">It is ongoing. It is wholesome. One is incomplete without the other.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-10">
          <div className="relative w-80 h-80 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[80px] animate-pulse -z-10"></div>
            <img src="/illustrations/Compose music-bro.svg" alt="Learn Practice Perform Methodology" className="w-full h-full object-contain drop-shadow-2xl hover:-translate-y-2 hover:scale-105 transition-transform duration-500" />
          </div>

          <div className="flex items-start gap-4">
            <span className="text-primary text-3xl mt-1">▶</span>
            <p className="text-xl md:text-2xl lg:text-3xl text-white font-bold leading-snug max-w-xl">
              <span className="text-primary">{current.keyword}</span> {current.text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnPracticePerform;
