import React from "react";
import { CheckCircle } from "lucide-react";

interface TaskCardProps {
  title: string;
  tasks: string[];
}

const TaskCard: React.FC<TaskCardProps> = ({ title, tasks }) => {
  return (
    <div
      className="
        bg-white 
        border-l-[6px] border-t-[2px] border-r-[2px] border-b-[2px]
        border-l-[#94C21A] border-t-gray-200 border-r-gray-200 border-b-gray-200
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
        <CheckCircle className="text-[#94C21A] w-7 h-7 sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px]" />
        <h3 className="font-poppins text-[#94C21A] text-xl sm:text-2xl md:text-[26px] lg:text-[28px] font-medium break-words">
          {title}
        </h3>
      </div>

      {/* === Tasks List === */}
      <ul className="text-gray-700 text-sm sm:text-base md:text-lg space-y-2 font-poppins flex-1 overflow-hidden">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-start gap-2 leading-snug break-words"
          >
            <span className="text-[#94C21A] mt-[4px] flex-shrink-0">•</span>
            <span className="whitespace-normal">{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskCard;
