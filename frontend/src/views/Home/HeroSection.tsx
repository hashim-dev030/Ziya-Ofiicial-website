import { useEffect, useRef, useState } from "react";
import hero_image from "../../assets/hero_image.svg";
import complete_projects from "../../assets/complete_project_icon.svg";
import satisfied_customers from "../../assets/satisfied_customer_icon.svg";
import mastery from "../../assets/mastery_icon.svg";
import employees from "../../assets/employee_icon.svg";
import CountUp from "react-countup";

const HeroSection = () => {

    const stats = [
    { id: 1, img: complete_projects, value: 100, label: "Completed Projects",color: "#448AFF" },
    { id: 2, img: satisfied_customers, value: 500, label: "Satisfied Customers",color: "#448AFF" },
    { id: 3, img: mastery, value: 10, label: "Years of Mastery",color: "#448AFF" },
    { id: 4, img: employees, value: 25, label: "Employees", color: "#448AFF" },
  ];

  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

//count -up function
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (

<section className=" pt-[8.611vh] pb-[14.444vh] flex flex-col justify-center px-4 sm:px-6 md:px-8 bg-white">
  {/* Top Section */}
  <div className="max-w-[118.056vw] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-44 px-4 sm:px-6 md:px-8">
    {/* Left: Text */}
    <div className="flex-1 space-y-4 sm:space-y-5 text-center lg:text-left ">
      <h1 className="text-[2.125rem] sm:text-[34px] md:text-[38px] lg:text-[44px]  font-['Poppins'] font-semibold leading-[1.2] animate-bounce [animation-duration:3s] ">
        Welcome to{' '}
        <span className="text-[#448AFF] whitespace-nowrap">Ziya</span>
        <br />
        <span className="text-[#448AFF] inline-block pl-0 sm:pl-[0.8ch] md:pl-[1.2ch]">
          Academy
        </span>
      </h1>

      {/* Paragraph lines */}
      <div className="text-[13px] sm:text-[15px] md:text-[16px] font-['Poppins'] font-normal leading-[1.6] mt-2 max-w-[400px] sm:max-w-[450px] mx-auto lg:mx-0">
        <p>Empowering students through personalized</p>
        <p className="pl-[0.5ch] sm:pl-[0.8ch] md:pl-[1ch]">
          learning, skill-building, and mentorship.
        </p>
      </div>

      <div className="flex justify-center lg:justify-center pt-2">
        <button  className="bg-[#00A0E3] text-white w-[160px] h-[42px] sm:w-[180px] sm:h-[46px] md:w-[200px] md:h-[50px] rounded-full font-medium text-sm sm:text-base flex items-center justify-center hover:bg-blue-400 hover:scale-105 transition-transform duration-300 shadow-md">
          Explore Courses
        </button>
      </div>
    </div>

    {/* Right: Hero Image */}
    <div className="flex-1 flex justify-center mt-8 sm:mt-10 lg:mt-0">
      <img
        src={hero_image}
        alt="Ziya Academy Illustration"
        className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[380px] object-contain"
      />
    </div>
  </div>

  {/* icon Section  */}
   <div
       ref={sectionRef}
      className="flex flex-wrap justify-center mt-16 gap-8 sm:gap-12 md:gap-20 text-center"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex flex-col items-center space-y-3 w-1/3 md:w-1/3 lg:w-auto sm:w-1/3"
        >
          <img
            src={stat.img}
            alt={stat.label}
            className="w-12 sm:w-14 h-12 sm:h-14"
          />
          <h3 className="font-semibold text-gray-800 text-base sm:text-lg leading-tight">
          <span
             className="block text-lg sm:text-xl font-bold"
              style={{ color: stat.color || "inherit" }}
            >
              {startCount ? (
                <CountUp end={stat.value} duration={2} />
               ) : (
                 "0"
               )}
               +
            </span>
            {stat.label}
          </h3>
         </div>       ))}
     </div>
 
</section>
  );
};

export default HeroSection;
