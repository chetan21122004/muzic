import { Link } from "react-router-dom";

const courses = [
  {
    img: "/homepage_banners/instrument.png",
    title: "Guitar",
    desc: "Acoustic & electric guitar classes — from Bollywood strumming to Rock & Pop. RSL & Trinity certifications available.",
    slug: "guitar-acoustic",
    tag: "🎸",
  },
  {
    img: "/homepage_banners/banner_3.png",
    title: "Piano / Keyboard",
    desc: "From Western Classical to Pop songs. Expert teachers guide you to international certifications.",
    slug: "piano",
    tag: "🎹",
  },
  {
    img: "/homepage_banners/singing.png",
    title: "Bollywood Vocals",
    desc: "Sing your favourite Hindi film songs while developing professional vocal technique and stage confidence.",
    slug: "popular-film-music-hindi",
    tag: "🎤",
  },
  {
    img: "/instructor/Neelima-Hindustani_Vocals.webp",
    title: "Indian Classical Vocals",
    desc: "Master Hindustani and Carnatic classical traditions with qualified and experienced music gurus.",
    slug: "hindustani-classical-vocal",
    tag: "🪗",
  },
  {
    img: "/homepage_banners/banner_4.png",
    title: "Drums",
    desc: "Learn rhythm and groove from qualified drum instructors. Perform live at our weekly Sunday Jam sessions.",
    slug: "drums",
    tag: "🥁",
  },
  {
    img: "/homepage_banners/banner_1.png",
    title: "Western Vocals",
    desc: "Explore Western classical singing, pop, and stage performance skills for any audience.",
    slug: "western-vocal",
    tag: "🎵",
  },
];

const CoursesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
          <div>
            <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">What We Teach</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Music Courses</h2>
            <p className="text-gray-400 text-sm mt-2">Online & academy classes for all ages — beginners to advanced</p>
          </div>
          <Link
            to="/online-programs"
            className="text-sm font-semibold text-primary hover:underline mt-4 sm:mt-0 shrink-0"
          >
            View all courses →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <Link
              key={i}
              to={`/courses/${course.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block"
            >
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/homepage_banners/banner_1.png";
                  }}
                />
                <div className="absolute top-3 left-3 w-9 h-9 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center text-lg shadow-sm">
                  {course.tag}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-base mb-1">{course.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{course.desc}</p>
                <p className="text-xs text-primary font-semibold mt-3 group-hover:underline">Enrol now →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
