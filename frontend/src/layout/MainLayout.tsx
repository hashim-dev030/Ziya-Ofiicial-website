import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import Navbar from "./NavBar";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [showTopButton, setShowTopButton] = useState(false);

  //  scroll-to-top button 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTopButton(true);
      else setShowTopButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />

      <div className="fixed bottom-6 right-10   md:bottom-8 md:right-12 lg:right-6 flex flex-col items-center gap-4 z-50">
        {/* Scroll-to-Top Button */}
        {showTopButton && (
          <button
            onClick={scrollToTop}
            className="bg-[#00A0E3] text-white p-3 rounded-full shadow-lg hover:bg-blue-400 hover:scale-110 transition-transform duration-300"
            title="Back to Top"
          >
            <FaArrowUp size={22} />
          </button>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+917306353515?text=Hi!%20I’d%20like%20to%20know%20more%20about%20Ziya%20Academy."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse z-50"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={28} />
        </a>
        
      </div>
    </>
  );
};

export default MainLayout;
