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

  const filtered = activeCategory === "All" ? showcaseStudents : showcaseStudents.filter((s) => s.category === activeCategory);
  const openModal = (student: (typeof showcaseStudents)[0]) => { setSelected(student); setVideoPlaying(false); };
  const closeModal = () => { setSelected(null); setVideoPlaying(false); };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-10 overflow-hidden bg-secondary">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-primary/20">🎶 Talent & Performances</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-5 leading-tight">Student <span className="text-primary">Showcase</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">Our students don't just learn music — they live it. Watch real performances from Sunday Jams, live events, and personal cover videos.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span className="bg-secondary border border-border rounded-full px-3 py-1">🎓 {showcaseStudents.filter(s => !["Band Performance", "Faculty Band"].includes(s.category)).length} Students</span>
            <span className="bg-secondary border border-border rounded-full px-3 py-1">▶ {showcaseStudents.filter(s => s.youtubeId).length} Videos</span>
            <span className="bg-secondary border border-border rounded-full px-3 py-1">🎶 {showcaseStudents.filter(s => s.category === "Band Performance").length} Bands</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[56px] z-40 backdrop-blur border-b border-border py-3 bg-background/90">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {showcaseCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat as ShowcaseCategory)} className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${activeCategory === cat ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/30" : "border-border text-muted-foreground hover:border-primary/30 hover:text-primary"}`}>{cat}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((student) => (
              <button key={student.id} onClick={() => openModal(student)} className="group border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left bg-background">
                <div className="relative aspect-video overflow-hidden bg-secondary">
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
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <span className="text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{getEmoji(student.instrument)}</span>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/90 backdrop-blur border border-border text-primary">{student.category}</span>
                </div>
                <div className="p-4">
                  <p className="font-extrabold text-foreground text-sm leading-snug">{student.name}</p>
                  <p className="text-xs font-semibold mt-0.5 text-primary">{student.instrument}</p>
                  {student.teacher && <p className="text-[11px] text-muted-foreground mt-1 truncate">👨‍🏫 {student.teacher}</p>}
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed line-clamp-2">{student.tagline}</p>
                  {student.song && (
                    <div className="mt-2 flex items-center gap-1.5 text-[10px] text-muted-foreground/60">
                      <Music className="w-3 h-3 shrink-0" /><span className="truncate">{student.song}</span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          {filtered.length === 0 && <p className="text-center text-muted-foreground py-20 text-sm">No showcases in this category yet.</p>}
        </div>
      </section>

      <Footer />

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div className="relative border border-border rounded-3xl w-full max-w-lg max-h-[92vh] overflow-y-auto shadow-2xl bg-background">
            <button onClick={closeModal} className="absolute top-4 right-4 z-20 bg-secondary hover:bg-border rounded-full p-1.5 transition-colors"><X className="w-4 h-4 text-foreground" /></button>
            <div className="relative w-full aspect-video rounded-t-3xl overflow-hidden bg-black">
              {selected.youtubeId ? (
                videoPlaying ? (
                  <iframe className="w-full h-full" src={ytEmbed(selected.youtubeId)} title={selected.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                ) : (
                  <>
                    <img src={ytThumb(selected.youtubeId)} alt={selected.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40" />
                    <button onClick={() => setVideoPlaying(true)} className="absolute inset-0 flex flex-col items-center justify-center gap-3 group">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/50 group-hover:scale-110 transition-transform duration-200"><Play className="w-7 h-7 text-white fill-white ml-1" /></div>
                      <span className="text-white/80 text-sm font-semibold bg-black/40 backdrop-blur px-3 py-1 rounded-full">Watch Performance</span>
                    </button>
                  </>
                )
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center"><span className="text-8xl">{getEmoji(selected.instrument)}</span></div>
              )}
            </div>
            <div className="px-6 pb-8 pt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">{selected.category}</span>
              <h2 className="text-2xl font-extrabold text-foreground mt-1">{selected.name}</h2>
              <p className="text-muted-foreground text-sm">{selected.instrument}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {selected.age && <span className="flex items-center gap-1 text-[11px] bg-secondary border border-border rounded-full px-3 py-1 text-muted-foreground"><User className="w-3 h-3" /> Age {selected.age}</span>}
                {selected.since && <span className="flex items-center gap-1 text-[11px] bg-secondary border border-border rounded-full px-3 py-1 text-muted-foreground"><Calendar className="w-3 h-3" /> Since {selected.since}</span>}
                {selected.level && <span className="flex items-center gap-1 text-[11px] bg-secondary border border-border rounded-full px-3 py-1 text-muted-foreground"><Award className="w-3 h-3" /> {selected.level}</span>}
                {selected.song && <span className="flex items-center gap-1 text-[11px] bg-primary/10 border border-primary/20 rounded-full px-3 py-1 text-primary"><Music className="w-3 h-3" /> {selected.song}{selected.originalArtist && ` — ${selected.originalArtist}`}</span>}
              </div>
              {selected.teacher && <p className="mt-4 text-xs text-muted-foreground"><span className="font-semibold text-foreground/60">Teacher: </span>{selected.teacher}</p>}
              <p className="mt-5 text-sm text-foreground/70 leading-relaxed">{selected.bio}</p>
              {selected.teacherQuote && (
                <div className="mt-6 bg-secondary border-l-2 border-primary rounded-r-xl px-4 py-4">
                  <p className="text-sm text-foreground/70 italic leading-relaxed">{selected.teacherQuote}</p>
                  {selected.teacherQuoteName && <p className="text-xs text-primary font-semibold mt-2">— {selected.teacherQuoteName}</p>}
                </div>
              )}
              <div className="mt-6 flex flex-wrap gap-3">
                {selected.youtubeId && !videoPlaying && <button onClick={() => setVideoPlaying(true)} className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#c40812] transition-colors shadow-lg shadow-primary/20"><Play className="w-4 h-4 fill-white" /> Play Video</button>}
                {selected.youtubeChannel && <a href={selected.youtubeChannel} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-border transition-colors">▶ YouTube</a>}
                {selected.instagram && <a href={`https://instagram.com/${selected.instagram}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary text-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-border transition-colors">📸 Instagram</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentShowcase;
