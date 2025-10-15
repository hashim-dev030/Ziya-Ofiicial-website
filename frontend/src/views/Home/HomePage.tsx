import Testmonial from '../../components/Testmonial'
import { Footer } from '../../layout/Footer'
import Navbar from '../../layout/NavBar'
import CourseOffering from './CourseOfferings'
import HeroSection from './HeroSection'
import LandingPageForm from './LandingPageForm'
import OurCourses from './OurCourses'

const HomePage = () => {
  return (
    <div >
      <Navbar/>
      <HeroSection/>
      <CourseOffering/>
      <OurCourses/>
      <Testmonial/>
      <LandingPageForm/>
      <Footer/>
    </div>
  )
}

export default HomePage
