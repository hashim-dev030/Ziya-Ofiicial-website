import React from "react";
import CareerCard from "../../components/Cards/CareerCard";
import type { CareerCardProps } from "../../models/CardData/CareerCardData";
import EnquiryForm from "../../components/Forms/EnquiryForm";

// Mock data array for multiple careers
const mockCareers: CareerCardProps[] = [
  {
    image:
      "https://www.jellyfishtechnologies.com/wp-content/uploads/2021/10/Artificial-Intelligence-versus-Machine-Learning-1024x576.png",
    title: "Al & ML Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      " We are seeking an enthusiastic Al & ML Tutor to train students in the fundamentals and applications.........",
    onViewDetails: () => {},
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/05/07/66/23/360_F_507662376_BTKmPlIGBvKlRHWKRNeFt7bj7H2SynQm.jpg",
    title: "Cloud Computing Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are hiring a Cloud Computing Tutor to deliver comprehensive training in cloud plat-forms, services............",
    onViewDetails: () => {},
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/glowing-digital-lock-surrounded-by-600nw-2517566697.jpg",
    title: "Cyber Security Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are seeking a knowledgeable and passionate Cyber Security Tutor to join our educational team.............",
    onViewDetails: () => {},
  },
  {
    image: "https://stl.tech/wp-content/uploads/2022/09/data-analytics.jpg",
    title: "Data Analytics Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are looking for a passionate Data Analytics Tutor to help learners build strong analytical skills using real",
    onViewDetails: () => {},
  },
  {
    image:
      "https://media.istockphoto.com/id/1443560890/photo/digital-marketing-business-technology-concept-website-advertisement-email-social-media.jpg?s=612x612&w=0&k=20&c=S7d_Mof_fEsM69inW540APogoXkz-eA23XE1AIhTaBA=",
    title: "Digital Marketing Executive",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are looking for a talented and results-driven Digital Marketing Executive to develop, implement......",
    onViewDetails: () => {},
  },
  {
    image:
      "https://depextechnologies.com/wp-content/uploads/2024/04/flutter.jpg",
    title: "Flutter Developer",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are looking for a passionate and experienced Flutter Developer to join our development team.......",
    onViewDetails: () => {},
  },
  {
    image:
      "https://assets.seamedu.com/uploads/posts/feature_What-is-the-Difference-Between-a-Game-Designer-and-Game-Developer--375-by1801678429558.jpg",
    title: "Game Developer Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are looking for a creative and experienced Game Developer Tutor to teach students the fundamentals .......",
    onViewDetails: () => {},
  },
  {
    image:
      "https://www.zilliondesigns.com/blog/wp-content/uploads/creative-graphic-designer-1280x720.png",
    title: "Graphic Designer",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      'We are seeking a creative and detail-oriented "Graphic Designer" to produce high-quality visual content fo.........',
    onViewDetails: () => {},
  },
  {
    image:
      "https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/07/PHP.jpg",
    title: "PHP Developer Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "Looking for an experienced PHP Developer Tutor to deliver training in backend web development........",
    onViewDetails: () => {},
  },
  {
    image:
      "https://cache.careers360.mobi/media/article_images/2022/7/2/Top-Python-Tools-Every-Python-Developer-Should-Know-About.jpg",
    title: "Python Developer",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are looking for a skilled and passionate Python Developer to join our team.................",
    onViewDetails: () => {},
  },
  {
    image:
      "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2022/12/Reactjs-developers-do.jpg",
    title: "React Developer Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are seeking a proficient React Developer Tutor to train students on modern front-end............",
    onViewDetails: () => {},
  },
  {
    image: "https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg",
    title: "UI/UX Designer",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are seeking a creative and detail-oriented UI/UX Designer to join our team....................",
    onViewDetails: () => {},
  },
  {
    image: "https://stl.tech/wp-content/uploads/2022/12/data-science22.jpg",
    title: "Data Science Tutor",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are seeking a passionate Data Science Tutor to mentor students in data analysis, machine.............",
    onViewDetails: () => {},
  },
  {
    image:
      "https://www.kindpng.com/picc/m/140-1401028_wordpress-png-hd-creative-web-design-banner-transparent.png",
    title: "WordPress Developer",
    location: "Muppathadam, Aluva. Pin: 683 110",
    jobType: "Full Time",
    description:
      "We are hiring a WordPress Developer Tutor to teach students how to build, customize,.............",
    onViewDetails: () => {},
  },
];

const CareerSection: React.FC = () => {
  return (
    <section className="w-full py-12 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 font-['Poppins']">
      {/* ✅ How to Apply Section */}
      <div className="text-center mb-22">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 md:mb-12">
          Hire from Ziya Academy
        </h2>
        <p className="text-gray-600 text-2xl mb-8">How to Apply</p>

        <div className="border border-blue-400 rounded-xl bg-[#F0F3FF] p-6 sm:p-8 md:p-8 md:mx-15">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-18 h-18 flex items-center justify-center bg-white rounded-full shadow text-blue-600 font-semibold mb-4 text-2xl border border-gray-200">
                1
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Browse Positions
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Explore our positions and find the role that matches your
                skills.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-18 h-18 flex items-center justify-center bg-white rounded-full shadow text-blue-600 font-semibold mb-4 text-2xl border border-gray-200">
                2
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Review Requirements
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Check the qualifications and responsibilities for your desired
                role.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-18 h-18 flex items-center justify-center bg-white rounded-full shadow text-blue-600 font-semibold mb-4 text-2xl border border-gray-200">
                3
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Submit Application
              </h4>
              <p className="text-sm text-gray-600 max-w-xs">
                Send your resume and cover letter to{" "}
                <a
                  href="mailto:careers@ziyaacademy.com"
                  className="text-blue-600 underline"
                >
                  careers@ziyaacademy.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-y-10
          gap-x-4
          sm:gap-x-6
          md:gap-x-8
          lg:gap-x-5
          xl:gap-x-6
          2xl:gap-x-8
          place-items-center
          md: pb-6
        "
      >
        {mockCareers.map((careerItem: CareerCardProps, index) => (
          <CareerCard
            key={index}
            image={careerItem.image}
            title={careerItem.title}
            location={careerItem.location}
            jobType={careerItem.jobType}
            description={careerItem.description}
            onViewDetails={careerItem.onViewDetails}
          />
        ))}
      </div>
      <EnquiryForm />
    </section>
  );
};

export default CareerSection;
