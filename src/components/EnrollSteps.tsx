import { Ticket, Music, MonitorPlay, Mic } from "lucide-react";

const steps = [
  {
    icon: Ticket,
    step: "STEP 1",
    title: "Book A Free Trial: Select your favourite course and book a free trial class at your convenient time",
  },
  {
    icon: Music,
    step: "STEP 2",
    title: "Try before you buy: Get personalised guidance from our Academic Expert in the free trial class",
  },
  {
    icon: MonitorPlay,
    step: "STEP 3",
    title: "Pay and Enrol: Begin your 1:1 live and customised learning sessions with Muziclub Certified Teachers",
  },
  {
    icon: Mic,
    step: "STEP 4",
    title: "Learn, Practice and Perform: Get Exclusive Access to Live Masterclasses, Sunday Jams and Digital Learning Tools",
  },
];

const EnrollSteps = () => {
  return (
    <section className="bg-[#f0f0f4] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-12">
          How to Enrol in Online Music Lessons?
        </h2>
        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
          {steps.map((s, i) => (
            <div key={i} className="flex items-start gap-4 flex-1">
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 flex-1">
                <span className="text-primary font-extrabold text-sm tracking-wide">
                  {s.step}
                </span>
                <div className="w-16 h-16 mx-auto mt-4 mb-4 rounded-full bg-primary flex items-center justify-center">
                  <s.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.title}
                </p>
              </div>
              {/* Connector dashes */}
              {i < steps.length - 1 && (
                <div className="hidden sm:flex items-center self-center gap-1 px-1 pt-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollSteps;
