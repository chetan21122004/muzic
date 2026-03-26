import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { showcaseStudents, showcaseCategories, ShowcaseCategory } from "@/data/studentShowcase";
import { X, Music, User, Calendar, Award, Play, Youtube } from "lucide-react";

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
  const [visibleCount, setVisibleCount] = useState(20);

  const filtered = activeCategory === "All" ? showcaseStudents : showcaseStudents.filter((s) => s.category === activeCategory);
  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const openModal = (student: (typeof showcaseStudents)[0]) => { setSelected(student); setVideoPlaying(false); };
  const closeModal = () => { setSelected(null); setVideoPlaying(false); };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative py-4 overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/visuals/5.png')" }}>
        <div className="absolute inset-0 bg-secondary/95 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4 border border-primary/20">🎶 Talent & Performances</span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-5 leading-tight">Student <span className="text-primary">Performances</span></h1>
              <p className="text-muted-foreground max-w-2xl mx-auto md:mx-0 text-base leading-relaxed">Our students don't just learn music — they live it. Watch real performances from Sunday Jams, live events, and personal cover videos.</p>
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-2 text-sm text-muted-foreground">
                <span className="bg-background border border-border rounded-full px-3 py-1 shadow-sm font-medium">🎓 {showcaseStudents.filter(s => !["Band Performance", "Faculty Band"].includes(s.category)).length} Students</span>
                <span className="bg-background border border-border rounded-full px-3 py-1 shadow-sm font-medium">▶ {showcaseStudents.filter(s => s.youtubeId).length} Videos</span>
                <span className="bg-background border border-border rounded-full px-3 py-1 shadow-sm font-medium">🎶 {showcaseStudents.filter(s => s.category === "Band Performance").length} Bands</span>
              </div>
            </div>
            <div className="flex-1 flex justify-center w-full max-w-[320px] relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
              <img src="/illustrations/Mic drop-rafiki.svg" alt="Sunday Jams Performance" loading="lazy" decoding="async" className="w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500 hover:-translate-y-2" />
            </div>
          </div>
        </div>
      </section>

      {/* YT Channels Banner */}
      <section className="bg-gradient-to-r from-[#110103] via-red-900 to-red-400 border-y border-white/5 py-4 relative z-30 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Youtube className="w-8 h-8 text-[#ff0000] drop-shadow-md lg:w-9 lg:h-9" />
            <div>
              <h3 className="text-white font-bold text-[13px] lg:text-[15px] leading-tight mb-0.5">Subscribe to our YouTube Channels</h3>
              <p className="text-white/60 text-[10px] lg:text-[11px] uppercase tracking-wider font-semibold">Performances • Sunday Jams • Tutorials</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto overflow-x-auto pb-1 sm:pb-0 scrollbar-hide snap-x">
            <a href="https://www.youtube.com/@themuziclub" target="_blank" rel="noreferrer" className="shrink-0 snap-start flex items-center justify-center gap-2 bg-white text-primary px-4 py-2 rounded-full text-[11px] lg:text-xs font-bold hover:bg-gray-100 transition-colors shadow-lg">The Muziclub Official</a>
            <a href="https://www.youtube.com/@muziclubpimplesaudagar" target="_blank" rel="noreferrer" className="shrink-0 snap-start flex items-center justify-center gap-2 bg-black/40 backdrop-blur-md text-white border border-white/10 px-4 py-2 rounded-full text-[11px] lg:text-xs font-bold hover:bg-black/60 transition-colors shadow-lg">Muziclub Pimple Saudagar</a>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[56px] z-40 backdrop-blur border-b border-border py-3 bg-background/90">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {showcaseCategories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => { setActiveCategory(cat as ShowcaseCategory); setVisibleCount(20); }} 
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 border ${activeCategory === cat ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/30" : "border-border text-muted-foreground hover:border-primary/30 hover:text-primary"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-6 lg:py-14 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 lg:gap-5">
            {displayed.map((student) => (
              <button key={student.id} onClick={() => openModal(student)} className="group border border-border lg:border-border/80 rounded-[1.25rem] lg:rounded-2xl overflow-hidden hover:border-primary/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 text-left bg-background flex flex-row lg:flex-col items-stretch h-32 sm:h-36 lg:h-auto">
                <div className="relative w-[40%] sm:w-[45%] lg:w-full h-full lg:h-auto lg:aspect-video shrink-0 bg-secondary overflow-hidden border-r lg:border-r-0 border-border/50 lg:border-transparent">
                  {student.youtubeId ? (
                    <>
                      <img src={ytThumb(student.youtubeId)} alt={student.name} loading="lazy" decoding="async" className="absolute lg:static inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 lg:w-12 lg:h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform duration-200">
                          <Play className="w-3.5 h-3.5 lg:w-5 lg:h-5 text-white fill-white ml-0.5" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-secondary flex items-center justify-center">
                      <span className="text-4xl lg:text-7xl filter drop-shadow-lg group-hover:scale-110 transition-transform duration-300">{getEmoji(student.instrument)}</span>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 text-[8px] lg:text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-white/90 backdrop-blur border border-border text-primary">{student.category}</span>
                </div>
                <div className="p-3 lg:p-4 flex flex-col flex-1 justify-center lg:justify-start overflow-hidden">
                  <p className="font-extrabold text-foreground text-[14px] lg:text-sm leading-snug line-clamp-1 lg:line-clamp-none">{student.name}</p>
                  <p className="text-[11px] lg:text-xs font-semibold mt-0.5 text-primary">{student.instrument}</p>
                  {student.teacher && <p className="text-[10px] lg:text-[11px] text-muted-foreground mt-0.5 lg:mt-1 truncate">👨‍🏫 {student.teacher}</p>}
                  <p className="text-[11px] lg:text-xs text-muted-foreground mt-1.5 lg:mt-2 leading-snug lg:leading-relaxed line-clamp-2">{student.tagline}</p>
                  {student.song && (
                    <div className="mt-1.5 lg:mt-2 flex items-center gap-1.5 text-[9px] lg:text-[10px] text-muted-foreground/60 shrink-0 overflow-hidden">
                      <Music className="w-2.5 h-2.5 lg:w-3 lg:h-3 shrink-0" /><span className="truncate">{student.song}</span>
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {hasMore && (
            <div className="mt-12 text-center">
              <button 
                onClick={() => setVisibleCount(prev => prev + 20)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-secondary border border-border text-foreground font-bold hover:bg-border transition-all shadow-sm"
              >
                Load More Performances
              </button>
            </div>
          )}

          {filtered.length === 0 && <p className="text-center text-muted-foreground py-20 text-[13px] lg:text-sm">No showcases in this category yet.</p>}
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
