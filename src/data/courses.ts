import { curriculumData, CurriculumLevel } from "./curriculumData";

export interface PricingLevel {
  name: string;
  label?: string;
  pricePerClass: number;
  originalPrice?: number;
  discount?: string;
  totalClasses: number;
  description: string;
  learningPoints: string[];
}

export interface Course {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  heroDescription: string;
  heroImage: string;
  features: { icon: string; title: string; description: string }[];
  levels: string[];
  pricing: PricingLevel[];
  curriculum?: CurriculumLevel[];
  hidePricing?: boolean;
  durationPerModule?: string;
  facultyHead?: {
    name: string;
    title: string;
    image: string;
    bio: string;
  };
  faqItems: { question: string; answer: string }[];
}

export const courseCategories = [
  {
    title: "Vocals",
    courses: [
      { name: "Bollywood Singing", slug: "bollywood-singing" },
      { name: "Indian Classical Vocal", slug: "indian-classical-vocal" },
      { name: "Western Vocal", slug: "western-vocal" },
      { name: "Karaoke Singing", slug: "karaoke-singing" },
    ],
  },
  {
    title: "Instruments",
    courses: [
      { name: "Guitar Acoustic", slug: "guitar-acoustic" },
      { name: "Guitar Electric", slug: "guitar-electric" },
      { name: "Guitar Bass", slug: "guitar-bass" },
      { name: "Violin", slug: "violin" },
      { name: "Harmonium", slug: "harmonium" },
      { name: "Flute", slug: "flute" },
      { name: "Keyboard", slug: "keyboard" },
      { name: "Piano", slug: "piano" },
      { name: "Ukulele", slug: "ukulele" },
    ],
  },
  {
    title: "Percussion",
    courses: [
      { name: "Drums", slug: "drums" },
      { name: "Tabla", slug: "tabla" },
      { name: "Dholak/Dholki", slug: "dholak" },
      { name: "Clapbox", slug: "clapbox" },
    ],
  },
  {
    title: "Certifications",
    courses: [
      { name: "Trinity College London", slug: "trinity" },
      { name: "ABRSM – Royal Schools of Music", slug: "abrsm" },
      { name: "RSL – Rock School", slug: "rsl" },
      { name: "ABGMVM Akhil Bhartiya Gandharva Mahavidyalaya Mandal Mumbai", slug: "gmv" },
    ],
  },
];

const courseImages: Record<string, string> = {
  "popular-film-music-hindi": "/new_imgs/DSC01210 (1).webp",
  "hindustani-classical-vocal": "/instructor/Neelima-Hindustani_Vocals.webp",
  "carnatic-classical-vocal": "/new_imgs/DSC01210 (1).webp",
  "western-vocal": "/instructor/Kshitij_Kumar_Choudhary-Western-Vocals.webp",
  "popular-film-music-tamil": "/new_imgs/Copy of DSC00590.webp",
  "popular-film-music-kannada": "/new_imgs/Copy of DSC00590.webp",
  "ghazal": "/new_imgs/Copy of DSC00590.webp",
  "devotional": "/new_imgs/Copy of DSC00590.webp",
  "guitar-acoustic": "/instructor/Harsh-Bagle-guitar.webp",
  "guitar-rock-pop": "/instructor/Harsh-Bagle-guitar.webp",
  "piano": "/instructor/jeet_Goswami-piano.webp",
  "keyboard": "/instructor/jeet_Goswami-piano.webp",
  "violin": "/new_imgs/Copy of DSC00711 (1).webp",
  "flute": "/new_imgs/Copy of DSC00711 (1).webp",
  "ukulele": "/new_imgs/Copy of DSC00711 (1).webp",
  "drums": "/instructor/Subham Chand Sahu_Drums.webp",
  "tabla": "/instructor/Subham Chand Sahu_Drums.webp",
};

/** Same four tier names as Violin — used for every course page layout. */
const STANDARD_LEVEL_TIER_NAMES = [
  "Beginner ( Level 1 & Level 2 )",
  "Intermediate ( Level 3 & Level 4 )",
  "Proficient ( Level 5 & Level 6 )",
  "Advanced ( Level 7 & Level 8 )",
] as const;

function tierBlurb(courseName: string, index: number): string {
  const blurbs = [
    `Introduction to ${courseName}: fundamentals, technique, and building a strong foundation — aligned with our structured academic pathway.`,
    `Expanded skills and repertoire in ${courseName} — technique, musicality, and confidence across core material.`,
    `Refined ${courseName} study — advanced technique, expression, and performance depth.`,
    `Mastery-focused ${courseName} — professional-level repertoire, performance artistry, and readiness for the stage.`,
  ];
  return blurbs[index];
}

/** Violin-style four tiers, pricing hidden on page (same UI as Violin). Curriculum bullets: Violin only until other data is finalized. */
function violinStylePricingLevels(courseName: string, slug: string): PricingLevel[] {
  const violinModules = curriculumData["violin"];
  return STANDARD_LEVEL_TIER_NAMES.map((name, i) => ({
    name,
    pricePerClass: 0,
    totalClasses: 24,
    description: tierBlurb(courseName, i),
    learningPoints:
      slug === "violin"
        ? (violinModules[i]?.topics ?? []).filter((t): t is string => typeof t === "string" && t.trim().length > 0)
        : [],
  }));
}

const sharedCourseFeatures: Course["features"] = [
  { icon: "🎯", title: "In-person Classes", description: "Personalized attention at our academy centers with dedicated instructors for maximum progress." },
  { icon: "🕐", title: "60 Min Class", description: "Focused sessions designed to balance technique and repertoire." },
  { icon: "🏫", title: "Academy Learning", description: "Learn at our specialized academy centers with hands-on guidance." },
  { icon: "📜", title: "Course Certificate", description: "Get recognized for your milestones with certified course completion." },
  { icon: "📊", title: "Quarterly Feedback", description: "Detailed assessment of your progress every quarter." },
  { icon: "📅", title: "24 Sessions", description: "A comprehensive roadmap of ~24 sessions per module." },
];

export const allCourses: Course[] = courseCategories
  .filter((cat) => cat.title !== "Certifications")
  .flatMap((cat) =>
    cat.courses.map((c) => {
      const pricing = violinStylePricingLevels(c.name, c.slug);
      if (c.slug === "violin") {
        pricing[0].description = "Introduction to violin, holding, bowing exercises, and major/minor scales.";
        pricing[1].description = "Advanced scales, third position shifting, and Franz Wohlfahrt studies.";
        pricing[2].description = "Expanded scales, dominant 7ths, and continued Suzuki methods.";
        pricing[3].description = "5th position, 3-octave scales, chromatic scales, and advanced studies.";
      }

      return {
        slug: c.slug,
        name: c.name,
        category: cat.title,
        shortDescription: `Master ${c.name} with our structured modules. From beginners to advanced, learn technique, repertoire, and performance skills.`,
        heroDescription: `Professional ${c.name} lessons tailored to every skill level - Amateur to Pro.`,
        heroImage: courseImages[c.slug] || "/new_imgs/Copy of DSC00403.webp",
        features: sharedCourseFeatures,
        levels: [...STANDARD_LEVEL_TIER_NAMES],
        pricing,
        curriculum: curriculumData[c.slug],
        hidePricing: true,
        durationPerModule: "6 months",
        facultyHead: {
          name: "muziclub Academic Board",
          title: `muziclub Faculty Head — In-person ${c.name} Course`,
          image: "/instructor/Neelima-Hindustani_Vocals.webp",
          bio: `The muziclub Academic Board has designed and certified our ${c.name} course. Backed by years of collective experience, our board has carefully curated the ${c.name} curriculum at muziclub to ensure our students receive the best music education. Under expert guidance, our students receive world-class ${c.name} training that reflects creativity and technical excellence.`,
        },
        faqItems: [
          { question: `What is the duration of the ${c.name} course?`, answer: `Each module is 6 months, comprising ~24 sessions, structured across Beginner through Advanced levels.` },
          { question: "How large are group classes?", answer: "For group classes, the number of participants is strictly limited to 3 to maintain session effectiveness and give you personalized focus." },
          { question: "Do you offer Grade examinations?", answer: "Yes! Grade Classes follow the level structure from internationally recognized boards like Trinity, ABRSM, and Rockschool (RSL)." },
          { question: "Are classes customized to my taste?", answer: "Absolutely. Our Hobby Classes are customized based on individual preferences to help you play the music you love." },
          { question: "Can I perform live as a student?", answer: "Yes! Our motto 'live music' drives us. We arrange regular Sunday Jams where all students have the opportunity to perform live on stage." },
          { question: "How are the classes conducted?", answer: "Classes are conducted In-person at our physical academy centres (Baner, Pimple Saudagar, Hinjawadi)." },
          { question: "What if I miss a class?", answer: "We understand that schedules can be unpredictable. You can easily reschedule your lessons at your convenience." },
          { question: `Do I need any prior experience to learn ${c.name}?`, answer: "Not at all! Our Beginner level is designed for absolute beginners with zero prior experience." },
          { question: "What is the fee structure?", answer: `Please contact us for more information about ${c.name} course fees and enrollment options.` },
          { question: "Can I get a free trial before enrolling?", answer: "Absolutely! We encourage all students to book a FREE trial class before enrolling." },
        ],
      };
    })
  );

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find((c) => c.slug === slug);
}
