export interface Course {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  heroDescription: string;
  features: { icon: string; title: string; description: string }[];
  levels: string[];
  faqItems: { question: string; answer: string }[];
}

export const courseCategories = [
  {
    title: "Vocals",
    courses: [
      { name: "Bollywood / Hindi Film Music", slug: "popular-film-music-hindi" },
      { name: "Indian Classical Vocals", slug: "hindustani-classical-vocal" },
      { name: "Carnatic Classical Vocal", slug: "carnatic-classical-vocal" },
      { name: "Western Vocals", slug: "western-vocal" },
      { name: "Tamil Film Music", slug: "popular-film-music-tamil" },
      { name: "Kannada Film Music", slug: "popular-film-music-kannada" },
      { name: "Ghazal", slug: "ghazal" },
      { name: "Devotional", slug: "devotional" },
    ],
  },
  {
    title: "Instruments",
    courses: [
      { name: "Guitar – Acoustic", slug: "guitar-acoustic" },
      { name: "Guitar – Rock & Pop", slug: "guitar-rock-pop" },
      { name: "Piano", slug: "piano" },
      { name: "Keyboard", slug: "keyboard" },
      { name: "Violin", slug: "violin" },
      { name: "Flute", slug: "flute" },
      { name: "Ukulele", slug: "ukulele" },
    ],
  },
  {
    title: "Percussion",
    courses: [
      { name: "Drums", slug: "drums" },
      { name: "Tabla", slug: "tabla" },
    ],
  },
  {
    title: "Certifications",
    courses: [
      { name: "Trinity College London", slug: "trinity" },
      { name: "ABRSM – Royal Schools of Music", slug: "abrsm" },
      { name: "RSL – Rock School", slug: "rsl" },
      { name: "G.M.V. Mandal Mumbai", slug: "gmv" },
    ],
  },
];

export const allCourses: Course[] = courseCategories
  .filter((cat) => cat.title !== "Certifications")
  .flatMap((cat) =>
    cat.courses.map((c) => ({
      slug: c.slug,
      name: c.name,
      category: cat.title,
      shortDescription: `Learn ${c.name} online from the best teachers at Muziclub. 1-on-1 live classes, flexible scheduling, and certification.`,
      heroDescription: `Master ${c.name} with personalized online and academy classes from Muziclub. Whether you're a beginner or advanced student, our expert teachers will guide you through a structured curriculum designed for real progress. Perform live at our Sunday Jam sessions and earn internationally recognised certifications.`,
      features: [
        { icon: "🎓", title: "Expert Teachers", description: "Learn from highly qualified and experienced teachers who are passionate about music education." },
        { icon: "🎭", title: "From Student to Performer", description: "Our curriculum is designed to transform you from a student to a confident performer on stage." },
        { icon: "⭐", title: "Graded Certification For All", description: "Get internationally recognized certifications from Trinity, ABRSM, RSL, and G.M.V. Mandal." },
      ],
      levels: ["Preparatory", "Intermediate", "First Exam", "Advanced"],
      faqItems: [
        { question: `What is the duration of the ${c.name} course?`, answer: "The course duration depends on the level you choose. Each level typically takes 3-6 months to complete with regular practice." },
        { question: "Do I need any prior experience?", answer: "No! We have courses for absolute beginners as well as advanced students. Our teachers will assess your level and customize the curriculum accordingly." },
        { question: "What do I need to get started?", answer: "For online classes: a stable internet connection, a device with a camera and microphone, and enthusiasm to learn! For academy classes: just show up to any of our 3 Pune centres." },
        { question: "How are the classes conducted?", answer: "Classes are conducted live 1-on-1 via video call for online students, or in person at our Baner, Pimple Saudagar, or Hinjawadi centres in Pune." },
        { question: "Can I reschedule my classes?", answer: "Yes, we offer flexible scheduling. You can reschedule classes with prior notice to your teacher." },
        { question: "Is there a free trial available?", answer: "Yes! We offer a free trial class so you can experience our teaching methodology before enrolling." },
      ],
    }))
  );

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find((c) => c.slug === slug);
}
