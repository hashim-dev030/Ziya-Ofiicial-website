import { HeadProvider, Title, Meta } from 'react-head';
import MainLayout from "../../layout/MainLayout"
import CoursesHero from "./CourseHero"
import CourseTab from "./CourseTab"

const CoursesMainPage = () => {
    return (
      <div>
        <HeadProvider>
          <Title>
            Professional IT Courses & IGNOU Programs in Kochi | Ziya Academy
          </Title>
          <Meta
            name="description"
            content="Explore professional courses at Ziya Academy – Kochi’s leading institute for MERN Stack, Python, Cybersecurity, React, Software Testing, Data Science, AI/ML, Data Analytics, and IGNOU-accredited degree programs."
          />
          <link rel="canonical" href="https://www.ziyaacademy.co.in/courses" />
        </HeadProvider>

        <MainLayout>
          <CoursesHero />
          <CourseTab />
        </MainLayout>
      </div>
    );
}

export default CoursesMainPage
