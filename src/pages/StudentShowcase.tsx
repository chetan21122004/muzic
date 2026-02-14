import { useState } from "react";
import { Play, Music } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { showcaseItems, showcaseCategories } from "@/data/studentShowcase";

const StudentShowcase = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? showcaseItems
    : showcaseItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student <span className="text-primary">Showcase</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Watch our talented students perform, cover iconic tracks, and showcase their musical journey at Muziclub.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-2 mb-10">
          {showcaseCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.slug + i}
              className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/50 transition-colors"
            >
              <div className="relative aspect-video bg-secondary flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <Music className="w-10 h-10 text-muted-foreground/30" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="w-6 h-6 text-primary-foreground ml-0.5" />
                  </div>
                </div>
                <span className="absolute top-3 left-3 bg-primary/90 text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-5 space-y-2">
                <h3 className="text-foreground font-semibold text-sm leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3">
                  {item.description}
                </p>
                <button className="text-primary text-xs font-semibold hover:underline">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentShowcase;
