import { MapPin, Globe, Users, Trophy, Music, Calendar, Star, CheckCircle2 } from "lucide-react";
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

const stats = [
  { value: "10,000+", label: "Students Taught", icon: Users },
  { value: "50+", label: "Expert Instructors", icon: Trophy },
  { value: "14+", label: "Years of Excellence", icon: Calendar },
  { value: "4.8/5", label: "Average Rating", icon: Star },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <img src="/visuals/4.png" alt="Music background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 drop-shadow-md">Our Journey</p>
          <h1 className="font-playfair text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            We are all about <span className="text-primary">Living Music.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Founded on quality and structured education, Muziclub is India's premier platform driven by people who live music and have a passion to share it with the world.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-20 -mt-12 mb-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-background rounded-3xl shadow-2xl shadow-black/5 border border-border p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
              {stats.map((stat, i) => (
                <div key={i} className="text-center px-4">
                  <stat.icon className="w-6 h-6 mx-auto text-primary mb-4 opacity-80" />
                  <h3 className="text-3xl lg:text-4xl font-black text-foreground mb-2">{stat.value}</h3>
                  <p className="text-xs uppercase tracking-[0.15em] font-bold text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">
                <Music className="w-3.5 h-3.5" /> Core Philosophy
              </div>
              <h2 className="font-playfair text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                The perfect balance of <span className="text-primary border-b-4 border-primary/20">discipline and flexibility.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
                <p>
                  Muziclub is a platform driven by people who live music and have a passion to develop the same with whoever they touch. Our model ensures that students receive structured, high-quality music education without losing the joy of the art.
                </p>
                <p>
                  Our classes provide personalized focus, premium practice facilities, and fulfilling engagement with passionate teachers. We firmly believe that learning without performing does not go far.
                </p>
                <p>
                  That's why we provide an exclusive opportunity for all our students to perform live on stage every single week in our legendary <strong>Sunday Jams</strong>.
                </p>
              </div>
              
              <div className="pt-6 grid sm:grid-cols-2 gap-4">
                {[
                  "Certified Training Programs",
                  "Weekly Live Performances",
                  "Expert Passionate Teachers",
                  "Premium Facilities"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-semibold text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 relative w-full">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-lg mx-auto relative group flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80" alt="Live Music" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <h3 className="font-playfair text-3xl font-bold text-white mb-2">Sunday Jams.</h3>
                  <p className="text-white/80 text-sm">Every week, our students take the stage.</p>
                </div>
              </div>
              
              {/* Floating Element */}
              <div className="absolute -bottom-10 -left-10 bg-background p-6 rounded-3xl shadow-xl hidden lg:block border border-border z-10 transition-transform duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Global Presence</p>
                    <p className="text-xs text-muted-foreground mt-1">Pune, India & Croydon, UK</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations & Ratings */}
      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Our Centers</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-extrabold text-foreground mb-16">
            Find Your Nearest Muziclub
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { 
                name: "Baner Centre", 
                address: "Near Orchid School, Baner, Pune, Maharashtra 411045", 
                rating: "4.8", 
                count: "345+",
                img: "/homepage_banners/banner_2.png"
              },
              { 
                name: "Pimple Saudagar Centre", 
                address: "Spot 18 Mall Lane, Pimple Saudagar, Pune, Maharashtra 411027", 
                rating: "4.8", 
                count: "183+",
                img: "/banner/banner-3.jpg"
              },
              { 
                name: "Hinjawadi Centre", 
                address: "Phase 1 Rd, Hinjawadi Rajiv Gandhi Infotech Park, Pune, Maharashtra 411057", 
                rating: "4.7", 
                count: "95+",
                img: "/banner/banner-4.jpg" 
              },
              { 
                name: "Kothrud Centre", 
                address: "Near City Pride, Kothrud, Pune, Maharashtra 411038", 
                rating: "4.9", 
                count: "120+",
                img: "/banner/banner-5.jpg"
              }
            ].map((r, i) => (
              <div key={i} className="bg-secondary rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-300 border border-border hover:border-primary/20 flex flex-col group">
                <div className="relative h-60 overflow-hidden">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }} />
                  <div className="absolute top-4 right-4 bg-background/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg border border-border">
                    <span className="font-bold text-foreground text-sm">{r.rating}</span>
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider ml-1">({r.count})</span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h4 className="font-bold text-2xl text-foreground mb-4">{r.name}</h4>
                  <div className="flex items-start gap-3 mb-8 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm leading-relaxed">{r.address}</p>
                  </div>
                  <a href="#" className="mt-auto inline-flex items-center justify-center w-full bg-background border-2 border-primary text-primary font-bold py-3.5 rounded-xl hover:bg-primary hover:text-primary-foreground transition-colors">
                    Get Directions
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-24 bg-secondary text-foreground border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">The Experts</p>
              <h2 className="font-playfair text-4xl md:text-5xl font-extrabold leading-tight">
                Meet the minds behind the music.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Our faculty comprises highly qualified and deeply passionate musicians committed entirely to your musical growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((t, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-5 shadow-sm border border-border">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h4 className="font-bold text-sm text-foreground">{t.name}</h4>
                <p className="text-primary text-[10px] font-bold uppercase tracking-wider mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
