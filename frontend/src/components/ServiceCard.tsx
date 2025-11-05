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
<div className="relative group bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 w-full max-w-[720px] flex flex-col justify-between p-6 sm:p-8 font-poppins overflow-hidden">

  {/* Animated Color Overlay */}
  <div className="absolute bottom-0 left-0 w-full h-full bg-[rgb(42,0,78)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out rounded-2xl" />

  {/* Optional: Fade effect for smoother entry */}
  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-700" />

  {/* Content Layer */}
  <div className="relative z-10">
    <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-white transition-colors duration-500">
      {title}
    </h3>
    <p className="text-[15px] sm:text-[16px] lg:text-[18px] text-gray-600 leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
      {description}
    </p>
  </div>

  {/* Divider + Contributors */}
  <div className="relative z-10 mt-6">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
    <div className="flex items-center gap-2 mb-2">
      <img
        src={TeamIcon}
        alt="Team Icon"
        className="w-5 h-5 sm:w-6 sm:h-6 object-contain opacity-80 invert group-hover:invert-0 transition duration-500"
      />
      <span className="font-medium text-gray-800 text-[15px] sm:text-[16px] group-hover:text-gray-100 transition-colors duration-500">
        Team Contributors
      </span>
    </div>

    <div className="flex flex-wrap gap-2 mt-2 max-h-[64px] overflow-y-auto pr-1">
      {contributors.map((contributor, index) => (
        <span
          key={index}
          className="bg-[#EAF7FF] text-[#007ACC] text-[13px] sm:text-[14px] px-3 py-1 rounded-full font-medium hover:bg-[#D6F0FF] hover:text-[#000] transition-colors group-hover:bg-white/10 group-hover:text-white"
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
