import MainLayout from "../../layout/MainLayout"
import AboutCover from "./AboutCover"
import AboutZiya from "./AboutZiya"
import DirectorMessage from "./DirectorMessage"
const AboutPage = () => {
  return (
    <div>
      <MainLayout>
        <AboutCover />
        <AboutZiya />
        <div className="pb-24">
        <DirectorMessage/>
        </div>
      </MainLayout>
    </div>
  )
}

export default AboutPage