import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { courseCategories } from "@/data/courses";

const allCoursesList = courseCategories.flatMap((cat) =>
  cat.courses.map((c) => ({ ...c, category: cat.title }))
);

const tabs = ["All", "Vocals", "Instruments", "Percussion", "Certifications"];

const formatIcons: Record<string, string> = {
  Vocals: "🎤", Instruments: "🎸", Percussion: "🥁", Certifications: "🏆",
};

const OnlinePrograms = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? allCoursesList
      : allCoursesList.filter((c) => c.category === activeTab);

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0d" }}>
      <Navbar />

      {/* Hero */}
      <section className="py-16 border-b border-white/5" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">All Courses</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Online Music Classes —<br />
            <span className="text-primary">Learn from Anywhere</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Hobby classes tailored to your taste, or structured Grade classes for international certifications. 1-on-1 or small group (max 3 students). Pune academies or online worldwide.
          </p>
        </div>
      </section>

      {/* Format Explainer */}
      <section className="py-10 border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
            <div className="rounded-2xl p-6 border border-white/[0.06]" style={{ background: "#111116" }}>
              <div className="text-2xl mb-3">🎸</div>
              <h3 className="font-bold text-white mb-1">Hobby Classes</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Customized based on your individual preferences — aimed at enabling skills to play specific songs or music styles you love.
              </p>
            </div>
            <div className="rounded-2xl p-6 border border-white/[0.06]" style={{ background: "#111116" }}>
              <div className="text-2xl mb-3">⭐</div>
              <h3 className="font-bold text-white mb-1">Grade Classes &amp; Certification</h3>
              <p className="text-sm text-white/40 leading-relaxed">
                Follow the structured learning content of internationally recognized exams — Trinity College London, ABRSM, RSL (Rockschool), and GMV Mandal Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activeTab === tab
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "text-white/50 border-white/10 hover:border-primary hover:text-primary"
                }`}
              >
                {tab !== "All" && formatIcons[tab]} {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.map((course) => (
              <Link
                key={course.slug}
                to={`/courses/${course.slug}`}
                className="group border border-white/[0.06] rounded-2xl p-5 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
                style={{ background: "#111116" }}
              >
                <div className="text-2xl mb-3">{formatIcons[course.category] || "🎵"}</div>
                <h3 className="font-bold text-white text-sm leading-snug mb-1">{course.name}</h3>
                <p className="text-[10px] text-primary font-semibold uppercase tracking-wide">{course.category}</p>
                <p className="text-xs text-primary font-semibold mt-3 group-hover:underline">Enrol →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-white/5" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Not sure which course is right for you?</h2>
          <p className="text-white/40 text-sm mb-6">Book a free 1-on-1 trial class — our teachers will guide you to the perfect fit.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Book Free Trial Class
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlinePrograms;
