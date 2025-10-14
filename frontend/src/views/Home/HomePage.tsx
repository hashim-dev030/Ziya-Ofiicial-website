import OurCourseCard from '../../components/OurCourseCard'
import Navbar from '../../layout/NavBar'
import CourseOffering from './CourseOfferings'
import HeroSection from './HeroSection'
import OurCourses from './ourCourses'

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CourseOffering/>
      <OurCourses/>
    </div>
  )
}

export default HomePage
