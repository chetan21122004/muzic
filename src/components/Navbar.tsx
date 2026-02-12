import { Music, ChevronDown, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = ["Courses", "Plans", "Superstar", "Latest Courses", "Blog", "Art of Music", "More"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Music className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">Artium<span className="text-primary"> Academy</span></span>
        </div>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold px-4">
            Free 1-on-1 Class
          </Button>
          <a href="#" className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground">Login</a>
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-4">
          {navItems.map((item) => (
            <a key={item} href="#" className="block py-2 text-sm text-muted-foreground hover:text-foreground">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
