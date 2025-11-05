import { BrowserRouter, Routes, Route } from "react-router-dom";
import  { Suspense, lazy } from "react";
import { Toaster } from "react-hot-toast";
import { ScrollToTop } from "../components/ScrollToTo";
import ScrollToHashElement from "../utils/ScrollToHashElement";
import ZiyaAcademyLoader from "../components/ZiyaAcademyLoader";


// Lazy Imports
const HomePage = lazy(() => import("../views/Home/HomePage"));
const AboutPage = lazy(() => import("../views/About/AboutPage"));
const CoursesMainPage = lazy(() => import("../views/Courses/CoursesMainPage"));
const AcademicCoursePage = lazy(() => import("../views/Courses/AcademicCoursePage"));
const SkillCoursePage = lazy(() => import("../views/Courses/SkillCoursePage"));
const InternshipMain = lazy(() => import("../views/Internships/InternshipsMain"));
const InternshipDetailMain = lazy(() => import("../views/Internships/IntershipDetails/InternshipDetailMain"));
const ContactUsMainPage = lazy(() => import("../views/ContactUs/ContactUsMainPage"));
const CareerMain = lazy(() => import("../views/Career/CareerMain"));
const CarrerDetails = lazy(() =>import("../views/Career/CarrerDetails").then((m) => ({ default: m.CarrerDetails })));
const ServiceMainPage = lazy(() => import("../views/Service/ServiceMainPage"));
const TandCMain = lazy(() => import("../views/T&C/T&CMain"));


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Toaster position="top-center" reverseOrder={false} />
      <ScrollToTop />

      {/* Suspense wrapper with full-page loader */}
      <Suspense
        fallback={
          <div className="w-screen h-screen flex items-center justify-center bg-white">
            <ZiyaAcademyLoader size={120} />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Courses" element={<CoursesMainPage />} />
          <Route path="/academic/:courseId" element={<AcademicCoursePage />} />
          <Route path="/skill/:courseId" element={<SkillCoursePage />} />
          <Route path="/Internships" element={<InternshipMain />} />
          <Route path="/internship/:internshipId" element={<InternshipDetailMain />} />
          <Route path="/Contact" element={<ContactUsMainPage />} />
          <Route path="/Career" element={<CareerMain />} />
          <Route path="/Career/:id" element={<CarrerDetails />} />
          <Route path="/Service" element={<ServiceMainPage />} />
          <Route path="/terms" element={<TandCMain />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
