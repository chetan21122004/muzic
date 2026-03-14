import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { courseCategories } from "@/data/courses";

const navItems = [
  { label: "Courses", hasDropdown: true },
  { label: "Student Showcase", href: "/student-showcase" },
  { label: "About Us", href: "/about" },
  { label: "Centre", href: "/center" },
  { label: "Blog", href: "/blog" },
  { label: "Get In Touch", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobilCoursesOpen, setMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="hidden md:flex bg-zinc-900 text-zinc-300 py-2 px-4 text-xs justify-between items-center">
        <div className="container mx-auto flex items-center gap-3">
          <span className="bg-primary text-white px-2 py-0.5 rounded font-bold uppercase text-[10px]">Latest</span>
          <a href="#" className="hover:text-white transition-colors truncate">
            Malay Kale – Drums Student / #studentshowcase – No One Knows – Drums Cover
          </a>
        </div>
      </div>
    
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Muziclub Logo" className="h-8 w-auto" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="text-lg font-bold text-foreground">Muzi<span className="text-primary">club</span></span>
          </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.label} ref={dropdownRef} className="relative">
                <button
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
                </button>

                {coursesOpen && (
                  <div className="absolute top-full left-0 mt-3 bg-popover border border-border rounded-xl shadow-2xl p-8 z-50 min-w-[700px]">
                    <div className="grid grid-cols-4 gap-8">
                      {courseCategories.map((cat) => (
                        <div key={cat.title}>
                          <h4 className="font-bold text-primary mb-3 text-sm uppercase tracking-wide">{cat.title}</h4>
                          <ul className="space-y-2">
                            {cat.courses.map((course) => (
                              <li key={course.slug}>
                                <Link
                                  to={`/courses/${course.slug}`}
                                  onClick={() => setCoursesOpen(false)}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                >
                                  {course.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.href || "#"} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold px-4">
            Book Free Trial
          </Button>
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 pb-4">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileCoursesOpen(!mobilCoursesOpen)}
                  className="flex items-center justify-between w-full py-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobilCoursesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobilCoursesOpen && (
                  <div className="pl-4 pb-2 space-y-3">
                    {courseCategories.map((cat) => (
                      <div key={cat.title}>
                        <h4 className="font-bold text-primary text-xs mb-1 uppercase tracking-wide">{cat.title}</h4>
                        {cat.courses.map((course) => (
                          <Link
                            key={course.slug}
                            to={`/courses/${course.slug}`}
                            onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
                            className="block py-1 text-sm text-muted-foreground hover:text-primary"
                          >
                            {course.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.href || "#"} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;
