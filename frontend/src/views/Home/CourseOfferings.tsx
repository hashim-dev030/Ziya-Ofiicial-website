import React from "react";
import { GoArrowRight } from "react-icons/go";
import CoursesImg from "../../assets/Courses.svg"; 

const CourseOffering: React.FC = () => {
  return (
    <section className="bg-[#EFF4F8] py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12">
      {/* Left Side */}
      <div className="flex-1 md:flex-[0.55] lg:flex-[0.5] max-w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#262338] leading-[1.2] font-['Raleway']">
          Explore our <br />
          <span className="text-[#6CA6CD]">Current Course</span> <br />
          <span className="text-[#6CA6CD]">Offerings</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base md:text-lg text-[#4E4B66]">
          Our courses are carefully designed to enrich and <br />
          transform your educational experience.
        </p>
        <button className="mt-6 bg-[#37749D] hover:bg-blue-600 hover:cursor-pointer text-white px-4 sm:px-5 py-2 sm:py-3 rounded-md transition flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
          Browse Our Courses <GoArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 md:flex-[0.45] relative w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px] xl:h-[550px]">
        <img src={CoursesImg} alt="Course Offerings" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default CourseOffering;
