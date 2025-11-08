import React from "react";
import { GrLocation } from "react-icons/gr";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import type { InternshipCardProps } from "../../models/CardData/InternshipCardData";

const InternshipCard: React.FC<InternshipCardProps> = ({
  image,
  title,
  companyName,
  location,
  duration,
  workMode,
  onViewDetails,
  }) => {
    return (
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm mx-auto flex flex-col font-['Poppins'] h-full border border-gray-200 transform hover:-translate-y-2 hover:scale-[1.02]">
        {/* Image */}
         <div className="relative w-full h-48 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        < div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
    </div>
  
        {/* Content */}
        <div className="p-6 flex flex-col flex-1 text-left">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">{title}</h3>
            <p className="text-gray-600 text-sm mb-3">{companyName}</p>
            <p className="flex items-center gap-1 text-sm text-gray-500 mb-3">
              <GrLocation className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
              <span className="whitespace-nowrap">{location}</span>
            </p>
            <div className="flex items-center gap-3 mb-1">
                <p className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                <LuBriefcaseBusiness className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">{duration}</span>
                </p>
                <p className="flex items-center gap-1 text-sm text-gray-500 mb-3">
                <MdOutlineMapsHomeWork className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">{workMode}</span>
                </p>
            </div>
          </div>
  
          <button
            onClick={onViewDetails}
            className="mt-auto bg-[#00A0E3] hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
          >
            View Details
          </button>
        </div>
      </div>
  );
};

export default InternshipCard;
