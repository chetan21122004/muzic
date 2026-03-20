import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { showcaseStudents, showcaseCategories, ShowcaseCategory } from "@/data/studentShowcase";
import { X, Music, User, Calendar, Award, Play } from "lucide-react";

const ytThumb = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const ytEmbed = (id: string) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;

const instrumentEmoji: Record<string, string> = {
  Drums: "🥁", Guitar: "🎸", Keyboard: "🎹", Piano: "🎹",
  Vocals: "🎤", "Western Vocals": "🎤", "Hindustani Vocals": "🎤",
  "Guitar & Vocals": "🎸", "Piano & Guitar": "🎹", Band: "🎶",
};
const getEmoji = (i: string) => instrumentEmoji[i] ?? "🎵";

const StudentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<ShowcaseCategory>("All");
  const [selected, setSelected] = useState<(typeof showcaseStudents)[0] | null>(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const filtered =
    activeCategory === "All"
      ? showcaseStudents
      : showcaseStudents.filter((s) => s.category === activeCategory);

  const openModal = (student: (typeof showcaseStudents)[0]) => {
    setSelected(student);
    setVideoPlaying(false);
  };

  const closeModal = () => {
    setSelected(null);
    setVideoPlaying(false);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0d" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/20 blur-[120px] rounded-full" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-primary/20">
            🎶 Talent & Performances
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
            Student <span className="text-primary">Showcase</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Our students don't just learn music — they live it. Watch real performances from
            Sunday Jams, live events, and personal cover videos recorded at Muziclub.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-white/40">
            <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
              🎓 {showcaseStudents.filter(s => !["Band Performance","Faculty Band"].includes(s.category)).length} Students Featured
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
              ▶ {showcaseStudents.filter(s => s.youtubeId).length} Videos Available
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-3 py-1">
              🎶 {showcaseStudents.filter(s => s.category === "Band Performance").length} Band Performances
            </span>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-[56px] z-40 backdrop-blur border-b border-white/5 py-3" style={{ background: "rgba(10,10,13,0.9)" }}>
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {showcaseCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as ShowcaseCategory)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                  activeCategory === cat
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                    : "border-white/10 text-white/50 hover:border-white/30 hover:text-white/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((student) => (
              <button
                key={student.id}
                onClick={() => openModal(student)}
                className="group border border-white/[0.06] rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 text-left"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="relative aspect-video overflow-hidden bg-black">
                  {student.youtubeId ? (
                    <>
                      <img src={ytThumb(student.youtubeId)} alt={student.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform duration-200">
                          <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-white/[0.03] flex items-center justify-center">
                      <span className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {getEmoji(student.instrument)}
                      </span>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-black/60 backdrop-blur border border-white/10 text-primary">
                    {student.category}
                  </span>
                  {student.age && (
                    <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full bg-black/60 backdrop-blur border border-white/10 text-white/70">
                      Age {student.age}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="font-extrabold text-white text-sm leading-snug">{student.name}</p>
                  <p className="text-xs font-semibold mt-0.5 text-primary">{student.instrument}</p>
                  {student.teacher && <p className="text-[11px] text-white/40 mt-1 truncate">👨‍🏫 {student.teacher}</p>}
                  <p className="text-xs text-white/50 mt-2 leading-relaxed line-clamp-2">{student.tagline}</p>
                  {student.song && (
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] text-white/30">
                      <Music className="w-3 h-3 shrink-0" />
                      <span className="truncate">{student.song}</span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-white/30 py-20 text-sm">No showcases in this category yet.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-xl mx-auto border border-white/[0.06] rounded-3xl p-10" style={{ background: "rgba(255,255,255,0.03)" }}>
            <span className="text-4xl block mb-4">🌟</span>
            <h2 className="text-2xl font-extrabold text-white mb-3">Want to be featured here?</h2>
            <p className="text-white/40 text-sm mb-7 leading-relaxed">
              Join Muziclub, perform at our Sunday Jam sessions, and you could be our next featured showcase student!
            </p>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
              Book a Free Trial Class
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="relative border border-white/10 rounded-3xl w-full max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl" style={{ background: "#111116" }}>
            <button onClick={closeModal} className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 rounded-full p-1.5 transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>

            <div className="relative w-full aspect-video rounded-t-3xl overflow-hidden bg-black">
              {selected.youtubeId ? (
                videoPlaying ? (
                  <iframe className="w-full h-full" src={ytEmbed(selected.youtubeId)} title={selected.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                ) : (
                  <>
                    <img src={ytThumb(selected.youtubeId)} alt={selected.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                    <button onClick={() => setVideoPlaying(true)} className="absolute inset-0 flex flex-col items-center justify-center gap-3 group">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/50 group-hover:scale-110 transition-transform duration-200">
                        <Play className="w-7 h-7 text-white fill-white ml-1" />
                      </div>
                      <span className="text-white/80 text-sm font-semibold bg-black/40 backdrop-blur px-3 py-1 rounded-full">Watch Performance</span>
                    </button>
                  </>
                )
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                  <span className="text-8xl">{getEmoji(selected.instrument)}</span>
                </div>
              )}
              {!videoPlaying && <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#111116] to-transparent pointer-events-none" />}
            </div>

            <div className="px-6 pb-8 pt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{selected.category}</span>
              <h2 className="text-2xl font-extrabold text-white mt-1">{selected.name}</h2>
              <p className="text-white/50 text-sm">{selected.instrument}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {selected.age && (
                  <span className="flex items-center gap-1 text-[11px] bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/60">
                    <User className="w-3 h-3" /> Age {selected.age}
                  </span>
                )}
                {selected.since && (
                  <span className="flex items-center gap-1 text-[11px] bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/60">
                    <Calendar className="w-3 h-3" /> Since {selected.since}
                  </span>
                )}
                {selected.level && (
                  <span className="flex items-center gap-1 text-[11px] bg-white/5 border border-white/10 rounded-full px-3 py-1 text-white/60">
                    <Award className="w-3 h-3" /> {selected.level}
                  </span>
                )}
                {selected.song && (
                  <span className="flex items-center gap-1 text-[11px] bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-primary">
                    <Music className="w-3 h-3" />
                    {selected.song}
                    {selected.originalArtist && ` — ${selected.originalArtist}`}
                  </span>
                )}
              </div>

              {selected.teacher && (
                <p className="mt-4 text-xs text-white/40">
                  <span className="font-semibold text-white/60">Teacher: </span>{selected.teacher}
                </p>
              )}

              <p className="mt-5 text-sm text-white/70 leading-relaxed">{selected.bio}</p>

              {selected.teacherQuote && (
                <div className="mt-6 bg-white/5 border-l-2 border-primary rounded-r-xl px-4 py-4">
                  <p className="text-sm text-white/70 italic leading-relaxed">{selected.teacherQuote}</p>
                  {selected.teacherQuoteName && <p className="text-xs text-primary font-semibold mt-2">— {selected.teacherQuoteName}</p>}
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {selected.youtubeId && !videoPlaying && (
                  <button onClick={() => setVideoPlaying(true)} className="inline-flex items-center gap-2 bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    <Play className="w-4 h-4 fill-white" /> Play Video
                  </button>
                )}
                {selected.youtubeChannel && (
                  <a href={selected.youtubeChannel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors">
                    ▶ YouTube Channel
                  </a>
                )}
                {selected.instagram && (
                  <a href={`https://instagram.com/${selected.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-white/20 transition-colors">
                    📸 Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentShowcase;
