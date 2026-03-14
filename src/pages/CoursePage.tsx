import { useParams, Link } from "react-router-dom";
import { getCourseBySlug, courseCategories, allCourses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const CoursePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");

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

  const relatedCourses = allCourses
    .filter((c) => c.category === course.category && c.slug !== course.slug)
    .slice(0, 4);

  const otherCourses = allCourses
    .filter((c) => c.category !== course.category)
    .slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-semibold mb-2">{course.category}</p>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Learn {course.name} Online
            </h1>
            <p className="text-muted-foreground text-lg mb-8">{course.heroDescription}</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8">
              Book a Free Trial Class
            </Button>
          </div>
        </div>
      </section>

      {/* Why Learn With Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Why Learn {course.name} With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {course.features.map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-8 text-center border border-border">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Levels */}
      <section className="py-16 bg-surface-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-surface-light-foreground text-center mb-12">
            About Our Online {course.name} Course
          </h2>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {course.levels.map((level) => (
              <span
                key={level}
                className="px-6 py-3 rounded-full bg-background text-foreground font-medium text-sm border border-border cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {level}
              </span>
            ))}
          </div>
          {course.curriculum ? (
            <div className="max-w-4xl mx-auto mt-12">
              <h3 className="text-xl font-bold text-center mb-8 text-primary">Detailed Curriculum Breakdown</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {course.curriculum.map((curr, idx) => (
                  <div key={idx} className="bg-background rounded-xl p-6 border border-border h-full shadow-sm hover:border-primary/50 transition-colors">
                    <h4 className="text-lg font-bold text-foreground mb-4 pb-3 border-b border-border">{curr.level}</h4>
                    <ul className="space-y-3 text-muted-foreground text-sm">
                      {curr.topics.map((topic, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 
                          <span className="leading-relaxed">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto bg-background rounded-xl p-8 border border-border mt-10">
              <h3 className="text-lg font-semibold text-foreground mb-4">What You'll Learn</h3>
              <ul className="space-y-3 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Fundamentals and theory tailored to your level</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Technique building with expert guidance</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Performance practice and stage confidence</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Preparation for international grading exams</li>
                <li className="flex items-start gap-2"><ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Personalized feedback and progress tracking</li>
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            How Online {course.name} Classes Work At Muziclub
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "Step 1", title: "Book a Free Trial", desc: "Sign up and book your free 1-on-1 trial class with an expert teacher." },
              { step: "Step 2", title: "Get Matched", desc: "We match you with the perfect teacher based on your goals, level, and schedule." },
              { step: "Step 3", title: "Start Learning", desc: "Begin your musical journey with live, personalized classes from the comfort of home." },
            ].map((s, i) => (
              <div key={i} className="bg-card rounded-xl p-8 border border-border">
                <span className="text-primary font-bold text-sm">{s.step}</span>
                <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
            Still unsure? Let us resolve your doubts!
          </h2>
          <p className="text-primary-foreground/80 mb-6">Schedule a free trial class and experience it yourself.</p>
          <Button size="lg" variant="outline" className="bg-background text-foreground hover:bg-background/90 font-semibold px-8 border-0">
            Book a Free Trial Class
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {course.faqItems.map((faq, i) => (
              <details key={i} className="bg-card rounded-xl border border-border group">
                <summary className="px-6 py-4 cursor-pointer text-foreground font-medium text-sm list-none flex items-center justify-between">
                  {faq.question}
                  <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-6 pb-4 text-muted-foreground text-sm">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* More Courses */}
      <section className="py-16 bg-surface-light">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-surface-light-foreground text-center mb-10">
            More Courses on Muziclub
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[...relatedCourses, ...otherCourses].slice(0, 8).map((c) => (
              <Link
                key={c.slug}
                to={`/courses/${c.slug}`}
                className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/80 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursePage;
