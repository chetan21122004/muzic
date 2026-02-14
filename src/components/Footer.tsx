import { Music, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const footerLinks = {
  "About": ["About Us", "Careers", "Press", "Blog"],
  "Music": ["Courses", "Live Classes", "Certifications", "Teachers"],
  "Support": ["Help Center", "Contact Us", "FAQs", "Feedback"],
  "Legal": ["Privacy Policy", "Terms of Service", "Refund Policy"],
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
              <span className="font-bold text-foreground">Muziclub</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              Learn and Live Music. Best online music academy for all ages.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
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
        <div className="border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">© 2026 Muziclub – Learn and Live Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
