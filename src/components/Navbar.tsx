import { ChevronDown, Menu, X, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { courseCategories } from "@/data/courses";

const navItems = [
  { label: "Courses", hasDropdown: true },
  { label: "Our Centres", href: "/center" },
  { label: "Store", href: "/store", badge: "NEW" },
  { label: "Student Showcase", href: "/student-showcase" },
  { label: "Offline Classes", href: "/offline-class" },
  { label: "About Us", href: "/about" },
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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ── Announcement Ticker (brand red) ── */}
      <div className="bg-gradient-to-r from-[#c0021e] via-primary to-[#c0021e] text-white py-2.5 px-4 text-xs tracking-wide text-center overflow-hidden font-medium relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="ticker-animate relative z-10">
          <span className="mx-8 font-semibold">🎵 Ukulele – 1 Month Crash Course! Enrol Now</span>
          <span className="mx-8 font-semibold">🥁 Sunday Jam every week — perform live!</span>
          <span className="mx-8 font-semibold text-white/90">🎸 International certifications: Trinity · ABRSM · RSL</span>
          <span className="mx-8 font-semibold">🎵 Ukulele – 1 Month Crash Course! Enrol Now</span>
          <span className="mx-8 font-semibold">🥁 Sunday Jam every week — perform live!</span>
          <span className="mx-8 font-semibold text-white/90">🎸 International certifications: Trinity · ABRSM · RSL</span>
        </div>
      </div>

      {/* ── Main Navbar ── */}
      <nav 
        className={`sticky top-0 w-full transition-all duration-300 z-[60] ${
          scrolled 
            ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl py-2 pl-4 pr-1" 
            : "bg-[#0a0a0f] border-b border-white/5 py-3 pl-4 pr-1"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-2">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 transition-transform hover:scale-[1.02] duration-300">
            <img
              src="/logo.png"
              alt="Muziclub Logo"
              className="h-12 w-auto object-contain drop-shadow-lg"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;

              return item.hasDropdown ? (
                <div key={item.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    className={`flex items-center gap-1.5 text-sm font-semibold transition-all px-4 py-2 rounded-full ${
                      coursesOpen 
                        ? "bg-primary/10 text-primary border border-primary/20" 
                        : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${coursesOpen ? "rotate-180 text-primary" : "text-white/40"}`} />
                  </button>

                  {/* Mega Menu Dropdown */}
                  {coursesOpen && (
                    <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 bg-[#111117]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-8 z-50 min-w-[700px] animate-in fade-in slide-in-from-top-4 duration-300">
                      <div className="grid grid-cols-4 gap-8">
                        {courseCategories.map((cat) => (
                          <div key={cat.title}>
                            <h4 className="flex items-center gap-2 font-black text-white mb-4 text-xs uppercase tracking-[0.15em] border-b border-white/10 pb-2">
                              {cat.title}
                            </h4>
                            <ul className="space-y-2.5">
                              {cat.courses.map((course) => (
                                <li key={course.slug}>
                                  <Link
                                    to={`/courses/${course.slug}`}
                                    onClick={() => setCoursesOpen(false)}
                                    className="text-sm font-medium text-white/50 hover:text-primary transition-colors flex items-center group relative w-full"
                                  >
                                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-3 mr-0 group-hover:mr-2"></span>
                                    {course.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                        <p className="text-xs text-white/30 font-medium">Over 30+ certified courses available.</p>
                        <Link to="/courses" onClick={()=>setCoursesOpen(false)} className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1 uppercase tracking-wider">
                          View All Courses &rarr;
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.href || "#"}
                  className={`relative text-sm font-semibold transition-all px-4 py-2 rounded-full flex items-center gap-2 group ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <span className="absolute bottom-0.5 left-4 right-4 h-[2px] bg-primary rounded-full" />
                  )}
                  {item.label}
                  {item.badge && (
                    <span className="bg-primary/20 border border-primary/30 text-primary text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest flex items-center gap-1 shadow-[0_0_10px_hsl(356_91%_47%_/_0.35)]">
                      <Sparkles className="w-2 h-2" />
                      {item.badge}
                    </span>
                  )}
                </Link>
              )
            })}
          </div>

          {/* Right CTAs Desktop + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/teach-with-us"
              className="hidden xl:block text-sm font-bold text-white/50 hover:text-primary transition-colors px-3"
            >
              Teach With Us
            </Link>

            <Link 
              to="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-gradient-to-r from-primary to-rose-600 hover:from-rose-600 hover:to-primary text-white font-extrabold px-6 py-2.5 rounded-full text-sm shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 glow-red"
            >
              Book Free Trial
            </Link>

            <button
              className="xl:hidden text-white bg-white/5 hover:bg-white/10 border border-white/10 p-2 rounded-full transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu Overlay ── */}
        {mobileOpen && (
          <div className="xl:hidden absolute top-full left-0 w-full bg-[#0a0a0f] border-b border-white/10 shadow-2xl animate-in slide-in-from-top-4 duration-300">
            <div className="px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.label} className="py-2">
                    <button
                      onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                      className="flex items-center justify-between w-full py-3 text-base font-bold text-white border-b border-white/5"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileCoursesOpen ? "rotate-180 text-primary" : "text-white/40"}`} />
                    </button>
                    {mobileCoursesOpen && (
                      <div className="pl-4 pb-4 space-y-6 mt-4 border-l border-white/10 ml-2">
                        {courseCategories.map((cat) => (
                          <div key={cat.title}>
                            <h4 className="font-extrabold text-primary text-[10px] mb-3 uppercase tracking-widest">{cat.title}</h4>
                            <ul className="space-y-3">
                              {cat.courses.map((course) => (
                                <li key={course.slug}>
                                  <Link
                                    to={`/courses/${course.slug}`}
                                    onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
                                    className="text-sm font-medium text-white/60 hover:text-white flex items-center gap-2"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/20"></span>
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
                    onClick={() => setMobileOpen(false)}
                    className="flex justify-between items-center py-4 text-base font-bold text-white border-b border-white/5"
                  >
                    {item.label}
                    {item.badge && (
                      <span className="bg-primary/20 text-primary text-[9px] font-black uppercase px-2 py-0.5 rounded-full tracking-widest">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                )
              )}
              <div className="pt-6 pb-4">
                <Link
                  to="/teach-with-us"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3 text-sm font-bold text-white/50 border border-white/10 rounded-xl mb-4"
                >
                  Careers / Teach With Us
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 text-sm font-extrabold text-white bg-gradient-to-r from-primary to-rose-600 rounded-xl shadow-lg shadow-primary/20"
                >
                  Book Your Free Trial Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
