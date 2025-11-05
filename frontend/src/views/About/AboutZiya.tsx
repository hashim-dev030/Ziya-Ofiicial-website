import React from "react";
import AboutZiyaImg from "../../assets/Images/About/About_Ziya.svg";
import AcademyIcon from "../../assets/Icons/AcademyIcon.svg";
import AnimatedSection from "../../components/Animation/AnimatedSection";

const AboutZiya: React.FC = () => {
  return (
      <AnimatedSection
          direction="up"
          delay={0.15}  className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-[#F3FAFF] rounded-2xl p-8 md:p-12 lg:p-16">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-gray-800">
          {/* Heading with Icon */}
          <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 mb-6 flex-wrap lg:flex-nowrap">
            <img
              src={AcademyIcon}
              alt="Academy Icon"
              className="w-10 h-10 md:w-18 md:h-18"
            />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
              About Ziya Academy
            </h2>
          </div>

          {/* Paragraphs */}
          <div className="space-y-5 text-center lg:text-left text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed font-['Poppins']">
            <p>
              For over a decade, Ziya Academy has been at the forefront of education
              and technology training, empowering students to transform their potential
              into real-world success. Founded with the goal of creating skilled
              professionals and tech innovators, our academy combines academic
              excellence with hands-on learning in cutting-edge technologies.
            </p>

            <p>
              With 10+ years of experience in education and technology training,
              we have built a strong reputation for delivering industry-aligned courses
              that blend theoretical knowledge with practical expertise. Our expert mentors,
              who bring real-world industry experience, guide students through hands-on
              learning labs and creative tech projects that foster innovation and confidence.
            </p>

            <p>
              At Ziya Academy, we believe learning is most powerful when it is personalized,
              practical, and forward-thinking. Through career-focused guidance, including
              internships, placements, and entrepreneurship support, we ensure our students
              are prepared to excel in a rapidly evolving digital world.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={AboutZiyaImg}
            alt="About Ziya"
            className="w-full max-w-md md:max-w-md object-contain"
          />
        </div>

      </div>
      </AnimatedSection>

  );
};

export default AboutZiya;

