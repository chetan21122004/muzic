import { curriculumData, CurriculumLevel } from "./curriculumData";

export interface Course {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  heroDescription: string;
  features: { icon: string; title: string; description: string }[];
  levels: string[];
  curriculum?: CurriculumLevel[];
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
      shortDescription: `Learn ${c.name} at Muziclub. Hobby and Grade classes available online and in-person, tailored for all ages and skill levels.`,
      heroDescription: `Learn ${c.name} with personalized online and academy classes from Muziclub. We provide professional guidance whether music is taken as a hobby or as a career option. For group classes, the number of participants is strictly limited to 3 to maintain session effectiveness. Track your progress across Beginner, Intermediate, and Advanced levels.`,
      features: [
        { icon: "🎸", title: "Hobby Classes", description: "Customized based on your individual preferences, aimed towards enabling skills to play specific songs or music styles." },
        { icon: "⭐", title: "Grade Classes & Certification", description: "Follow the structured learning content of international exams like Trinity or Rockschool." },
        { icon: "🎭", title: "Sunday Jam Performances", description: "Learning without performing does not go far. We provide an opportunity to all students to perform every week at Sunday Jam." },
      ],
      levels: ["Beginner", "Intermediate", "Advanced"],
      curriculum: curriculumData[c.slug],
      faqItems: [
        { question: `What is the duration of the ${c.name} course?`, answer: "The course duration depends on the level you choose. Classes follow content structured as Beginner, Intermediate and Advanced levels based on Muziclub's collective experience." },
        { question: "How large are group classes?", answer: "For group classes, the number of participants is strictly limited to 3 to maintain session effectiveness and give you personalized focus." },
        { question: "Do you offer Grade examinations?", answer: "Yes! Grade Classes follow the level structure from internationally recognized boards like Trinity, ABRSM, and Rockschool (RSL)." },
        { question: "Are classes customized to my taste?", answer: "Absolutely. Our Hobby Classes are customized based on individual preferences to help you play the music you love." },
        { question: "Can I perform live as a student?", answer: "Yes! Our motto 'live music' drives us. We arrange regular Sunday Jams where all students have the opportunity to perform live on stage." },
        { question: "How are the classes conducted?", answer: "Classes are available 1-on-1 via video call, or at our physical academy centres (Baner, Pimple Saudagar, Hinjawadi)." },
      ],
    }))
  );

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find((c) => c.slug === slug);
}
