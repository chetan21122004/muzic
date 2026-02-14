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
      { name: "Hindustani Classical Vocal", slug: "hindustani-classical-vocal" },
      { name: "Popular & Film Music - Hindi", slug: "popular-film-music-hindi" },
      { name: "Popular & Film Music - Tamil", slug: "popular-film-music-tamil" },
      { name: "Popular & Film Music - Kannada", slug: "popular-film-music-kannada" },
      { name: "Popular & Film Music - Malayalam", slug: "popular-film-music-malayalam" },
      { name: "Popular & Film Music - Telugu", slug: "popular-film-music-telugu" },
      { name: "Carnatic Classical Vocal", slug: "carnatic-classical-vocal" },
      { name: "Ghazal", slug: "ghazal" },
      { name: "Devotional", slug: "devotional" },
      { name: "Karaoke", slug: "karaoke" },
      { name: "Western Vocal", slug: "western-vocal" },
    ],
  },
  {
    title: "Strings",
    courses: [
      { name: "Guitar - Acoustic", slug: "guitar-acoustic" },
      { name: "Guitar - Rock & Pop", slug: "guitar-rock-pop" },
    ],
  },
  {
    title: "Keyboard",
    courses: [
      { name: "Piano", slug: "piano" },
      { name: "Keyboard", slug: "keyboard" },
    ],
  },
  {
    title: "Percussion",
    courses: [
      { name: "Tabla", slug: "tabla" },
    ],
  },
];

export const allCourses: Course[] = courseCategories.flatMap((cat) =>
  cat.courses.map((c) => ({
    slug: c.slug,
    name: c.name,
    category: cat.title,
    shortDescription: `Learn ${c.name} online from the best teachers at Muziclub. 1-on-1 live classes, flexible scheduling, and certification.`,
    heroDescription: `Master ${c.name} with personalized online classes from Muziclub. Whether you're a beginner or advanced student, our expert teachers will guide you through a structured curriculum designed for real progress.`,
    features: [
      { icon: "🎓", title: "Expert Teachers", description: "Learn from highly qualified and experienced teachers who are passionate about music education." },
      { icon: "🎭", title: "From Student to Performer", description: "Our curriculum is designed to transform you from a student to a confident performer on stage." },
      { icon: "⭐", title: "Grading Courses For All", description: "Get internationally recognized certifications from Trinity, ABRSM, and RSL." },
    ],
    levels: ["Preparatory", "Intermediate", "First Exam", "Advanced"],
    faqItems: [
      { question: `What is the duration of the ${c.name} course?`, answer: "The course duration depends on the level you choose. Each level typically takes 3-6 months to complete with regular practice." },
      { question: "Do I need any prior experience?", answer: "No! We have courses for absolute beginners as well as advanced students. Our teachers will assess your level and customize the curriculum accordingly." },
      { question: "What do I need to get started?", answer: "You need a stable internet connection, a device with a camera and microphone, and enthusiasm to learn!" },
      { question: "How are the classes conducted?", answer: "All classes are conducted live 1-on-1 via video call. You get personalized attention and feedback from your teacher." },
      { question: "Can I reschedule my classes?", answer: "Yes, we offer flexible scheduling. You can reschedule classes with prior notice to your teacher." },
      { question: "Is there a free trial available?", answer: "Yes! We offer a free trial class so you can experience our teaching methodology before enrolling." },
    ],
  }))
);

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find((c) => c.slug === slug);
}
