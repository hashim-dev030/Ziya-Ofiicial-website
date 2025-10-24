import CourseDuration from "../../components/CourseDuration";
import CourseButton from "../../components/CourseButton";
import EligiblityBox from "../../components/EligiblityBox";
import { splitParagraph } from "../../utils/SplitParagraph";
import { useParams } from "react-router-dom";
import { mockCourses } from "./CourseSection";
import BackToCourse from "../../components/BackToCourse";
import syllabus from "../../assets/Icons/Course/syllabus.svg";
import EnquiryForm from "../../components/Forms/EnquiryForm";

export default function AcademicCoursePage() {
  const { courseId } = useParams();
  const course = mockCourses.find((c) => c.id === courseId);

  if (!course) return <p className="p-10 text-red-600">Course not found.</p>;

  const [firstPart, secondPart] = splitParagraph(course.aboutCoursePara2);

  return (
    <>
      <div className="w-full flex justify-center bg-white font-[Poppins]">
        <div className="max-w-[1445px] px-4  sm:px-6 lg:px-6 mt-10">
          {/* === Back to Course === */}
          <BackToCourse />

          {/* === Course Category Button === */}
          <div className="mt-5 mb-4">
            <CourseButton course={course.course ?? ""} />
          </div>

          {/* === Course Title === */}
          <h1
            className="font-bold text-black mt-4 mb-4 leading-tight w-full sm:w-[90%] md:w-[80%] lg:w-[60%] max-w-[891px]"
            style={{ fontSize: "clamp(20px, 2.5vw, 41px)" }}
          >
            {course.title}
          </h1>

          {/* === Course Image === */}
          <img
            src={course.image}
            alt={course.title}
            className="w-[90vw] h-auto   /* Mobile first: almost full width */
           sm:w-[85vw] sm:h-auto      /* Small tablets */
           md:w-[95vw] md:h-auto      /* Laptops */
          lg:w-full lg:h-[34.7vw] /* Large screens */
          xl:w-full xl:h-[34.7vw] /* Extra-large screens */
         object-cover   rounded-xl  border border-[#00A0E3]  mb-6  "
          />

          {/* === Course Duration Info Bar === */}
          <div className="">
            <CourseDuration
              affliation={course.affliation}
              durationInMonths={course.durationInMonths}
              minimumAge={course.minimumAge}
              sessionStart={course.sessionStart}
            />
          </div>

          {/* === About Section === */}
          <div className="mt-8 font-[Poppins] text-justify">
            <h2 className="font-poppins font-medium text-[24px] sm:text-[32px] md:text-[34px] lg:text-[42px] leading-[100%] tracking-[0%] mb-2">
              About {course.title?.split("-")[0]}
            </h2>

            <p className="text-[2.5625vw] sm:text-[20px] text-gray-700 font-normal leading-relaxed mb-4">
              {course.aboutCoursePara1}
            </p>

            <EligiblityBox eligiblity={course.eligiblity ?? ""} />

            <p className="text-[2.5625vw] sm:text-[20px] text-gray-700 font-normal leading-relaxed mt-4">
              {firstPart}
            </p>

            {secondPart && (
              <p className="text-[2.5625vw] sm:text-[20px] text-gray-700 font-normal leading-relaxed mt-2">
                {secondPart}
              </p>
            )}
          </div>

          {/* === Syllabus Section === */}
          <div className=" mx-auto  sm:px-6 lg:px-0 mt-6 flex flex-row items-center  gap-4">
            <img
              src={syllabus}
              alt="syllabus"
              className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] "
            />

            {/* === Heading === */}
            <h2 className="font-poppins font-medium text-[16px] sm:text-[18px] md:text-[22px] lg:text-[24px] xl:text-[26px] text-gray-900 underline leading-[100%] tracking-[0%]">
              {course.syllabus}
            </h2>
          </div>

          {course.groups?.map((group, index) => (
            <div
              key={index}
              className="mt-6 flex items-start gap-4 sm:gap-3 flex-wrap sm:flex-nowrap "
            >
              {/* === Number Circle === */}
              <div className="flex-shrink-0 bg-[#94C21A] rounded-full  flex items-center justify-center   text-white font-[Poppins]  w-[25px] h-[25px]  lg:w-[50px] lg:h-[50px]  md:w-[45px] md:h-[45px]  sm:w-[40px] sm:h-[40px]xs:w-[38px] xs:h-[38px]   ">
                <span className=" text-[0.6rem]lg:text-[1.1rem]  md:text-[1rem]  sm:text-[0.95rem]  xs:text-[0.9rem]  font-medium">
                  {index + 1}
                </span>
              </div>

              {/* === Text Content === */}
              <div className="flex-1">
                {group?.title?.trim() && (
                  <h3 className="font-[Poppins] text-gray-900 font-semibold text-[0.8rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] leading-[135%] sm:leading-[130%] xs:leading-[125%] tracking-normal text-left">
                    {group.title}
                  </h3>
                )}

                <p className="  font-[Poppins] text-gray-700 font-normal  text-[0.7rem]  lg:text-[1.125rem]  md:text-[1rem]  sm:text-[0.95rem]  xs:text-[0.9rem]  leading-[145%] sm:leading-[140%] xs:leading-[135%]  mt-2 sm:mt-1  tracking-normal text-left">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <EnquiryForm/>
      <div>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>
</div>

    </>
  );
}
