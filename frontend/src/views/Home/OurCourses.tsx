import React from "react";
import OurCourseCard from "../../components/OurCourseCard"; 
import schoolCoaching from "../../assets/schoolCoaching.svg";  
import ignou from "../../assets/ignou.svg";  
import itTraining from "../../assets/itTraining.svg";  
import internships from "../../assets/internships.svg";  

const courses = [
  {
    logo: schoolCoaching,
    name: "School Coaching",
    description: "Lkg to +2 with personalized attention and CBSE/State syllabus",
    color: '#94C21A'
  },
  {
    logo: ignou,
    name: "NIOS/IGNOU",
    description: "Complete support for open Schooling and distance education",
    color: '#00A0E3'

  },
  {
    logo: itTraining,
    name: "IT Training",
    description: "Web Development, app development , Game Development, UI/UX ,Software Testing.. Etc",
    color: '#94C21A'
  },
  {
    logo: internships,
    name: "Internships.js",
    description: "Hands-on experience with real-world projects",
    color: '#00A0E3'
  },
];

const OurCourses: React.FC = () => {
  return (
    <div className=" bg-gray-50 flex flex-col items-center py-10">
      
      <h1 className="text-2xl sm:text-4xl font-[500] mb-8 text-center">
        Our Courses
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-12">
        {courses.map((course, index) => (
          <OurCourseCard
            key={index}
            logo={course.logo}
            name={course.name}
            description={course.description}
            color={course.color}
          />
        ))}
      </div>
    </div>
  );
};

export default OurCourses;
