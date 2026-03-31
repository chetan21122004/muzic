import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AdvantageSection from "@/components/AdvantageSection";
import CoursesSection from "@/components/CoursesSection";
import EnrollSteps from "@/components/EnrollSteps";
import LearnPracticePerform from "@/components/LearnPracticePerform";
import LiveSessions from "@/components/LiveSessions";
import StarSingers from "@/components/StarSingers";
import Testimonials from "@/components/Testimonials";
import JoinUs from "@/components/JoinUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-secondary flex flex-col w-full">
      <Navbar />
      <main className="flex-grow w-full overflow-hidden">
        <HeroSection />
        <AdvantageSection />
        <CoursesSection />
        <EnrollSteps />
        <Testimonials />
        <JoinUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
