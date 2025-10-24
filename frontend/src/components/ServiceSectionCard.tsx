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
          className="w-[89px] h-[89px] object-contain"
        />
        <div>
          <h2 className="text-[#00A0E3] font-medium text-[25px] leading-normal font-['Poppins']">
            {pillarTitle}
          </h2>
          <h3 className="text-black font-medium text-[25px] leading-normal font-['Poppins']">
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
