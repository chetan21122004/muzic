import { MapPin, Phone, Clock, Mail, ArrowRight, Star, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const centres = [
  { name: "Baner", tagline: "Head Office & Flagship Academy", badge: "HEAD OFFICE", address: "Office 11 & 12, Aditi Commerce, Baner Road, Opp. Hillview Residency, Pune – 411045", landmark: "Above Bikaner Sweets", phone: "+91 91563 03400", altPhone: null as string | null, email: "info@muziclub.com", hours: "Daily: 10 AM – 8 PM", rating: "4.8", reviews: "360+", mapUrl: "https://maps.google.com/?q=Muziclub+Baner+Aditi+Commerce+Baner+Road+Pune", img: "/new_imgs/Copy of DSC00403.webp" },
  { name: "Pimple Saudagar", tagline: "Music Academy", badge: "ACADEMY", address: "2nd Floor, Radhika Avenue, near Jagtap Dairy, beside Savitribai Phule Park, Pune – 411057", landmark: "Opposite McDonald's", phone: "+91 75070 02008", altPhone: "+91 77699 87599", email: "ps@muziclub.com", hours: "Daily: 11 AM – 8 PM", rating: "4.9", reviews: "544+", mapUrl: "https://maps.google.com/?q=Muziclub+Pimple+Saudagar+Radhika+Avenue+Pune", img: "/new_imgs/Copy of DSC00590.webp" },
  { name: "Wakad / Hinjawadi", tagline: "Music Academy", badge: "ACADEMY", address: "Spirea, S. 91/4, Bhumkar Das Gugre Rd, near Silver Spoon, Bhumkar Nagar, Wakad, Pune – 411033", landmark: "Near Silver Spoon, Bhumkar Nagar", phone: "+91 80805 87033", altPhone: "+91 75078 10055", email: "wakad@muziclub.com", hours: "Daily: 11 AM – 8 PM", rating: "4.9", reviews: "430+", mapUrl: "https://maps.google.com/?q=Muziclub+Wakad+Spirea+Bhumkar+Das+Gugre+Rd+Pune", img: "/new_imgs/Copy of DSC00677 (1).webp" },
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
  { value: "3", label: "Pune Centres" },
  { value: "1,300+", label: "Google Reviews" },
  { value: "4.9★", label: "Avg Rating" },
  { value: "14+", label: "Years of Excellence" },
];

const Center = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-24 border-b border-border bg-secondary">
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full mb-6">Our Locations</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-5 leading-[1.08]">
            Where Music<br /><span className="text-primary">Comes Alive</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed mb-12">
            Three world-class music academies in Pune and a coordination centre in London — find your nearest Muziclub.
          </p>
          <div className="inline-flex items-center gap-0 rounded-2xl border border-border bg-background overflow-hidden shadow-sm">
            {stats.map((s, i) => (
              <div key={s.label} className={`px-7 py-4 text-center ${i < stats.length - 1 ? "border-r border-border" : ""}`}>
                <p className="text-2xl font-extrabold text-foreground leading-none">{s.value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold mt-1.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.22em] mb-3">Find Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Academies</h2>
            <p className="text-muted-foreground text-sm mt-2">Walk in for a free trial class — no appointment needed</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {centres.map((c) => (
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
                      Book Free Trial
                    </Link>
                  </div>
                </div>
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
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-primary text-[10px] font-extrabold uppercase tracking-[0.22em] mb-4">Get Started</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">Ready to Walk In?</h2>
          <p className="text-muted-foreground text-sm mb-8 max-w-md mx-auto">Book a free trial and visit our nearest centre. Our doors are open — your music journey begins today.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:bg-[#c40812] transition-all shadow-xl shadow-primary/25">
              Book Free Trial Class
            </Link>
            <Link to="/online-programs" className="inline-flex items-center justify-center gap-2 border border-border text-muted-foreground font-semibold px-8 py-3.5 rounded-full hover:border-primary/50 hover:text-primary transition-colors">
              Explore Online Courses <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Center;
