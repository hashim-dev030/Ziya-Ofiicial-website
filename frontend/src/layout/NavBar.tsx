import  { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useNavbarViewModel } from "../viewmodels/NavbarViewModel";
import logo from "../assets/icon_heading.svg";

type NavbarProps = {};

const Navbar = ({}: NavbarProps) => {
  const { items, setActive } = useNavbarViewModel();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navigate = useNavigate();
  const handleClick = () => {
  
    navigate("/#homeEnquiry");
  };

  // Sync active tab with current route
  useEffect(() => {
    const currentPath = location.pathname;
    const matchedItem = items.find((item) => item.href === currentPath);
    if (matchedItem) {
      setActive(matchedItem.label);
    } else {
      setActive(""); // optional: reset if no match
    }
  }, [location.pathname]);

  return (
    <nav className="w-full  h-[89px] bg-[#FFFFFF] shadow-md flex items-center justify-between px-6 md:px-4  mx-auto">
      {/* Left: Logo + Brand */}
      <div className="relative flex items-center ">
        <img src={logo} alt="Logo" className="w-[50px] h-[50px] md:w-[55px] md:h-[55px] lg:w-[90px] lg:h-[90px]" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center ">
        <ul className="flex items-center pr-[25px] text-[14px] md:text-[14px] lg:text-[18px] font-medium text-gray-700 leading-[100%]">
          {items.map((item) => {
            const gaps = { Home: 25, About: 25, Courses: 25, Internships: 25, Service: 25, Career :25 } as const;
            const isLast = item.label === "Contact Us";
            const mr = isLast ? 0 : gaps[item.label as keyof typeof gaps] ?? 0;

            return (
              <li
                key={item.label}
                style={{ marginRight: `${mr}px` }}
                className={`cursor-pointer pb-[6px] transition ${
                  item.isActive
                    ? "text-[#00A0E3] border-b-2 border-[#00A0E3]"
                    : "hover:text-[#00A0E3]"
                }`}
              >
                <Link to={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>

        <button onClick={handleClick}
         className="bg-[#00A0E3] text-white w-[120px] h-[38px] md:w-[120px] md:h-[40px] lg:w-[142px] lg:h-[44px] rounded-[30px] font-medium text-[16px] md:text-[20px] leading-[100%] hover:bg-blue-400 transition">
          Enquiry
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="absolute top-[89px] left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-start p-4 space-y-4 text-[16px] font-medium text-gray-700">
            {items.map((item) => (
              <li
                key={item.label}
                onClick={() => {
                  setActive(item.label);
                  setMenuOpen(false);
                }}
                className={`cursor-pointer pb-[6px] transition ${
                  item.isActive
                    ? "text-[#00A0E3] border-b-2 border-[#00A0E3]"
                    : "hover:text-[#00A0E3]"
                }`}
              >
                <Link to={item.href}>{item.label}</Link>
              </li>
            ))}
            <button onClick={handleClick} className="bg-[#00A0E3] text-white w-full h-[43px] rounded-[30px] font-medium text-[18px] leading-[100%] hover:bg-blue-400 transition">
              Enquiry
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;