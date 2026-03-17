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
    <section className="bg-gray-900 border-y border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between gap-6">
          {stats.map((s, i) => (
            <div key={i} className="text-center flex-1 min-w-[120px]">
              <p className="text-white font-extrabold text-xl md:text-2xl">{s.value}</p>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-wider font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactBar;
