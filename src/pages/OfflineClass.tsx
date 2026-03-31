import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MapPin, Star, Users, Award, ChevronDown, Music, Guitar } from "lucide-react";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";

/* ── Static Data ── */
const stats = [
  { icon: Users, value: "25,000+", num: 25000, suffix: "+", label: "Global Learners" },
  { icon: Award, value: "75+", num: 75, suffix: "+", label: "Certified Teachers" },
  { icon: Star, value: "4.9", num: 4.9, suffix: "", decimals: 1, label: "Google Rating", isGoogle: true },
];

const centres = [
  { name: "Muziclub Kothrud Centre", address: "Near City Pride, Kothrud, Pune", mapLink: "#" },
  { name: "Muziclub Baner Centre", address: "Near Orchid School, Baner, Pune", mapLink: "#" },
];

const galleryCategories = [
  {
    title: "Classrooms",
    images: [
      "/banner/banner-1.jpg",
      "/banner/banner-2.jpg",
      "/banner/banner-3.jpg",
      "/banner/banner-4.jpg",
    ],
  },
  {
    title: "Classes",
    images: [
      "/banner/banner-5.jpg",
      "/banner/banner-6.jpg",
      "/banner/banner-7.jpg",
      "/banner/banner-8.jpg",
    ],
  },
  {
    title: "Masterclass",
    images: [
      "/banner/banner-9.jpg",
      "/banner/banner-10.jpg",
      "/banner/banner-11.jpg",
      "/banner/banner-12.jpg",
    ],
  },
];

const certLogos = ["Trinity", "ABRSM", "RSL", "ABGMVM Mumbai"];

const vocalsLearnings = [
  "Bollywood Singing",
  "Indian Classical Vocal",
  "Western Vocal",
  "Karaoke Singing",
];

const instrumentLearnings = [
  "Guitar Acoustic",
  "Guitar Electric",
  "Guitar Bass",
  "Violin",
  "Harmonium",
  "Flute",
  "Keyboard",
  "Piano",
  "Ukulele",
];

const featuredIn = [
  "Pune Mirror",
  "Times of India",
  "Sakal Media",
  "Radio Mirchi",
];

const testimonials = [
  {
    name: "Aarav Kulkarni",
    location: "Kothrud",
    stars: 5,
    text: "The offline classes at Muziclub are amazing. My daughter has been learning piano for a year and the progress is incredible. The teachers are patient and very skilled.",
  },
  {
    name: "Priya Deshpande",
    location: "Baner",
    stars: 5,
    text: "I joined for Hindustani vocals and the structured graded curriculum really helped me improve. The practice rooms and the studio environment make it special.",
  },
  {
    name: "Rohan Mehta",
    location: "Pune",
    stars: 5,
    text: "My son started drums classes 6 months ago and already performed at the annual concert. The offline experience with real instruments is unmatched.",
  },
];

const OfflineClass = () => {
  const [learnTab, setLearnTab] = useState<"vocals" | "instruments">("vocals");

  return (
    <div className="min-h-screen bg-background font-secondary">
      <Navbar />

      {/* ═══ 1. HERO WITH FORM ═══ */}
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src="/visuals/6.png"
            alt="Muziclub Academy"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/95" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-12 md:py-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight mb-3">
              Learn Music Offline in Pune
            </h1>
            <p className="text-primary-foreground/80 text-sm md:text-base max-w-xl mx-auto mb-2">
              India's Premier Music Academy Offering Globally Recognised Certification Programmes
            </p>
            <p className="text-primary-foreground font-bold text-lg">
              Classes Starting at ₹125 per class
            </p>
          </div>

          {/* Booking Form */}
          <div className="max-w-2xl mx-auto bg-background rounded-2xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-foreground font-bold text-base mb-1">
              Book a visit to our Academy and take a{" "}
              <span className="text-primary">FREE Demo Class!</span>
            </h3>

            <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    What would you like to learn?
                  </label>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-1.5 text-sm text-foreground">
                      <input type="radio" name="type" defaultChecked className="accent-primary" />
                      Instrument
                    </label>
                    <label className="flex items-center gap-1.5 text-sm text-foreground">
                      <input type="radio" name="type" className="accent-primary" />
                      Vocal / Singing
                    </label>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">
                    When are you planning to visit?
                  </label>
                  <div className="relative">
                    <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground appearance-none">
                      <option>Within 1 Week</option>
                      <option>This Weekend</option>
                      <option>Next Month</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Learner's Age</label>
                  <div className="flex gap-2 flex-wrap">
                    {["5-8", "9-14", "15-18", "18-40", "40+"].map((age) => (
                      <label key={age} className="flex items-center gap-1 text-sm text-foreground">
                        <input type="radio" name="age" className="accent-primary" />
                        {age}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Student's Gender</label>
                  <div className="flex gap-3">
                    {["Male", "Female"].map((g) => (
                      <label key={g} className="flex items-center gap-1 text-sm text-foreground">
                        <input type="radio" name="gender" className="accent-primary" />
                        {g}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Select a course</label>
                <div className="relative">
                  <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground appearance-none">
                    <option>Guitar – Acoustic</option>
                    <option>Piano</option>
                    <option>Drums</option>
                    <option>Hindustani Classical Vocals</option>
                    <option>Western Vocals</option>
                    <option>Violin</option>
                    <option>Ukulele</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-muted-foreground mb-1 block">Nearest Centre</label>
                <div className="relative">
                  <select className="w-full border border-border rounded-lg px-3 py-2.5 text-sm bg-background text-foreground appearance-none">
                    <option>Kothrud Centre</option>
                    <option>Baner Centre</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold text-sm py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg"
              >
                Book a Visit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ═══ 2. STATS BAR ═══ */}
      <section className="bg-secondary border-y border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-background border border-border shadow-sm flex items-center justify-center p-2.5">
                  {s.isGoogle ? (
                    <svg viewBox="0 0 24 24" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  ) : (
                    <s.icon className="w-6 h-6 text-primary" />
                  )}
                </div>
                <div>
                  <p className="text-xl font-extrabold text-foreground flex items-center gap-1.5">
                    {s.num !== undefined
                      ? <CountUp end={s.num} suffix={s.suffix ?? ""} decimals={s.decimals ?? 0} />
                      : s.value
                    }
                    {s.isGoogle && (
                      <div className="relative inline-block text-[#E0E0E0] text-[12px] tracking-[0.02em] -mt-0.5">
                        <span className="opacity-30">★★★★★</span>
                        <div className="absolute top-0 left-0 overflow-hidden text-[#FABB05] w-[95%] whitespace-nowrap">
                          ★★★★★
                        </div>
                      </div>
                    )}
                  </p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. TOUR VIDEO ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-3">
            Take A <span className="text-primary underline decoration-primary">Tour</span> Of Our Academy
          </h2>
          <p className="text-muted-foreground text-sm text-center max-w-lg mx-auto mb-10">
            Our centres are designed to give you the best learning experience. Come see our state-of-the-art classrooms and practice rooms.
          </p>

          {/* Tour Image */}
          <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden aspect-video bg-foreground/5 mb-10">
            <img
              src="/homepage_banners/banner_2.png"
              alt="Academy Tour"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Centre Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {centres.map((c, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-border bg-background shadow-sm">
                <div className="h-40 overflow-hidden">
                  <img
                    src={`/banner/banner-${i + 3}.jpg`}
                    alt={c.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <img src="/logo.png" alt="Muziclub" className="h-5" />
                    <span className="font-bold text-foreground text-sm">{c.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">{c.address}</p>
                  <div className="flex gap-3">
                    <a href={c.mapLink} className="text-primary text-xs font-bold hover:underline">View on Map</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. CERTIFICATIONS + WHAT YOU'LL LEARN ═══ */}
      <section className="py-14 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Cert Logos */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <p className="text-xs text-muted-foreground max-w-[200px] text-center">
              Become a certified musician with graded certification programmes
            </p>
            {certLogos.map((logo) => (
              <div
                key={logo}
                className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center shadow-sm"
              >
                <span className="text-[10px] font-bold text-foreground">{logo}</span>
              </div>
            ))}
          </div>

          {/* What will you learn tabs */}
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-extrabold text-foreground text-center mb-4">
              What will you learn?
            </h3>
            <div className="flex justify-center gap-3 mb-6">
              <button
                onClick={() => setLearnTab("vocals")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                  learnTab === "vocals"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                <Music className="w-4 h-4" /> Vocals
              </button>
              <button
                onClick={() => setLearnTab("instruments")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 text-sm font-semibold transition-all ${
                  learnTab === "instruments"
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30"
                }`}
              >
                <Guitar className="w-4 h-4" /> Instruments
              </button>
            </div>
            <ul className="space-y-2">
              {(learnTab === "vocals" ? vocalsLearnings : instrumentLearnings).map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                  <span className="text-primary">•</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ 5. GALLERY — A Peak Into The Academy ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-12">
            A <span className="text-primary underline decoration-primary">Peak</span> Into The Academy
          </h2>

          {galleryCategories.map((cat) => (
            <div key={cat.title} className="mb-12 last:mb-0">
              <h3 className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-5">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {cat.images.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl overflow-hidden aspect-[4/3]"
                  >
                    <img
                      src={img}
                      alt={`${cat.title} ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-8">
            <Link
              to="/enquire"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 6. FEATURED IN ═══ */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-extrabold text-foreground text-center mb-8">
            Featured In
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {featuredIn.map((name) => (
              <div
                key={name}
                className="px-6 py-3 border border-border rounded-xl bg-background text-foreground font-bold text-sm"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. TESTIMONIALS ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-3">
            See What <span className="text-primary underline decoration-primary">Our Learners</span> Say
          </h2>
          <p className="text-muted-foreground text-sm text-center max-w-lg mx-auto mb-10">
            Our alumni have shared genuine stories about their musical journey at Muziclub.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-secondary rounded-2xl p-6 border border-border"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/enquire"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg"
            >
              Book a Visit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OfflineClass;
