import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import insta from '../../assets/insta.svg'
import linkedin from '../../assets/linkedin.svg'
import ContactForm from "./ContactForm";

const GetInTouch: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 lg:pt-32">
      
      <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl gap-10 font-['Poppins']">
        {/* Left side - Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-9" id="get-in-touch">
          <h2 className="text-2xl font-semibold mb-4 text-left">
            Get in Touch
         </h2>
          {/* Location */}
          <div className="bg-white shadow-md rounded-xl p-7 flex items-start gap-4 border border-gray-300">
            <div className="text-lime-600 mt-1">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Our Location</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Muppathadam Rd, Near Muthukakad Temple, Muppathadam, Edayar,
                Aluva, Kerala 683110
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-md rounded-xl p-7 flex items-start gap-4 border border-gray-300">
            <div className="text-blue-500 mt-1">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Phone</h3>
              <a
                href="tel:+917306353515"
                className="text-blue-500 text-sm hover:underline"
              >
                +91 7306353515
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white shadow-md rounded-xl p-7 flex items-start gap-4 border border-gray-300">
            <div className="text-lime-600 mt-1">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <a
                href="mailto:ziyaacademyedu@gmail.com"
                className="text-lime-600 text-sm hover:underline"
              >
                ziyaacademyedu@gmail.com
              </a>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white shadow-md rounded-xl p-7 flex items-start gap-4 border border-gray-300">
            <div className="text-blue-500 mt-1">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Monday - Saturday: 9:00 AM - 6:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-1">
            <h4 className="font-semibold mb-2 text-gray-800">Follow Us</h4>
            <div className="flex pt-6 sm:pt-4 gap-4 sm:gap-6">
                <img src={insta} alt="Instagram" className="w-7 h-7 sm:w-8 sm:h-8 hover:cursor-pointer" />
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8 hover:cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
        <ContactForm/>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
