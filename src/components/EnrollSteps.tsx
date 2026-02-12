import { UserPlus, CalendarCheck, Video, GraduationCap } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "STEP 1", title: "Sign up and select your preferred music course from our collection" },
  { icon: CalendarCheck, step: "STEP 2", title: "Book a free trial lesson and get a taste of your chosen course" },
  { icon: Video, step: "STEP 3", title: "Join 1-on-1 live sessions and start your structured music training" },
  { icon: GraduationCap, step: "STEP 4", title: "Practice, perform, and get certified with graded levels" },
];

const EnrollSteps = () => {
  return (
    <section className="bg-surface-light py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-surface-light-foreground mb-12">
          How to Enroll in Online Music Lessons?
        </h2>
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
