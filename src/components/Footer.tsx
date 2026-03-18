import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, Mail, ArrowRight, MapPin, Phone, Music } from "lucide-react";

const footerLinks = {
  about: [
    { name: "About Muziclub", href: "/about" },
    { name: "Academic Board", href: "/about" },
    { name: "Muziclub Store", href: "/store" },
    { name: "Blogs", href: "/blog" },
    { name: "Careers", href: "/teach-with-us" },
    { name: "Student Showcase", href: "/student-showcase" },
  ],
  music: [
    { name: "Bollywood / Hindi Film", slug: "popular-film-music-hindi" },
    { name: "Indian Classical", slug: "hindustani-classical-vocal" },
    { name: "Carnatic Classical", slug: "carnatic-classical-vocal" },
    { name: "Western Vocals", slug: "western-vocal" },
    { name: "Ghazal", slug: "ghazal" },
    { name: "Devotional", slug: "devotional" },
  ],
  strings: [
    { name: "Guitar – Acoustic", slug: "guitar-acoustic" },
    { name: "Guitar – Rock & Pop", slug: "guitar-rock-pop" },
    { name: "Violin", slug: "violin" },
    { name: "Ukulele", slug: "ukulele" },
  ],
  keyboard: [
    { name: "Piano", slug: "piano" },
    { name: "Keyboard", slug: "keyboard" },
  ],
  percussion: [
    { name: "Drums", slug: "drums" },
    { name: "Tabla", slug: "tabla" },
  ],
};

const Footer = () => {
  return (
    <footer className="relative bg-[#0a0a0f] text-gray-400 pt-24 overflow-hidden mt-20 border-t border-white/5">
      {/* ── Oversized Background Watermark ── */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <h1 className="text-[14vw] font-black text-white/[0.02] tracking-tighter whitespace-nowrap">
          LIVE • MUSIC
        </h1>
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Top CTA & Newsletter Section ── */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 pb-16 border-b border-white/10 mb-16">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              Ready to hit <span className="text-primary italic">play?</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Join thousands of students globally. Get personalized 1:1 live classes, masterclasses, and perform at our massive Sunday Jams.
            </p>
          </div>

          <div className="w-full max-w-md bg-white/5 border border-white/10 p-2 pl-6 rounded-full flex items-center shadow-2xl backdrop-blur-md">
            <Mail className="w-5 h-5 text-white/40 shrink-0" />
            <input
              type="email"
              placeholder="Enter your email to subscribe"
              className="bg-transparent border-none text-white text-sm w-full outline-none px-4 placeholder:text-white/40"
            />
            <button className="bg-primary hover:bg-primary/90 text-white font-bold p-3 px-5 rounded-full flex items-center justify-center transition-transform hover:scale-105 shadow-lg shadow-primary/30 shrink-0">
              <span className="sr-only">Subscribe</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Main Links Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-6 mb-20">

          {/* Brand Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="flex items-center">
              <img src="/logo.png" alt="Muziclub Logo" className="h-24 w-auto object-contain drop-shadow-lg" />
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-sm">
              Muziclub is a platform driven by people who live music. With a perfect balance of discipline and flexibility, our classes are designed to provide personalized focus, premier practice facilities, and fulfilling engagement with passionate teachers.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p className="text-xs text-white/50">Baner • Hinjawadi • Pimple Saudagar<br />Pune, India & Croydon, UK</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <p className="text-xs text-white/50">+91 8010 333 999</p>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">About</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-sm text-white/40 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3"></span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Vocals</h4>
            <ul className="space-y-3">
              {footerLinks.music.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-sm text-white/40 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3"></span>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Strings</h4>
            <ul className="space-y-3">
              {footerLinks.strings.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-sm text-white/40 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3"></span>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6">Keys & Beats</h4>
            <ul className="space-y-3">
              {footerLinks.keyboard.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-sm text-white/40 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3"></span>
                    {c.name}
                  </Link>
                </li>
              ))}
              <div className="pt-2"></div>
              {footerLinks.percussion.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-sm text-white/40 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-primary transition-all group-hover:w-3"></span>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <p className="text-xs text-white/30 font-medium tracking-wide text-center md:text-left">
            © {new Date().getFullYear()} Muziclub. All rights reserved. Let the music play.
          </p>

          <div className="flex items-center gap-6 text-xs text-white/30">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-white transition-colors">Refunds</Link>
          </div>

          <div className="flex gap-4">
            <a href="https://facebook.com/muziclub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:border-white hover:text-[#1877F2] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/muziclub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-gradient-to-tr hover:from-[#F56040] hover:to-[#C13584] hover:border-transparent hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/muziclub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:border-white hover:text-[#FF0000] transition-all">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/company/muziclub" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:border-white hover:text-[#0A66C2] transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Dynamic bottom glow */}
      <div className="absolute bottom-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-sm pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
