import React from "react";
import ServiceCard from "./ServiceCard";

interface ServiceData {
  icon: string; // imported image path
  pillarTitle: string;
  pillarSubtitle: string;
  services: {
    title: string;
    description: string;
    contributors: string[];
  }[];
}

const ServiceSectionCard: React.FC<ServiceData> = ({
  icon,
  pillarTitle,
  pillarSubtitle,
  services,
}) => {
  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-6">
        <img
          src={icon}
          alt={pillarTitle}
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[86px] lg:h-[86px] object-contain"
        />

        <div>
          <h2 className="text-[#00A0E3] font-semibold text-lg sm:text-xl md:text-2xl lg:text-[25px] leading-snug font-poppins">
            {pillarTitle}
          </h2>

          <h3 className="text-black font-medium text-base sm:text-lg md:text-xl lg:text-[22px] leading-snug font-poppins">
            {pillarSubtitle}
          </h3>
        </div>
      </div>

      {/* Responsive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="w-full flex justify-center">
            <ServiceCard
              title={service.title}
              description={service.description}
              contributors={service.contributors}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSectionCard;
