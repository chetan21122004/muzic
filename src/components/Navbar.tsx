import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { courseCategories } from "@/data/courses";

const navItems = [
  { label: "Courses", hasDropdown: true },
  { label: "Our Centres", href: "/center" },
  { label: "Store", href: "/store" },
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
    <div className="sticky top-0 z-50 flex flex-col">
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs text-center overflow-hidden">
        <div className="ticker-animate">
          <span className="mx-8">🎵 Ukulele – 1 Month Crash Course! Enrol Now</span>
          <span className="mx-8">🥁 Sunday Jam every week — perform live with fellow students!</span>
          <span className="mx-8">🎸 International certifications: Trinity · ABRSM · RSL available</span>
          <span className="mx-8">🎵 Ukulele – 1 Month Crash Course! Enrol Now</span>
          <span className="mx-8">🥁 Sunday Jam every week — perform live with fellow students!</span>
          <span className="mx-8">🎸 International certifications: Trinity · ABRSM · RSL available</span>
        </div>
      </div>

      <nav className={`bg-white dark:bg-gray-900 transition-shadow duration-200 ${scrolled ? "shadow-md" : "border-b border-gray-100 dark:border-gray-800"}`}>
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo.png"
              alt="Muziclub"
              className="h-9 w-auto"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Muzi<span className="text-primary">club</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setCoursesOpen(!coursesOpen)}
                    className="flex items-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${coursesOpen ? "rotate-180" : ""}`} />
                  </button>

                  {coursesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-xl p-6 z-50 min-w-[660px]">
                      <div className="grid grid-cols-4 gap-6">
                        {courseCategories.map((cat) => (
                          <div key={cat.title}>
                            <h4 className="font-bold text-primary mb-3 text-xs uppercase tracking-widest">{cat.title}</h4>
                            <ul className="space-y-1.5">
                              {cat.courses.map((course) => (
                                <li key={course.slug}>
                                  <Link
                                    to={`/courses/${course.slug}`}
                                    onClick={() => setCoursesOpen(false)}
                                    className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary transition-colors block py-0.5"
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
                <Link
                  key={item.label}
                  to={item.href || "#"}
                  className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-2">
            <Link
              to="/teach-with-us"
              className="hidden lg:block text-sm font-medium text-gray-300 hover:text-primary transition-colors"
            >
              Teach With Us
            </Link>

            <Button
              size="sm"
              className="bg-primary text-white hover:bg-primary/90 font-semibold px-5 rounded-full text-sm shadow-sm"
              asChild
            >
              <Link to="/contact">Book Free Trial</Link>
            </Button>
            <button
              className="lg:hidden text-gray-300 p-1"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pb-4">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileCoursesOpen(!mobileCoursesOpen)}
                    className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-50 dark:border-gray-800"
                  >
                    {item.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileCoursesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileCoursesOpen && (
                    <div className="pl-3 pb-2 space-y-3 mt-2">
                      {courseCategories.map((cat) => (
                        <div key={cat.title}>
                          <h4 className="font-bold text-primary text-xs mb-1 uppercase tracking-wide">{cat.title}</h4>
                          {cat.courses.map((course) => (
                            <Link
                              key={course.slug}
                              to={`/courses/${course.slug}`}
                              onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
                              className="block py-1 text-sm text-gray-500 dark:text-gray-400 hover:text-primary"
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
                <Link
                  key={item.label}
                  to={item.href || "#"}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-sm font-medium text-gray-700 dark:text-gray-300 border-b border-gray-50 dark:border-gray-800"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="pt-3 flex items-center justify-between">
              <Link
                to="/teach-with-us"
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-gray-300"
              >
                Teach With Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
