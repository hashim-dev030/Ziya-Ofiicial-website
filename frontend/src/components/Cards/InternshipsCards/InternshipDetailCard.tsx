import React from "react";
import remote from "../../../assets/Icons/InternshipDetails/location.svg";
import inticon from "../../../assets/Icons/InternshipDetails/internIcon.svg";
interface InternshipCardProps {
  title: string;
  icon: string;
  duration?: string;
  mode:string;
}

const InternshipDetailCard: React.FC<InternshipCardProps> = ({
  title,
  icon,
  duration = "6 Months",
  mode,
}) => {
  return (
    <div className="w-full max-w-[1200px] mx-auto rounded-[20px] md:rounded-[30px] overflow-hidden shadow-md border border-gray-200 bg-white">
      {/* Header Section */}
      <div className="bg-sky-500 flex flex-col sm:flex-row items-center justify-center sm:justify-start px-4 sm:px-6 py-4 sm:h-[114px] text-center sm:text-left">
        <img src={icon} alt={`${title} icon`} className="w-10 h-10 sm:w-[53px] sm:h-[53px] sm:mr-3 mb-2 sm:mb-0" />
        <span className="font-[500] text-xl sm:text-2xl md:text-[28px] lg:text-[30px] font-[Poppins] text-white">
          {title}
        </span>
      </div>

      {/* Body Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0 px-4 sm:px-6 py-6 sm:py-4 lg:py-10 text-gray-600 text-sm">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          {/* Location */}
          <div className="flex items-center gap-2">
            <img src={remote} alt="location" className="w-6 h-6 sm:w-[35px] sm:h-[35px]" />
            <span className="font-medium text-lg sm:text-xl md:text-[21px] lg:text-[24px] text-[#555555] font-[Poppins]">
              {mode}
            </span>
          </div>

          {/* Internship Type */}
          <div className="flex items-center gap-2">
            <img src={inticon} alt="internship" className="w-6 h-6 sm:w-[35px] sm:h-[35px]" />
            <span className="font-medium text-lg sm:text-xl md:text-[21px] lg:text-[24px] text-[#555555] font-[Poppins]">
              Internship
            </span>
          </div>
        </div>

        {/* Duration */}
        <span className="w-[160px] sm:w-[189px] h-[40px] sm:h-[47px] rounded-[25px] sm:rounded-[30px] flex items-center justify-center font-[600] text-base sm:text-lg md:text-[22px] lg:text-[25px] font-[Poppins] text-white bg-[#72BAD8]">
          {duration}
        </span>
      </div>
    </div>
  );
};

export default InternshipDetailCard;
