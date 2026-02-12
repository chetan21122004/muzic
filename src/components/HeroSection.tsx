import { Button } from "@/components/ui/button";
import heroPiano from "@/assets/hero-piano.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Certified Music Courses
            <br />
            <span className="text-foreground">with Graded Levels</span>
          </h1>
          <p className="text-muted-foreground text-base max-w-md">
            Prepare yourself and your children in line with globally recognised music exams and certifications.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" className="border-foreground text-foreground hover:bg-foreground/10">
              Learn More
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Book a Free Trial
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src={heroPiano}
            alt="Person playing piano"
            className="rounded-2xl w-full max-w-lg mx-auto object-cover shadow-2xl"
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            {["TRINITY", "ABRSM", "RSL"].map((cert) => (
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
