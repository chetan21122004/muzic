import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <section className="bg-primary">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
            Love teaching music online? Join Us!
          </h2>
          <p className="text-primary-foreground/80 text-base mb-8 max-w-md">
            Become a Muziclub Certified Music Teacher and train students all around the world.
          </p>
          <Link to="/teach-with-us" className="inline-flex items-center justify-center self-start px-8 py-3 rounded-full bg-white text-primary font-bold text-sm hover:bg-white/90 transition-colors">
            Become A Teacher
          </Link>
        </div>
        <div className="flex-1 relative min-h-[280px] lg:min-h-[320px]">
          <img src="/new_imgs/Copy of DSC00677 (1).webp" alt="Teach with Muziclub" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; (e.currentTarget as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Crect width='100%25' height='100%25' fill='%23111'/%3E%3C/svg%3E"; }} />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
