import React from "react";
import { Link } from "react-router-dom";

interface OurCourseCardProps {
  logo: string;
  name: string;
  description: string;
  color: string;
    link: string; 
}

const OurCourseCard: React.FC<OurCourseCardProps> = ({ logo, name, description, color,link }) => {
  return (
        <Link to={link}>
    <div
      className="
        flex flex-col items-center
        border rounded-2xl shadow-lg border-gray-300
        p-4 
        w-full max-w-[282px]     /* max width for 1440px screen */
        aspect-square             /* maintain height = width */
        bg-white
        transition-transform hover:scale-105
        justify-center
      "
    >
     
      <img
        src={logo}
        alt={name}
        className="object-contain h-18 w-18 sm:h-14 sm:w-14 md:h-16 md:w-16 mb-3"
      />

      
      <h1
        className="text-[.9rem] sm:text-base md:text-lg font-semibold text-center leading-tight mb-1 pt-4"
        style={{ color }}
      >
        {name}
      </h1>

      
      <p className="text-sm sm:text-xs md:text-lg text-gray-500 text-center leading-tight line-clamp-2 pt-4">
        {description}
      </p>
    </div>
    </Link>
  );
};

export default OurCourseCard;
