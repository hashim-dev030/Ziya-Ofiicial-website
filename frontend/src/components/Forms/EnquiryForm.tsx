import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  acceptTerms: boolean;
};

interface EnquiryFormProps {
  prefilledSubject?: string;
}

// ✅ Add Google Apps Script URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby94ZzaWqYCk2HNmOde0wiBzI5QsHSlPYE6Z5UuEnJfSUf_EXu94GOOWaqUV5oUFTU-/exec";

const EnquiryForm: React.FC<EnquiryFormProps> = ({ prefilledSubject = "" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (prefilledSubject) {
      setValue("subject", prefilledSubject);
    }
  }, [prefilledSubject, setValue]);

  const onSubmit = async (data: FormData) => {
    console.log("Form Data Submitted:", data);
    setLoading(true);

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", // 👈 Important
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    toast.success("Thank you! Your enquiry has been sent successfully!");
    reset();
  } catch (error) {
    console.error("Submission error:", error);
    toast.error("Failed to submit form. Please try again.");
  }finally {
    setLoading(false); 
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
              disabled={loading}
              className="bg-sky-500 hover:bg-sky-600 hover:cursor-pointer text-white font-semibold rounded-xl p-8 mt-2 md:text-3xl disabled:opacity-90 disabled:cursor-not-allowed"
            >
              {loading ? (
                  <div className="flex items-center justify-center space-x-3">
                    <svg
                      className="animate-spin h-7 w-7 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="3"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span className="animate-pulse">Processing...</span>
                  </div>
                ) : (
                  "Submit"
                )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;
