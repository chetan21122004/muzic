import { MapPin, Phone, Clock, Mail, ArrowRight, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CountUp } from "@/components/CountUp";

const centres = [
  { name: "Baner", tagline: "Head Office & Academy", badge: "HEAD OFFICE", address: "Office 11 & 12, Aditi Commerce, Baner Road, Opp. Hillview Residency, Pune – 411045", landmark: "Above Bikaner Sweets", phone: "+91 91563 03400", altPhone: null as string | null, email: "enquiries@muziclub.com", hours: "Daily: 10 AM – 8 PM", rating: "4.8", reviews: "360+", mapUrl: "https://maps.google.com/?q=Muziclub+Baner+Aditi+Commerce+Baner+Road+Pune", img: "/new_imgs/Copy of DSC00403.webp" },
  { name: "Pimple Saudagar", tagline: "Flagship Academy", badge: "FLAGSHIP", address: "2nd Floor, Radhika Avenue, near Jagtap Dairy, beside Savitribai Phule Park, Pune – 411057", landmark: "Near Savitribai Phule Park", phone: "+91 77699 87599", altPhone: "+91 75070 02008", email: "mzps1319@gmail.com", hours: "Daily: 11 AM – 8 PM", rating: "4.9", reviews: "544+", mapUrl: "https://maps.google.com/?q=Muziclub+Pimple+Saudagar+Radhika+Avenue+Pune", img: "/new_imgs/Copy of DSC00590.webp" },
  { name: "Wakad Office", tagline: "Flagship Academy", badge: "FLAGSHIP", address: "Spirea, S. 91/4, Bhumkar Das Gugre Rd, near Silver Spoon, Bhumkar Nagar, Wakad, Pune – 411033", landmark: "Near Silver Spoon, Bhumkar Nagar", phone: "+91 80805 87033", altPhone: "+91 75078 10055", email: "mzspirea@gmail.com", hours: "Daily: 11 AM – 8 PM", rating: "4.9", reviews: "430+", mapUrl: "https://maps.google.com/?q=Muziclub+Wakad+Spirea+Bhumkar+Das+Gugre+Rd+Pune", img: "/new_imgs/Copy of DSC00677 (1).webp" },
  { name: "Croydon, UK", tagline: "UK Coordination Centre", badge: "UK CENTRE", address: "Croydon, London, United Kingdom – CR0 5RR", landmark: "South London — Online Coordination & UK Classes", phone: "+44 7424 233 605", altPhone: "+44 203 769 0013", email: "uk@muziclub.com", hours: "Mon – Sat: 10 AM – 8 PM (IST online)", rating: null as string | null, reviews: null as string | null, mapUrl: "https://maps.google.com/?q=Croydon+London+CR0+5RR+UK", img: "/new_imgs/Copy of DSC00711 (1).webp" },
];

const facilities = [
  { icon: "🎸", title: "Practice Rooms", desc: "Dedicated soundproofed practice rooms at every Pune centre" },
  { icon: "🥁", title: "Drum Kits", desc: "Full acoustic and electronic drum kits for all practice sessions" },
  { icon: "🎹", title: "Keyboards & Pianos", desc: "Professional-grade keyboards and upright pianos" },
  { icon: "🎤", title: "Vocal Studio", desc: "Dedicated vocal rooms with proper acoustic treatment" },
  { icon: "🎵", title: "Sunday Jam Stage", desc: "Live stage with PA system for weekly Sunday Jam performances" },
  { icon: "☕", title: "Lounge Area", desc: "Comfortable waiting area for parents and students" },
];

const stats = [
  { value: "25,000+", num: 25000, suffix: "+", label: "Students Taught" },
  { value: "75+", num: 75, suffix: "+", label: "Teachers" },
  { value: "16+", num: 16, suffix: "+", label: "Years Experience" },
  { value: "4.9", num: 4.9, suffix: "", decimals: 1, label: "Google Rating", isRating: true },
];

const Center = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />



      {/* Online Banner */}
      <section className="py-6 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-lg shrink-0">💻</div>
              <div>
                <p className="font-bold text-foreground text-sm">Can't visit in person? Learn Online!</p>
                <p className="text-xs text-muted-foreground mt-0.5">All courses available as live 1-on-1 online classes — UK, USA & worldwide.</p>
              </div>
            </div>
            <Link to="/online-programs" className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#c40812] transition-colors shadow-lg shadow-primary/20">
              Explore Online Classes <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Centres Grid */}
      <section className="py-10 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.22em] mb-3">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Centres</h2>
            <p className="text-muted-foreground text-sm mt-2">Walk in for a free trial class — appointment needed</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {centres.map((c) => (
              <div key={c.name} className="group relative rounded-3xl overflow-hidden border border-border hover:border-primary/25 hover:shadow-xl transition-all duration-500 bg-background">
                <div className="relative h-52 overflow-hidden">
                  <img src={c.img} alt={`Muziclub ${c.name}`} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }} />
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
                    <h3 className="text-xl font-extrabold text-foreground">Muziclub — {c.name}</h3>
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
                    <Link to="/contact" className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-xs font-bold py-2.5 rounded-full hover:bg-[#c40812] transition-all shadow-lg shadow-primary/20">
                      Walk-in Free Trial
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-10 border-b border-border bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.22em] mb-3">Our Impact</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Muziclub by the Numbers</h2>
            <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
              Over a decade of spreading the joy of music through passionate teaching and a thriving community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <div key={s.label} className="group relative p-6 rounded-3xl bg-secondary/50 border border-border flex flex-col items-center justify-center text-center overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-500">
                <div className="relative z-10 flex flex-col items-center">
                  <p className="text-4xl font-extrabold text-foreground mb-2 group-hover:scale-110 transition-transform duration-500">
                    {s.num !== undefined
                      ? <CountUp end={s.num} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} />
                      : s.value
                    }
                  </p>
                  {s.isRating && (
                    <div className="flex items-center gap-1 mb-2">
                      <svg viewBox="0 0 24 24" className="w-5 h-5 mr-1 drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <div className="relative inline-block text-[#E0E0E0] text-[18px] tracking-[0.02em]">
                        <span className="opacity-30">★★★★★</span>
                        <div className="absolute top-0 left-0 overflow-hidden text-[#FABB05] w-[95%] whitespace-nowrap">
                          ★★★★★
                        </div>
                      </div>
                    </div>
                  )}
                  <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold mt-1">{s.label}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 border-y border-border bg-secondary">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.22em] mb-3">What's Inside</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">World-Class Facilities</h2>
            <p className="text-muted-foreground text-sm mt-2">Everything you need to learn, practise, and perform at the highest level</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((f, i) => (
              <div key={i} className="group rounded-2xl p-5 border border-border text-center bg-background hover:border-primary/25 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <p className="text-sm font-bold text-foreground leading-snug mb-1.5">{f.title}</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className=" py-4 bg-background overflow-hidden border-t border-border">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.22em] mb-4">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Ready to Walk In?</h2>
            <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto md:mx-0 leading-relaxed">Book a free trial and visit our nearest centre. Our doors are open — your music journey begins today.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:bg-[#c40812] transition-all shadow-xl shadow-primary/25">
                Walk-in Free Trial
              </Link>
              <Link to="/online-programs" className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground font-semibold px-8 py-3.5 rounded-full hover:border-primary/50 hover:text-primary transition-colors bg-secondary">
                Explore Online Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center w-full max-w-md relative">
            <img src="/illustrations/Location tracking-amico.svg" alt="Find Muziclub Centers" loading="lazy" decoding="async" className="w-full h-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Center;
