import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const courseLinks = [
  { name: "Bollywood / Hindi Film", slug: "popular-film-music-hindi" },
  { name: "Indian Classical", slug: "hindustani-classical-vocal" },
  { name: "Western Vocals", slug: "western-vocal" },
  { name: "Guitar – Acoustic", slug: "guitar-acoustic" },
  { name: "Piano", slug: "piano" },
  { name: "Drums", slug: "drums" },
  { name: "Violin", slug: "violin" },
  { name: "Ukulele", slug: "ukulele" },
];

const quickLinks = [
  { name: "About Muziclub", href: "/about" },
  { name: "Academies", href: "/center" },
  { name: "Showcase", href: "/student-showcase" },
  { name: "Store", href: "/store" },
  { name: "Teach With Us", href: "/teach-with-us" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const centres = [
  { name: "Baner (HQ)", address: "Office 11 & 12, Aditi Commerce, Baner Road, Pune 411069", phone: "+91 9156 303 400" },
  { name: "Pimple Saudagar", address: "2nd Floor, Radhika Avenue, Opp. McDonalds, Pune 411027", phone: "+91 9156 303 400" },
  { name: "Hinjewadi", address: "Spirea, S.91/4, Bhumkar Das Gugre Rd, Wakad 411033", phone: "+91 9156 303 400" },
  { name: "Croydon, UK", address: "Croydon, London, United Kingdom", phone: "+44 7768 928 645" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#0b0b0c", color: "#d1d1d6" }}>
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <p className="text-[13vw] font-black text-white/[0.02] tracking-tighter whitespace-nowrap">LIVE MUSIC</p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Top Section ── */}
        <div className="py-14 border-b border-white/5 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <img src="/logo.png" alt="Muziclub Logo" className="h-20 w-auto object-contain self-start drop-shadow-lg" />
            <p className="text-sm text-[#d1d1d6]/60 leading-relaxed max-w-xs">
              India's leading music academy — certified classes in vocals, guitar, piano, drums, and more. Learn from passionate teachers who live music.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+919156303400" className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-[#d1d1d6]/70 group-hover:text-white transition-colors font-medium">+91 9156 303 400</span>
              </a>
              <a href="tel:+447768928645" className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-[#d1d1d6]/70 group-hover:text-white transition-colors font-medium">+44 7768 928 645 <span className="text-[#d1d1d6]/30 text-xs">(UK)</span></span>
              </a>
              <a href="mailto:info@muziclub.com" className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-[#d1d1d6]/70 group-hover:text-white transition-colors font-medium">info@muziclub.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-5">Our Academies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {centres.map((c) => (
                <div key={c.name} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 hover:border-white/10 hover:bg-white/[0.04] transition-all">
                  <p className="text-sm font-bold text-white mb-2">{c.name}</p>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-[#d1d1d6]/50 leading-relaxed">{c.address}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                    <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-xs text-[#d1d1d6]/50 hover:text-primary transition-colors">{c.phone}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Middle Section ── */}
        <div className="py-12 border-b border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-2">
            <p className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-5">Popular Courses</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {courseLinks.map((c) => (
                <Link key={c.slug} to={`/courses/${c.slug}`} className="text-sm text-[#d1d1d6]/40 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-2.5"></span>
                  {c.name}
                </Link>
              ))}
            </div>
            <Link to="/courses" className="mt-4 inline-flex items-center text-xs font-bold text-primary/70 hover:text-primary transition-colors gap-1">
              View all 30+ courses →
            </Link>
          </div>

          <div>
            <p className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-5">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-sm text-[#d1d1d6]/40 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-2.5"></span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-5">Follow Us</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { Icon: Instagram, href: "https://instagram.com/muziclub", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com/themuziclub", label: "Facebook" },
                { Icon: Youtube, href: "https://youtube.com/@themuziclub", label: "YouTube" },
                { Icon: Linkedin, href: "https://linkedin.com/company/muziclub", label: "LinkedIn" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" title={label} className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-[#d1d1d6]/40 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-3">Certifications</p>
            <div className="space-y-1.5">
              {["Trinity College London", "ABRSM", "RSL – Rockschool", "G.M.V. Mumbai"].map((cert) => (
                <p key={cert} className="text-xs text-[#d1d1d6]/35 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                  {cert}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#d1d1d6]/25 font-medium tracking-wide">
            © {new Date().getFullYear()} Muziclub. All rights reserved. Let the music play.
          </p>
          <div className="flex items-center gap-5 text-xs text-[#d1d1d6]/25">
            <Link to="/about" className="hover:text-[#d1d1d6]/60 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-[#d1d1d6]/60 transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-[#d1d1d6]/60 transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
