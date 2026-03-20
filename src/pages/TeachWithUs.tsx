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
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", instrument: "", experience: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen" style={{ background: "#0a0a0d" }}>
      <Navbar />

      {/* Hero */}
      <section className="py-16 border-b border-white/5" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Love Teaching Music?<br />
            <span className="text-primary">Join the Muziclub Family!</span>
          </h1>
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            If you're passionate about teaching music, we'd love to have you on our team. Inspire students worldwide — online or at our Pune academies.
          </p>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-rose-600 text-white font-bold px-8 py-3.5 rounded-full hover:from-rose-600 hover:to-primary transition-all mt-6 shadow-lg shadow-primary/20 glow-red"
          >
            Apply Now →
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16" style={{ background: "#0a0a0d" }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white">Why Teach at Muziclub?</h2>
            <p className="text-white/40 text-sm mt-2">We give our teachers everything they need to thrive</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border border-white/[0.07] bg-white/[0.03] hover:bg-white/[0.06] hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="text-3xl mb-4">{b.emoji}</div>
                <h3 className="font-bold text-white mb-1">{b.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-16 border-y border-white/5" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-white">Apply to Teach</h2>
              <p className="text-white/40 text-sm mt-2">Fill in your details below — our team will reach out within 24 hours</p>
            </div>

            {submitted ? (
              <div className="rounded-3xl p-10 text-center border border-white/10" style={{ background: "#0a0a0d" }}>
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-extrabold text-white mb-2">Application Received!</h3>
                <p className="text-white/50 text-sm">Thank you for your interest in teaching at Muziclub. Our team will be in touch very soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary text-sm font-semibold hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl p-8 border border-white/[0.07] space-y-5" style={{ background: "#0a0a0d" }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Instrument / Specialization *</label>
                    <input
                      type="text"
                      required
                      value={formData.instrument}
                      onChange={(e) => setFormData({ ...formData, instrument: e.target.value })}
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g. Guitar, Vocals, Piano"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Years of Experience</label>
                  <input
                    type="text"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. 3 years teaching, 8 years performing"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Tell us about yourself *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Your teaching philosophy, qualifications, video links, social profiles..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primary/90 font-bold py-3 rounded-full text-sm shadow-lg shadow-primary/20"
                >
                  Submit Application →
                </Button>
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
