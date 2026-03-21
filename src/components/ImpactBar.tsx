import { Link } from "react-router-dom";

const stats = [
  { value: "14,000+", label: "Students Taught" },
  { value: "13+ Yrs", label: "Of Excellence" },
  { value: "4.8 ★", label: "Google Rating" },
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
              <p className="text-foreground font-extrabold text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">{s.value}</p>
              <p className="text-muted-foreground text-xs mt-1 uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactBar;
