import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  { label: "Personalized 1-on-1 Focus", detail: "Classes designed at your pace and goals in mind" },
  { label: "Practice Facilities", detail: "Dedicated practice rooms at all 3 Pune academy centres" },
  { label: "Perform Every Week", detail: "Sunday Jam sessions — live stage experience for every student" },
  { label: "Online or In-Person", detail: "Flexible formats — video call or walk in to any Pune centre" },
];

const LearnPracticePerform = () => {
  return (
    <section className="bg-[#f7f7f9] py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Image */}
          <div className="flex-1 w-full">
            <div className="relative">
              <img
                src="/homepage_banners/banner_3.png"
                alt="Muziclub online classes"
                className="rounded-3xl w-full object-cover aspect-[4/3] shadow-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                }}
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg p-4 border border-gray-100 flex items-center gap-3">
                <div className="text-2xl">🏆</div>
                <div>
                  <p className="text-xs font-bold text-gray-800">RSL · Trinity · ABRSM</p>
                  <p className="text-[10px] text-gray-400">International Certifications</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex-1 space-y-6">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Philosophy</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                Learn, Practice<br />&amp; <span className="text-primary">Perform</span>
              </h2>
            </div>
            <p className="text-gray-500 leading-relaxed">
              Muziclub is all about <strong className="text-gray-900">living music</strong> — making music a part of your life. Our model has the right balance of discipline and flexibility needed to learn music.
            </p>

            <ul className="space-y-4">
              {pillars.map((item, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-800">{item.label}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              to="/online-programs"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm shadow-lg shadow-primary/20"
            >
              Explore All Courses →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnPracticePerform;
