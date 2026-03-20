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

const ratings = [
  { location: "Baner, Pune", rating: "4.8", count: "345+" },
  { location: "Pimple Saudagar, Pune", rating: "4.8", count: "183+" },
  { location: "Hinjawadi, Pune", rating: "4.7", count: "95+" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen" style={{ background: "#0a0a0d" }}>
      <Navbar />

      {/* Hero */}
      <section className="py-16 border-b border-white/5" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            About <span className="text-primary">Muziclub</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            Learn and Live Music — India's leading music academy offering certified classes in vocals, guitar, keyboard, drums, and more.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16" style={{ background: "#0a0a0d" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-14">
            <div className="flex-1 space-y-5">
              <h2 className="text-3xl font-extrabold text-white">Our Story</h2>
              <p className="text-white/50 leading-relaxed text-sm">
                Muziclub is a platform driven by people who live music and have a passion to develop the same with whoever they touch. Muziclub academy is founded on quality and structured music education. Our model has the right balance of discipline and flexibility that is needed to learn music.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Our classes are designed to provide personalized focus, practice facilities, and fulfilling engagement with passionate teachers. Learning without performing does not go far — so we provide an opportunity to all students to perform every week in Sunday Jam. Our teaching methods are continuously improving so that we can provide the best experience and results for students.
              </p>
              <p className="text-white/50 leading-relaxed text-sm">
                Muziclub is all about living music — making music a part of your life. Our motto 'Live Music' drives all service offerings including music classes at academy centres or online, arranging music shows and workshops, corporate seminars, or simply chilling out over a nice groove at jam sessions.
              </p>
              <p className="text-white/50 leading-relaxed text-sm">
                We are based at Pune, India with presence in Croydon, UK for effective coordination of online music classes in London and the rest of UK.
              </p>
            </div>
            <div className="flex-1 w-full">
              <div className="rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3]">
                <img
                  src="/homepage_banners/banner_1.png"
                  alt="Muziclub Academy"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_3.png"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Ratings Strip */}
      <section className="bg-[#f7f7f9] py-10 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Google Reviews</p>
              <h3 className="text-xl font-extrabold text-gray-900">Highly Rated Across Pune</h3>
            </div>
            <div className="flex gap-8">
              {ratings.map((r) => (
                <div key={r.location} className="text-center">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary" />
                    <p className="text-xs text-gray-500 font-medium">{r.location}</p>
                  </div>
                  <p className="text-2xl font-extrabold text-gray-900 mt-1">{r.rating} ⭐</p>
                  <p className="text-[10px] text-gray-400">({r.count} reviews)</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">The Team</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Meet Our Faculty</h2>
            <p className="text-gray-400 text-sm mt-2">Qualified, passionate teachers committed to your musical growth</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((t) => (
              <div key={t.name} className="text-center group">
                <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gray-100 mb-3 border border-gray-100 group-hover:shadow-lg transition-shadow">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                <p className="text-xs text-primary font-medium mt-0.5">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 border-t border-white/5" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Ready to Start?</h2>
          <p className="text-white/40 text-sm mb-6">Book a free 1-on-1 trial class with our expert teachers today.</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-rose-600 text-white font-bold px-8 py-3.5 rounded-full hover:from-rose-600 hover:to-primary transition-all shadow-lg shadow-primary/20 glow-red"
          >
            Book Free Trial Class
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
