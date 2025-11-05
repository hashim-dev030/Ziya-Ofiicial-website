
import AnimatedArrow from "../../components/Animation/AnimatedArrow";
import MainLayout from "../../layout/MainLayout";
import AboutCover from "./AboutCover";
import AboutZiya from "./AboutZiya";
import DirectorMessage from "./DirectorMessage";
import VisionMissionValues from "./VisionMissionValues";
const AboutPage = () => {
  return (
    <div>
      

      <MainLayout>
        <AboutCover />
        <AnimatedArrow />
        <AboutZiya />
        <VisionMissionValues />
        <div className="pb-24">
          <DirectorMessage />
        </div>
      </MainLayout>
    </div>
  );
};

export default AboutPage;
