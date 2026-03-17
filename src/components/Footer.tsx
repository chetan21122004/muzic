import { Link } from "react-router-dom";

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
  resources: [
    { name: "Blogs", href: "/blog" },
    { name: "Student Showcase", href: "/student-showcase" },
  ],
  contact: [
    { name: "Contact Us", href: "/contact" },
    { name: "Our Centres", href: "/center" },
    { name: "Pricing", href: "/pricing" },
    { name: "Teach With Us", href: "/teach-with-us" },
  ],
};

const Footer = () => {
  return (
    <footer className="text-gray-400 pt-12 pb-6" style={{ background: "#111117" }}>
      <div className="container mx-auto px-4">
        {/* About Muziclub paragraph */}
        <div className="mb-10 max-w-4xl">
          <h3 className="text-white font-bold text-lg mb-3">
            Muziclub – Learn and Live Music
          </h3>
          <p className="text-xs leading-relaxed text-gray-500">
            Muziclub is a platform driven by people who live music and have a passion to develop the same with whoever they touch. 
            Our model has the right balance of discipline and flexibility needed to learn music. Classes are designed to provide personalized focus, 
            practice facilities, and fulfilling engagement with passionate teachers. We are based at Pune, India with presence in Croydon, UK.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10">
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">About</h4>
            <ul className="space-y-1.5">
              {footerLinks.about.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-xs text-gray-500 hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Vocals</h4>
            <ul className="space-y-1.5">
              {footerLinks.music.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-xs text-gray-500 hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Strings</h4>
            <ul className="space-y-1.5">
              {footerLinks.strings.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-xs text-gray-500 hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Keyboard</h4>
            <ul className="space-y-1.5">
              {footerLinks.keyboard.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-xs text-gray-500 hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3 mt-5">Percussion</h4>
            <ul className="space-y-1.5">
              {footerLinks.percussion.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-xs text-gray-500 hover:text-white transition-colors">{c.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Resources</h4>
            <ul className="space-y-1.5">
              {footerLinks.resources.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-xs text-gray-500 hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Connect</h4>
            <ul className="space-y-1.5">
              {footerLinks.contact.map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-xs text-gray-500 hover:text-white transition-colors">{l.name}</Link>
                </li>
              ))}
            </ul>
            {/* Social */}
            <div className="flex gap-2 mt-4">
              {["Facebook", "Instagram", "YouTube", "LinkedIn"].map((s) => (
                <span key={s} className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                  {s[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-gray-600">
          <p>© 2026 Muziclub – Learn and Live Music. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
