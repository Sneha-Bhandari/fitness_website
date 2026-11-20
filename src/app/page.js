import HeroSection from "./component/Home/HeroSection";
import MilestonesSection from "./component/Home/MilestonesSection";
import ProgramsSection from "./component/Home/ProgramsSection";
import WhyChooseUsSection from "./component/Home/WhyChooseUsSection";

export default function Home() {
  return (
   <div className="h-full">
    <HeroSection/>
    <MilestonesSection/>
    <ProgramsSection/>
    <WhyChooseUsSection/>
   </div>
  );
}
