import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const benefits = [
  { emoji: "💻", title: "Teach from Anywhere", desc: "Full-time or part-time online teaching from home — flexible hours." },
  { emoji: "🌍", title: "Global Reach", desc: "Reach students in Pune, across India, and internationally including the UK." },
  { emoji: "📈", title: "Structured Growth", desc: "Join a professional music academy with 13+ years of teaching excellence." },
  { emoji: "🎓", title: "Professional Community", desc: "Be part of a growing, collaborative community of qualified music educators." },
  { emoji: "⚡", title: "Flexible Schedule", desc: "Set your availability and teach when it suits you best." },
  { emoji: "🎵", title: "Passion-Driven Work", desc: "Share your love of music and inspire students every single day." },
];

const TeachWithUs = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", instrument: "", experience: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 border-b border-border bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Love Teaching Music?<br /><span className="text-primary">Join the Muziclub Family!</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">If you're passionate about teaching music, we'd love to have you on our team.</p>
          <a href="#apply" className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-full hover:bg-[#c40812] transition-all mt-6 shadow-lg shadow-primary/20">Apply Now →</a>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-foreground">Why Teach at Muziclub?</h2>
            <p className="text-muted-foreground text-sm mt-2">We give our teachers everything they need to thrive</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div key={i} className="rounded-2xl p-6 border border-border bg-background hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-3xl mb-4">{b.emoji}</div>
                <h3 className="font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-16 border-y border-border bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-foreground">Apply to Teach</h2>
              <p className="text-muted-foreground text-sm mt-2">Fill in your details below — our team will reach out within 24 hours</p>
            </div>
            {submitted ? (
              <div className="rounded-3xl p-10 text-center border border-border bg-background">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-extrabold text-foreground mb-2">Application Received!</h3>
                <p className="text-muted-foreground text-sm">Thank you! Our team will be in touch very soon.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-primary text-sm font-semibold hover:underline">Submit another application</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 border border-border space-y-5 bg-background">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1">Full Name *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors bg-background" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors bg-background" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors bg-background" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground/70 mb-1">Specialization *</label>
                    <input type="text" required value={formData.instrument} onChange={(e) => setFormData({ ...formData, instrument: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors bg-background" placeholder="e.g. Guitar, Vocals" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1">Experience</label>
                  <input type="text" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors bg-background" placeholder="e.g. 3 years teaching" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1">About you *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none bg-background" placeholder="Your teaching philosophy, qualifications..." />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-[#c40812] font-bold py-3 rounded-full text-sm shadow-lg shadow-primary/20">Submit Application →</Button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeachWithUs;
