import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { courseCategories } from "@/data/courses";

const navItems = [
  { label: "Courses", hasDropdown: true },
  { label: "Academies", href: "/center" },
  { label: "Store", href: "/store" },
  { label: "Showcase", href: "/student-showcase" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCoursesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileCoursesOpen(false);
    setCoursesOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`sticky top-0 w-full transition-all duration-500 z-[60] ${scrolled
        ? "bg-[#050505]/80 backdrop-blur-2xl border-b border-white/5 py-1"
        : "bg-[#0a0a0b] border-b border-transparent"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <Link to="/" className="shrink-0 transition-opacity hover:opacity-80 duration-300">
          <img
            src="/logo.png"
            alt="Muziclub Logo"
            className="h-16 w-auto object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href;

            return item.hasDropdown ? (
              <div key={item.label} ref={dropdownRef} className="relative group">
                <button
                  onMouseEnter={() => setCoursesOpen(true)}
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className={`flex items-center gap-1.5 text-[13px] font-semibold tracking-wide transition-colors ${coursesOpen || isActive
                    ? "text-white"
                    : "text-white/50 hover:text-white"
                    }`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${coursesOpen ? "rotate-180 text-white" : "opacity-50"}`} />
                </button>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute top-full -left-32 pt-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${coursesOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-4 invisible pointer-events-none"}`}
                  onMouseLeave={() => setCoursesOpen(false)}
                >
                  <div className="bg-[#0f0f11]/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] p-10 min-w-[800px]">
                    <div className="grid grid-cols-4 gap-x-12 gap-y-10">
                      {courseCategories.map((cat) => (
                        <div key={cat.title}>
                          <h4 className="font-bold text-white/30 mb-5 text-[10px] uppercase tracking-[0.2em] border-b border-white/5 pb-3">
                            {cat.title}
                          </h4>
                          <ul className="space-y-3.5">
                            {cat.courses.map((course) => (
                              <li key={course.slug}>
                                <Link
                                  to={`/courses/${course.slug}`}
                                  className="text-[13px] font-medium text-white/60 hover:text-white transition-colors block"
                                >
                                  {course.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between">
                      <p className="text-xs text-white/30 font-medium">Over 30+ certified courses available.</p>
                      <Link to="/courses" className="text-[13px] font-bold text-white hover:text-primary flex items-center gap-2 group transition-colors">
                        Explore All Programs <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.href || "#"}
                className={`relative text-[13px] font-semibold tracking-wide transition-colors ${isActive
                  ? "text-white"
                  : "text-white/50 hover:text-white"
                  }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(225,29,72,0.8)]" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Right CTAs */}
        <div className="flex items-center gap-8">
          <Link
            to="/teach-with-us"
            className="hidden xl:block text-[13px] font-semibold text-white/40 hover:text-white transition-colors"
          >
            Careers
          </Link>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-white text-black hover:bg-white/90 font-bold px-7 py-2.5 rounded-full text-[13px] transition-transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
          >
            Book Free Trial
          </Link>

          <button
            className="xl:hidden text-white/50 hover:text-white transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Menu Overlay ── */}
      {mobileOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full bg-[#0a0a0b] border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-8 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="py-2">
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className="flex items-center justify-between w-full py-3 text-sm font-bold text-white border-b border-white/5"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? "rotate-180 text-white" : "text-white/40"}`} />
                  </button>
                  {mobileCoursesOpen && (
                    <div className="pl-4 pb-4 space-y-6 mt-6 border-l border-white/10 ml-2 animate-in fade-in duration-300">
                      {courseCategories.map((cat) => (
                        <div key={cat.title}>
                          <h4 className="font-bold text-white/30 text-[10px] mb-4 uppercase tracking-[0.15em]">{cat.title}</h4>
                          <ul className="space-y-4">
                            {cat.courses.map((course) => (
                              <li key={course.slug}>
                                <Link
                                  to={`/courses/${course.slug}`}
                                  className="text-sm font-medium text-white/60 hover:text-white transition-colors block"
                                >
                                  {course.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href || "#"}
                  className="flex justify-between items-center py-4 text-sm font-bold text-white border-b border-white/5"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-8 pb-6 flex flex-col gap-4">
              <Link
                to="/teach-with-us"
                className="w-full text-center py-3.5 text-sm font-bold text-white/60 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className="w-full text-center py-3.5 text-sm font-bold text-black bg-white rounded-2xl hover:bg-white/90 transition-colors"
              >
                Book Your Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
