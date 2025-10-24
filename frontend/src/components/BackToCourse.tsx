import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const BackToCourse = () => {
  return (
    <Link
      to="/courses" 
      className="flex items-center gap-2 cursor-pointer hover:text-blue-300 transition-colors rounded-[20px]"  >
      <ChevronLeftIcon className="w-6 h-6" />
      <h2 className="text-lg font-medium font-['poppins] ">Back to Course</h2>
    </Link>
  );
};

export default BackToCourse;
