import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

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
  { name: "About muziclub", href: "/about" },
  { name: "Academies", href: "/center" },
  { name: "Performances", href: "/student-showcase" },
  { name: "Store", href: "/store" },
  { name: "Teach With Us", href: "/teach-with-us" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const centres = [
  { name: "Baner (HQ)", address: "Office 11 & 12, Aditi Commerce, Baner Road, Pune 411069", phone: "+91 91563 03400", whatsapp: "919156303400" },
  { name: "Pimple Saudagar (Flagship)", address: "2nd Floor, Radhika Avenue, Pune 411027", phone: "+91 77699 87599", whatsapp: "917769987599" },
  { name: "Wakad Office (Flagship)", address: "Spirea, S.91/4, Bhumkar Das Gugre Rd, Wakad 411033", phone: "+91 80805 87033", whatsapp: "918080587033" },
  { name: "Croydon, UK", address: "Croydon, London, United Kingdom", phone: "+44 7768 928 645", whatsapp: "447424233605" },
];

const footerCentreWhatsAppHref = (num: string, centreName: string) =>
  `https://wa.me/${num}?text=${encodeURIComponent(`Hi! I'm interested in ${centreName} — muziclub.`)}`;

const Footer = () => {
  return (
    <footer className="relative overflow-hidden font-secondary" style={{ background: "#0b0b0c", color: "#ffffff" }}>
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none select-none z-0">
        <p className="text-[13vw] font-black text-white/[0.02] tracking-tighter whitespace-nowrap">LIVE MUSIC</p>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* ── Top Section ── */}
        <div className="py-14 border-b border-white/5 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <img src="/logo.png" alt="Muziclub Logo" className="h-20 w-auto object-contain self-start drop-shadow-lg" />
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              India's leading music academy — certified classes in vocals, guitar, piano, drums, and more. Learn from passionate teachers who live music.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+919156303400" className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-white/85 group-hover:text-white transition-colors font-medium">+91 9156 303 400</span>
              </a>
              <a href="tel:+447768928645" className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-white/85 group-hover:text-white transition-colors font-medium">+44 7768 928 645 <span className="text-white/70 text-xs">(UK)</span></span>
              </a>
              <a href="mailto:enquiries@muziclub.com" className="flex items-center gap-3 group w-fit">
                <div className="w-8 h-8 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm text-white/85 group-hover:text-white transition-colors font-medium">enquiries@muziclub.com</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="font-tertiary text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-5">Our Academies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {centres.map((c) => (
                <div key={c.name} className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 hover:border-white/10 hover:bg-white/[0.04] transition-all">
                  <p className="text-sm font-bold text-white mb-2">{c.name}</p>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <p className="text-xs text-white/75 leading-relaxed">{c.address}</p>
                  </div>
                  <div className="flex flex-col gap-2 mt-1">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                      <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="text-xs text-white/75 hover:text-primary transition-colors">{c.phone}</a>
                    </div>
                    <a
                      href={footerCentreWhatsAppHref(c.whatsapp, c.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#25D366] hover:text-[#4ade80] transition-colors w-fit"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-current shrink-0" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Middle Section ── */}
        <div className="py-12 border-b border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-2">
            <p className="font-tertiary text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-5">Popular Courses</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {courseLinks.map((c) => (
                <Link key={c.slug} to={`/courses/${c.slug}`} className="text-sm text-white/80 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-2.5"></span>
                  {c.name}
                </Link>
              ))}
            </div>
            <Link to="/courses" className="mt-4 inline-flex items-center text-xs font-bold text-primary/85 hover:text-primary transition-colors gap-1">
              View all 30+ courses →
            </Link>
          </div>

          <div>
            <p className="font-tertiary text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-5">Quick Links</p>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-sm text-white/80 hover:text-primary transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-2.5"></span>
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-tertiary text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-5">Follow Us</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {[
                { Icon: Instagram, href: "https://instagram.com/muziclub", label: "Instagram" },
                { Icon: Facebook, href: "https://facebook.com/themuziclub", label: "Facebook" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" title={label} className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-primary/40 hover:bg-primary/10 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <p className="font-tertiary text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-3">Our Channels</p>
            <div className="flex flex-col gap-2.5 mb-8">
              <a href="https://www.youtube.com/@themuziclub" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-semibold text-white/85 hover:text-white group transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#ff0000]/10 border border-[#ff0000]/20 flex items-center justify-center group-hover:bg-[#ff0000] transition-colors"><Youtube className="w-3.5 h-3.5 text-[#ff0000] group-hover:text-white transition-colors" /></div>
                The <span className="font-core">muziclub</span> Official
              </a>
              <a href="https://www.youtube.com/@muziclubpimplesaudagar" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-xs font-semibold text-white/85 hover:text-white group transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#ff0000]/10 border border-[#ff0000]/20 flex items-center justify-center group-hover:bg-[#ff0000] transition-colors"><Youtube className="w-3.5 h-3.5 text-[#ff0000] group-hover:text-white transition-colors" /></div>
                <span className="font-core">muziclub</span> Pimple Saudagar
              </a>
            </div>

            <p className="font-tertiary text-[10px] font-extrabold text-primary uppercase tracking-[0.2em] mb-3">Certifications</p>
            <div className="space-y-1.5">
              {["Trinity College London", "ABRSM", "RSL – Rockschool", "G.M.V. Mumbai"].map((cert) => (
                <p key={cert} className="text-xs text-white/70 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
                  {cert}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/70 font-medium tracking-wide">
            © {new Date().getFullYear()} COSIO. All rights reserved. Let the music play.
          </p>
          <div className="flex items-center gap-5 text-xs text-white/70">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/about" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-40 pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
