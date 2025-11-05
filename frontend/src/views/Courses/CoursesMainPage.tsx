
import MainLayout from "../../layout/MainLayout"
import CoursesHero from "./CourseHero"
import CourseTab from "./CourseTab"

const CoursesMainPage = () => {
    return (
      <div>
    
        <MainLayout>
          <CoursesHero />
          <CourseTab />
        </MainLayout>
      </div>
    );
}

export default CoursesMainPage
