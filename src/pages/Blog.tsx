import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const blogPosts = [
    {
        slug: "malay-kale-drums-no-one-knows-cover",
        title: "Malay Kale – Drums Student | #studentshowcase",
        subtitle: "No One Knows – Drums Cover",
        excerpt: "Malay Kale is a drums student at Muziclub who has been learning for over a year. Watch him perform an energetic cover of 'No One Knows' by Queens of the Stone Age. This cover showcases his technique, timing, and musical feel — a testament to what consistent practice and great teaching can achieve.",
        date: "October 2022",
        categories: ["cover", "drums", "malay kale", "student showcase"],
        emoji: "🥁",
        featured: true,
    },
    {
        slug: "arushi-deshpande-guitar-student-showcase",
        title: "Arushi Deshpande – Guitar Student | #studentshowcase",
        subtitle: "Beautiful guitar covers and originals",
        excerpt: "Arushi Deshpande is a guitar student learning with Conrad Bhengra at Muziclub. Watch her perform heartfelt guitar covers and originals that show immense growth in her playing style. A wonderful example of dedication and passion.",
        date: "September 2022",
        categories: ["guitar cover", "student showcase", "Conrad Bhengra"],
        emoji: "🎸",
        featured: false,
    },
    {
        slug: "ukulele-1-month-crash-course",
        title: "Ukulele – 1 Month Crash Course!",
        subtitle: "New Batch Begins August 2022",
        excerpt: "Always wanted to learn the ukulele? Muziclub is launching a fun, structured 1-month crash course for beginners. Learn basic chords, strumming patterns, and play your favourite songs — all in just 4 weeks! Batches begin August 2022. Limited seats. Enroll now.",
        date: "July 2022",
        categories: ["ukulele", "crash course", "batch"],
        emoji: "🎵",
        featured: false,
    },
    {
        slug: "nirav-chakrabarti-guitar-master-of-puppets",
        title: "Nirav Chakrabarti – Guitar Student | #studentshowcase",
        subtitle: "Master Of Puppets – Metallica Cover",
        excerpt: "Nirav Chakrabarti performs a jaw-dropping cover of 'Master Of Puppets' by Metallica — a technically demanding piece made popular again by Stranger Things. Nirav's dedication to mastering this iconic guitar riff is truly inspiring. This is what Sunday Jam is all about.",
        date: "August 2022",
        categories: ["Metallica", "Stranger Things", "guitar cover", "student showcase"],
        emoji: "🤘",
        featured: false,
    },
    {
        slug: "charan-varun-raavi-keyboard-students",
        title: "Charan Raavi & Varun Raavi – Keyboard Students | #studentshowcase",
        subtitle: "Learning at Muziclub for almost a year",
        excerpt: "Charan Raavi and Varun Raavi have been learning keyboard at Muziclub for almost a year. Their progress is remarkable — from complete beginners to confident players capable of performing melodic pieces. Watch their showcase performance.",
        date: "June 2022",
        categories: ["keyboard", "student showcase", "piano"],
        emoji: "🎹",
        featured: false,
    },
    {
        slug: "sunday-jam-fathers-day-special",
        title: "Sunday Jam – Father's Day Special",
        subtitle: "A musical dedication to all fathers",
        excerpt: "Muziclub's iconic Sunday Jam went special for Father's Day! Students performed beautiful dedications to their fathers — a heartwarming celebration of music, family, and love. Sunday Jam is an opportunity for all Muziclub students to perform live every week.",
        date: "June 2022",
        categories: ["Sunday Jam", "events", "performance"],
        emoji: "🎤",
        featured: false,
    },
];

const Blog = () => {
    const featured = blogPosts.find((p) => p.featured);
    const rest = blogPosts.filter((p) => !p.featured);

    return (
        <div className="min-h-screen bg-background font-secondary">
            <Navbar />

            {/* Hero */}
            <section className="bg-card py-16 border-b border-border">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Muzi<span className="text-primary">club</span> Blog
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        Student showcases, course announcements, Sunday Jam highlights, and everything Muziclub.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">

                {/* Featured Post */}
                {featured && (
                    <div className="mb-14">
                        <p className="text-primary text-xs font-bold uppercase tracking-widest mb-4">Featured</p>
                        <div className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col lg:flex-row hover:border-primary/40 transition-colors">
                            <div className="lg:w-2/5 bg-secondary flex items-center justify-center text-7xl py-16">
                                {featured.emoji}
                            </div>
                            <div className="flex-1 p-8 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {featured.categories.map((c) => (
                                        <span key={c} className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{c}</span>
                                    ))}
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">{featured.title}</h2>
                                <p className="text-primary font-medium text-sm">{featured.subtitle}</p>
                                <p className="text-muted-foreground text-sm leading-relaxed">{featured.excerpt}</p>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-xs text-muted-foreground">{featured.date}</span>
                                    <a
                                        href={`https://muziclub.com/blogs/${featured.slug}/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary text-sm font-semibold hover:underline"
                                    >
                                        Read full post →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Blog Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((post) => (
                        <div key={post.slug} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-colors group flex flex-col">
                            <div className="bg-secondary flex items-center justify-center text-5xl py-12">
                                {post.emoji}
                            </div>
                            <div className="p-6 space-y-3 flex-1 flex flex-col">
                                <div className="flex flex-wrap gap-1.5">
                                    {post.categories.slice(0, 2).map((c) => (
                                        <span key={c} className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{c}</span>
                                    ))}
                                </div>
                                <h3 className="font-bold text-foreground text-sm leading-snug">{post.title}</h3>
                                <p className="text-primary text-xs font-medium">{post.subtitle}</p>
                                <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 flex-1">{post.excerpt}</p>
                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-xs text-muted-foreground">{post.date}</span>
                                    <a
                                        href={`https://muziclub.com/blogs/`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary text-xs font-semibold hover:underline"
                                    >
                                        Read more →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-14 bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
                    <h3 className="text-foreground font-bold text-xl mb-2">Want to be featured on the Muziclub Blog?</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                        Join Muziclub, perform at our Sunday Jam sessions, and you too could be our next featured student!
                    </p>
                    <a
                        href="https://muziclub.com/contact-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                    >
                        Book a Free Trial Class
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Blog;
