import { useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const WA_NUMBER = "919156303400";
const categories = ["All", "Guitars", "Keyboards", "Drums", "Vocals", "Accessories", "Books & Scores"];

const products = [
  {
    name: "Yamaha F310 Acoustic Guitar",
    category: "Guitars",
    price: "₹8,999",
    originalPrice: "₹11,500",
    rating: 4.8,
    reviews: 124,
    tag: "Best Seller",
    tagColor: "bg-primary text-white",
    img: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=600&q=80",
    desc: "Perfect for beginners. Steel-string acoustic. Includes capo and picks.",
  },
  {
    name: "Casio CT-S300 Keyboard",
    category: "Keyboards",
    price: "₹4,499",
    originalPrice: "₹5,999",
    rating: 4.7,
    reviews: 89,
    tag: "Popular",
    tagColor: "bg-emerald-500 text-white",
    img: "https://images.unsplash.com/photo-1552422535-c45813c61732?w=600&q=80",
    desc: "61 keys, 48 built-in tones. Great for beginners and practice at home.",
  },
  {
    name: "Evans EQ4 Drumhead Pack",
    category: "Drums",
    price: "₹3,200",
    originalPrice: null,
    rating: 4.6,
    reviews: 41,
    tag: null,
    tagColor: "",
    img: "https://images.unsplash.com/photo-1543443374-b63afaaecb07?w=600&q=80",
    desc: "Single-ply coated drumheads for a warm, balanced tone. Pack of 3.",
  },
  {
    name: "Proel H80S Microphone Stand",
    category: "Vocals",
    price: "₹1,850",
    originalPrice: "₹2,400",
    rating: 4.5,
    reviews: 56,
    tag: "On Sale",
    tagColor: "bg-amber-500 text-white",
    img: "https://images.unsplash.com/photo-1516280440502-8610eb675546?w=600&q=80",
    desc: "Height-adjustable, heavy-duty base. Perfect for practice and small performances.",
  },
  {
    name: "Guitar Capo – Trigger Style",
    category: "Accessories",
    price: "₹299",
    originalPrice: "₹499",
    rating: 4.9,
    reviews: 215,
    tag: "Top Rated",
    tagColor: "bg-purple-500 text-white",
    img: "https://images.unsplash.com/photo-1605020420620-20c943cc4669?w=600&q=80",
    desc: "Quick release trigger style capo. Fits acoustic and electric guitars.",
  },
  {
    name: "Trinity Rock & Pop Grade 1–3 Book",
    category: "Books & Scores",
    price: "₹1,200",
    originalPrice: null,
    rating: 4.7,
    reviews: 33,
    tag: null,
    tagColor: "",
    img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=600&q=80",
    desc: "Official Trinity College London syllabus book for Guitar grades 1, 2 & 3.",
  },
  {
    name: "D'Addario EXL110 Guitar Strings",
    category: "Accessories",
    price: "₹450",
    originalPrice: "₹599",
    rating: 4.9,
    reviews: 302,
    tag: "Best Seller",
    tagColor: "bg-primary text-white",
    img: "https://images.unsplash.com/photo-1516961642265-531546e84af2?w=600&q=80",
    desc: "Regular light nickel wound electric guitar strings (10–46). Pack of 2.",
  },
  {
    name: "Korg MA-2 Metronome",
    category: "Accessories",
    price: "₹1,999",
    originalPrice: "₹2,499",
    rating: 4.8,
    reviews: 78,
    tag: null,
    tagColor: "",
    img: "https://images.unsplash.com/photo-1460036521480-a3ff487f3b52?w=600&q=80",
    desc: "Beat-Bank metronome with 100 rhythm patterns. Great for all instruments.",
  },
];

const Store = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#f7f7f9] py-14 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Muziclub Store</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                Music Gear &amp; <span className="text-primary">Essentials</span>
              </h1>
              <p className="text-gray-400 mt-3 text-base max-w-lg">
                Instruments, accessories, books, and everything your musical journey needs — curated by our teachers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary shadow-lg shadow-primary/20"
                    : "bg-white text-gray-500 border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 bg-gray-50 overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }}
                  />
                  {product.tag && (
                    <div className={`absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${product.tagColor}`}>
                      {product.tag}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wide mb-1">{product.category}</p>
                  <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-3 flex-1">{product.desc}</p>

                  {/* Rating */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3 h-3 ${j < Math.floor(product.rating) ? "fill-primary text-primary" : "text-gray-200"}`}
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-400">({product.reviews})</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-base font-extrabold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-300 line-through ml-2">{product.originalPrice}</span>
                      )}
                    </div>
                    <a
                      href={`https://wa.me/${WA_NUMBER}?text=I'm%20interested%20in%20buying%20the%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 bg-[#25D366] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#20bd5a] transition-colors shadow-sm shadow-[#25D366]/30"
                    >
                      <WhatsAppIcon className="w-4 h-4 fill-white" />
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;
