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
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Enquiry - Teach With Us");
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Specialization: ${formData.instrument}`,
        `Experience: ${formData.experience}`,
        "",
        "About candidate:",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:enquiries@muziclub.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background font-secondary">
      <Navbar />

      {/* Red/White Aesthetic Inner Page Hero */}
      <section className="relative w-full overflow-hidden min-h-[400px] lg:min-h-[480px] flex flex-col items-center justify-center bg-[#110103]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/new_imgs/DSC01210 (1).webp"
            alt="Teach at Muziclub"
            className="w-full h-full object-cover object-center filter brightness-[0.7] grayscale-[20%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r lg:bg-gradient-to-br from-[#9b0914] via-[#9b0914]/85 to-black/40 z-0 pointer-events-none"></div>

        <div className="relative container mx-auto px-6 lg:px-16 text-center lg:text-left z-10 flex flex-col justify-center py-20 lg:pl-28">
          <p className="text-[#ff2a40] text-xs font-black uppercase tracking-[0.3em] mb-4 drop-shadow-md">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-core font-medium text-white leading-[1.1] mb-6 drop-shadow-xl max-w-3xl">
            Love Teaching Music? <br />
            Join the Muziclub Family.
          </h1>
          <p className="text-white/90 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed mb-10 drop-shadow-md font-medium">
            If you're passionate about teaching music, we'd love to have you on our team. Build your career with India's leading music academy.
          </p>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a href="#apply" className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-[#e31837] text-white text-[15px] font-bold transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
              Apply Now To Teach
            </a>
          </div>
        </div>

        {/* Decorative bottom border similar to hero */}
        <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
      </section>

      {/* Elegant Benefits Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-4">Why Teach at Muziclub?</h2>
            <div className="w-16 h-1 bg-[#e31837] mx-auto rounded-full mb-6"></div>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">We empower our teachers with exactly what they need to thrive in the modern era of music education.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {benefits.map((b, i) => (
              <div key={i} className="group rounded-[2rem] p-8 border border-border bg-card hover:bg-white hover:shadow-2xl hover:border-transparent hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#e31837]/10 transition-colors"></div>
                
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:bg-[#e31837] group-hover:text-white transition-colors duration-300">
                  {b.emoji}
                </div>
                <h3 className="font-extrabold text-foreground text-xl mb-3">{b.title}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed font-medium">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-24 border-t border-white/5 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-[#9b0914]/20 pointer-events-none drop-shadow-2xl opacity-50"></div>

        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-black">Apply To Teach</h2>
              <div className="w-16 h-1 bg-[#e31837] mx-auto rounded-full mt-4 mb-4"></div>
              <p className="text-black/90 text-base">Fill in your details below — our team will reach out within 24 hours</p>
            </div>
            {submitted ? (
              <div className="rounded-[2rem] p-12 text-center border border-white/10 bg-black/40 backdrop-blur-xl">
                <div className="text-6xl mb-6">🎉</div>
                <h3 className="text-2xl font-extrabold text-white mb-3">Email draft opened</h3>
                <p className="text-white/70 text-base">Your mail app should open with application details prefilled.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 text-[#e31837] text-sm font-bold hover:text-[#ff2a40] transition-colors uppercase tracking-wider">Submit another application</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-[2rem] p-8 md:p-10 border border-white/10 space-y-6 bg-black/80 backdrop-blur-md shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">Full Name *</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837] transition-all bg-white/5" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">Email *</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837] transition-all bg-white/5" placeholder="your@email.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837] transition-all bg-white/5" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">Specialization *</label>
                    <input type="text" required value={formData.instrument} onChange={(e) => setFormData({ ...formData, instrument: e.target.value })} className="w-full border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837] transition-all bg-white/5" placeholder="e.g. Guitar, Vocals" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">Experience</label>
                  <input type="text" value={formData.experience} onChange={(e) => setFormData({ ...formData, experience: e.target.value })} className="w-full border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837] transition-all bg-white/5" placeholder="e.g. 3 years teaching" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-white/70 mb-2 uppercase tracking-wide">About you *</label>
                  <textarea required rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-white/10 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-[#e31837] focus:ring-1 focus:ring-[#e31837] transition-all resize-none bg-white/5" placeholder="Your teaching philosophy, qualifications..." />
                </div>
                <div className="pt-2">
                  <Button type="submit" className="w-full bg-[#e31837] text-white hover:bg-[#ff2a40] font-bold py-6 rounded-xl text-[15px] shadow-[0_10px_20px_rgba(227,24,55,0.2)] transition-colors hover:-translate-y-0.5 mt-2">Submit Application →</Button>
                </div>
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
