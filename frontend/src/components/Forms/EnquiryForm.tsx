import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  acceptTerms: boolean;
};

// ✅ Add Google Apps Script URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby94ZzaWqYCk2HNmOde0wiBzI5QsHSlPYE6Z5UuEnJfSUf_EXu94GOOWaqUV5oUFTU-/exec";

const EnquiryForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form Data Submitted:", data);

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // 👈 Important
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("✅ Thank you! Your enquiry has been sent successfully.");
    reset();
  } catch (error) {
    console.error("Submission error:", error);
    alert("⚠️ Failed to submit form. Please try again.");
  }
  };

  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="w-full max-w-4xl ">
        <h3 className="text-3xl font-semibold mb-6 flex justify-center">
          Enquiry
        </h3>
        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-300">
          <h3 className="text-lg mb-6">For Enquiry You Can Contact</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <label className="font-semibold text-gray-800">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full mt-1 p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#F3F3F5]"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="font-semibold text-gray-800">Email</label>
              <input
                type="text"
                className="w-full mt-1 p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#F3F3F5]"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="font-semibold text-gray-800">
                Phone number
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10-digit phone number",
                  },
                })}
                className="w-full mt-1 p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#F3F3F5]"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
            <div>
              <label className="font-semibold text-gray-800">
                Your Subject
              </label>
              <input
                type="text"
                className="w-full mt-1 p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#F3F3F5]"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <label className="font-semibold text-gray-800">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                className="w-full mt-1 p-2 rounded-md border border-gray-200 h-20 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#F3F3F5]"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            {/* ✅ Terms & Conditions Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                {...register("acceptTerms", {
                  required: "You must accept the terms and conditions",
                })}
                className="mt-1 w-6 h-6 rounded-md accent-sky-500"
              />
              <label className="text-gray-800 font-semibold text-sm leading-snug">
                By registering I accept the{" "}
                <Link to="/terms" className="text-sky-600 underline">
                  T&amp;C
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="text-sky-600 underline">
                  Privacy Policy
                </Link>{" "}
                of the website and give my consent to receive updates via
                message/Email*
              </label>
            </div>
            {errors.acceptTerms && (
              <p className="text-red-500 text-xs mt-1">
                {errors.acceptTerms.message}
              </p>
            )}
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 hover:cursor-pointer text-white font-semibold rounded-xl p-8 mt-2 md:text-3xl"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
