import React from "react";
import type { ServiceCardModel } from "../models/ServiceCardModel";

interface Props {
  card: ServiceCardModel;
}

const ServiceCard: React.FC<Props> = ({ card }) => {
  return (
  <div
  className="
    bg-white border border-[#A3A3A3] rounded-[20px]
    w-full max-w-[588px]
    sm:pl-[28px] md:pl-[34px] lg:pl-[39px]
    md:pr-[34px] lg:pr-[46px]
    pt-[58px] pb-[14px]
    flex flex-col
  "
  style={{ boxShadow: "0px 4px 4px 0px #00000040" }}
>

      {/* Icon with circular background */}
      <div className="w-[97px] h-[97px] rounded-full bg-[#94C21A80] flex items-center justify-center">
        <img
          src={card.icon}
          alt=""
          className="w-[30px] h-[47px] object-contain"
        />
      </div>

      {/* Title */}
      <h2 className=" sm:text-[22px] md:text-[24px] lg:text-[26px] font-[400] text-black pt-[30px] pb-[12px]">
        {card.title}
      </h2>

      {/* Description */}
      <p className=" sm:text-[15px] md:text-[18px] lg:text-[22px] text-black font-[300]  ">
        {card.description}
      </p>

      {/* Divider line */}
      <div className="w-full border-t border-[#E0D2D2] mt-[20px]"></div>

      {/* Offerings */}
      <h3 className="tex-black sm:text-[20px] md:text-[22px]  lg:text-[25px] pt-[27px] sm:pt-[20px] md:pt-[22px] pb-[10px] font-[400]">Key Offerings:</h3>
      <ul className="space-y-[12px] text-left w-full text-[22px] sm:text-[17px] md:text-[18px] text-gray-700">
        {card.offerings.map((item, index) => (
          <li key={index} className="flex  items-start gap-[12px]">
            <span className=" sm:w-[14px]  md:w-[17px] lg:w-[20px] sm:h-[14px]  md:h-[17px]  h-[20px] h-auto rounded-full bg-[#94C21A80]"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
