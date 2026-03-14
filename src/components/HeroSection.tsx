import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const heroImages = [
  "/homepage_banners/banner_1.png",
  "/homepage_banners/banner_2.png",
  "/homepage_banners/banner_3.png",
  "/homepage_banners/banner_4.png",
];

const HeroSection = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-background overflow-hidden min-h-[600px] flex items-center">
      {/* Background Slideshow */}
      {heroImages.map((src, idx) => (
        <div 
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentImageIdx ? "opacity-30" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div className="container relative mx-auto px-4 py-16 lg:py-24 flex flex-col items-start gap-10 z-10">
        <div className="max-w-2xl space-y-6">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase inline-block bg-primary/10 px-3 py-1 rounded-full">
            Pune's Premier Music Academy
          </p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-foreground drop-shadow-sm">
            Learn and Live
            <br />
            <span className="text-primary">Music</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
            Muziclub provides Online Music Classes and Academy Classes in Guitar, Keyboard, Indian &amp; Western Vocals, Music Theory and Other Instruments from Qualified Teachers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-md px-8 h-12">
              Online Classes Enquiry
            </Button>
            <Button size="lg" variant="outline" className="border-foreground/20 text-foreground hover:bg-foreground/5 text-md px-8 h-12 backdrop-blur-sm">
              Academy Classes Enquiry
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
