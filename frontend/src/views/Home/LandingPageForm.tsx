import Form from "../../components/Form"; 

function LandingPageForm() {
  return (
    <div className="w-full min-h-[658px] bg-[#3664EF] flex flex-col  lg:flex-row mt-24 px-5 lg:px-20 py-10 lg:py-16 mx-auto">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-white flex flex-col justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium pb-5 sm:pb-7 lg:pb-10 leading-snug">
          Learn deeply, innovate boldly, and create without limits
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-lg">
          Join thousands of students who have transformed their careers with Ziya Academy
        </p>
        <button className="bg-white text-[#3664EF] mt-6 sm:mt-8 lg:mt-12 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg lg:text-xl hover:bg-gray-100 transition w-max">
          Join Now
        </button>
      </div>

      {/* Right Content (Form) */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <Form />
      </div>
    </div>
  );
}

export default LandingPageForm;
