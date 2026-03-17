import { MapPin, Phone, Clock, Mail, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const centres = [
  {
    name: "Baner",
    badge: "🏢 Head Office",
    address: "Office 11 & 12, Aditi Commerce, Baner Road, Pune – 411069",
    landmark: "Above Bikaner Sweets",
    phone: "+91 9156303400",
    email: "enquiries@muziclub.com",
    hours: "Mon – Sat: 9 AM – 9 PM",
    rating: "4.8",
    reviews: "345+",
    mapUrl: "https://maps.google.com/?q=Aditi+Commerce+Baner+Road+Pune+411069",
    img: "/homepage_banners/banner_1.png",
  },
  {
    name: "Pimple Saudagar",
    badge: "🎵 Academy",
    address: "2nd Floor, Radhika Avenue, Near Jagtap Dairy, Opp. McDonalds, Pune – 411027",
    landmark: "Opposite McDonald's, near Jagtap Dairy",
    phone: "+91 9156303400",
    email: "enquiries@muziclub.com",
    hours: "Mon – Sat: 10 AM – 8 PM",
    rating: "4.8",
    reviews: "183+",
    mapUrl: "https://maps.google.com/?q=Radhika+Avenue+Pimple+Saudagar+Pune",
    img: "/homepage_banners/banner_3.png",
  },
  {
    name: "Hinjawadi",
    badge: "🎵 Academy",
    address: "Spirea, S. 91/4, Bhumkar Das Gugre Rd, Wakad, Maharashtra – 411033",
    landmark: "Near Wakad",
    phone: "+91 9156303400",
    email: "enquiries@muziclub.com",
    hours: "Mon – Sat: 9 AM – 9 PM",
    rating: "4.7",
    reviews: "95+",
    mapUrl: "https://maps.google.com/?q=Spirea+Bhumkar+Das+Gugre+Rd+Wakad+Maharashtra",
    img: "/homepage_banners/banner_4.png",
  },
  {
    name: "Croydon, UK",
    badge: "🇬🇧 UK Centre",
    address: "Croydon, London, United Kingdom",
    landmark: "UK Online Coordination Centre",
    phone: "+44 7768928645",
    email: "online@muziclub.com",
    hours: "Mon – Sat: 10 AM – 8 PM (IST online)",
    rating: null,
    reviews: null,
    mapUrl: "https://maps.google.com/?q=Croydon+London+UK",
    img: "/homepage_banners/singing.png",
  },
];

const facilities = [
  { emoji: "🎸", title: "Practice Rooms", desc: "Dedicated soundproofed practice rooms at every Pune centre" },
  { emoji: "🥁", title: "Drum Kits", desc: "Full acoustic and electronic drum kits available for practice sessions" },
  { emoji: "🎹", title: "Keyboards & Pianos", desc: "Professional-grade keyboards and upright pianos" },
  { emoji: "🎤", title: "Vocal Studio", desc: "Dedicated vocal rooms with proper acoustic treatment" },
  { emoji: "🎵", title: "Sunday Jam Stage", desc: "Live stage with PA system for weekly Sunday Jam performances" },
  { emoji: "☕", title: "Lounge Area", desc: "Comfortable waiting area for parents and students" },
];

const Center = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#f7f7f9] py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Visit Us</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Music <span className="text-primary">Centres</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            3 academy centres across Pune and an online coordination centre in Croydon, UK — find your nearest Muziclub location.
          </p>
        </div>
      </section>

      {/* Online banner */}
      <section className="py-8 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto">
            <div className="text-3xl">💻</div>
            <div className="text-center sm:text-left">
              <p className="font-bold text-gray-900 text-sm">Can't visit in person? Learn Online!</p>
              <p className="text-xs text-gray-400 mt-0.5">All courses are available as 1-on-1 online classes — including for students in the UK, USA, and worldwide.</p>
            </div>
            <Link
              to="/online-programs"
              className="shrink-0 bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              Explore Online Classes →
            </Link>
          </div>
        </div>
      </section>

      {/* Centres Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Find a Centre Near You</h2>
            <p className="text-gray-400 text-sm mt-2">Walk in for a free trial class — no appointment needed</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {centres.map((c) => (
              <div
                key={c.name}
                className="bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden bg-gray-100">
                  <img
                    src={c.img}
                    alt={`Muziclub ${c.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur rounded-xl px-3 py-1 text-xs font-bold text-gray-800">
                    {c.badge}
                  </div>
                  {c.rating && (
                    <div className="absolute bottom-4 right-4 bg-white rounded-xl px-3 py-1.5 flex items-center gap-1.5 shadow-md">
                      <span className="text-primary font-extrabold text-sm">{c.rating} ⭐</span>
                      <span className="text-gray-400 text-[10px]">({c.reviews} reviews)</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-extrabold text-gray-900">Muziclub — {c.name}</h3>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm text-gray-600">{c.address}</p>
                        {c.landmark && <p className="text-xs text-primary/70 mt-0.5">{c.landmark}</p>}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-primary shrink-0" />
                      <a href={`tel:${c.phone}`} className="text-sm text-gray-600 hover:text-primary transition-colors">{c.phone}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <a href={`mailto:${c.email}`} className="text-sm text-gray-600 hover:text-primary transition-colors">{c.email}</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-gray-600">{c.hours}</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <a
                      href={c.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#f7f7f9] border border-gray-100 text-gray-700 text-xs font-bold py-2.5 rounded-full hover:border-primary hover:text-primary transition-colors"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Open in Maps
                    </a>
                    <Link
                      to="/contact"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary text-white text-xs font-bold py-2.5 rounded-full hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20"
                    >
                      Book Trial Class
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-[#f7f7f9] py-16 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">What's Inside</p>
            <h2 className="text-3xl font-extrabold text-gray-900">World-Class Facilities</h2>
            <p className="text-gray-400 text-sm mt-2">Everything you need to learn, practise, and perform</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <div className="text-3xl mb-3">{f.emoji}</div>
                <p className="text-sm font-bold text-gray-800 leading-snug">{f.title}</p>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-3">Ready to Walk In?</h2>
          <p className="text-gray-400 text-sm mb-6">Book your free trial and visit our nearest centre — or start online from anywhere.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              Book Free Trial Class
            </Link>
            <Link
              to="/online-programs"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              Explore Online Courses →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Center;
