import { Award, Users, BookOpen, Star, Target, Heart, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher3 from "@/assets/teacher3.jpg";
import teacher4 from "@/assets/teacher4.jpg";

const stats = [
  { value: "13+", label: "Years of Excellence" },
  { value: "5000+", label: "Students Trained" },
  { value: "50+", label: "Expert Teachers" },
  { value: "20+", label: "Music Courses" },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To make world-class music education accessible to everyone, regardless of age or background. Making music a part of your life." },
  { icon: Star, title: "Our Vision", desc: "To be the leading online music academy nurturing the next generation of global musicians through innovative and adaptive methods." },
  { icon: Heart, title: "Our Values", desc: "Passion, discipline, creativity, and commitment to every student's unique musical journey. Our motto — Live Music." },
];

const team = [
  { img: teacher1, name: "Akarsh Singh", role: "Drums Faculty" },
  { img: teacher2, name: "Conrad Bhengra", role: "Guitar Faculty" },
  { img: teacher3, name: "Kenny Khandka", role: "Piano Faculty" },
  { img: teacher4, name: "Tanmay Mathew", role: "Vocals Faculty" },
];

const reviews = [
  { location: "Muziclub, Baner, Pune", rating: "4.8", count: "345" },
  { location: "Muziclub, Pimple Saudagar, Pune", rating: "4.8", count: "183" },
  { location: "Muziclub, Hinjawadi, Pune", rating: "4.7", count: "95" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Muziclub</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Learn and Live Music — India's leading music academy offering certified courses in vocals, guitar, keyboard, drums, and more.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-card py-14 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="container mx-auto px-4 py-14">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed">
            Muziclub is a platform driven by people who live music and have a passion to develop the same with whoever they touch. Muziclub academy is founded on quality and structured music education. Our model has the right balance of discipline and flexibility that is needed to learn music.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our classes are designed to provide personalized focus, practice facilities, and fulfilling engagement with passionate teachers. Learning without performing does not go far — so we provide an opportunity to all students to perform every week in Sunday Jam. Our teaching methods are continuously improving so that we can provide the best experience and results for students.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Muziclub is all about living music — making music a part of your life. We are committed to providing best-in-class music education and services around the world through our innovative and adaptive methods. Our motto 'Live Music' drives all service offerings including music classes at academy centres or online, arranging music shows and workshops, corporate seminars, or simply chilling out over a nice groove at jam sessions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are based at Pune, India with presence in Croydon, UK for effective coordination of online music classes in London and the rest of UK.
          </p>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="bg-card py-14 border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Google Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.location} className="bg-background border border-border rounded-xl p-6 text-center space-y-2">
                <div className="flex items-center justify-center gap-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <h4 className="text-foreground font-semibold text-sm">{r.location}</h4>
                </div>
                <div className="text-3xl font-bold text-primary">{r.rating}</div>
                <p className="text-xs text-muted-foreground">Based on {r.count} reviews</p>
                <div className="flex justify-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">Meet Our Faculty</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((t) => (
              <div key={t.name} className="text-center space-y-3">
                <img src={t.img} alt={t.name} className="w-28 h-28 rounded-full object-cover mx-auto border-2 border-primary/30" />
                <h4 className="text-foreground font-semibold text-sm">{t.name}</h4>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-14 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Start Your Musical Journey?</h2>
        <p className="text-muted-foreground mb-6">Book a free 1-on-1 trial class with our expert teachers today.</p>
        <button className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
          Book Free Trial Class
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
