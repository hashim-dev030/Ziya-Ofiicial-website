import React from "react";
import { GrLocation } from "react-icons/gr";
import type { CareerCardProps } from "../../models/CardData/CareerCardData";
import { LuBriefcaseBusiness } from "react-icons/lu";

const CareerCard: React.FC<CareerCardProps> = ({
  image,
  title,
  location,
  jobType,
  description,
  onViewDetails,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full max-w-sm mx-auto flex flex-col font-['Poppins'] h-full border border-gray-200">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 text-left">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
          <p className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <GrLocation className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="whitespace-nowrap">{location}</span>
          </p>
          <p className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            <LuBriefcaseBusiness className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
            <span className="whitespace-nowrap bg-[#D9D9D9] rounded-full px-2">
              {jobType}
            </span>
          </p>
          <p className="text-gray-600 text-sm mb-6">{description}</p>
        </div>

        <button
          onClick={onViewDetails}
          className="mt-auto bg-[#00A0E3] hover:bg-blue-700 hover:cursor-pointer text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default CareerCard;
