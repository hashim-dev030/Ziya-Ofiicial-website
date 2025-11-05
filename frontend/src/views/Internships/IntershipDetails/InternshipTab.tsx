import React, { useState, useRef, useEffect } from "react";

interface InternshipTabProps {
  months: number[];
  onTabChange: (month: number) => void;
}

const InternshipTab: React.FC<InternshipTabProps> = ({ months, onTabChange }) => {
  const [activeMonth, setActiveMonth] = useState(months[0]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateHighlight = () => {
      const activeIndex = months.indexOf(activeMonth);
      const node = tabRefs.current[activeIndex];
      if (node) {
        const { offsetLeft, offsetWidth } = node;

        const extraWidth = window.innerWidth >= 1024 ? 40 : 20;
        setHighlightStyle({
          left: offsetLeft - extraWidth / 2,
          width: offsetWidth + extraWidth,
        });
      }
    };

    updateHighlight();
    window.addEventListener("resize", updateHighlight);
    return () => window.removeEventListener("resize", updateHighlight);
  }, [activeMonth, months]);

  const handleTabClick = (month: number) => {
    setActiveMonth(month);
    onTabChange(month);
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full px-4">
      {/* Outer Circle Bar */}
      <div className="relative flex justify-around bg-[#ECECF0] rounded-full w-full max-w-[900px] h-16 md:h-14 sm:h-12">
        {/* White highlight circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md 
          transition-all duration-300
          h-[60%] sm:h-[65%] md:h-[70%] lg:h-[75%]"
          style={highlightStyle}
        ></div>

        {/* Tabs */}
        {months.map((month, index) => (
          <button
            key={month}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            onClick={() => handleTabClick(month)}
            className={`relative z-10 px-4 py-2 md:px-3 md:py-1 sm:px-2 sm:py-1 
              text-sm md:text-base font-medium font-['Poppins'] 
              transition-colors duration-200 
              ${
                activeMonth === month
                  ? "text-black"
                  : "text-gray-600 hover:text-black"
              }`}
          >
            Month {month}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InternshipTab;