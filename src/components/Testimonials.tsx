import studentArushiGuitar from "@/assets/student-arushi-guitar.jpg";
import studentNiravGuitar from "@/assets/student-nirav-guitar.jpg";
import studentMalayDrums from "@/assets/student-malay-drums.jpg";

const testimonials = [
  { img: studentArushiGuitar, name: "Sneha", location: "Guitar Student", text: "I'm truly grateful for all of my learning at Muziclub, it has built my confidence immensely. I've been performing on stage more confidently now." },
  { img: studentNiravGuitar, name: "Rahul", location: "Keyboard Student", text: "My learning at Muziclub taught me so much about the importance of practice. It was a truly enriching experience." },
  { img: studentMalayDrums, name: "Aryan", location: "Drums Student", text: "Very well structured curriculum. The certified music teachers at Muziclub are so patient and so experienced." },
  { img: studentArushiGuitar, name: "Priya", location: "Western Vocals Student", text: "A very holistic learning experience. What started as a hobby has now become a passion. I recommend Muziclub to everyone." },
  { img: studentNiravGuitar, name: "Aarav", location: "Hindustani Vocals Student", text: "My training at Muziclub helped me develop music arrangement skills and a deep understanding of Indian classical traditions." },
];

const Testimonials = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-foreground">What Our Students Say</h2>
          <div className="flex flex-col sm:flex-row gap-8 mt-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"/></svg>
                <h3 className="font-semibold text-foreground">Google Reviews</h3>
              </div>
              <div className="flex gap-4 text-xs">
                <div>
                  <div className="text-primary font-bold">4.8 ⭐</div>
                  <div className="text-muted-foreground mt-0.5">Baner (345)</div>
                </div>
                <div>
                  <div className="text-primary font-bold">4.8 ⭐</div>
                  <div className="text-muted-foreground mt-0.5">Pimple Saudagar (183)</div>
                </div>
                <div>
                  <div className="text-primary font-bold">4.7 ⭐</div>
                  <div className="text-muted-foreground mt-0.5">Hinjawadi (95)</div>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px bg-border"></div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.48-10 10 0 4.98 3.66 9.11 8.44 9.88V15h-2.54V12h2.54V9.79c0-2.5 1.5-3.88 3.78-3.88 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.73l-.44 3h-2.29v6.92c4.78-.77 8.44-4.89 8.44-9.88 0-5.52-4.5-10-10-10z"/></svg>
                <h3 className="font-semibold text-foreground">Facebook Reviews</h3>
              </div>
              <div className="flex gap-4 text-xs">
                <div>
                  <div className="text-primary font-bold">4.9 ⭐</div>
                  <div className="text-muted-foreground mt-0.5">Muziclub (Overall)</div>
                </div>
              </div>
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
