import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const plans = [
  { title: "Hobby Classes", emoji: "🎸", tagline: "Learn music for passion", highlight: false, points: ["Customized to your preferences & goals", "Play the songs and styles you love", "Bollywood / Rock / Jazz / Pop — your choice", "Flexible pace, no exam pressure", "Personalized in-person learning sessions", "Walk into any of our award-winning Pune academies"], cta: "Book Free Trial", note: "Contact us for pricing" },
  { title: "Grade Classes", emoji: "⭐", tagline: "Structured & internationally certified", highlight: true, points: ["Syllabus from Trinity, ABRSM, RSL or GMV Mandal", "Clear level progression — Beginner to Advanced", "Exam prep & technique coaching", "Internationally recognised certificate on passing", "Small group classes capped at 3 students max", "In-person one-on-one option available on request"], cta: "Book Free Trial", note: "Contact us for pricing" },
];

const certs = [
  { name: "Trinity College London", logo: "🎓", desc: "Rock & Pop exam board — Guitar, Piano, Vocals", href: "https://www.trinitycollege.com" },
  { name: "ABRSM", logo: "📋", desc: "Associated Board of the Royal Schools of Music", href: "https://www.abrsm.org" },
  { name: "RSL (Rockschool)", logo: "🎸", desc: "Rockschool grades for contemporary music", href: "https://www.rslawards.com" },
  { name: "G.M.V. Mandal Mumbai", logo: "🪗", desc: "Indian classical music certification", href: "https://www.gmvmandal.org" },
];

const faqs = [
  { q: "How does the free trial class work?", a: "Book a free in-person trial class with one of our expert teachers. No commitment — you see if we're a good fit before enrolling." },
  { q: "Are classes online or in-person?", a: "We prioritize in-person learning for the best musical results. You can visit any of our 3 Pune academy centres, or inquire about our coordination for other locations." },
  { q: "How many students per class?", a: "Hobby classes are primarily one-on-one. Group classes are capped at a maximum of 3 students for focused attention." },
  { q: "Can I switch between Hobby and Grade classes?", a: "Yes — our teachers will advise you and you can switch based on your progress and goals." },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background font-secondary">
      <Navbar />

      {/* Red/White Aesthetic Inner Page Hero for Pricing */}
      <section className="relative w-full overflow-hidden min-h-[400px] lg:min-h-[480px] flex flex-col items-center justify-center bg-[#110103]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/new_imgs/Copy of DSC00711 (1).webp"
            alt="Muziclub Pricing"
            className="w-full h-full object-cover object-[center_30%] filter brightness-[0.7] grayscale-[20%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-br from-[#9b0914] via-[#9b0914]/85 to-black/40 z-0 pointer-events-none"></div>

        <div className="relative container mx-auto px-6 lg:px-16 text-center z-10 flex flex-col items-center justify-center py-20">
          <p className="text-[#ff2a40] text-xs font-black uppercase tracking-[0.3em] mb-4 drop-shadow-md">Pricing & Formats</p>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-core font-medium text-white leading-[1.1] mb-6 drop-shadow-xl max-w-3xl">
            Simple, Transparent <br />
            Pricing Plans.
          </h1>
          <p className="text-white/90 max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-6 drop-shadow-md font-medium">
            Choose the format that fits your goal — casual hobby or structured certification. Experience the best value in music education.
          </p>
        </div>
        <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div key={i} className={`group rounded-[2rem] p-10 lg:p-12 border-2 flex flex-col transition-all duration-500 relative bg-card hover:-translate-y-2 ${plan.highlight ? "border-[#e31837] shadow-[0_20px_40px_rgba(227,24,55,0.15)]" : "border-border hover:shadow-2xl hover:border-[#e31837]/30"}`}>
                
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#e31837] to-[#ff2a40] text-white text-[11px] font-black px-6 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-red-500/20">
                    Most Popular
                  </div>
                )}
                
                <div className="text-5xl mb-6">{plan.emoji}</div>
                <h2 className="text-2xl font-extrabold text-foreground mb-2">{plan.title}</h2>
                <p className="text-sm text-foreground/60 mb-8 font-medium">{plan.tagline}</p>
                <div className="w-full h-px bg-border mb-8"></div>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-4 text-[14px] text-muted-foreground font-medium">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? "bg-[#e31837]/10" : "bg-secondary group-hover:bg-[#e31837]/5 transition-colors"}`}>
                        <Check className={`w-3 h-3 ${plan.highlight ? "text-[#e31837]" : "text-muted-foreground group-hover:text-[#e31837] transition-colors"}`} />
                      </div>
                      <span className="leading-snug">{p}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/enquire" className={`block w-full text-center font-bold py-4 rounded-xl text-[15px] transition-all duration-300 ${plan.highlight ? "bg-[#e31837] text-white hover:bg-[#ff2a40] shadow-[0_10px_20px_rgba(227,24,55,0.2)]" : "bg-secondary text-foreground hover:bg-[#110103] hover:text-white"}`}>
                  {plan.cta} →
                </Link>
                <p className="text-[11px] text-muted-foreground text-center mt-4 font-bold uppercase tracking-wider">{plan.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications (Dark Mode Layout) */}
      <section className="py-24 border-y border-white/5 bg-[#110103] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#110103] to-[#9b0914]/10 pointer-events-none"></div>
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <p className="text-[#ff2a40] text-xs font-black uppercase tracking-[0.3em] mb-4">Recognised By</p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white">Certifications We Offer</h2>
            <div className="w-16 h-1 bg-[#e31837] mx-auto rounded-full mt-6"></div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {certs.map((c, i) => (
              <a key={i} href={c.href} target="_blank" rel="noopener noreferrer" className="rounded-[2rem] p-8 border border-white/10 text-center bg-white/5 hover:bg-white/10 hover:border-[#e31837] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(227,24,55,0.15)] transition-all duration-300 group backdrop-blur-sm">
                <div className="text-4xl mb-5 opacity-90 group-hover:scale-110 transition-transform">{c.logo}</div>
                <h3 className="font-extrabold text-white text-base mb-2 group-hover:text-[#ff2a40] transition-colors">{c.name}</h3>
                <p className="text-xs text-white/50 leading-relaxed font-medium">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container mx-auto px-6 lg:px-16 max-w-3xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">Common Questions</h2>
             <div className="w-16 h-1 bg-[#e31837] mx-auto rounded-full mt-6"></div>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl p-8 border border-border bg-card hover:border-[#e31837]/30 hover:shadow-xl transition-all duration-300">
                <p className="font-extrabold text-foreground text-lg mb-3 flex items-start gap-3">
                  <span className="text-[#e31837]">Q.</span> {faq.q}
                </p>
                <div className="w-8 h-px bg-border mb-4"></div>
                <p className="text-[15px] text-muted-foreground leading-relaxed pl-7">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="relative bg-[#110103] py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e31837]/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl lg:text-[2.5rem] font-core font-medium text-white leading-tight">Start with a Free Trial Class</h2>
          <p className="text-white/70 max-w-lg mx-auto text-base lg:text-lg font-medium drop-shadow-md">No credit card needed. Just show up and experience the Muziclub difference.</p>
          <Link to="/enquire" className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-[#e31837] text-white text-[15px] font-bold transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(227,24,55,0.3)] mt-2">
            Book My Free Trial
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
