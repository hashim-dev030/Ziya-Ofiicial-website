import directorIMG from "../../assets/image_73.svg";

const DirectorMessage = () => {
  return (
    <div className="bg-[#f4f8fb] rounded-2xl mx-5 sm:mx-auto px-4  sm:px-6 lg:px-12 py-5 sm:py-8 max-w-7xl mt-8 font-['Poppins']">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
        {/* Image + Info Section */}
        <div className="flex flex-col items-center w-full lg:w-1/3 text-center">
          <img
            src={directorIMG}
            alt="Director"
            className="rounded-3xl w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover mb-4"
          />
          <div>
            <div className="font-bold text-lg sm:text-xl lg:text-2xl">
              ASLAM M A
            </div>
            <div className="text-sm sm:text-base text-gray-700">
              CEO, Ziya Academy
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left">
            Message from the Director
          </h1>
          <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 text-center lg:text-left">
            At Ziya Academy, we believe that education is not merely about
            acquiring knowledge — it's about empowering individuals to think
            critically, act creatively, and lead confidently in a world driven
            by technology and innovation.
          </p>
          <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 text-center lg:text-left">
            Over the past 10 years, our mission has been to provide students
            with an environment where learning goes beyond textbooks — where
            ideas are explored, skills are built, and innovation is celebrated.
            We take pride in nurturing talent and transforming learners into
            confident professionals who can make a meaningful impact in their
            chosen fields.
          </p>
          <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed text-center lg:text-left">
            As the Director of Ziya Academy, I extend my heartfelt invitation to
            every aspiring learner to join our journey of knowledge, innovation,
            and growth. Together, let's unlock your true potential and create
            pathways to success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;
