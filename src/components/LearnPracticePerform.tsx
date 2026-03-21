import { useState, useEffect } from "react";

const phrases = [
  { keyword: "LEARN", text: "music from the best teachers with personalized 1-on-1 classes tailored to your goals" },
  { keyword: "PRACTICE", text: "music anytime with personal teachers and practice rooms to perfect your skill" },
  { keyword: "PERFORM", text: "like a pro in front of a huge audience. Muziclub showcase is waiting for you!" },
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
          <div className="relative w-48 h-48 shrink-0">
            <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 200 200">
              <defs><path id="circlePath" d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" /></defs>
              <text className="fill-white/30 text-[13px] font-bold uppercase tracking-[0.3em]">
                <textPath href="#circlePath">◆ LEARN ◆ PRACTICE ◆ PERFORM ◆  ACHIEVE</textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-xl">
                <img src="/logo_i.png" alt="Muziclub Icon" className="w-20 object-contain drop-shadow-md" />
              </div>
            </div>
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
