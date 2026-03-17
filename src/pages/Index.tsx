import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ImpactBar from "@/components/ImpactBar";
import CoursesSection from "@/components/CoursesSection";
import LearnPracticePerform from "@/components/LearnPracticePerform";
import AdvantageSection from "@/components/AdvantageSection";
import LiveSessions from "@/components/LiveSessions";
import StarSingers from "@/components/StarSingers";
import Testimonials from "@/components/Testimonials";
import JoinUs from "@/components/JoinUs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <LearnPracticePerform />
      <AdvantageSection />
      <LiveSessions />
      <StarSingers />
      <Testimonials />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default Index;
