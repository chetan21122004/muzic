import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wrench } from "lucide-react";

const Store = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center relative overflow-hidden bg-[#110103] py-16 z-10">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/new_imgs/Copy of DSC00504.webp"
            alt="Muziclub Store"
            className="w-full h-full object-cover filter brightness-[0.4] grayscale-[50%]"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#110103] via-[#9b0914]/80 to-transparent z-0 pointer-events-none"></div>

        <div className="relative container mx-auto px-6 lg:px-16 text-center z-10 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="w-24 h-24 rounded-[2rem] bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center mb-8 shadow-2xl shadow-[#e31837]/20">
            <Wrench className="w-10 h-10 text-[#ff2a40]" />
          </div>
          <p className="text-[#ff2a40] text-xs font-black uppercase tracking-[0.3em] mb-4 drop-shadow-md">New Gear Coming Soon</p>
          <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-serif font-medium text-white leading-[1.1] mb-6 drop-shadow-xl tracking-tight max-w-4xl">
            Store is Under <br className="hidden sm:block" /> Construction.
          </h1>
          <p className="text-white/80 max-w-xl mx-auto text-base sm:text-lg leading-relaxed mb-10 drop-shadow-md font-medium">
            We're upgrading our online shop to bring you the best instruments, books, and accessories. Please check back soon or visit one of our academies.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="inline-flex items-center justify-center px-10 py-4 rounded-md bg-[#e31837] text-white text-[15px] font-bold transition-transform hover:scale-105 shadow-[0_10px_20px_rgba(227,24,55,0.3)]">
              Return Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Store;
