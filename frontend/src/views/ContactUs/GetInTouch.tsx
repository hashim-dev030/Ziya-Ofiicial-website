import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import insta from '../../assets/insta.svg'
import linkedin from '../../assets/linkedin.svg'
import ContactForm from "./ContactForm";
import AnimatedSection from "../../components/Animation/AnimatedSection";
import facebook from '../../assets/Facebook.svg'
import google from '../../assets/Google.png'

const GetInTouch: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 lg:pt-32">
      
      <div className="flex flex-col lg:flex-row items-start w-full max-w-6xl gap-10 font-['Poppins']">
        {/* Left side - Contact Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-9" id="get-in-touch">
          <h2 className="text-2xl font-semibold mb-4 text-left">
            Get in Touch
         </h2>
            <AnimatedSection
              direction="right"
              delay={0.3}
              className="space-y-6"
            >
        
          {/* Location */}
          <div className="bg-white shadow-md rounded-xl p-7 flex items-start gap-4 border border-gray-300 transform transition-transform duration-300 
    hover:scale-104 hover:shadow-lg hover:cursor-pointer">
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
          </AnimatedSection>
           <AnimatedSection
              direction="right"
              delay={0.4}
              className="space-y-6"
            >

          {/* Phone */}
          <div className="bg-white shadow-md rounded-xl p-7 flex items-start gap-4 border border-gray-300 transform transition-transform duration-300 
    hover:scale-104 hover:shadow-lg hover:cursor-pointer">
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
            </AnimatedSection>

          <AnimatedSection
              direction="right"
              delay={0.5}
              className="space-y-6"
            >
          {/* Email */}
          <div className="bg-white shadow-md rounded-xl p-7 flex items-start gap-4 border border-gray-300 transform transition-transform duration-300 
           hover:scale-104 hover:shadow-lg hover:cursor-pointer">
            <div className="text-lime-600 mt-1">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email</h3>
              <a
                href="mailto:ziyaacademyedu@gmail.co.in"
                className="text-lime-600 text-sm hover:underline"
              >
              ziyaacademyedu@gmail.co.in
              </a>
            </div>
          </div>
          </AnimatedSection>

          <AnimatedSection
              direction="right"
              delay={0.6}
              className="space-y-6"
            >

          {/* Office Hours */}
          <div className="bg-white shadow-md rounded-xl p-7 flex items-start gap-4 border border-gray-300 transform transition-transform duration-300 
           hover:scale-104 hover:shadow-lg hover:cursor-pointer">
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
          </AnimatedSection>
          

          {/* Social Icons */}
          <div className="mt-1">
            <h4 className="font-semibold mb-2 text-gray-800">Follow Us</h4>
            <div className="flex pt-6 sm:pt-4 gap-4 sm:gap-6">
                  {/* Google */}
              <a
                href="https://share.google/9fdBrfhfBtsAaQn5n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={google}
                  alt="Google"
                  className="w-7 h-7 sm:w-8 sm:h-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a
                href="https://www.instagram.com/ziya_academy_/#" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" className="w-7 h-7 sm:w-8 sm:h-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200" />
              </a>
              <a
                href="https://in.linkedin.com/company/ziya-academy-llp" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200" />
              </a>
                {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61571052597141"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-7 h-7 sm:w-8 sm:h-8 hover:cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </a>

            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <AnimatedSection
            direction="left"
            delay={0.3}
            className="w-full lg:w-1/2 flex justify-center"
          >
        
        <ContactForm/> 
        
        </AnimatedSection>
      </div>
    </div>
  );
};

export default GetInTouch;
