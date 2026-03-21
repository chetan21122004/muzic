import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <section className="bg-primary">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
            Love teaching music online? Join Us!
          </h2>
          <p className="text-primary-foreground/80 text-base mb-8 max-w-md">
            Become a Muziclub Certified Music Teacher and train students all around the world.
          </p>
          <Link to="/teach-with-us" className="inline-flex items-center justify-center self-start px-8 py-3 rounded-full bg-background text-primary font-bold text-sm hover:bg-background/90 transition-colors">
            Become A Teacher
          </Link>
        </div>
        <div className="flex-1 relative min-h-[320px] lg:min-h-[400px] bg-secondary flex items-center justify-center p-8">
          <img src="/illustrations/Welcome-pana.svg" alt="Teach with Muziclub" className="w-full max-w-sm h-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
