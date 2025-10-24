
import React from "react";
import affliationIcon from "../assets/Icons/Course/affliations.svg";
import durationIcon from "../assets/Icons/Course/duration.svg";
import minimumAgeIcon from "../assets/Icons/Course/minimum_age.svg";
import sessionIcon from "../assets/Icons/Course/session.svg";
import level_intermediate from "../assets/Icons/Course/level_intermediate.svg";
import syllabus from "../assets/Icons/Course/syllabus.svg";

interface CourseDurationProps {
  affliation?: string;
  durationInMonths?: string;
  minimumAge?: string;
  sessionStart?: string;
  category?: string;
  level?: string;
}

const CourseDuration: React.FC<CourseDurationProps> = ({
  affliation,
  durationInMonths,
  minimumAge,
  sessionStart,
  category,
  level,
}) => {
  const allItems = [
    { icon: affliationIcon, label: "Affiliated to", value: affliation },
    { icon: durationIcon, label: "Duration", value: durationInMonths },
    { icon: minimumAgeIcon, label: "Minimum Age", value: minimumAge },
    { icon: sessionIcon, label: "Session Starts", value: sessionStart },
    { icon: level_intermediate, label: "Level ", value: level },
    { icon: syllabus, label: "Category", value: category },
  ];

    // Filter out items with empty or undefined values
    const items = allItems.filter((item) => item.value && item.value.trim() !== "");
  return (
<div
  className=" w-full  mx-auto rounded-md flex flex-wrap justify-evenly items-center px-3 py-3 gap-4 bg-white  h-auto lg:h-[4.5vw]  ">
  {items.map((item, index) => (
    <React.Fragment key={index}>
      <div
        className="  flex items-center gap-4  w-1/5 justify-start">
        {/* === Icon === */}
       <img src={item.icon} alt={item.label} className="  object-contain
        w-[4.0vw] h-[4.0vw]          /* mobile first */
        sm:w-[4vw] sm:h-[4vw]      /* small tablet */
        md:w-[2.5vw] md:h-[2.5vw]  /* tablet/laptop */
        lg:w-[2.8vw] lg:h-[2.8vw]  /* desktop */
        xl:w-[4.2vw] xl:h-[2.2vw]  /* extra large screens */"/>


        {/* === Text === */}
        <div className="flex flex-col leading-tight">
         <span className=" text-gray-600
        text-[1.5vw]        /* mobile first */
        sm:text-[1.2vw]     /* small tablet */
       md:text-[1.5vw]     /* tablet/laptop */
       lg:text-[0.7vw]     /* desktop */
       xl:text-[0.7vw]       /* extra large screens, optional */  ">{item.label}
       </span>

         <span className=" text-gray-900 font-semibold
       text-[1.6vw]      /* default for mobile (xs) */
       sm:text-[1.6vw]   /* small screens and up */
       md:text-[1.5vw]   /* medium screens and up */
       lg:text-[0.89vw]     /* large screens and up */"> {item.value}
          </span>
        </div>
      </div>

      {/* Divider for desktop only */}
      {index < items.length - 1 && (
        <div className="hidden lg:block w-px h-[2.2vw] bg-gray-300 mx-2" />
      )}
    </React.Fragment>
  ))}
</div>



  );
};

export default CourseDuration;
