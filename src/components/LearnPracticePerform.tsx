import { Music } from "lucide-react";

const LearnPracticePerform = () => {
  return (
    <section className="bg-card py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-2">Music: Learn, Practice, Perform</h2>
        <p className="text-muted-foreground mb-10">1 App, everything. 3-in-1 for a music enthusiast</p>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center border-4 border-primary relative">
            <Music className="w-12 h-12 text-primary" />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full rotate-12">
              Learn • Practice
            </span>
          </div>
          <div className="flex-1">
            <p className="text-lg text-foreground">
              <span className="text-primary font-bold">PRACTICE</span> music anytime with personal teachers and online studio tools to perfect your skill
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnPracticePerform;
