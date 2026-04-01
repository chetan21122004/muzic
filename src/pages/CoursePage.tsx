import { useParams, Link } from "react-router-dom";
import { getCourseBySlug, allCourses, PricingLevel } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { ChevronRight, Check, Video, Star, Award, Clock, MessageCircle } from "lucide-react";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const [selectedLevel, setSelectedLevel] = useState(0); // Beginner — same tier layout for all courses

  if (!course) {
    return (
      <div className="min-h-screen bg-background font-secondary">
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
    <div className="min-h-screen bg-background font-secondary">
      <Navbar />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/visuals/3.png')" }}>
        <div className="absolute inset-0 bg-black/80 lg:bg-black/85 z-0"></div>
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center min-h-[420px] relative z-10">
          <div className="relative z-10 py-16 lg:py-24 lg:w-1/2">
            <h1 className="font-core tracking-[0.02em] text-3xl md:text-[2.75rem] font-bold text-white leading-tight mb-4">
              Learn {course.name} with us
            </h1>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-lg">
              {course.heroDescription}
            </p>
            <Link
              to="/enquire"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Book Your Free Trial Class
            </Link>
          </div>
          <div className="hidden lg:block lg:w-1/2 relative h-full">
            <img
              src={course.heroImage}
              alt={course.name}
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }}
            />
            {/* Gradient overlay blending into left */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#111116] via-[#111116]/40 to-transparent" />
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-32 h-32 rounded-full bg-white/5 blur-xl" />
        <div className="absolute bottom-10 right-40 w-20 h-20 rounded-full bg-white/5 blur-lg" />
      </section>

  {/* ═══ 3. ABOUT / PRICING — Left tiers + Right details ═══ */}
  <section className="py-12 md:py-14 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-core tracking-[0.018em] text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            About Our {course.name} Course
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
                        <span className="text-sm text-foreground/70 font-semibold">{tier.label}</span>
                      )}
                      <p className="font-extrabold text-foreground text-base md:text-lg leading-snug">{tier.name}</p>
                      {!course.hidePricing && tier.discount && (
                        <span className="text-sm font-bold text-primary">{tier.discount}</span>
                      )}
                    </div>
                    {!course.hidePricing && (
                      <div className="text-right">
                        {tier.originalPrice && (
                          <p className="text-sm text-muted-foreground line-through">INR {tier.originalPrice}</p>
                        )}
                        <p className="font-bold text-foreground">INR {tier.pricePerClass}/class</p>
                      </div>
                    )}
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
            <div className="flex-1 bg-background rounded-2xl p-6 md:p-7 border border-border">
              <h3 className="font-core tracking-[0.015em] text-lg md:text-xl font-bold text-foreground mb-3">
                {currentPricing.name}
              </h3>
              <p className="font-tertiary text-muted-foreground text-sm leading-relaxed mb-5">
                {currentPricing.description}
              </p>

              {/* Price display */}
              {!course.hidePricing && (
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-sm text-muted-foreground">Price</span>
                  <span className="text-2xl font-extrabold text-primary">
                    INR {currentPricing.pricePerClass * currentPricing.totalClasses}
                  </span>
                  <span className="text-muted-foreground text-sm">/ {currentPricing.totalClasses} classes</span>
                </div>
              )}

              {/* Duration display for courses like Violin */}
              {course.durationPerModule && (
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <span className="text-xl font-extrabold text-primary">
                    {course.durationPerModule}
                  </span>
                  <span className="text-muted-foreground text-sm">/ {currentPricing.totalClasses} sessions</span>
                </div>
              )}

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  to="/enquire"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  Book Your Free Trial Class
                </Link>
                <Link
                  to="/enquire"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-foreground/20 text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
                >
                  {course.hidePricing ? "Enquire Now" : "Buy Now"}
                </Link>
              </div>

              {/* Curriculum — Academic Board (Violin only has topics for now) */}
              <h4 className="font-core tracking-[0.015em] font-bold text-foreground mb-4 uppercase text-[13px] md:text-sm">
                CURRICULLUM- <span className="font-core normal-case">muziclub</span> ACADEMIC BOARD
              </h4>
              <div className="grid md:grid-cols-2 gap-3 mb-8 min-h-[4rem]">
                {currentPricing.learningPoints.length > 0 ? (
                  currentPricing.learningPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                      <span className="font-secondary text-muted-foreground text-sm md:text-base leading-relaxed">{point}</span>
                    </div>
                  ))
                ) : (
                  <div className="col-span-2 min-h-[2rem]" aria-hidden />
                )}
              </div>

              {/* Feature badges */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { icon: Video, label: "In Person Classes" },
                  { icon: Check, label: "24 Sessions" },
                  { icon: Clock, label: "60 Min Sessions" },
                  { icon: MessageCircle, label: "Quarterly Feedback" },
                  { icon: Star, label: "Half Yearly Assessments" },
                  { icon: Award, label: "Course Certification" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                      <badge.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-tertiary text-sm font-medium text-foreground leading-snug">{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. WHY LEARN WITH US — 3 columns ═══ */}
      <section className="py-12 md:py-14 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-core tracking-[0.018em] text-2xl md:text-3xl font-bold text-foreground text-center mb-9 md:mb-10">
            Why Learn {course.name} With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-7">
            {course.features.map((f, i) => (
              <div key={i}>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <span className="text-lg">{f.icon}</span>
                </div>
                <h3 className="font-core tracking-[0.015em] text-base md:text-[1.05rem] font-bold text-foreground mb-2">{f.title}</h3>
                <p className="font-tertiary text-muted-foreground text-xs md:text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* ═══ 4. HOW IT WORKS — 3 steps with dividers ═══ */}
      <section className="py-16" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4">
          <h2 className="font-core tracking-[0.02em] text-2xl md:text-3xl font-bold text-white text-center mb-12">
            How {course.name} Classes Work At{" "}
            <span className="font-core normal-case">muziclub</span>
          </h2>
          <div className="flex flex-col md:flex-row gap-0">
            {[
              { step: "Step 1", text: `The first step in your ${course.name} learning journey at muziclub begins when you register and Book A FREE trial class.` },
              { step: "Step 2", text: "Our academic expert will gauge your skills and expertise in your FREE trial class and recommend an appropriate course level to ensure a smooth learning experience." },
              { step: "Step 3", text: `The last step is to enroll in the course recommended by our academic expert and begin to learn ${course.name} under the guidance of our experienced teachers.` },
            ].map((s, i) => (
              <div key={i} className="flex flex-1">
                <div className="flex-1 p-6 md:p-8">
                  <h3 className="font-core tracking-[0.015em] text-white font-extrabold text-lg mb-3">{s.step}</h3>
                  <p className="font-secondary text-white/60 text-sm leading-relaxed">{s.text}</p>
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
            <h2 className="font-core tracking-[0.018em] text-2xl md:text-3xl font-extrabold text-white mb-3">
              <span className="text-white">Still unsure?</span>{" "}
              <span className="text-white/70">Let us resolve those doubts!</span>
            </h2>
            <p className="text-white/50 text-sm mb-6">
              Schedule a FREE trial session and let our teachers solve all your queries.
            </p>
            <Link
              to="/enquire"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30"
            >
              Book Your Free Trial Class
            </Link>
          </div>
          {/* Phone mockup */}
          <div className="hidden lg:block relative w-64 h-80">
            <div className="absolute inset-0 rounded-3xl border-4 border-white/20 overflow-hidden bg-black/30">
              <img
                src={course.heroImage}
                alt="Class session"
                className="w-full h-full object-cover opacity-80"
                onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }}
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
                    onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }}
                  />
                </div>
              </div>
              {/* Bio */}
              <div className="lg:w-3/5">
                <p className="text-primary font-bold text-sm uppercase tracking-wide mb-2">
                  Course Designed And Certified By
                </p>
                <h2 className="font-core tracking-[0.018em] text-3xl md:text-4xl font-extrabold text-foreground mb-2">
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
      <section className="py-16" style={{ background: "#111116" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Feature list */}
            <div className="lg:w-1/2 space-y-10">
              {[
                {
                  icon: "🔄",
                  title: "Experienced Dedicated Teachers",
                  desc: "Providing qualitative music education is our top priority. Every muziclub teacher undergoes a rigorous evaluation process to ensure the most qualified teachers for you.",
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
                    <h3 className="font-core tracking-[0.015em] text-white font-extrabold text-lg mb-2">{f.title}</h3>
                    <p className="font-secondary text-white/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Image + caption */}
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src="/homepage_banners/banner_1.png"
                  alt="muziclub teachers"
                  className="w-full h-auto object-cover"
                  onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }}
                />
              </div>
              <p className="font-core tracking-[0.018em] text-white text-2xl md:text-3xl font-extrabold leading-snug">
                Learn from the best teachers in the industry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. MORE COURSES — Dark carousel ═══ */}
      <section className="py-16" style={{ background: "#0a0a0d" }}>
        <div className="container mx-auto px-4">
          <h2 className="font-core tracking-[0.018em] text-2xl md:text-3xl font-extrabold text-white text-center mb-10">
            More courses on <span className="font-core">muziclub</span>
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
                    onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }}
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
          <h2 className="font-core tracking-[0.018em] text-2xl md:text-4xl font-extrabold text-foreground text-center mb-12">
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

      <Footer />
    </div>
  );
};

export default CoursePage;
