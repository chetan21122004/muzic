import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AdvantageSection from "@/components/AdvantageSection";
import CoursesSection from "@/components/CoursesSection";
import EnrollSteps from "@/components/EnrollSteps";
import LearnPracticePerform from "@/components/LearnPracticePerform";
import LiveSessions from "@/components/LiveSessions";
import StarSingers from "@/components/StarSingers";
import Testimonials from "@/components/Testimonials";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AdvantageSection />
      <CoursesSection />
      <EnrollSteps />
      <LearnPracticePerform />
      <LiveSessions />
      <StarSingers />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Index;
