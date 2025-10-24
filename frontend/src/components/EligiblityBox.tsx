import React from "react";
const EligiblityBox: React.FC<{ eligiblity: string }> = ({ eligiblity }) => {
  return (
    <div
      className=" w-full max-w-[1490px] h-[120px] sm:h-[100px] md:h-[115px] lg:h-[127px] bg-[#E1FBEE] rounded-xl flex items-center px-1 md:px-5 lg:px-6"  style={{ fontFamily: "'Poppins', sans-serif" }}>
      <h2
        className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-gray-800 leading-snug ">
        Eligibility: {eligiblity}
      </h2>
    </div>
  );
};

export default EligiblityBox;
