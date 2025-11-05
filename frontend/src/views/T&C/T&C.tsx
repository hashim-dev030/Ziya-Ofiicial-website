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
        {/* Notice about old and new policy */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-md mb-8">
          <p className="text-sm text-gray-700">
            <strong>Important Update:</strong> The{" "}
            <span className="text-blue-600 font-semibold">new updated Terms and Policy</span>{" "}
            (effective from <strong>1st October</strong>) are provided <strong>below</strong> this
            section. The <strong>old Terms and Policy</strong> are displayed <strong>here</strong>.
          </p>
        </div>
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

     {/* New Policy Content */}
        <div className="max-w-4xl mx-auto my-10 px-5 text-sm leading-relaxed">
          <div className="mb-6 pb-3 border-b-4 border-blue-500 font-bold flex flex-wrap items-center gap-2">
            <strong>UPDATED TERMS AND CONDITIONS FOR NEW INTERNSHIP STUDENTS</strong>
            <span>(effective from <strong>1st October</strong>)</span>
          </div>


          <p className="mb-4.5">
            Welcome to Ziya Academy! We are excited to have you join our internship program.
            This document outlines the terms and conditions of your internship, ensuring a
            clear understanding of our expectations and the support we provide. Our goal is
            to create a respectful, safe, and encouraging environment where you can grow both
            personally and professionally.
          </p>

          <div className="space-y-4">
            {/* 1. Enrolment Contribution */}
            <div>
              <p className="font-semibold">1. Enrolment Contribution</p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>
                  A one-time, non-refundable enrolment fee of Rs. 10000/- is required to confirm
                  your participation in the internship program.
                </li>
                <li>
                  This fee covers training, administrative processing, access to licensed tools,
                  and onboarding resources.
                </li>
                <li>You'll be selected through an interview.</li>
              </ul>
            </div>

            {/* 2. Stipend Policy */}
            <div>
              <p className="font-semibold">2. Stipend Policy</p>

              <p className="font-medium mt-2">Last Month Stipend</p>
              <ul className="list-disc list-inside pl-4 space-y-2">
                <li>Amount: Up to Rs. 6000/-</li>
                <li>
                  Eligibility Criteria: The stipend is subject to the following conditions:
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>
                      <strong>Performance Reviews:</strong> Interns will be evaluated based on
                      their performance in completing tasks and meeting project objectives.
                      Regular feedback and assessments will be provided to ensure transparency.
                    </li>
                    <li>
                      <strong>Consistency and Punctuality:</strong> Regular attendance and timely
                      completion of tasks are essential. Any delays or frequent absences may
                      impact the stipend.
                    </li>
                    <li>
                      <strong>Completion and Quality of Tasks:</strong> The quality and accuracy
                      of the work submitted will be assessed. High-quality work that meets or
                      exceeds expectations will be rewarded.
                    </li>
                  </ul>
                </li>
              </ul>

              <p className="font-medium mt-3">First Five Months</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Probationary Period:</strong> No stipend will be provided during the
                  first five months for interns deemed ineligible. This period serves as an
                  initial assessment phase.
                </li>
                <li>
                  <strong>Assessment:</strong> The first five months is used to evaluate the
                  intern’s suitability and performance. If the intern meets the required
                  standards, they will be eligible for the stipend from the Last month onwards.
                </li>
              </ul>

              <p className="font-medium mt-3">Stipend Commencement</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Last Month:</strong> The stipend starts from the Last Month, subject
                  to active participation and assessment. Interns who demonstrate strong
                  performance and commitment will receive the stipend as outlined.
                </li>
                <li>
                  <strong>Ongoing Assessment:</strong> The stipend is not guaranteed and will be
                  reviewed periodically based on the intern’s ongoing performance and adherence
                  to company policies.
                </li>
              </ul>

              <p className="font-medium mt-3">Legal Considerations</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  <strong>Payment of Wages Act, 1936:</strong> As per Section 2(oo) of the
                  Payment of Wages Act, 1936, the A stipend is not considered a salary. However,
                  Ziya Academy will follow best practices for transparency and fairness in the
                  payment process.
                </li>
                <li>
                  <strong>Fair Practices:</strong> While the stipend is not legally classified as
                  a salary, the company is committed to ensuring that the compensation process is
                  transparent, fair, and aligned with industry standards.
                </li>
              </ul>

              <p className="font-medium mt-3">Key Points to Note</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Performance-Based: The stipend is directly linked to the intern’s performance.</li>
                <li>Initial Assessment Period: The first month serves as a probationary period.</li>
                <li>Regular Reviews: Ongoing performance reviews ensure motivation and improvement.</li>
                <li>Compliance: The policy complies with relevant Indian labor laws and regulations.</li>
              </ul>

              <p className="font-medium mt-3">Additional Details</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Payment Schedule: Stipends will be paid in a Half of month.</li>
                <li>
                  Performance Metrics: Interns will be informed of metrics like task completion,
                  quality, deadlines, and contribution.
                </li>
                <li>
                  Probationary Period Evaluation: At the end of the fourth month, interns will
                  receive a formal evaluation determining stipend eligibility.
                </li>
                <li>
                  Ongoing Feedback: Regular feedback ensures continuous growth and improvement.
                </li>
                <li>
                  Non-Performance: Continuous underperformance may result in stipend hold or
                  internship termination.
                </li>
              </ul>

              <p className="font-medium mt-3">Transparency and Fairness</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  Transparent Process: Ziya Academy is committed to a transparent and fair stipend
                  policy.
                </li>
                <li>
                  Ethical Considerations: The company adheres to ethical practices and fairness.
                </li>
                <li>
                  Behavior: Interns are not involved in the regular office processes. Any kind of
                  misbehavior will lead to immediate termination.
                </li>
              </ul>
            </div>

            {/* 3. Internship Timings & Work Mode */}
            <div>
              <p className="font-semibold">3. Internship Timings & Work Mode</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Standard hours: 9:30 AM – 6:00 PM (Monday to Saturday)</li>
                <li>Work mode: Remote, on-site, or hybrid, depending on project requirements.</li>
                <li>Late logins or early logouts without approval will be recorded as irregularities.</li>
              </ul>
            </div>

            {/* 4. Attendance & Leave Policy */}
            <div>
              <p className="font-semibold">4. Attendance & Leave Policy</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Regular attendance is mandatory.</li>
                <li>
                  Leave requests must be:
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    <li>In writing (email or HR portal)</li>
                    <li>Approved by supervisors</li>
                  </ul>
                </li>
                <li>Uninformed or frequent absences may lead to disciplinary action or stipend hold.</li>
                <li>
                  In alignment with Section 9 of the Industrial Employment (Standing Orders) Act, 1946,
                  regarding unauthorized absence.
                </li>
              </ul>
            </div>

            {/* 5. Performance & Reporting */}
            <div>
              <p className="font-semibold">5. Performance & Reporting</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Weekly updates must be submitted via assigned platforms or directly to the reporting manager.</li>
                <li>Work will be evaluated based on Accuracy, Timeliness, Initiative, and Collaboration.</li>
                <li>Three consecutive weeks of non-performance may result in internship cancellation.</li>
              </ul>
            </div>

            {/* 6. Professional Conduct */}
            <div>
              <p className="font-semibold">6. Professional Conduct</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Interns must adhere to The Code of Conduct under The POSH Act, 2013.</li>
                <li>Any form of harassment, discrimination, bullying, or rude behavior is strictly prohibited.</li>
                <li>
                  All interns must cooperate with the company’s Internal Complaints Committee (ICC)
                  in case of a complaint.
                </li>
              </ul>
            </div>

            {/* 7. Data Security & Confidentiality */}
            <div>
              <p className="font-semibold">7. Data Security & Confidentiality</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  All data handled is considered confidential under The Information Technology Act,
                  2000 (Section 72A).
                </li>
                <li>Sharing internal documents or information without consent is a legal offense.</li>
                <li>
                  Use of unauthorized devices or storage mediums to transfer internal data is strictly
                  forbidden.
                </li>
                <li>
                  Breach of confidentiality may lead to legal prosecution under the IT Act, 2000, and the
                  proposed Personal Data Protection Bill, 2023.
                </li>
              </ul>
            </div>

            {/* 8. Termination Grounds */}
            <div>
              <p className="font-semibold">8. Termination Grounds</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Non-compliance with company guidelines</li>
                <li>Poor or declining performance</li>
                <li>Failure to respond after multiple reminders</li>
                <li>Misuse of company data/tools</li>
                <li>Plagiarism or unauthorized AI use</li>
                <li>Misconduct or ethical violations</li>
              </ul>
              <p className="mt-2">
                <strong>Note:</strong> Upon such termination, the company reserves the right to
                withhold stipend, deny certification, and revoke access to all company systems
                and projects.
              </p>
            </div>

            {/* 9. Data Privacy and Consent */}
            <div>
              <p className="font-semibold">9. Data Privacy and Consent</p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>
                  Any personal data collected during internship activities (user forms, surveys, etc.)
                  must be handled with proper consent.
                </li>
                <li>Interns must not retain or misuse personal identifiable information (PII).</li>
                <li>Reference: IT Rules 2011 and the Digital Personal Data Protection Act, 2023 (proposed).</li>
              </ul>
            </div>
          </div>
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