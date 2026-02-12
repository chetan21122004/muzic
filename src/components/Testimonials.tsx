import student1 from "@/assets/student1.jpg";
import student2 from "@/assets/student2.jpg";

const testimonials = [
  { img: student1, name: "Dinesh", location: "M.Tech, Pune", text: "I'm truly grateful for all of learning at Artium, it has built my confidence immensely. I've been performing on stage more confidently now." },
  { img: student2, name: "Radheyia Kale", location: "M.Com, Pune", text: "My learning at Artium Academy taught me so much about the importance of practice. It was a truly enriching experience." },
  { img: student1, name: "Nikita Aghor", location: "B.Com, Mumbai", text: "Very well structured curriculum. The certified music teachers at Artium Academy are so patient and so experienced." },
  { img: student2, name: "L. Dhoomikaa", location: "BBA, Delhi", text: "A very holistic learning experience. What started as a hobby has now become a passion. I recommend this to everyone." },
  { img: student1, name: "Kunal", location: "MBA, Bangalore", text: "My training at Artium helped me develop music arrangement skills and a deep understanding of Indian classical traditions." },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-10">Artium Academy's Student Testimonials</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-4 border border-border space-y-3">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover mx-auto" />
              <h4 className="text-sm font-semibold text-foreground text-center">{t.name}</h4>
              <p className="text-[10px] text-muted-foreground text-center">{t.location}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">{t.text}</p>
              <a href="#" className="text-xs text-primary font-semibold block text-center">READ MORE</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
