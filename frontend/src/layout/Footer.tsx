import { useFooter } from '../viewmodels/useFooter'
import { FooterColumn } from '../components/FooterColumn'
import logo from '../assets/logo.svg'
import insta from '../assets/insta.svg'
import linkedin from '../assets/linkedin.svg'
import map from '../assets/map.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import name from '../assets/name.svg'
import facebook from '../assets/Facebook.svg'
import google from '../assets/Google.png'
export const Footer = () => {
  const { contact, copyright } = useFooter()

  return (
    <footer className="bg-[#121828] w-full text-white py-8 md:py-12 font-[Poppins]">
      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-4 gap-x-6 gap-y-6 md:gap-y-8  lg:gap-y-10 place-items-start text-sm">
          {/* Logo + Social */}
          <div className="flex flex-col items-start">
            <div className="relative w-16 h-16 sm:w-20 md:w-20 flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-full h-full" />
              <img
                src={name}
                alt="Ziya Academy"
                className="absolute w-20 sm:w-24 md:w-24 h-5 sm:h-6 md:h-6"
              />
            </div>

            {/* Social icons */}
            
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 pt-4 sm:pt-6">
                {/* Google */}
              <a
                href="https://share.google/9fdBrfhfBtsAaQn5n"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={google}
                  alt="Google"
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition"
                />
              </a>
              <a
                href="https://www.instagram.com/ziya_academy_/#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={insta}
                  alt="Instagram"
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition"
                />
              </a>
              <a
                href="https://in.linkedin.com/company/ziya-academy-llp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition"
                />
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
                  className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:scale-110 transition"
                />
              </a>

            
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-left mt-6 md:-translate-x-20 lg:mt-0 ">
            <FooterColumn
              title="Quick Links"
              items={[
                { label: "Home", link: "/" },
                { label: "About Us", link: "/about" },
                { label: "Service", link: "/service" },
                { label: "Contact", link: "/contact" },
              ]}
            />
          </div>

          {/* Programs */}
          <div className="text-left mt-6 md:-translate-x-24 lg:mt-0">
            <FooterColumn
              title="Programs"
              items={[
                { label: "Internships", link: "/internships" },
                { label: "Courses", link: "/courses" },
                { label: " Job Vacancy", link: "/Career" },
                { label: "NIOS/IGNOU", link: "/courses" },
              ]}
            />
          </div>

          {/* Contact */}
          <div className="text-left mt-6 md:mt-14 md:-translate-x-20  lg:mt-0">
            <h3 className="font-bold text-base sm:text-lg md:text-lg lg:text-xl tracking-widest">
              Contact Us
            </h3>
            <div className="pt-4 sm:pt-6 md:pt-6 lg:pt-8 space-y-3 sm:space-y-4 md:space-y-4 lg:space-y-5 text-[#BFBFBF]">
              <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-start">
                <img
                  src={map}
                  alt="Map"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 lg:w-6 lg:h-6 mt-1"
                />
                <div className="space-y-1 leading-relaxed">
                  {contact.address.map((line: string, idx: number) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center">
                <img
                  src={phone}
                  alt="Phone"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 lg:w-5 lg:h-5"
                />
                <span>{contact.phone}</span>
              </div>

              <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6 items-center">
                <img
                  src={mail}
                  alt="Mail"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 lg:w-5 lg:h-5"
                />
                <span>{contact.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#464646] mt-6 sm:mt-8 md:mt-10 pt-4 sm:pt-6 md:pt-8 text-center text-sm">
          <p className="text-[#8D8D8D]">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}