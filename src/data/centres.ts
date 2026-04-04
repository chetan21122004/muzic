/** Shared academy locations for centre overview, branch landings, and footer. */

export interface Centre {
  slug: string | null;
  name: string;
  tagline: string;
  badge: string;
  address: string;
  landmark: string | null;
  phone: string;
  altPhone: string | null;
  email: string;
  hours: string;
  rating: string | null;
  reviews: string | null;
  mapUrl: string;
  img: string;
  whatsapp: string;
}

export const allCentres: Centre[] = [
  {
    slug: "baner",
    name: "Baner",
    tagline: "Head Office & Academy",
    badge: "HEAD OFFICE",
    address: "Office 11 & 12, Aditi Commerce, Baner Road, Opp. Hillview Residency, Pune – 411045",
    landmark: "Above Bikaner Sweets",
    phone: "+91 91563 03400",
    altPhone: null,
    email: "enquiries@muziclub.com",
    hours: "Daily: 10 AM – 8 PM",
    rating: "4.8",
    reviews: "360+",
    mapUrl: "https://maps.google.com/?q=Muziclub+Baner+Aditi+Commerce+Baner+Road+Pune",
    img: "/new_imgs/Copy of DSC00403.webp",
    whatsapp: "919156303400",
  },
  {
    slug: "pimple-saudagar",
    name: "Pimple Saudagar",
    tagline: "Flagship Academy",
    badge: "FLAGSHIP",
    address: "2nd Floor, Radhika Avenue, near Jagtap Dairy, beside Savitribai Phule Park, Pune – 411057",
    landmark: "Near Savitribai Phule Park",
    phone: "+91 77699 87599",
    altPhone: "+91 75070 02008",
    email: "mzps1319@gmail.com",
    hours: "Daily: 11 AM – 8 PM",
    rating: "4.9",
    reviews: "544+",
    mapUrl: "https://maps.google.com/?q=Muziclub+Pimple+Saudagar+Radhika+Avenue+Pune",
    img: "/new_imgs/Copy of DSC00590.webp",
    whatsapp: "917769987599",
  },
  {
    slug: "wakad",
    name: "Wakad Office",
    tagline: "Flagship Academy",
    badge: "FLAGSHIP",
    address: "Spirea, S. 91/4, Bhumkar Das Gugre Rd, near Silver Spoon, Bhumkar Nagar, Wakad, Pune – 411033",
    landmark: "Near Silver Spoon, Bhumkar Nagar",
    phone: "+91 80805 87033",
    altPhone: "+91 75078 10055",
    email: "mzspirea@gmail.com",
    hours: "Daily: 11 AM – 8 PM",
    rating: "4.9",
    reviews: "430+",
    mapUrl: "https://maps.google.com/?q=Muziclub+Wakad+Spirea+Bhumkar+Das+Gugre+Rd+Pune",
    img: "/new_imgs/Copy of DSC00677 (1).webp",
    whatsapp: "918080587033",
  },
  {
    slug: null,
    name: "Croydon, UK",
    tagline: "UK Coordination Centre",
    badge: "UK CENTRE",
    address: "Croydon, London, United Kingdom – CR0 5RR",
    landmark: "South London — Online Coordination & UK Classes",
    phone: "+44 7424 233 605",
    altPhone: "+44 203 769 0013",
    email: "uk@muziclub.com",
    hours: "Mon – Sat: 10 AM – 8 PM (IST online)",
    rating: null,
    reviews: null,
    mapUrl: "https://maps.google.com/?q=Croydon+London+CR0+5RR+UK",
    img: "/new_imgs/Copy of DSC00711 (1).webp",
    whatsapp: "447424233605",
  },
];

export const puneCentres = allCentres.filter((c): c is Centre & { slug: string } => c.slug !== null);

const bySlug = new Map<string, Centre>(
  puneCentres.map((c) => [c.slug, c])
);

export function getCentreBySlug(slug: string): Centre | undefined {
  return bySlug.get(slug);
}

export function branchHref(slug: string): string {
  return `/muziclub-${slug}`;
}

export const centreWhatsAppHref = (num: string, centreName: string) =>
  `https://wa.me/${num}?text=${encodeURIComponent(`Hi! I'm interested in ${centreName} — muziclub.`)}`;

export const centreFacilities = [
  { icon: "🎸", title: "Practice Rooms", desc: "Dedicated soundproofed practice rooms at every Pune centre" },
  { icon: "🥁", title: "Drum Kits", desc: "Full acoustic and electronic drum kits for all practice sessions" },
  { icon: "🎹", title: "Keyboards & Pianos", desc: "Professional-grade keyboards and upright pianos" },
  { icon: "🎤", title: "Recording Studio", desc: "Dedicated vocal rooms with proper acoustic treatment" },
  { icon: "🎵", title: "Sunday Jam Stage", desc: "Live stage with PA system for weekly Sunday Jam performances" },
  { icon: "☕", title: "Lounge Area", desc: "Comfortable waiting area for parents and students" },
];

export const centreStats = [
  { value: "25,000+", num: 25000, suffix: "+", label: "Students Taught" },
  { value: "75+", num: 75, suffix: "+", label: "Teachers" },
  { value: "16+", num: 16, suffix: "+", label: "Years Experience" },
  { value: "4.9", num: 4.9, suffix: "", decimals: 1, label: "Google Rating", isRating: true },
];
