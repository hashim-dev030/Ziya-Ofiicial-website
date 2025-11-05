import { useParams } from "react-router-dom";
import { mockCareers } from "../Career/CareerSection";
import BackCommon from "../../components/Buttons/BackCommonButton";
import location from "../../assets/Icons/Career/location.svg";
import jobType from "../../assets/Icons/Career/jobType.svg";
import CarrerTick from "../../assets/Icons/Career/CarrerTick.svg";

export const CarrerDetails = () => {
  const { id } = useParams();
  const course = mockCareers.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="text-center mt-10 text-gray-500">Course not found</div>
    );
  }

  return (
    <div className="w-full flex justify-center bg-white font-[Poppins]">
      <div className="w-full max-w-[1640px]   px-4 sm:px-6 lg:px-10 xl:px-20 mt-10">
        {/* Back Link */}
        <div className="mt-5 mb-6">
          <BackCommon link="career" />
        </div>

        {/* Image */}
        <img
          src={course.image}
          alt={course.title}
          className="
        w-full
        h-[45vw] sm:h-[35vw] md:h-[30vw] lg:h-[30vw] xl:h-[30vw] 
        object-cover rounded-xl border border-[#00A0E3] mb-8
      "
        />

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 md:gap-6 mb-8">
          <button className="w-[150px] sm:w-[170px] md:w-[192px] h-[40px] sm:h-[45px] bg-[#94C21A] rounded-[25px] text-white font-semibold hover:opacity-90 transition">
            Open Position
          </button>
          <button className="w-[150px] sm:w-[170px] md:w-[192px] h-[40px] sm:h-[45px] border border-[#D3C6C6] rounded-[25px] font-semibold">
            {course.jobType}
          </button>
        </div>

        {/* Job Info */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold font-[poppins] mt-6 text-gray-900">
          {course.title}
        </h1>

        {/* Location + Job Type Row */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4">
          {course.location && (
            <div className="flex items-center gap-2">
              <img
                src={location}
                alt="Location"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="font-regular text-gray-700 text-sm sm:text-base md:text-lg">
                {course.location}
              </p>
            </div>
          )}

          {course.jobType && (
            <div className="flex items-center gap-2">
              <img
                src={jobType}
                alt="Job Type"
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
              <p className="font-regular  text-gray-700 text-sm sm:text-base md:text-lg">
                {course.jobType}
              </p>
            </div>
          )}
        </div>

        {/* About the Role */}
        {course.role && (
          <div className="mt-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium font-[poppins]  mb-3">
              About the Role
            </h2>
            <p className="text-base sm:text-lg lg:text-xl font-regular font-[poppins]  leading-relaxed">
              {course.role}
            </p>
          </div>
        )}

        {/* Dynamic Sections */}
        <div className="mt-10 space-y-8 mb-20">
          {(course.keyResponsibilities?.length ?? 0) > 0 && (
            <Section
              title="Key Responsibilities"
              items={course.keyResponsibilities ?? []}
            />
          )}
          <h2 className="text-2xl font-medium font-[poppins] underline text-gray-900 mb-4">
            Candidate Requirements
          </h2>
          {(course.qualifications?.length ?? 0) > 0 && (
            <Section
              title="Education & Certifications"
              items={course.qualifications ?? []}
            />
          )}

          {(course.Experience?.length ?? 0) > 0 && (
            <Section title="Experience" items={course.Experience ?? []} />
          )}

          {(course.Technical?.length ?? 0) > 0 && (
            <Section title="Technical Skills" items={course.Technical ?? []} />
          )}

          {(course.softSkill?.length ?? 0) > 0 && (
            <Section title="Soft Skills" items={course.softSkill ?? []} />
          )}
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h2 className="text-2xl font-[poppins] font-medium text-gray-900 mb-3">
      {title}
    </h2>
    <ul className="space-y-2 text-lg">
      {items.map((point, idx) => (
        <li key={idx} className="flex items-start gap-3 ">
          <img
            src={CarrerTick}
            alt="tick icon"
            className="w-5 h-5 mt-1 flex-shrink-0"
          />
          <p className=" font-[poppins] font-regular ">{point}</p>
        </li>
      ))}
    </ul>
  </div>
);
