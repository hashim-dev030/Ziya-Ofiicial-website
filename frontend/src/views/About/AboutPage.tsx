import { HeadProvider, Title, Meta } from 'react-head';
import AnimatedArrow from "../../components/Animation/AnimatedArrow";
import MainLayout from "../../layout/MainLayout";
import AboutCover from "./AboutCover";
import AboutZiya from "./AboutZiya";
import DirectorMessage from "./DirectorMessage";
import VisionMissionValues from "./VisionMissionValues";
const AboutPage = () => {
  return (
    <div>
      <HeadProvider>
        <Title>
          About Ziya Academy | Leading IT Training Institute in Kochi
        </Title>
        <Meta
          name="description"
          content="Learn more about Ziya Academy – Kochi’s trusted IT training institute focused on empowering students with practical skills in MERN Stack, Python, AI/ML, Data Science, and professional internships."
        />
        <link rel="canonical" href="https://www.ziyaacademy.co.in/about" />
      </HeadProvider>

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
