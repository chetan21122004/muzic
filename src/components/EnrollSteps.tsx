import { UserPlus, CalendarCheck, Video, GraduationCap } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "STEP 1", title: "Enquire online or visit any of our 3 Pune centres — Baner, Pimple Saudagar, or Hinjawadi" },
  { icon: CalendarCheck, step: "STEP 2", title: "Book a free trial class and meet your teacher — no commitment needed" },
  { icon: Video, step: "STEP 3", title: "Start 1-on-1 classes online or at the academy on a schedule that suits you" },
  { icon: GraduationCap, step: "STEP 4", title: "Practice daily, perform at Sunday Jams, and earn internationally recognised certifications" },
];

const EnrollSteps = () => {
  return (
    <section className="bg-surface-light py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-surface-light-foreground">
            How It Works
          </h2>
          <p className="text-muted-foreground text-sm mt-2">Getting started with Muziclub is simple — just 4 steps</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="bg-background rounded-xl p-6 text-center space-y-4 border border-border">
              <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                {s.step}
              </span>
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollSteps;
