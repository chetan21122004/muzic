import course1 from "@/assets/course1.jpg";
import course2 from "@/assets/course2.jpg";
import course3 from "@/assets/course3.jpg";
import course4 from "@/assets/course4.jpg";

const courses = [
  { img: course1, title: "Hindi Film Music", desc: "Sing all your favorite Bollywood songs while learning professional vocal techniques", teacher: "Multiple Teachers" },
  { img: course2, title: "Tamil Film Music", desc: "Learn to sing Tamil film songs and popular compositions offering melody and rhythm", teacher: "Multiple Teachers" },
  { img: course3, title: "Karaoke & Stage Skills", desc: "Build confidence, learn vocal music and stage performance skills for any audience", teacher: "Multiple Teachers" },
  { img: course4, title: "Carnatic Classical", desc: "Explore the rich tradition of South Indian classical music with structured lessons", teacher: "Multiple Teachers" },
];

const CoursesSection = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-10">Our Online Music Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, i) => (
            <div key={i} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-colors group">
              <div className="relative h-48 overflow-hidden">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold text-foreground">{course.title}</h3>
                <p className="text-xs text-muted-foreground line-clamp-2">{course.desc}</p>
                <p className="text-xs text-primary">{course.teacher}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
