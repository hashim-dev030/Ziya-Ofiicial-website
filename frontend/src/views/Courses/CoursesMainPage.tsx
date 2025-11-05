import { Helmet } from "react-helmet-async"
import MainLayout from "../../layout/MainLayout"
import CoursesHero from "./CourseHero"
import CourseTab from "./CourseTab"

const CoursesMainPage = () => {
    return (
      <div>
        <Helmet>
          <title>
            Professional IT Courses & IGNOU Programs in Kochi | Ziya Academy
          </title>
          <meta
            name="description"
            content="Explore professional courses at Ziya Academy – Kochi’s leading institute for MERN Stack, Python, Cybersecurity, React, Software Testing, Data Science, AI/ML, Data Analytics, and IGNOU-accredited degree programs."
          />
          <link rel="canonical" href="https://www.ziyaacademy.co.in/courses" />
        </Helmet>

        <MainLayout>
          <CoursesHero />
          <CourseTab />
        </MainLayout>
      </div>
    );
}

export default CoursesMainPage
