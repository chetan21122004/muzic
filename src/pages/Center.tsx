import { MapPin, Phone, Clock, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const centers = [
  {
    name: "Artium Academy – Pune (Kothrud)",
    address: "2nd Floor, Sahil Complex, Paud Road, Kothrud, Pune – 411038",
    phone: "+91 98765 43210",
    email: "pune@artiumacademy.com",
    hours: "Mon – Sat: 9 AM – 9 PM",
  },
  {
    name: "Artium Academy – Mumbai (Andheri)",
    address: "301, Creative Hub, Andheri West, Mumbai – 400058",
    phone: "+91 98765 43211",
    email: "mumbai@artiumacademy.com",
    hours: "Mon – Sat: 10 AM – 8 PM",
  },
  {
    name: "Artium Academy – Bangalore (Koramangala)",
    address: "4th Floor, Harmony Towers, 80 Feet Road, Koramangala, Bangalore – 560034",
    phone: "+91 98765 43212",
    email: "bangalore@artiumacademy.com",
    hours: "Mon – Sat: 9 AM – 9 PM",
  },
  {
    name: "Artium Academy – Delhi (Hauz Khas)",
    address: "B-12, Hauz Khas Village, New Delhi – 110016",
    phone: "+91 98765 43213",
    email: "delhi@artiumacademy.com",
    hours: "Mon – Sat: 10 AM – 8 PM",
  },
];

const Center = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-card py-16 border-b border-border">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Centers</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Visit us at our learning centers across India. Experience world-class music education in a vibrant, creative environment.
          </p>
        </div>
      </section>

      {/* Online-first banner */}
      <section className="container mx-auto px-4 py-10">
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 text-center">
          <h3 className="text-foreground font-bold text-lg mb-2">🌐 Learn From Anywhere</h3>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            All our courses are available online with live 1-on-1 classes. You don't need to visit a center — learn from the comfort of your home!
          </p>
        </div>
      </section>

      {/* Centers Grid */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Physical Learning Centers</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {centers.map((c) => (
            <div key={c.name} className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/40 transition-colors">
              <h3 className="text-foreground font-bold text-lg">{c.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{c.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{c.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{c.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm text-muted-foreground">{c.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Center;
