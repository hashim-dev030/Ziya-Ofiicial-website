// src/routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../views/About/AboutPage";
import HomePage from "../views/Home/HomePage";
import CoursesMainPage from "../views/Courses/CoursesMainPage";
import ContactUsMainPage from "../views/ContactUs/ContactUsMainPage";
import CareerMain from "../views/Career/CareerMain";
import InternshipMain from "../views/Internships/InternshipsMain";
import TandCMain from "../views/T&C/T&CMain";
import ScrollToHashElement from "../utils/ScrollToHashElement";
import ServiceMainPage from "../views/Service/ServiceMainPage";
import AcademicCoursePage from "../views/Courses/AcademicCoursePage";
import SkillCoursePage from "../views/Courses/SkillCoursePage";

export default function AppRoutes() {


  return (
    <BrowserRouter>
      <ScrollToHashElement/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Courses" element={<CoursesMainPage />} />
        <Route path="/academic/:courseId" element={<AcademicCoursePage />} />
        <Route path="/skill/:courseId" element={<SkillCoursePage />} />
        <Route path="/Internships" element={<InternshipMain />} />
        <Route path="/Contact" element={<ContactUsMainPage />} />
        <Route path="/Career" element={<CareerMain />}/>
        <Route path="/Service" element={<ServiceMainPage />} />
        <Route path="/terms" element={<TandCMain />}/>
      </Routes>
    </BrowserRouter>
  );
}
