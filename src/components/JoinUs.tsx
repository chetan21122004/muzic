import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import serviceWorkshops from "@/assets/service-workshops-new.webp";

const JoinUs = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 space-y-5">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Love teaching music? Join the Muziclub Family!
          </h2>
          <p className="text-primary-foreground/80 text-sm">
            If you're passionate about teaching music, we'd love to have you on our team. Join our growing community of qualified and experienced music teachers and inspire students worldwide — online or at our Pune academies.
          </p>
          <div className="flex gap-3">
            <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Apply to Teach →
            </Button>
          </div>
        </div>
        <div className="flex-1 relative">
          <img src={serviceWorkshops} alt="Muziclub music workshops" className="rounded-xl w-full object-cover aspect-video" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-primary ml-0.5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
