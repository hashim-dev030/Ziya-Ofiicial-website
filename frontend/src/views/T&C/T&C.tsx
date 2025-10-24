import React from "react";
import tcBg from "../../assets/Images/T&C/t&c_bg.png";
import { Link } from "react-router-dom";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="bg-white text-black font-['Poppins']">
      {/* Header */}
      <div
        className="h-[280px] flex justify-center items-center"
        style={{
          backgroundImage: `url(${tcBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-white text-3xl font-semibold md:text-2xl">
          Internship Terms & Conditions
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto my-10 px-5">
        <p className="text-sm mb-4.5 leading-relaxed">
          <strong>
            THE BELOW MENTIONED POINTS ARE THE TERMS AND CONDITIONS APPLICABLE
            TO ALL THE INTERNSHIP STUDENTS WHO HAVE REGISTERED AND ARE COMMITTED
            TO OUR COMPANY
          </strong>
        </p>
        <p className="mb-6 pb-3 border-b-4 border-blue-500 font-bold text-sm text-gray-800">
          <strong>
            NOTE: ADHERING TO THESE TERMS AND CONDITIONS CAN CAUSE TO TAKE
            STRICT ACTIONS AGAINST THE INTERNSHIP STUDENTS. THE COMPANY HAS THE
            RIGHT TO EXPEL THESE STUDENTS
          </strong>
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • To confirm participation in the internship program, students are
          requested to make a one-time enrollment contribution of Rs. 5000/-.
          <br />
          *Kindly note that this amount is non-refundable.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • Interns will be eligible for a monthly stipend ranging from Rs.
          3000/- to Rs. 6000/-, based on performance and consistency.
          <br />
          Please note that the stipend may be adjusted or withheld if the intern
          is found to be inactive or if project tasks remain incomplete without
          valid reasons.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • The standard internship hours are from 9:30 AM to 6:00 PM.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • Internship assignments may be conducted either remotely or on-site,
          depending on the project requirements.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • All assigned tasks and projects must be completed on time and
          submitted before the stated deadlines.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • We request interns to maintain regular attendance. Any leave must be
          formally requested and approved in advance. Uninformed or frequent
          leave may affect the continuity and assessment of the internship.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • Interns should maintain a professional and presentable appearance
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • All communications—written or verbal—should be respectful, clear,
          and appropriate.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • Interns are expected to maintain strict confidentiality of all data,
          documents, and information shared during the program. Use of such
          materials for external, personal, or commercial purposes is strictly
          prohibited. Sharing company data with external parties is not
          permitted.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          <strong>We encourage all interns to:</strong>
        </p>

        <ul className="list-disc pl-5 mb-7.5">
          <li className="mb-3.5 text-sm leading-relaxed">
            Maintain professionalism and respect in all interactions
          </li>
          <li className="mb-3.5 text-sm leading-relaxed">
            Adhere to ethical practices
          </li>
          <li className="mb-3.5 text-sm leading-relaxed">
            Be accountable for their roles and responsibilities
          </li>
        </ul>

        <p className="text-sm mb-4.5 leading-relaxed">
          Any violation of these norms may be addressed with appropriate
          corrective actions
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • Internship certificates will be issued only upon successful
          completion of the internship and submission of final project reports.
        </p>

        <p className="text-sm mb-4.5 leading-relaxed">
          • The company reserves the right to cancel the internship at any stage
          due to:
        </p>

        <ul className="list-disc pl-5 mb-7.5">
          <li className="mb-3.5 text-sm leading-relaxed">
            lack of compliance with internship guidelines, poor performance, or
            failure to meet minimum participation requirements.
          </li>
          <li className="mb-3.5 text-sm leading-relaxed">
            Continuous lack of response to repeated requests or instructions
            from the company — such as reminders to mark attendance, maintain
            project timelines, or follow communication protocols.
          </li>
          <li className="mb-3.5 text-sm leading-relaxed">
            If the intern fails to act upon such requests despite multiple
            reminders, it will be treated as negligence, and the internship may
            be cancelled without any refund or certification.
          </li>
          <li className="mb-3.5 text-sm leading-relaxed">
            If any part of the assigned work or project is found to be generated
            using ChatGPT or any other AI tools without prior permission or
            proper acknowledgment, it will be considered a violation of the
            internship ethics and will result in immediate cancellation of the
            internship.
          </li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="bg-[#94c21a] py-10 px-5 text-center">
        <h1 className="text-white text-xl font-bold mb-4">
          Ready to Join Our Learning Community?
        </h1>
        <p className="text-sm text-white mb-5 font-normal">
          Discover how Ziya Academy can help you achieve your educational goals
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white text-blue-500 py-3 px-7.5 font-extrabold no-underline rounded transition-all duration-300 hover:bg-gray-100"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default TermsAndConditions;
