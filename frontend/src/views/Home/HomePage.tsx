import Testmonial from '../../components/Testmonial'
import Navbar from '../../layout/NavBar'
import CourseOffering from './CourseOfferings'
import HeroSection from './HeroSection'
import OurCourses from './OurCourses'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CourseOffering/>
      <OurCourses/>
      <Testmonial/>

    </div>
  )
}

export default HomePage
