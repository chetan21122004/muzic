import { MapPin, Globe, Users, Trophy, Music, Calendar, Star, CheckCircle2, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CountUp } from "@/components/CountUp";

const team = [
  { img: "/instructor/Neelima-Hindustani_Vocals.webp", name: "Neelima", role: "Hindustani Vocals Faculty" },
];

const stats = [
  { num: 25000, decimals: 0, showPlus: true, label: "Students Taught", icon: Users },
  { num: 75, decimals: 0, showPlus: true, label: "Expert Instructors", icon: Trophy },
  { num: 16, decimals: 0, showPlus: true, label: "Years of Excellence", icon: Calendar },
  { num: 4.9, decimals: 1, showPlus: false, label: "Google Rating", isGoogle: true },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background font-secondary text-foreground selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 opacity-40">
          <img src="/visuals/4.png" alt="Music background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <p className="text-primary font-bold tracking-[0.3em] text-xs uppercase mb-6 drop-shadow-md">Our Journey</p>
          <h1 className="font-core text-5xl md:text-7xl font-extrabold mb-8 leading-tight">
            We are all about <span className="text-primary">Living Music.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
            Founded on quality and structured education, <span className="font-core">muziclub</span> is India's premier platform driven by people who live music and have a passion to share it with the world.
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
                  {stat.isGoogle ? (
                    <>
                      <div className="flex items-center justify-center gap-1.5 lg:gap-2.5 mb-1.5 lg:mb-2">
                        <div className="bg-background p-1 lg:p-1.5 rounded-full shadow-sm border border-border flex items-center justify-center shrink-0">
                          <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                          </svg>
                        </div>
                        <div className="text-[28px] sm:text-[34px] lg:text-[42px] font-black text-foreground leading-none tracking-tighter">
                          <CountUp end={stat.num} decimals={stat.decimals} />
                        </div>
                      </div>
                      <div className="font-secondary text-[9px] sm:text-[10px] lg:text-[11px] text-muted-foreground font-black uppercase tracking-[0.2em] flex flex-col items-center gap-0.5 lg:gap-1 leading-tight">
                        Google Rating
                        <div className="relative inline-block text-[#E0E0E0] text-[8px] lg:text-[10px] tracking-widest mt-0.5">
                          <span className="opacity-30">★★★★★</span>
                          <div className="absolute top-0 left-0 overflow-hidden text-[#FABB05] w-[95%] whitespace-nowrap">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <stat.icon className="w-6 h-6 mx-auto text-primary mb-3 opacity-80" />
                      <div className="text-[32px] sm:text-[34px] lg:text-[42px] font-black text-foreground leading-none mb-1.5 lg:mb-2 tracking-tighter flex items-center justify-center gap-0">
                        <CountUp end={stat.num} decimals={stat.decimals} />
                        {stat.showPlus && <span className="text-[#e31837]">+</span>}
                      </div>
                      <p className="font-secondary text-[9px] sm:text-[10px] lg:text-[11px] text-muted-foreground font-black uppercase tracking-[0.2em] leading-tight">
                        {stat.label === "Years of Excellence" ? (
                          <>
                            Years
                            <br className="lg:hidden" /> of Excellence
                          </>
                        ) : (
                          stat.label
                        )}
                      </p>
                    </>
                  )}
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
              <h2 className="font-core text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
                The perfect balance of <span className="text-primary border-b-4 border-primary/20">discipline and flexibility.</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-light">
                <p>
                  <span className="font-core">muziclub</span> is a platform driven by people who live music and have a passion to develop the same with whoever they touch. Our model ensures that students receive structured, high-quality music education without losing the joy of the art.
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

            <div className="flex-1 relative w-full h-[550px] lg:h-[650px] max-w-xl mx-auto">
              <div className="grid grid-cols-12 grid-rows-6 gap-3 h-full">
                {/* Image 1: Top Left Large */}
                <div className="col-span-7 row-span-4 relative rounded-[2rem] overflow-hidden group shadow-lg">
                  <img src="/new_imgs/Copy of DSC00298 (1).webp" alt="Live Band Performance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                    <h3 className="font-core text-2xl font-bold mb-1 shadow-black/50 drop-shadow-lg">Sunday Jams</h3>
                    <p className="text-white/90 text-sm drop-shadow-md">Every week, our students take the stage.</p>
                  </div>
                </div>
                {/* Image 2: Top Right Small */}
                <div className="col-span-5 row-span-2 relative rounded-[1.5rem] overflow-hidden group shadow-lg">
                  <img src="/new_imgs/DSC01210 (1).webp" alt="Performance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Image 3: Middle Right Small */}
                <div className="col-span-5 row-span-2 relative rounded-[1.5rem] overflow-hidden group shadow-lg">
                  <img src="/new_imgs/Copy of DSC00456 (1).webp" alt="Acoustic Performance" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Image 4: Bottom Left Small */}
                <div className="col-span-5 row-span-2 relative rounded-[1.5rem] overflow-hidden group shadow-lg">
                  <img src="/new_imgs/Copy of DSC00590.webp" alt="Student Showcase" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                {/* Image 5: Bottom Right Wide */}
                <div className="col-span-7 row-span-2 relative rounded-[1.5rem] overflow-hidden group shadow-lg">
                  <img src="/new_imgs/Copy of DSC00504.webp" alt="Stage Performance" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-background p-5 rounded-3xl shadow-2xl hidden lg:flex items-center gap-4 border border-border z-10 animate-in fade-in slide-in-from-bottom hover:-translate-y-2 transition-transform duration-500">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">Global Presence</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Pune, India & Croydon, UK</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-10 bg-background border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.22em] mb-3">Find Us</p>
            <h2 className="font-core text-3xl md:text-4xl font-extrabold text-foreground">Our Academies</h2>
            <p className="text-muted-foreground text-sm mt-2">Walk in for a free trial class :- appointment needed</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Baner", tagline: "Head Office & Academy", badge: "HEAD OFFICE", address: "Office 11 & 12, Aditi Commerce, Baner Road, Opp. Hillview Residency, Pune – 411045", landmark: "Above Bikaner Sweets", phone: "+91 91563 03400", altPhone: null, email: "enquiries@muziclub.com", hours: "Daily: 10 AM – 8 PM", rating: "4.8", reviews: "360+", mapUrl: "https://maps.google.com/?q=Muziclub+Baner+Aditi+Commerce+Baner+Road+Pune", img: "/new_imgs/Copy of DSC00403.webp" },
              { name: "Pimple Saudagar", tagline: "Flagship Academy", badge: "FLAGSHIP", address: "2nd Floor, Radhika Avenue, near Jagtap Dairy, beside Savitribai Phule Park, Pune – 411057", landmark: "Near Savitribai Phule Park", phone: "+91 77699 87599", altPhone: "+91 75070 02008", email: "mzps1319@gmail.com", hours: "Daily: 11 AM – 8 PM", rating: "4.9", reviews: "544+", mapUrl: "https://maps.google.com/?q=Muziclub+Pimple+Saudagar+Radhika+Avenue+Pune", img: "/new_imgs/Copy of DSC00590.webp" },
              { name: "Wakad Office", tagline: "Flagship Academy", badge: "FLAGSHIP", address: "Spirea, S. 91/4, Bhumkar Das Gugre Rd, near Silver Spoon, Bhumkar Nagar, Wakad, Pune – 411033", landmark: "Near Silver Spoon, Bhumkar Nagar", phone: "+91 80805 87033", altPhone: "+91 75078 10055", email: "mzspirea@gmail.com", hours: "Daily: 11 AM – 8 PM", rating: "4.9", reviews: "430+", mapUrl: "https://maps.google.com/?q=Muziclub+Wakad+Spirea+Bhumkar+Das+Gugre+Rd+Pune", img: "/new_imgs/Copy of DSC00677 (1).webp" },
              { name: "Croydon, UK", tagline: "UK Coordination Centre", badge: "UK CENTRE", address: "Croydon, London, United Kingdom – CR0 5RR", landmark: "South London — Online Coordination & UK Classes", phone: "+44 7424 233 605", altPhone: "+44 203 769 0013", email: "uk@muziclub.com", hours: "Mon – Sat: 10 AM – 8 PM (IST online)", rating: null, reviews: null, mapUrl: "https://maps.google.com/?q=Croydon+London+CR0+5RR+UK", img: "/new_imgs/Copy of DSC00711 (1).webp" },
            ].map((c) => (
              <div key={c.name} className="group relative rounded-3xl overflow-hidden border border-border hover:border-primary/25 hover:shadow-xl transition-all duration-500 bg-background">
                <div className="relative h-52 overflow-hidden">
                  <img src={c.img} alt={`Muziclub ${c.name}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-[9px] font-extrabold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full shadow-lg">{c.badge}</div>
                  {c.rating && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm border border-border rounded-xl px-3 py-1.5">
                      <Star className="w-3 h-3 text-primary fill-primary" />
                      <span className="text-foreground font-extrabold text-sm">{c.rating}</span>
                      <span className="text-muted-foreground text-[10px]">({c.reviews})</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">{c.tagline}</p>
                    <h3 className="text-xl font-extrabold text-foreground"><span className="font-core">muziclub</span> — {c.name}</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.address}</p>
                        {c.landmark && <p className="text-xs text-primary/70 mt-0.5 font-medium">{c.landmark}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                        <a href={`tel:${c.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c.phone}</a>
                        {c.altPhone && <a href={`tel:${c.altPhone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c.altPhone}</a>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href={`mailto:${c.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c.email}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{c.hours}</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href={c.mapUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 border border-border text-muted-foreground text-xs font-bold py-2.5 rounded-full hover:border-primary/50 hover:text-primary transition-all">
                      <ExternalLink className="w-3.5 h-3.5" /> Open in Maps
                    </a>
                    <Link to="/enquire" className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-bold py-2.5 rounded-full hover:bg-[#c40812] transition-all shadow-lg shadow-primary/20">
                      Walk-in Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-24 bg-secondary text-foreground border-y border-border">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">The Experts</p>
              <h2 className="font-core text-4xl md:text-5xl font-extrabold leading-tight">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default AboutUs;
