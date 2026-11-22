import AboutBanner from "@/app/component/About/banner";
import WhoWeAre from "../component/About/whoWeAre";
import MissionVision from "../component/About/missionVision";
import OurFacilities from "../component/About/facilities";
import AboutCTA from "../component/About/cta";

export default function About() {
  return (
   <div>
   <AboutBanner/>
   <WhoWeAre/>
   <MissionVision/>
   <OurFacilities/>
   <AboutCTA/>
   </div>
  );
}
