import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { galleryImages } from "@/data/galleryImages";

const INITIAL_BATCH_SIZE = 24;
const LOAD_MORE_BATCH_SIZE = 16;

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_BATCH_SIZE);
  const visibleImages = useMemo(
    () => galleryImages.slice(0, Math.min(visibleCount, galleryImages.length)),
    [visibleCount]
  );
  const hasMore = visibleCount < galleryImages.length;

  return (
    <div className="min-h-screen bg-background font-secondary text-foreground">
      <Navbar />
      <section className="py-10 md:py-14 border-b border-border bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h1 className="font-core text-3xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            Moments from our academies and performances. Images are served at responsive sizes with lazy loading for speed.
          </p>
        </div>
      </section>
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {visibleImages.map((img, i) => (
              <li key={`${img.src}-${i}`} className="aspect-square rounded-xl overflow-hidden border border-border bg-secondary">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </li>
            ))}
          </ul>
          {hasMore && (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => Math.min(prev + LOAD_MORE_BATCH_SIZE, galleryImages.length))}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                Load More Photos
              </button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Gallery;
