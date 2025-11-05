import React from "react";
import { Target } from "lucide-react";

interface GoalCardProps {
  title: string;
  goals: string[];
}

const GoalCard: React.FC<GoalCardProps> = ({ title, goals }) => {
  return (
    <div
      className="
        bg-white 
        border-l-[6px] border-t-[2px] border-r-[2px] border-b-[2px]
        border-l-[#00A0E3] border-t-gray-200 border-r-gray-200 border-b-gray-200
        rounded-tr-[20px] rounded-br-[20px]
        p-4 sm:p-6 
        shadow-sm hover:shadow-md transition-shadow
        w-full lg:max-w-[580px]
        min-h-[180px] sm:min-h-[200px]
        flex flex-col 
        overflow-hidden
      "
    >
      {/* === Header === */}
      <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-wrap">
        <Target className="text-[#00A0E3] w-7 h-7 sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px]" />
        <h3 className="font-poppins text-[#00A0E3] text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-medium break-words">
          {title}
        </h3>
      </div>

      {/* === Goals List === */}
      <ul className="text-gray-700 text-sm sm:text-base md:text-lg space-y-2 font-poppins flex-1 overflow-hidden">
        {goals.map((goal, index) => (
          <li
            key={index}
            className="flex items-start gap-2 leading-snug break-words"
          >
            <span className="text-[#00A0E3] mt-[4px] flex-shrink-0">•</span>
            <span className="whitespace-normal">{goal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalCard;
