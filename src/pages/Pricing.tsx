import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const plans = [
  {
    title: "Hobby Classes",
    emoji: "🎸",
    tagline: "Learn music for passion",
    highlight: false,
    points: [
      "Customized to your preferences & goals",
      "Play the songs and styles you love",
      "Bollywood / Rock / Jazz / Pop — your choice",
      "Flexible pace, no exam pressure",
      "1-on-1 online via video call",
      "Or walk into any Pune academy centre",
    ],
    cta: "Book Free Trial",
    note: "Contact us for pricing",
  },
  {
    title: "Grade Classes",
    emoji: "⭐",
    tagline: "Structured & internationally certified",
    highlight: true,
    points: [
      "Syllabus from Trinity, ABRSM, RSL or GMV Mandal",
      "Clear level progression — Beginner to Advanced",
      "Exam prep & technique coaching",
      "Internationally recognised certificate on passing",
      "Group classes capped at 3 students max",
      "1-on-1 option available on request",
    ],
    cta: "Book Free Trial",
    note: "Contact us for pricing",
  },
];

const certs = [
  {
    name: "Trinity College London",
    logo: "🎓",
    desc: "Rock & Pop exam board — Guitar, Piano, Vocals",
    href: "https://www.trinitycollege.com",
  },
  {
    name: "ABRSM",
    logo: "📋",
    desc: "Associated Board of the Royal Schools of Music",
    href: "https://www.abrsm.org",
  },
  {
    name: "RSL (Rockschool)",
    logo: "🎸",
    desc: "Rockschool grades for contemporary music",
    href: "https://www.rslawards.com",
  },
  {
    name: "G.M.V. Mandal Mumbai",
    logo: "🪗",
    desc: "Indian classical music certification",
    href: "https://www.gmvmandal.org",
  },
];

const faqs = [
  {
    q: "How does the free trial class work?",
    a: "Book a free 1-on-1 class with one of our expert teachers. No commitment — you see if we're a good fit before enrolling.",
  },
  {
    q: "Are classes online or in-person?",
    a: "Both! You can attend 1-on-1 live video classes from anywhere, or visit any of our 3 Pune academy centres (Baner, Pimple Saudagar, Hinjawadi).",
  },
  {
    q: "How many students per class?",
    a: "Hobby classes and most Grade classes are 1-on-1. Group classes are capped at a maximum of 3 students.",
  },
  {
    q: "Can I switch between Hobby and Grade classes?",
    a: "Yes — our teachers will advise you and you can switch between formats based on your progress and goals.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#f7f7f9] py-16 border-b border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">Pricing & Formats</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Choose the format that fits your goal — casual hobby classes or structured certification courses. Contact us for exact pricing tailored to your course and schedule.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 border-2 flex flex-col transition-all ${
                  plan.highlight
                    ? "border-primary bg-white shadow-2xl shadow-primary/10"
                    : "border-gray-100 bg-[#f7f7f9]"
                }`}
              >
                {plan.highlight && (
                  <div className="inline-block self-start bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}
                <div className="text-4xl mb-3">{plan.emoji}</div>
                <h2 className="text-xl font-extrabold text-gray-900 mb-1">{plan.title}</h2>
                <p className="text-sm text-gray-400 mb-6">{plan.tagline}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.points.map((p, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${plan.highlight ? "bg-primary/15" : "bg-gray-200"}`}>
                        <Check className={`w-2.5 h-2.5 ${plan.highlight ? "text-primary" : "text-gray-500"}`} />
                      </div>
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`block w-full text-center font-bold py-3.5 rounded-full text-sm transition-colors ${
                    plan.highlight
                      ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25"
                      : "bg-gray-900 text-white hover:bg-gray-700"
                  }`}
                >
                  {plan.cta} →
                </Link>
                <p className="text-[10px] text-gray-400 text-center mt-3">{plan.note}</p>
              </div>
            ))}
          </div>

          {/* Contact Band */}
          <div className="mt-10 max-w-3xl mx-auto bg-primary/5 border border-primary/15 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900 text-sm">Not sure which plan is right for you?</p>
              <p className="text-xs text-gray-400 mt-0.5">Call or WhatsApp us — our team will guide you.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919156303400"
                className="flex items-center justify-center gap-2 bg-primary text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
              >
                📞 +91 91563 03400
              </a>
              <a
                href="https://wa.me/919156303400"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-green-600 transition-colors"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-[#f7f7f9] py-16 border-y border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Recognised By</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Certifications We Offer</h2>
            <p className="text-gray-400 text-sm mt-2">Pass a Grade exam during your course and earn an internationally recognised certificate</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {certs.map((c, i) => (
              <a
                key={i}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div className="text-3xl mb-3">{c.logo}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary transition-colors">{c.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#f7f7f9] rounded-2xl p-6 border border-gray-100">
                <p className="font-bold text-gray-900 text-sm mb-2">{faq.q}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center space-y-5">
          <h2 className="text-3xl font-extrabold text-white">Start with a Free Trial Class</h2>
          <p className="text-white/80 max-w-md mx-auto text-sm">No credit card needed. Just show up (online or in-person) and experience the Muziclub difference.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-3.5 rounded-full hover:bg-gray-100 transition-colors shadow-xl text-sm"
          >
            Book My Free Trial →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
