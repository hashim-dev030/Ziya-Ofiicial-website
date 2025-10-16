// src/routes/AppRoutes.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../views/About/AboutPage";
import HomePage from "../views/Home/HomePage";
import CoursesMainPage from "../views/Coureses/CoursesMainPage";


export default function AppRoutes() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Courses" element={<CoursesMainPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}
