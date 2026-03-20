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
    <section style={{ background: "#0a0a0d" }} className="border-y border-white/5 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center flex-1 min-w-[120px] relative group">
              <div className="absolute -top-2 -bottom-2 left-1/2 -translate-x-1/2 w-px bg-primary/20 hidden lg:block" />
              <p className="text-white font-extrabold text-xl md:text-2xl group-hover:text-primary transition-colors duration-300">{s.value}</p>
              <p className="text-white/40 text-xs mt-1 uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactBar;
