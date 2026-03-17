const testimonials = [
  {
    name: "Sneha M.",
    location: "Maharashtra",
    instrument: "Guitar Student",
    text: "I'm truly grateful for all of my learning at Muziclub — it has built my confidence immensely. I've been performing on stage much more confidently now.",
  },
  {
    name: "Rahul K.",
    location: "Pune",
    instrument: "Keyboard Student",
    text: "My learning at Muziclub taught me so much about the importance of practice. It was a truly enriching experience with the most knowledgeable teachers.",
  },
  {
    name: "Aryan P.",
    location: "Maharashtra",
    instrument: "Drums Student",
    text: "Very well structured curriculum. The certified music teachers at Muziclub are so patient and experienced. I recommend it to everyone.",
  },
  {
    name: "Priya S.",
    location: "Pune",
    instrument: "Western Vocals",
    text: "What started as a hobby has now become a passion. A very holistic learning experience. Muziclub changed how I see music completely.",
  },
  {
    name: "Vikram D.",
    location: "Maharashtra",
    instrument: "Guitar Student",
    text: "The Sunday Jam sessions are the highlight of my week. Getting to perform live every week is something I never expected from a music school. Absolutely love it.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">
            Student Voices
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Muziclub Student Testimonials
          </h2>
        </div>

        {/* Cards row — horizontally scrollable like Artium */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar + name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-extrabold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.location}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-primary text-sm">★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-500 leading-relaxed line-clamp-4">
                {t.text}
              </p>

              {/* Read more + instrument tag */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-[11px] text-primary font-semibold cursor-pointer hover:underline">
                  read more
                </span>
                <span className="text-[10px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full">
                  {t.instrument}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Google rating bar */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Verified Reviews</p>
            <h3 className="text-xl font-extrabold text-gray-900">Highly Rated on Google</h3>
          </div>
          <div className="flex gap-8 flex-wrap justify-center">
            <div className="text-center">
              <div className="text-2xl font-extrabold text-gray-900">4.8 ⭐</div>
              <div className="text-xs text-gray-500 mt-1">Baner, Pune</div>
              <div className="text-[10px] text-gray-400">(345+ reviews)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-gray-900">4.8 ⭐</div>
              <div className="text-xs text-gray-500 mt-1">Pimple Saudagar</div>
              <div className="text-[10px] text-gray-400">(183+ reviews)</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-gray-900">4.7 ⭐</div>
              <div className="text-xs text-gray-500 mt-1">Hinjawadi</div>
              <div className="text-[10px] text-gray-400">(95+ reviews)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
