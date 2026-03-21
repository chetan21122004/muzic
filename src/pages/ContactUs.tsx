import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Twitter, Youtube, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const centres = [
  { name: "Baner (Head Office)", address: "Office 11 & 12, Aditi Commerce, Baner Road, Pune, 411069", landmark: "Above Bikaner Sweets", phone: "+91 9156303400", email: "enquiries@muziclub.com", hours: "Mon – Sat: 9 AM – 9 PM", mapUrl: "https://maps.google.com/?q=Aditi+Commerce+Baner+Road+Pune+411069", badge: "🏢 Head Office" },
  { name: "Pimple Saudagar", address: "2nd Floor, Radhika Avenue, Near Jagtap Dairy, Opp. McDonalds, Pune, 411027", landmark: "Opposite McDonald's", phone: "+91 9156303400", email: "enquiries@muziclub.com", hours: "Mon – Sat: 10 AM – 8 PM", mapUrl: "#", badge: "🎵 Academy" },
  { name: "Hinjewadi", address: "Spirea, S. 91/4, Bhumkar Das Gugre Rd, Wakad, Maharashtra 411033", landmark: "Near Wakad", phone: "+91 9156303400", email: "enquiries@muziclub.com", hours: "Mon – Sat: 9 AM – 9 PM", mapUrl: "#", badge: "🎵 Academy" },
  { name: "Croydon, UK", address: "Croydon, London, United Kingdom", landmark: "UK Coordination Centre", phone: "+44 7768928645", email: "online@muziclub.com", hours: "Mon – Sat: 10 AM – 8 PM (IST Online)", mapUrl: "#", badge: "🇬🇧 UK Centre" },
];

const ContactUs = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-16 border-b border-border bg-secondary overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex-1 text-center md:text-left">
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Reach Us</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Get In <span className="text-primary">Touch</span></h1>
              <p className="text-muted-foreground max-w-lg mx-auto md:mx-0 text-base leading-relaxed">Have a question? Want to book a free trial? We're here to help — reach us online or visit any of our Pune centres.</p>
            </div>
            <div className="flex-1 flex justify-center w-full max-w-sm relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10 w-64 h-64 m-auto"></div>
              <img src="/illustrations/Contact us-amico.svg" alt="Contact Muziclub" className="w-full h-auto max-h-[250px] object-contain drop-shadow-md hover:-translate-y-2 hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-primary py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground text-sm">
            <a href="tel:+919156303400" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><Phone className="w-4 h-4" /><span>+91 9156303400</span></a>
            <span className="hidden sm:block opacity-40">|</span>
            <a href="mailto:info@muziclub.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><Mail className="w-4 h-4" /><span>info@muziclub.com</span></a>
            <span className="hidden sm:block opacity-40">|</span>
            <a href="tel:+447768928645" className="flex items-center gap-2 hover:opacity-80 transition-opacity"><Phone className="w-4 h-4" /><span>+44 7768928645 (UK)</span></a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-14 grid lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-extrabold text-foreground mb-2">Send Us a Message</h2>
          <p className="text-muted-foreground text-sm mb-6">We typically respond within 1–2 business hours.</p>

          {submitted ? (
            <div className="border border-border rounded-2xl p-8 text-center space-y-3 bg-secondary">
              <div className="text-4xl">🎉</div>
              <h3 className="text-foreground font-extrabold text-lg">Message sent!</h3>
              <p className="text-muted-foreground text-sm">We'll get back to you very soon.</p>
              <button onClick={() => setSubmitted(false)} className="text-primary text-sm font-semibold hover:underline">Send another message</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1">First Name *</label>
                  <input type="text" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors bg-background" placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-foreground/70 mb-1">Last Name *</label>
                  <input type="text" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors bg-background" placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground/70 mb-1">E-mail *</label>
                <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors bg-background" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-foreground/70 mb-1">Message *</label>
                <textarea required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none bg-background" placeholder="Tell us which course you're interested in..." />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-[#c40812] font-bold rounded-full flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                <Send className="w-4 h-4" /> Send Message
              </Button>
            </form>
          )}

          {/* Social */}
          <div className="mt-6 border-t border-border pt-5">
            <p className="text-xs font-bold text-foreground/70 mb-3 uppercase tracking-wide">Follow Us</p>
            <div className="flex gap-3">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/company/muziclub", label: "LinkedIn" },
                { Icon: Facebook, href: "https://www.facebook.com/themuziclub", label: "Facebook" },
                { Icon: Twitter, href: "https://twitter.com/muziclub", label: "Twitter" },
                { Icon: Instagram, href: "https://www.instagram.com/muziclub", label: "Instagram" },
                { Icon: Youtube, href: "https://www.youtube.com/@themuziclub", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" title={label}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Centres */}
        <div className="lg:col-span-3 space-y-5">
          <h2 className="text-2xl font-extrabold text-foreground mb-2">Our Centres</h2>
          <p className="text-muted-foreground text-sm mb-6">Walk in to any of our Pune centres or coordinate with our UK office for international online classes.</p>
          {centres.map((c) => (
            <div key={c.name} className="border border-border rounded-2xl p-6 space-y-4 hover:border-primary/20 hover:shadow-md transition-all bg-background">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-full">{c.badge}</span>
                  <h3 className="text-foreground font-extrabold text-lg mt-2">{c.name}</h3>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{c.address}</p>
                    {c.landmark && <p className="text-xs text-primary/70 mt-0.5">{c.landmark}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={`tel:${c.phone}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c.phone}</a></div>
                  <div className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary shrink-0" /><a href={`mailto:${c.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{c.email}</a></div>
                  <div className="flex items-center gap-3"><Clock className="w-4 h-4 text-primary shrink-0" /><span className="text-sm text-muted-foreground">{c.hours}</span></div>
                </div>
              </div>
              <a href={c.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs text-primary font-bold hover:underline">
                <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
