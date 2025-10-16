import React from "react";
import visionIcon from "../../assets/vision.svg";
import missionIcon from "../../assets/mission.svg";
import innovationIcon from "../../assets/inovation.svg";
import excellenceIcon from "../../assets/exxellence.png";
import integrityIcon from "../../assets/integrity.png";
import empowermentIcon from "../../assets/empowerment.png";
import collaborationIcon from "../../assets/collaboration.png";
import bgImage from "../../assets/visionmissionbg.png";

const values = [
  {
    title: "Innovation",
    description:
      "Encouraging students to experiment, create, and think beyond boundaries.",
    icon: innovationIcon,
  },
  {
    title: "Excellence",
    description:
      "Delivering high-quality education and training that meets industry standards.",
    icon: excellenceIcon,
  },
  {
    title: "Integrity",
    description:
      "Upholding ethical practices in teaching, mentoring, and technology.",
    icon: integrityIcon,
  },
  {
    title: "Empowerment",
    description:
      "Enabling students to take charge of their learning and career journey.",
    icon: empowermentIcon,
  },
  {
    title: "Collaboration",
    description:
      "Fostering teamwork, networking, and knowledge sharing to drive growth.",
    icon: collaborationIcon,
  },
];

const VisionMissionValues: React.FC = () => {
  return (
    <div className="w-full  mx-auto  text-gray-800 overflow-hidden">
      {/* Header Section */}
      <div className="bg-cover bg-center text-white px-4 text-center relative h-[512px] md:h-[60vh] lg:h-[512px]" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col justify-center h-full px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-normal mb-4 flex items-center justify-center gap-2 leading-auto">
            <img src={visionIcon} alt="Vision" className="w-12 h-12 md:w-14 md:h-14" />
            Our Vision
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-auto">
            To be a leading academy where education, technology, and creativity
            converge to shape future-ready leaders and innovators.
          </p>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-normal mt-10 mb-4 flex items-center justify-center gap-2 leading-auto">
            <img src={missionIcon} alt="Mission" className="w-12 h-12 md:w-14 md:h-14" />
            Our Mission
          </h2>
          <p className="text-base md:text-lg lg:text-xl leading-auto">
            To educate, train, and mentor students through personalized learning,
            skill-building, and tech-focused programs—helping them unlock their
            strengths, embrace innovation, and achieve lasting success.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-8 md:py-16 px-4 bg-[#FFFFFF]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-[50px] font-inter font-medium mb-8 md:mb-12 w-full max-w-[260px] h-auto mx-auto">Our Values</h2>
          <div className="flex flex-col gap-4 md:gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 justify-items-center">
              {values.slice(0, 3).map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-4 md:p-6 rounded-[50px] shadow-md hover:shadow-xl transition w-full max-w-[368px] h-auto aspect-[368/411] overflow-hidden flex flex-col gap-2 md:gap-4"
                >
                  <div className="flex justify-center">
                    <img src={value.icon} alt={value.title} className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-inter font-medium leading-auto">{value.title}</h3>
                  <p className="text-lg md:text-xl lg:text-[25px] font-normal leading-auto text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 justify-items-center max-w-2xl mx-auto">
              {values.slice(3, 5).map((value) => (
                <div
                  key={value.title}
                  className="bg-white p-4 md:p-6 rounded-[50px] shadow-md hover:shadow-xl transition w-full max-w-[368px] h-auto aspect-[368/411] overflow-hidden flex flex-col gap-2 md:gap-4"
                >
                  <div className="flex justify-center">
                    <img src={value.icon} alt={value.title} className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-inter font-medium leading-auto">{value.title}</h3>
                  <p className="text-lg md:text-xl lg:text-[25px] font-normal leading-auto text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full max-w-[1159px] h-0.5 bg-gray-300 mx-auto mt-8 md:mt-12"></div>
        </div>
      </div>
    </div>
  );
};

export default VisionMissionValues;                   
