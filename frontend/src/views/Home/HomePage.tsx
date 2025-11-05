import Testmonial from '../../components/Testmonial'
import MainLayout from '../../layout/MainLayout'
import CourseOffering from './CourseOfferings'
import HeroSection from './HeroSection'
import LandingPageForm from './LandingPageForm'
import OurCourses from './OurCourses'
import { Helmet } from "react-helmet-async";

const HomePage = () => {
  return (
    <div >
           <Helmet>
        <title>
          Kochi’s No.1 Training & Internship Institute | Ziya Academy
        </title>
        <meta
          name="description"
          content="Ziya Academy – Kochi’s No.1 training and internship institute offering industry-focused courses in MERN Stack, Python, Cybersecurity, React, Software Testing, Data Science, AI/ML, Data Analysis, and IGNOU degree programs. Build your career with hands-on training and real-world projects."
        />
        <meta
          name="keywords"
          content="best training institute Kochi, best internship Kochi, Ziya Academy, IGNOU courses Kochi, MERN stack training Kochi, Python course Kochi, Cybersecurity training Kochi, React training Kochi, Software testing Kochi, Data Science institute Kochi, AI ML training Kochi, Data analyst course Kochi, best academy in Kochi, IT training center Kochi"
        />
        <link rel="canonical" href="https://www.ziyaacademy.co.in/" />
      </Helmet>

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
