import Testmonial from '../../components/Testmonial'
import MainLayout from '../../layout/MainLayout'
import CourseOffering from './CourseOfferings'
import HeroSection from './HeroSection'
import LandingPageForm from './LandingPageForm'
import OurCourses from './OurCourses'


const HomePage = () => {
  return (
    <div >


      <MainLayout>
        <HeroSection />
        <CourseOffering />
        <OurCourses />
        <Testmonial />
        <LandingPageForm />
      </MainLayout>
    </div>
  )
}

export default HomePage
