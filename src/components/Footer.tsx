import { Music, Linkedin, ArrowUpRight, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const footerLinks = {
  "About": [
    { label: "About Muziclub", href: "/about" },
    { label: "Our Story", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  "Courses": [
    { label: "Guitar", href: "/courses/acoustic-guitar" },
    { label: "Piano / Keyboard", href: "/courses/keyboard" },
    { label: "Bollywood Vocals", href: "/courses/bollywood-vocals" },
    { label: "Indian Classical", href: "/courses/hindustani-vocals" },
    { label: "Western Vocals", href: "/courses/western-vocals" },
    { label: "Drums", href: "/courses/drums" },
  ],
  "Resources": [
    { label: "Student Showcase", href: "/student-showcase" },
    { label: "Tabs and Chords", href: "#" },
    { label: "Twist Covers", href: "#" },
    { label: "Riyaz", href: "#" },
    { label: "Sunday Jam", href: "#" },
  ],
  "Connect": [
    { label: "Contact Us", href: "/contact" },
    { label: "Centres", href: "/center" },
    { label: "FAQs", href: "/contact" },
    { label: "Get In Touch", href: "/contact" },
  ],
};

const socialLinks = [
  { href: "https://facebook.com/128940500464467", icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg> },
  { href: "https://instagram.com/muziclub", icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
  { href: "https://twitter.com/muziclub", icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg> },
  { href: "https://youtube.com/muziclub", icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg> },
  { href: "https://www.linkedin.com/company/muziclub", icon: <Linkedin className="w-4 h-4" /> },
];

const Footer = () => {
  return (
    <footer className="relative bg-background overflow-hidden">
      {/* Top decorative border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      {/* Newsletter / CTA strip */}
      <div className="relative border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0"
              >
                <Music className="w-7 h-7 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Start your music journey today</h3>
                <p className="text-sm text-muted-foreground">Book a free trial class — no commitment needed.</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-primary/90 transition-colors shrink-0"
            >
              Book Free Trial
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          {/* Brand column */}
          <div className="col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-5">
              <img src="/logo.png" alt="Muziclub Logo" className="h-8 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <span className="text-xl font-bold text-foreground">Muzi<span className="text-primary">club</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-xs">
              Online &amp; Academy music classes in Guitar, Keyboard, Vocals &amp; more. Pune's trusted music academy since 2013.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@muziclub.com" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary" />
                hello@muziclub.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors group">
                <Phone className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary" />
                +91 98765 43210
              </a>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5 text-primary/60" />
                Baner, Pimple Saudagar &amp; Hinjawadi, Pune
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-5 h-px bg-primary/50" />
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-50 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © 2026 Muziclub – Learn and Live Music. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((text) => (
              <a key={text} href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
