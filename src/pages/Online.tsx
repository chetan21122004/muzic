import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Online = () => (
  <div className="min-h-screen bg-background font-secondary text-foreground">
    <Navbar />
    <section className="relative overflow-hidden bg-[#110103] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9b0914]/90 via-[#050505] to-black pointer-events-none" />
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 max-w-3xl text-center">
        <p className="text-primary text-xs font-extrabold uppercase tracking-[0.28em] mb-4">Online segment</p>
        <h1 className="font-core text-3xl md:text-5xl font-bold mb-6 leading-tight">
          Learn with <span className="font-core">muziclub</span> — online
        </h1>
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
          This site currently highlights our in-person academies. We are building a dedicated online experience —
          live classes worldwide. Bookmark this page; full curriculum, schedules, and enrollment will land here.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/enquire"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg"
          >
            Book a Free Demo
          </Link>
         
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Online;
