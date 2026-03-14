import { MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const team = [
  { img: "/instructor/Subham Chand Sahu_Drums.webp", name: "Subham Chand Sahu", role: "Drums Faculty" },
  { img: "/instructor/Harsh-Bagle-guitar.webp", name: "Harsh Bagle", role: "Guitar Faculty" },
  { img: "/instructor/jeet_Goswami-piano.webp", name: "Jeet Goswami", role: "Piano Faculty" },
  { img: "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp", name: "Kshitij Kumar Choudhary", role: "Western Vocals Faculty" },
  { img: "/instructor/Neelima-Hindustani_Vocals.webp", name: "Neelima", role: "Hindustani Vocals Faculty" },
  { img: "/instructor/Neha-Sinha-indian_vocals.webp", name: "Neha Sinha", role: "Indian Vocals Faculty" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Muziclub</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Learn and Live Music — India's leading music academy offering certified classes in vocals, guitar, keyboard, drums, and more.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-14">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Muziclub is a platform driven by people who live music and have a passion to develop the same with whoever they touch. Muziclub academy is founded on quality and structured music education. Our model has the right balance of discipline and flexibility that is needed to learn music.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our classes are designed to provide personalized focus, practice facilities, and fulfilling engagement with passionate teachers. Learning without performing does not go far — so we provide an opportunity to all students to perform every week in Sunday Jam. Our teaching methods are continuously improving so that we can provide the best experience and results for students.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Muziclub is all about living music — making music a part of your life. We are committed to providing best-in-class music education and services around the world through our innovative and adaptive methods. Our motto 'Live Music' drives all service offerings including music classes at academy centres or online, arranging music shows and workshops, corporate seminars, or simply chilling out over a nice groove at jam sessions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are based at Pune, India with presence in Croydon, UK for effective coordination of online music classes in London and the rest of UK.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-card py-14 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Meet Our Faculty</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((t) => (
              <div key={t.name} className="flex items-center gap-4 bg-secondary p-4 rounded-2xl hover:bg-secondary/80 transition-colors border border-border/50 hover:border-border">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 bg-background">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-foreground font-semibold text-base">{t.name}</h4>
                  <p className="text-primary text-sm font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Start Your Musical Journey?</h2>
        <p className="text-muted-foreground mb-6">Book a free 1-on-1 trial class with our expert teachers today.</p>
        <button className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
          Book Free Trial Class
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
