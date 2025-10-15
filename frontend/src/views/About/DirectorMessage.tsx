import React from "react";
import directorImg from "../../assets/image_73.svg"

const DirectorMessage: React.FC = () => {
  return (
    <section className="bg-[#F3FAFF] w-full sm:w-[700px] md:w-[900px] lg:w-[1226px] h-auto md:h-[688px] mx-auto rounded-2xl shadow-sm p-6 md:p-10 mt-10">
      <h2 className="text-center text-2xl md:text-[28px] font-semibold mb-6">
        Message from the Director
      </h2>
   <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-10 md:gap-14 lg:gap-20 px-6 sm:px-10 md:px-14 lg:px-24 py-10 md:py-16 ">
  
  <div className="flex flex-col items-center md:items-start md:w-[40%] w-full">
    <div className="w-[220px] h-[230px] sm:w-[240px] sm:h-[250px] md:w-[280px] md:h-[290px] lg:w-[314px] lg:h-[331px] rounded-2xl overflow-hidden  mb-4">
      <img
        src={directorImg}
        alt="Director"
        className="w-full h-full object-cover"
      />
    </div>


    <div className="flex flex-col items-center md:items-center text-center w-full">
      <p className="font-semibold font-[Inter] text-[18px] sm:text-[20px] md:text-[22px] text-gray-800">
        ASLAM M A
      </p>
      <p className="text-[14px] sm:text-[15px] text-gray-600">
        CEO, Ziya Academy
      </p>
    </div>
  </div>

  <div className="md:w-[60%] w-full text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed text-gray-700  ">
    <p className="mb-5">
      At Ziya Academy, we believe that education is not merely about acquiring
      knowledge — it’s about empowering individuals to think critically, act
      creatively, and lead confidently in a world driven by technology and
      innovation.
    </p>
    <p className="mb-5">
      Over the past 10 years, our mission has been to provide students with an
      environment where learning goes beyond textbooks — where ideas are
      explored, skills are built, and innovation is celebrated. We take pride in
      nurturing talent and transforming learners into confident professionals
      who can make a meaningful impact in their chosen fields.
    </p>
    <p>
      As the Director of Ziya Academy, I extend my heartfelt invitation to every
      aspiring learner to join our journey of knowledge, innovation, and growth.
      Together, let’s unlock your true potential and create pathways to success.
    </p>
  </div>
</div>



    </section>
  );
};

export default DirectorMessage;
