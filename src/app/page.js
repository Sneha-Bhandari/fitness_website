import FaqSection from "./component/Home/FaqSection";
import HeroSection from "./component/Home/HeroSection";
import MilestonesSection from "./component/Home/MilestonesSection";
import ProgramsSection from "./component/Home/ProgramsSection";
import TestimonialsSection from "./component/Home/TestimonialsSection";
import WhyChooseUsSection from "./component/Home/WhyChooseUsSection";

export default function Home() {
  return (
   <div className="h-full">
    <HeroSection/>
    <MilestonesSection/>
    <ProgramsSection/>
    <WhyChooseUsSection/>
    <TestimonialsSection/>
    <FaqSection/>
   </div>
  );
}
