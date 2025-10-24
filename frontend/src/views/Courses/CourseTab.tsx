import React, { useState, useRef, useEffect } from 'react';
import CourseSection from './CourseSection';

const CourseTab = () => {
  const [activeTab, setActiveTab] = useState('All Courses');
  const tabs = ['All Courses', 'Academic', 'Skill Development'];

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [highlightStyle, setHighlightStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const updateHighlight = () => {
      const activeIndex = tabs.indexOf(activeTab);
      const node = tabRefs.current[activeIndex];
      if (node) {
        const { offsetLeft, offsetWidth } = node;
        setHighlightStyle({
          left: offsetLeft,
          width: offsetWidth,
        });
      }
    };

    updateHighlight();
    window.addEventListener('resize', updateHighlight);
    return () => window.removeEventListener('resize', updateHighlight);
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'All Courses':
        return <CourseSection course='all' />
      case 'Academic':
        return <CourseSection course="academic" />
      case 'Skill Development':
        return <CourseSection course="skill"/>
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full px-4">
      {/* Outer Circle Bar */}
      <div className="relative flex justify-around bg-[#ECECF0] rounded-full w-full max-w-[900px] h-16 md:h-14 sm:h-12">
        {/* White highlight circle */}
        <div
          className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md transition-all duration-300"
          style={{ ...highlightStyle, height: '60%', borderRadius: '9999px' }}
        ></div>

        {/* Tabs */}
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el: HTMLButtonElement | null) => { tabRefs.current[index] = el;}}
            onClick={() => setActiveTab(tab)}
            className={`relative z-10 px-4 py-2 md:px-3 md:py-1 sm:px-2 sm:py-1 text-sm md:text-base font-medium font-['Poppins'] transition-colors duration-200 ${
              activeTab === tab ? 'text-black' : 'text-gray-600 hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="text-center mt-6">{renderContent()}</div>
    </div>
  );
};

export default CourseTab;