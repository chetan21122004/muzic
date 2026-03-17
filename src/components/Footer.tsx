import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Music, Mail, Phone, MapPin, ArrowRight, Guitar, Mic, Piano, Drum } from "lucide-react";

const courseLinks = {
  Vocals: [
    { name: "Bollywood / Hindi Film", slug: "popular-film-music-hindi" },
    { name: "Indian Classical", slug: "hindustani-classical-vocal" },
    { name: "Carnatic Classical", slug: "carnatic-classical-vocal" },
    { name: "Western Vocals", slug: "western-vocal" },
    { name: "Ghazal", slug: "ghazal" },
    { name: "Devotional", slug: "devotional" },
  ],
  Instruments: [
    { name: "Guitar – Acoustic", slug: "guitar-acoustic" },
    { name: "Guitar – Rock & Pop", slug: "guitar-rock-pop" },
    { name: "Piano", slug: "piano" },
    { name: "Keyboard", slug: "keyboard" },
    { name: "Drums", slug: "drums" },
    { name: "Violin", slug: "violin" },
  ],
};

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Online Programs", href: "/online-programs" },
  { name: "Student Showcase", href: "/student-showcase" },
  { name: "Our Centres", href: "/center" },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Teach With Us", href: "/teach-with-us" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { href: "https://www.facebook.com/themuziclub", label: "Facebook", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { href: "https://www.instagram.com/muziclub", label: "Instagram", path: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 2h11A4.5 4.5 0 0122 6.5v11a4.5 4.5 0 01-4.5 4.5h-11A4.5 4.5 0 012 17.5v-11A4.5 4.5 0 016.5 2z" },
  { href: "https://www.youtube.com/@themuziclub", label: "YouTube", path: "M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" },
  { href: "https://www.linkedin.com/company/muziclub", label: "LinkedIn", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" },
];

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-background/70 overflow-hidden">
      {/* CTA Banner */}
      <div className="relative bg-primary">
        <div className="absolute inset-0 opacity-10">
          {[Guitar, Mic, Piano, Drum].map((Icon, i) => (
            <Icon
              key={i}
              className="absolute text-background"
              size={48}
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${10 + i * 25}%`,
                transform: `rotate(${-15 + i * 10}deg)`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
          <div>
            <h3 className="text-primary-foreground text-xl font-bold">Start Your Musical Journey Today</h3>
            <p className="text-primary-foreground/80 text-sm">Book a free trial class – no commitment needed.</p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-2 bg-background text-foreground font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
          >
            Book Free Trial
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-5">
            <Link to="/" className="inline-flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Music className="text-primary-foreground" size={18} />
              </div>
              <span className="text-2xl font-extrabold text-background">
                Muzi<span className="text-primary">club</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Learn and Live Music. Pune's trusted music academy offering online & in-person classes in Guitar, Piano, Vocals, Drums, and more since 2013.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: Mail, text: "info@muziclub.com" },
                { icon: Phone, text: "+91-7030-937-937" },
                { icon: MapPin, text: "Baner • Pimple Saudagar • Hinjawadi" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5 text-xs">
                  <Icon size={14} className="text-primary shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            {/* Socials */}
            <div className="flex gap-2 pt-1">
              {socials.map(({ href, label, path }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-background/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-background/50 group-hover:text-primary-foreground transition-colors"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="text-background font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    className="text-xs hover:text-primary hover:pl-1 transition-all duration-200"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vocals */}
          <div className="md:col-span-3">
            <h4 className="text-background font-bold text-sm mb-4 uppercase tracking-wider">Vocals</h4>
            <ul className="space-y-2.5">
              {courseLinks.Vocals.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/courses/${c.slug}`}
                    className="text-xs hover:text-primary hover:pl-1 transition-all duration-200"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Instruments */}
          <div className="md:col-span-3">
            <h4 className="text-background font-bold text-sm mb-4 uppercase tracking-wider">Instruments</h4>
            <ul className="space-y-2.5">
              {courseLinks.Instruments.map((c) => (
                <li key={c.slug}>
                  <Link
                    to={`/courses/${c.slug}`}
                    className="text-xs hover:text-primary hover:pl-1 transition-all duration-200"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-background/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-background/40">© 2026 Muziclub – Learn and Live Music. All rights reserved.</p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((t) => (
              <a key={t} href="#" className="text-background/40 hover:text-primary transition-colors">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-[120px] pointer-events-none" />
    </footer>
  );
};

export default Footer;
