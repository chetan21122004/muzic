import { Link } from "react-router-dom";

const footerLinks = {
  Vocals: [
    { name: "Bollywood / Hindi Film", slug: "popular-film-music-hindi" },
    { name: "Indian Classical Vocals", slug: "hindustani-classical-vocal" },
    { name: "Carnatic Classical Vocal", slug: "carnatic-classical-vocal" },
    { name: "Western Vocals", slug: "western-vocal" },
    { name: "Ghazal", slug: "ghazal" },
    { name: "Devotional", slug: "devotional" },
  ],
  Instruments: [
    { name: "Guitar – Acoustic", slug: "guitar-acoustic" },
    { name: "Guitar – Rock & Pop", slug: "guitar-rock-pop" },
    { name: "Piano", slug: "piano" },
    { name: "Keyboard", slug: "keyboard" },
    { name: "Violin", slug: "violin" },
    { name: "Flute", slug: "flute" },
  ],
  Percussion: [
    { name: "Drums", slug: "drums" },
    { name: "Tabla", slug: "tabla" },
    { name: "Ukulele", slug: "ukulele" },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl font-extrabold text-white">
                Muzi<span className="text-primary">club</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed mb-4">
              Learn and Live Music. Online & Academy classes in Guitar, Keyboard, Vocals, Drums, and more.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/themuziclub", label: "Facebook", icon: "f" },
                { href: "https://www.instagram.com/muziclub", label: "Instagram", icon: "ig" },
                { href: "https://www.youtube.com/@themuziclub", label: "YouTube", icon: "yt" },
                { href: "https://www.linkedin.com/company/muziclub", label: "LinkedIn", icon: "in" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-300 hover:bg-primary hover:text-white transition-colors"
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Muziclub", href: "/about" },
                { name: "Online Programs", href: "/online-programs" },
                { name: "Student Showcase", href: "/student-showcase" },
                { name: "Blog", href: "/blog" },
                { name: "Pricing", href: "/pricing" },
                { name: "Teach With Us", href: "/teach-with-us" },
                { name: "Contact Us", href: "/contact" },
              ].map((l) => (
                <li key={l.name}>
                  <Link to={l.href} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vocals */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Vocals</h4>
            <ul className="space-y-2">
              {footerLinks.Vocals.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Instruments */}
          <div>
            <h4 className="font-bold text-white text-sm mb-4">Instruments</h4>
            <ul className="space-y-2">
              {footerLinks.Instruments.map((c) => (
                <li key={c.slug}>
                  <Link to={`/courses/${c.slug}`} className="text-xs text-gray-400 hover:text-white transition-colors">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-bold text-white uppercase tracking-widest text-xs">Explore</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-400 hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/center" className="text-sm text-gray-400 hover:text-primary transition-colors">Our Centres</Link></li>
              <li><Link to="/store" className="text-sm text-gray-400 hover:text-primary transition-colors">Muziclub Store</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-400 hover:text-primary transition-colors">Pricing & Formats</Link></li>
              <li><Link to="/teach-with-us" className="text-sm text-gray-400 hover:text-primary transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p className="text-gray-500">© 2025 Muziclub – Learn and Live Music. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
