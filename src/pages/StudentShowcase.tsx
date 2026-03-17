import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const showcases = [
  {
    name: "Malay Kale",
    instrument: "Drums",
    tag: "🥁",
    img: "/instructor/Subham Chand Sahu_Drums.webp",
    cover: "No One Knows – Queens of the Stone Age Cover",
    date: "October 2022",
    href: "https://muziclub.com/student-showcase/",
  },
  {
    name: "Arushi Deshpande",
    instrument: "Guitar",
    tag: "🎸",
    img: "/instructor/Harsh-Bagle-guitar.webp",
    cover: "James Arthur covers & originals",
    date: "September 2022",
    href: "https://muziclub.com/student-showcase/",
  },
  {
    name: "Nirav Chakrabarti",
    instrument: "Guitar",
    tag: "🎸",
    img: "/homepage_banners/instrument.png",
    cover: "Master Of Puppets – Metallica Cover",
    date: "August 2022",
    href: "https://muziclub.com/student-showcase/",
  },
  {
    name: "Charan Raavi & Varun Raavi",
    instrument: "Keyboard",
    tag: "🎹",
    img: "/homepage_banners/banner_3.png",
    cover: "Learning keyboard for almost a year",
    date: "June 2022",
    href: "https://muziclub.com/student-showcase/",
  },
];

const StudentShowcase = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#f7f7f9] py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Talent &amp; Performances</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Student <span className="text-primary">Showcase</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Our students don't just learn music — they perform it. Watch and celebrate their journey at our Sunday Jams and beyond.
          </p>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcases.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur rounded-xl px-2 py-1 text-base font-bold shadow-sm">
                    {s.tag}
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-extrabold text-gray-900 text-sm">{s.name}</p>
                  <p className="text-xs text-primary font-semibold mt-0.5">{s.instrument}</p>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">{s.cover}</p>
                  <p className="text-[10px] text-gray-300 mt-2">{s.date}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f7f7f9] py-14 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Want to be featured here?</h2>
          <p className="text-gray-400 text-sm mb-6">
            Join Muziclub, perform at our Sunday Jam sessions, and you could be our next featured showcase student!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            Book a Free Trial Class
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentShowcase;
