import { useFooter } from '../viewmodels/useFooter'
import { FooterColumn } from '../components/FooterColumn'
import logo from '../assets/logo.svg'
import insta from '../assets/insta.svg'
import linkedin from '../assets/linkedin.svg'
import map from '../assets/map.svg'
import mail from '../assets/mail.svg'
import phone from '../assets/phone.svg'
import name from '../assets/name.svg'

export const Footer = () => {
  const { quickLinks, programs, contact, social, copyright } = useFooter()

  return (
    <footer className="bg-[#121828] w-full text-white py-10 md:py-16">
      {/* Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-10 md:gap-y-12 gap-x-8 md:gap-x-12 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20">

        {/* Logo + Social */}
        <div className="flex flex-col items-start">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <img src={logo} alt="Logo" className="w-full h-full" />
            <img src={name} alt="Ziya Academy" className="absolute w-20 sm:w-24 h-5 sm:h-6" />
          </div>

          {/* Social icons */}
          <div className="flex pt-6 sm:pt-8 gap-4 sm:gap-6">
            <img src={insta} alt="Instagram" className="w-7 h-7 sm:w-8 sm:h-8" />
            <img src={linkedin} alt="LinkedIn" className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <FooterColumn title="Quick Links" items={quickLinks} />
        </div>

        {/* Programs */}
        <div>
          <FooterColumn title="Programs" items={programs} />
        </div>

        {/* Contact */}
        <div >
          <h3 className="font-bold text-lg sm:text-xl tracking-widest">Contact Us</h3>
          <div className="pt-6 sm:pt-8 space-y-4 sm:space-y-5">
            <div className="flex gap-4 sm:gap-6 items-start">
              <img src={map} alt="Map" className="w-5 h-5 sm:w-6 sm:h-6 mt-1" />
              <div className="space-y-1">
                {contact.address.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6 items-center">
              <img src={phone} alt="Phone" className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{contact.phone}</span>
            </div>

            <div className="flex gap-4 sm:gap-6 items-center">
              <img src={mail} alt="Mail" className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{contact.email}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#464646] mt-8 pt-6 sm:pt-10 text-center">
        <p className="text-sm sm:text-base text-[#8D8D8D]">{copyright}</p>
      </div>
    </footer>
  )
}
