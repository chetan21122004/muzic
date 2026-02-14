import { Award, Users, BookOpen, Star, Target, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import teacher1 from "@/assets/teacher1.jpg";
import teacher2 from "@/assets/teacher2.jpg";
import teacher3 from "@/assets/teacher3.jpg";
import teacher4 from "@/assets/teacher4.jpg";

const stats = [
  { value: "10+", label: "Years of Excellence" },
  { value: "5000+", label: "Students Trained" },
  { value: "50+", label: "Expert Teachers" },
  { value: "20+", label: "Music Courses" },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To make world-class music education accessible to everyone, regardless of age or background." },
  { icon: Star, title: "Our Vision", desc: "To be the leading online music academy nurturing the next generation of global musicians." },
  { icon: Heart, title: "Our Values", desc: "Passion, discipline, creativity, and commitment to every student's unique musical journey." },
];

const team = [
  { img: teacher1, name: "Akarsh Singh", role: "Drums Faculty" },
  { img: teacher2, name: "Conrad Bhengra", role: "Guitar Faculty" },
  { img: teacher3, name: "Kenny Khandka", role: "Piano Faculty" },
  { img: teacher4, name: "Tanmay Mathew", role: "Vocals Faculty" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Artium Academy</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            India's leading online music academy offering certified courses in vocals, guitar, keyboard, drums, and more — taught by industry professionals.
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
            Artium Academy was founded with a simple belief — every person has music within them. What started as a small music school in Pune has grown into one of India's most trusted online music academies. With certified courses aligned to international standards (Trinity, ABRSM, RSL), we've empowered thousands of students to learn, practice, and perform on global stages.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our faculty comprises industry veterans, concert performers, and dedicated educators who bring decades of experience to every lesson. Whether you're a complete beginner or an advanced musician, our structured curriculum and 1-on-1 live classes ensure personalized attention at every step.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-card py-14 border-y border-border">
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
