import { useFormViewModel } from "../../viewmodels/FormViewModel";

// ✅ Add Google Apps Script URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby94ZzaWqYCk2HNmOde0wiBzI5QsHSlPYE6Z5UuEnJfSUf_EXu94GOOWaqUV5oUFTU-/exec";

const Form = () => {
  const { formData, handleChange, handleSubmit, areasOfInterest } = useFormViewModel();

  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 w-full max-w-md md:max-w-xl rounded-2xl flex flex-col">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">Get Started</h2>
      <p className="text-sm sm:text-base md:text-lg font-light pb-5 sm:pb-6 md:pb-7 text-black">
        Fill out the form below and we'll get back to you
      </p>

      <form
        className="flex flex-col space-y-4 sm:space-y-5 md:space-y-6"
       onSubmit={async (e) => {
  e.preventDefault();
  try {
    handleSubmit();

    const payload = {
      name: formData.fullName,     // match script's expected field
      email: formData.email,
      phone: formData.phone,
      subject: formData.interest,  // send selected interest as subject
      message: "",                 
    };

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    alert("✅ Thank you! Your enquiry has been sent successfully.");

    // reset the form
    Object.keys(formData).forEach((key) => handleChange(key, ""));
  } catch (error) {
    console.error("Submission error:", error);
    alert("⚠️ Failed to submit form. Please try again.");
  }
}}

      >
        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="border border-gray-300 text-base sm:text-lg md:text-xl pl-4 sm:pl-6 md:pl-8 text-gray-500 rounded-lg w-full h-11 sm:h-12 md:h-14 focus:outline-none focus:ring-2 focus:ring-[#3664EF]"
        />

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className="border border-gray-300 text-base sm:text-lg md:text-xl pl-4 sm:pl-6 md:pl-8 text-gray-500 rounded-lg w-full h-11 sm:h-12 md:h-14 focus:outline-none focus:ring-2 focus:ring-[#3664EF]"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className="border border-gray-300 text-base sm:text-lg md:text-xl pl-4 sm:pl-6 md:pl-8 text-gray-500 rounded-lg w-full h-11 sm:h-12 md:h-14 focus:outline-none focus:ring-2 focus:ring-[#3664EF]"
        />

        <div className="relative w-full">
          <select
            value={formData.interest}
            onChange={(e) => handleChange("interest", e.target.value)}
            className="appearance-none border text-base sm:text-lg md:text-xl border-gray-300 text-gray-700 pl-4 sm:pl-6 md:pl-8 pr-10 rounded-lg w-full h-11 sm:h-12 md:h-14 focus:outline-none focus:ring-2 focus:ring-[#3664EF]"
          >
            <option value="">Choose your area of interest</option>
            {areasOfInterest.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>

          <svg
            className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-500 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <button
          type="submit"
          className="bg-[#00A0E3] text-white w-full h-11 sm:h-12 md:h-14 rounded-lg mt-8 sm:mt-10 md:mt-12 font-semibold text-base sm:text-lg md:text-xl hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
