import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

interface BackCommonProps {
  link: string; 
}

const BackCommon: React.FC<BackCommonProps> = ({ link }) => {
 
  const normalizedLink = link.toLowerCase();

  // Define destination based on link type
  let destination = "/";
  if (normalizedLink === "career") destination = "/career";
  else if (normalizedLink === "courses") destination = "/courses";
  else if (normalizedLink === "internship") destination = "/internships";

  return (
    <Link
      to={destination}
      className="flex items-center gap-2 cursor-pointer hover:text-blue-300 transition-colors rounded-[20px]"
    >
      <ChevronLeftIcon className="w-6 h-6" />
      <h2 className="text-lg font-medium font-['Poppins']">
        Back to {link.charAt(0).toUpperCase() + link.slice(1)}
      </h2>
    </Link>
  );
};

export default BackCommon;
