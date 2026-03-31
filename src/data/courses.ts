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

function generatePricing(name: string): PricingLevel[] {
  return [
    {
      name: "Preparatory",
      label: "Ideal for Beginners",
      pricePerClass: 800,
      totalClasses: 48,
      description: `The preparatory level of our online ${name} classes is designed for absolute beginners. You will learn the fundamentals, basic techniques, and develop a strong foundation to build upon.`,
      learningPoints: [
        "Build a strong foundation in basic techniques and theory.",
        "Develop proper posture, breathing, and practice habits.",
        "Learn to play/sing simple compositions with confidence.",
        "Understand basic music notation and terminology.",
      ],
    },
    {
      name: "Intermediate",
      discount: "5% off",
      pricePerClass: 879,
      originalPrice: 925,
      totalClasses: 72,
      description: `The intermediate level takes your ${name} skills further with more complex techniques, diverse repertoire, and deeper theoretical understanding.`,
      learningPoints: [
        "Explore intermediate-level compositions and repertoire.",
        "Develop nuanced expression and dynamic control.",
        "Strengthen theoretical knowledge for deeper understanding.",
        "Begin preparing for graded certification exams.",
      ],
    },
    {
      name: "Proficient",
      discount: "10% off",
      pricePerClass: 945,
      originalPrice: 1050,
      totalClasses: 96,
      description: `The proficient level of our online ${name} classes is a transformative and guided learning experience. At this level, you will refine advanced techniques, expressive improvisation, and dynamic performance artistry.`,
      learningPoints: [
        "Hone advanced techniques and improvisation skills.",
        "Deepen your understanding of complex musical structures.",
        "Engage in immersive guided listening and analysis sessions.",
        "Prepare for professional-level performances and exams.",
      ],
    },
    {
      name: "Advanced",
      discount: "10% off",
      pricePerClass: 945,
      originalPrice: 1050,
      totalClasses: 96,
      description: `The advanced level is for serious students who want to achieve mastery in ${name}. Focus on professional performance, composition, and career readiness.`,
      learningPoints: [
        "Master professional-level performance techniques.",
        "Develop your unique artistic voice and style.",
        "Create original compositions and arrangements.",
        "Build a performance portfolio for career opportunities.",
      ],
    },
  ];
}

export const allCourses: Course[] = courseCategories
  .filter((cat) => cat.title !== "Certifications")
  .flatMap((cat) =>
    cat.courses.map((c) => {
      const isViolin = c.slug === "violin";
      
      const violinLevels = [
        "Beginner (Level 1 & Level 2)",
        "Intermediate (Level 3 & 4)",
        "Proficient (5 & 6)",
        "Advanced (7 & 8)"
      ];

      const violinPricing: PricingLevel[] = [
        {
          name: "Beginner (Level 1 & Level 2)",
          pricePerClass: 0,
          totalClasses: 24,
          description: "Introduction to violin, holding, bowing exercises, and major/minor scales.",
          learningPoints: curriculumData["violin"][0].topics
        },
        {
          name: "Intermediate (Level 3 & 4)",
          pricePerClass: 0,
          totalClasses: 24,
          description: "Advanced scales, third position shifting, and Franz Wohlfahrt studies.",
          learningPoints: curriculumData["violin"][1].topics
        },
        {
          name: "Proficient (5 & 6)",
          pricePerClass: 0,
          totalClasses: 24,
          description: "Expanded scales, dominant 7ths, and continued Suzuki methods.",
          learningPoints: curriculumData["violin"][2].topics
        },
        {
          name: "Advanced (7 & 8)",
          pricePerClass: 0,
          totalClasses: 24,
          description: "5th position, 3-octave scales, chromatic scales, and advanced studies.",
          learningPoints: curriculumData["violin"][3].topics
        }
      ];

      return {
        slug: c.slug,
        name: c.name,
        category: cat.title,
        shortDescription: isViolin 
          ? "Master the Violin with our structured modules. From beginners to advanced, learn techniques, scales, and classical pieces."
          : `Learn ${c.name} at Muziclub. Hobby and Grade classes available online and in-person, tailored for all ages and skill levels.`,
        heroDescription: isViolin
          ? "Professional violin lessons tailored to every skill level - Amateur to Pro."
          : `Personalised In-person ${c.name} Lessons tailored to every skill level — Amateur to Pro!`,
        heroImage: courseImages[c.slug] || "/new_imgs/Copy of DSC00403.webp",
        features: isViolin ? [
          { icon: "🎯", title: "In-person Classes", description: "Personalized attention at our academy centers with dedicated instructors for maximum progress." },
          { icon: "🕐", title: "60 Min Class", description: "Focused sessions designed to balance technique and repertoire." },
          { icon: "🏫", title: "Academy Learning", description: "Learn at our specialized academy centers with hands-on guidance." },
          { icon: "📜", title: "Course Certificate", description: "Get recognized for your milestones with certified course completion." },
          { icon: "📊", title: "Quarterly Feedback", description: "Detailed assessment of your progress every quarter." },
          { icon: "📅", title: "24 Sessions", description: "A comprehensive roadmap of ~24 sessions per module." },
        ] : [
          { icon: "🎓", title: "Expert Teachers", description: `Finding the right teacher is paramount when learning ${c.name}. At Muziclub, we have a faculty of trained music experts personally handpicked to deliver the best music learning experience.` },
          { icon: "🎤", title: "From Student to Performer", description: "Every student who enrolls with us gets to perform in front of a virtual audience at Muziclub Performances, followed by a LIVE audience at our Sunday Jam sessions." },
          { icon: "⭐", title: "Course For All", description: `Our In-person ${c.name} classes cover all aspects of learning. It aims to build on your expression and on-stage confidence — ideal for music aspirants at all levels, beginner to pro.` },
        ],
        levels: isViolin ? violinLevels : ["Preparatory", "Intermediate", "Proficient", "Advanced"],
        pricing: isViolin ? violinPricing : generatePricing(c.name),
        curriculum: curriculumData[c.slug],
        hidePricing: isViolin,
        durationPerModule: isViolin ? "6 months" : undefined,
        facultyHead: {
          name: "Muziclub Academic Board",
          title: `Muziclub Faculty Head — In-person ${c.name} Course`,
          image: "/instructor/Neelima-Hindustani_Vocals.webp",
          bio: `The Muziclub Academic Board has designed and certified our ${c.name} course. Backed by years of collective experience, our board has carefully curated the ${c.name} curriculum at Muziclub to ensure our students receive the best music education. Under expert guidance, our students receive world-class ${c.name} training that reflects creativity and technical excellence.`,
        },
        faqItems: [
          { question: `What is the duration of the ${c.name} course?`, answer: isViolin ? "Each module in the Violin course duration is 6 months, comprising ~24 sessions." : "The course duration depends on the level you choose. Classes follow content structured as Preparatory, Intermediate, Proficient and Advanced levels." },
          { question: "How large are group classes?", answer: "For group classes, the number of participants is strictly limited to 3 to maintain session effectiveness and give you personalized focus." },
          { question: "Do you offer Grade examinations?", answer: "Yes! Grade Classes follow the level structure from internationally recognized boards like Trinity, ABRSM, and Rockschool (RSL)." },
          { question: "Are classes customized to my taste?", answer: "Absolutely. Our Hobby Classes are customized based on individual preferences to help you play the music you love." },
          { question: "Can I perform live as a student?", answer: "Yes! Our motto 'live music' drives us. We arrange regular Sunday Jams where all students have the opportunity to perform live on stage." },
          { question: "How are the classes conducted?", answer: "Classes are conducted In-person at our physical academy centres (Baner, Pimple Saudagar, Hinjawadi)." },
          { question: "What if I miss a class?", answer: "We understand that schedules can be unpredictable. You can easily reschedule your lessons at your convenience." },
          { question: `Do I need any prior experience to learn ${c.name}?`, answer: "Not at all! Our Preparatory level is designed for absolute beginners with zero prior experience." },
          { question: "What is the fee structure?", answer: isViolin ? "Please contact us for more information about the Violin course fees and enrollment options." : "Our fees start at INR 800/class for the Preparatory level. Higher levels offer bulk discounts of 5-10%." },
          { question: "Can I get a free trial before enrolling?", answer: "Absolutely! We encourage all students to book a FREE trial class before enrolling." },
        ],
      };
    })
  );

export function getCourseBySlug(slug: string): Course | undefined {
  return allCourses.find((c) => c.slug === slug);
}
