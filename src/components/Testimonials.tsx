import studentArushiGuitar from "@/assets/student-arushi-guitar.jpg";
import studentNiravGuitar from "@/assets/student-nirav-guitar.jpg";
import studentMalayDrums from "@/assets/student-malay-drums.jpg";

const testimonials = [
  { img: studentArushiGuitar, name: "Dinesh", location: "M.Tech, Pune", text: "I'm truly grateful for all of my learning at Muziclub, it has built my confidence immensely. I've been performing on stage more confidently now." },
  { img: studentNiravGuitar, name: "Radheyia Kale", location: "M.Com, Pune", text: "My learning at Muziclub taught me so much about the importance of practice. It was a truly enriching experience." },
  { img: studentMalayDrums, name: "Nikita Aghor", location: "B.Com, Mumbai", text: "Very well structured curriculum. The certified music teachers at Muziclub are so patient and so experienced." },
  { img: studentArushiGuitar, name: "L. Dhoomikaa", location: "BBA, Delhi", text: "A very holistic learning experience. What started as a hobby has now become a passion. I recommend Muziclub to everyone." },
  { img: studentNiravGuitar, name: "Kunal", location: "MBA, Bangalore", text: "My training at Muziclub helped me develop music arrangement skills and a deep understanding of Indian classical traditions." },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">What Our Students Say</h2>
          <div className="flex gap-6 mt-3">
            <div>
              <span className="text-primary font-bold">4.8 ⭐</span>
              <span className="text-xs text-muted-foreground ml-1">Baner, Pune (345 reviews)</span>
            </div>
            <div>
              <span className="text-primary font-bold">4.8 ⭐</span>
              <span className="text-xs text-muted-foreground ml-1">Pimple Saudagar (183 reviews)</span>
            </div>
            <div>
              <span className="text-primary font-bold">4.7 ⭐</span>
              <span className="text-xs text-muted-foreground ml-1">Hinjawadi (95 reviews)</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-xl p-4 border border-border space-y-3">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover mx-auto" />
              <h4 className="text-sm font-semibold text-foreground text-center">{t.name}</h4>
              <p className="text-[10px] text-muted-foreground text-center">{t.location}</p>
              <p className="text-xs text-muted-foreground leading-relaxed">"{t.text}"</p>
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-primary text-xs">⭐</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
