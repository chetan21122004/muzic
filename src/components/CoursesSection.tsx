import { Link } from "react-router-dom";
import bollywoodCourse from "@/assets/bollywood-course.webp";
import indianVocals from "@/assets/indian-vocals.webp";
import heroPiano from "@/assets/hero-piano.jpg";
import heroGuitar from "@/assets/hero-guitar.jpg";
import heroDrums from "@/assets/hero-drums.jpg";
import singingCourse from "@/assets/singing-course.jpg";

const courses = [
  { img: "/homepage_banners/instrument.png", title: "Guitar", desc: "Acoustic & electric guitar classes — from Bollywood strumming to Rock & Pop. Certification with RSL & Trinity available.", slug: "guitar-acoustic" },
  { img: "/homepage_banners/banner_3.png", title: "Piano / Keyboard", desc: "From Western Classical music to Pop songs. Our expert teachers help students get international certifications.", slug: "piano" },
  { img: "/homepage_banners/singing.png", title: "Bollywood Vocals", desc: "Sing all your favourite Hindi film songs while developing professional vocal technique and stage confidence.", slug: "popular-film-music-hindi" },
  { img: indianVocals, title: "Indian Classical Vocals", desc: "Master Hindustani and Carnatic classical traditions with qualified and experienced music gurus.", slug: "hindustani-classical-vocal" },
  { img: "/homepage_banners/banner_4.png", title: "Drums", desc: "Learn rhythm and groove from qualified drum instructors. Perform live at our weekly Sunday Jam sessions.", slug: "tabla" },
  { img: "/homepage_banners/banner_1.png", title: "Western Vocals", desc: "Explore Western classical singing, pop, and stage performance skills for any audience.", slug: "western-vocal" },
];

const CoursesSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground">Our Music Courses</h2>
            <p className="text-muted-foreground text-sm mt-1">Online & academy classes for all ages — beginners to advanced</p>
          </div>
          <Link to="/courses/guitar-acoustic" className="text-sm text-primary font-semibold hover:underline hidden sm:block">
            View all courses →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <Link key={i} to={`/courses/${course.slug}`} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/60 transition-colors group block">
              <div className="relative h-48 overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground">{course.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{course.desc}</p>
                <p className="text-xs text-primary font-medium">Enrol now →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
