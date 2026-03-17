import { Link } from "react-router-dom";
import { Play } from "lucide-react";

const JoinUs = () => {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e1e2e 0%, #2b1f3d 60%, #1a1a2e 100%)" }}
    >
      {/* Background music note decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-center justify-center">
        <span className="text-[30rem] text-white leading-none">♪</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Text CTA */}
          <div className="flex-1 space-y-6">
            <p className="text-primary text-xs font-bold uppercase tracking-widest">
              Teach With Muziclub
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Love teaching music?{" "}
              <span className="text-primary">Join Us!</span>
            </h2>
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              Become a Muziclub Certified Music Teacher and train students in Pune and online. 
              Set your own schedule, work from anywhere, and impact thousands of aspiring musicians.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                to="/teach-with-us"
                className="inline-flex items-center justify-center bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors text-sm shadow-lg shadow-primary/30"
              >
                Become a Teacher
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white/25 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm"
              >
                Book Free Trial Class
              </Link>
            </div>
          </div>

          {/* Right: Play button card with image */}
          <div className="flex-1 w-full max-w-md lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-800 shadow-2xl shadow-black/50">
              <img
                src="/homepage_banners/banner_4.png"
                alt="Teach with Muziclub"
                className="w-full h-full object-cover opacity-60"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                }}
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer">
                  <Play className="w-7 h-7 text-white ml-1" fill="white" />
                </div>
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-4 left-4">
                <p className="text-white font-bold text-sm">Sunday Jam — Every Week</p>
                <p className="text-gray-300 text-xs mt-0.5">Live performances by every student</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
