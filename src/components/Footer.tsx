import { Music, Linkedin } from "lucide-react";

const footerLinks = {
  "About": ["About Muziclub", "Our Story", "Careers", "Blog"],
  "Courses": ["Guitar", "Piano / Keyboard", "Bollywood Vocals", "Indian Classical Vocals", "Western Vocals", "Drums"],
  "Resources": ["Student Showcase", "Colourful Chords", "Guru Gyan", "Sunday Jam"],
  "Support": ["Contact Us", "FAQs", "Get In Touch"],
};

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <Music className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold text-foreground">Muzi<span className="text-primary">club</span></span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Learn and Live Music.
            </p>
            <p className="text-xs text-muted-foreground mb-4">
              Online Music Classes and Academy Classes in Guitar, Keyboard, Vocals, and more from Qualified Teachers.
            </p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/muziclub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground text-sm mb-3">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">© 2026 Muziclub – Learn and Live Music. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
