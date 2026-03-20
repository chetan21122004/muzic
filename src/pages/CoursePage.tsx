import { useParams, Link } from "react-router-dom";
import { getCourseBySlug, allCourses, PricingLevel } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronRight, Check, Video, Star, Award, Clock, MessageCircle } from "lucide-react";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const [selectedLevel, setSelectedLevel] = useState(2); // default to Proficient

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Course Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go back home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  const moreCourses = allCourses
    .filter((c) => c.slug !== course.slug)
    .slice(0, 5);

  const currentPricing: PricingLevel = course.pricing[selectedLevel];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center min-h-[420px]">
          <div className="relative z-10 py-16 lg:py-24 lg:w-1/2">
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Learn {course.name} Online
            </h1>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-lg">
              {course.heroDescription}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Book Your Free Class
            </Link>
          </div>
          <div className="hidden lg:block lg:w-1/2 relative h-full">
            <img
              src={course.heroImage}
              alt={course.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
            />
            {/* Gradient overlay blending into left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111116] via-[#111116]/40 to-transparent" />
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-white/5 blur-xl" />
        <div className="absolute bottom-10 right-40 w-20 h-20 rounded-full bg-white/5 blur-lg" />
      </section>

      {/* ═══ 2. WHY LEARN WITH US — 3 columns ═══ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-14">
            Why Learn {course.name} With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {course.features.map((f, i) => (
              <div key={i}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-xl">{f.icon}</span>
                </div>
                <h3 className="text-lg font-extrabold text-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. ABOUT / PRICING — Left tiers + Right details ═══ */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-14">
            About Our Online {course.name} Course
          </h2>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left: Pricing tier selector */}
            <div className="lg:w-[380px] shrink-0 space-y-3">
              {course.pricing.map((tier, i) => (
                <button
                  key={tier.name}
                  onClick={() => setSelectedLevel(i)}
                  className={`w-full text-left rounded-xl p-5 border-2 transition-all ${
                    selectedLevel === i
                      ? "border-primary bg-background shadow-md"
                      : "border-border bg-background/60 hover:border-border/80"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      {tier.label && (
                        <span className="text-xs text-muted-foreground font-medium">{tier.label}</span>
                      )}
                      <p className="font-extrabold text-foreground text-lg">{tier.name}</p>
                      {tier.discount && (
                        <span className="text-xs font-bold text-primary">{tier.discount}</span>
                      )}
                    </div>
                    <div className="text-right">
                      {tier.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">INR {tier.originalPrice}</p>
                      )}
                      <p className="font-bold text-foreground">INR {tier.pricePerClass}/class</p>
                    </div>
                  </div>
                  {/* Arrow indicator for selected */}
                  {selectedLevel === i && (
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 hidden lg:block">
                      <div className="w-3 h-3 rotate-45 bg-primary" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Right: Selected level details */}
            <div className="flex-1 bg-background rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-extrabold text-foreground mb-3">{currentPricing.name} Level</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {currentPricing.description}
              </p>

              {/* Price display */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-sm text-muted-foreground">Price</span>
                <span className="text-2xl font-extrabold text-primary">
                  INR {currentPricing.pricePerClass * currentPricing.totalClasses}
                </span>
                <span className="text-muted-foreground text-sm">/ {currentPricing.totalClasses} classes</span>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  Book Your Free Class
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
                >
                  Buy Now
                </Link>
              </div>

              {/* What you'll learn */}
              <h4 className="font-bold text-foreground mb-4">What will you learn</h4>
              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {currentPricing.learningPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              {/* Feature badges */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: Video, label: "1 on 1 Personal teacher" },
                  { icon: Star, label: "Live Masterclass" },
                  { icon: Award, label: "Course Certificate" },
                  { icon: Clock, label: "60 Mins Classes" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <badge.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-sm font-medium text-foreground">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. HOW IT WORKS — 3 steps with dividers ═══ */}
      <section className="py-16" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-extrabold text-white text-center mb-14">
            How Online {course.name} Classes Work At Muziclub
          </h2>
          <div className="flex flex-col md:flex-row gap-0">
            {[
              { step: "Step 1", text: `The first step in your ${course.name} learning journey at Muziclub begins when you register and Book A FREE trial class.` },
              { step: "Step 2", text: "Our academic expert will gauge your skills and expertise in your FREE trial class and recommend an appropriate course level to ensure a smooth learning experience." },
              { step: "Step 3", text: `The last step is to enrol in the course recommended by our academic expert and begin to learn ${course.name} under the guidance of our experienced teachers.` },
            ].map((s, i) => (
              <div key={i} className="flex flex-1">
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="text-white font-extrabold text-lg mb-3">{s.step}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block w-px bg-white/20 self-stretch mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. STILL UNSURE CTA ═══ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #111116 0%, #0a0a0d 100%)" }}>
        <div className="container mx-auto px-4 py-14 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              <span className="text-white">Still unsure?</span>{" "}
              <span className="text-white/70">Let us resolve those doubts!</span>
            </h2>
            <p className="text-white/50 text-sm mb-6">
              Schedule a FREE trial session and let our teachers solve all your queries.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Book Your Free Class
            </Link>
          </div>
          {/* Phone mockup */}
          <div className="hidden lg:block relative w-64 h-80">
            <div className="absolute inset-0 rounded-3xl border-4 border-white/20 overflow-hidden bg-black/30">
              <img
                src={course.heroImage}
                alt="Online class"
                className="w-full h-full object-cover opacity-80"
                onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. FACULTY HEAD ═══ */}
      {course.facultyHead && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Image */}
              <div className="lg:w-2/5">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src={course.facultyHead.image}
                    alt={course.facultyHead.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
                  />
                </div>
              </div>
              {/* Bio */}
              <div className="lg:w-3/5">
                <p className="text-primary font-bold text-sm uppercase tracking-wide mb-2">
                  Course Designed And Certified By
                </p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
                  {course.facultyHead.name}
                </h2>
                <p className="text-muted-foreground font-medium text-base mb-5">
                  {course.facultyHead.title}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {course.facultyHead.bio}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ 7. FEATURES — Left text + Right image (dark bg) ═══ */}
      <section className="py-16" style={{ background: "#1a1a2e" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Feature list */}
            <div className="lg:w-1/2 space-y-10">
              {[
                {
                  icon: "🔄",
                  title: "Experienced Dedicated Teachers",
                  desc: "Providing qualitative music education is our top priority. Every Muziclub teacher undergoes a rigorous evaluation process to ensure the most qualified teachers for you.",
                },
                {
                  icon: "📖",
                  title: "Personalised Learning Plans",
                  desc: "To ensure a smooth learning experience, we customise our lessons based on your skills and abilities. Every lesson is designed to ensure you're learning at a pace that is comfortable.",
                },
                {
                  icon: "🕐",
                  title: "Flexible Scheduling",
                  desc: "Worry not about missing class or falling behind. You can easily schedule your lessons at your convenience. Our online courses let you take your lessons anytime, anywhere.",
                },
              ].map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                    <span className="text-lg">{f.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-extrabold text-lg mb-2">{f.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image + caption */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/homepage_banners/banner_1.png"
                  alt="Muziclub Teachers"
                  className="w-full h-auto object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
                />
              </div>
              <p className="text-white text-2xl md:text-3xl font-extrabold leading-snug">
                Learn from the best teachers in the industry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. MORE COURSES — Dark carousel ═══ */}
      <section className="py-16" style={{ background: "#111127" }}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-10">
            More courses on Muziclub
          </h2>
          <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
            {moreCourses.map((c) => (
              <Link
                key={c.slug}
                to={`/courses/${c.slug}`}
                className="shrink-0 w-64 rounded-2xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition-colors group"
              >
                <div className="h-40 overflow-hidden">
                  <img
                    src={c.heroImage}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png"; }}
                  />
                </div>
                <div className="p-4 flex items-center justify-between">
                  <p className="text-white font-semibold text-sm truncate">{c.name}</p>
                  <ChevronRight className="w-4 h-4 text-white/50 shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. FAQ ═══ */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-4xl font-extrabold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {course.faqItems.map((faq, i) => (
              <details key={i} className="bg-background rounded-xl border border-border group">
                <summary className="px-6 py-4 cursor-pointer text-foreground font-medium text-sm list-none flex items-center justify-between">
                  {faq.question}
                  <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90 shrink-0 ml-4" />
                </summary>
                <div className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FLOATING WHATSAPP CTA ═══ */}
      <a
        href="https://wa.me/919876543210?text=Hi%20I%20want%20to%20book%20a%20free%20trial"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 bg-green-500 text-white font-bold text-sm px-5 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-5 h-5" />
        Book a Free Trial
      </a>

      <Footer />
    </div>
  );
};

export default CoursePage;
