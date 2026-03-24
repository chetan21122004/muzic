import { Link } from "react-router-dom";

const stats = [
  { value: "25,000+", label: "Students Taught" },
  { value: "16+ Yrs", label: "Of Excellence" },
  { value: "4.9", label: "Google Rating", isGoogle: true },
  { value: "4 Centres", label: "Pune & UK" },
  { value: "Trinity · ABRSM · RSL", label: "Certifications" },
];

const ImpactBar = () => {
  return (
    <section className="bg-secondary border-y border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center flex-1 min-w-[120px] relative group">
              <p className="text-foreground font-extrabold text-xl md:text-2xl group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-1.5 pt-1">
                {s.value}
                {s.isGoogle && (
                  <div className="relative inline-block text-[#E0E0E0] text-[12px] tracking-[0.02em] -mt-0.5">
                    <span className="opacity-30">★★★★★</span>
                    <div className="absolute top-0 left-0 overflow-hidden text-[#FABB05] w-[95%] whitespace-nowrap">
                      ★★★★★
                    </div>
                  </div>
                )}
              </p>
              <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactBar;
