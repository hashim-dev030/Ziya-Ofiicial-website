import React from "react";
import TeamIcon from "../assets/contributer.png";

interface ServiceCardProps {
  title: string;
  description: string;
  contributors: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  contributors,
}) => {
  return (
    <div className="bg-white border border-[#D5D5D5] rounded-[20px] shadow-sm p-5 hover:shadow-md transition w-full max-w-[700px] min-h-[385px] flex flex-col">
      {/* Title */}
      <h3 className="text-[25px] font-medium leading-normal text-[#000000] mb-2 font-['Poppins']">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[22px] font-normal leading-normal text-[#000000] mb-4 font-['Poppins']">
        {description}
      </p>

      {/* Underline */}
      <hr className="border-t border-gray-300 mb-4" />

      {/* Contributors */}
      <div className="mt-auto text-sm">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={TeamIcon}
            alt="Team Icon"
            className="w-[23px] h-[19px] object-contain"
          />
          <span className="font-normal text-[18px] leading-normal text-[#000000] font-['Poppins']">
            Team Contributors
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mt-1 max-h-[60px] overflow-y-auto pr-1">
          {contributors.map((contributor, index) => (
            <span
              key={index}
              className="bg-[#C7E4F0] text-[#00A0E3] text-xs px-2 py-1 rounded-full"
            >
              {contributor}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
