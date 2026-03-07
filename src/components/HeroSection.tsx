import { Button } from "@/components/ui/button";
import heroPiano from "@/assets/hero-piano.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Pune's Premier Music Academy</p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Learn and Live
            <br />
            <span className="text-primary">Music</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-md">
            Muziclub provides Online Music Classes and Academy Classes in Guitar, Keyboard, Indian &amp; Western Vocals, Music Theory and Other Instruments from Qualified Teachers. 14,000+ students and growing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Online Classes Enquiry
            </Button>
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Academy Classes Enquiry
            </Button>
          </div>
          <div className="flex gap-6 pt-2">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">14,000+</p>
              <p className="text-xs text-muted-foreground">Students</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">3+</p>
              <p className="text-xs text-muted-foreground">Locations</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">4.8 ⭐</p>
              <p className="text-xs text-muted-foreground">Google Rating</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src={heroPiano}
            alt="Muziclub student playing piano"
            className="rounded-2xl w-full max-w-lg mx-auto object-cover shadow-2xl"
          />
          <div className="absolute bottom-4 right-4 flex gap-2 flex-wrap justify-end">
            {["TRINITY", "ABRSM", "RSL", "G.M.V."].map((cert) => (
              <span key={cert} className="bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
