import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="z-30 w-full min-h-[11vh] relative">
      <div
        className={`fixed top-0 right-0 h-full lg:w-[30vw] md:w-[40vw] sm:w-[60vw] w-[70vw] font-medium rounded-l-[5vh] bg-[#F2F9FF] shadow-[0px_0px_30px_4px_#4fd1c45f] flex flex-col items-start justify-center gap-3 text-lg text-black p-[5%] transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="w-full flex items-end justify-end mb-4">
          <img
            src={menu}
            alt="Close"
            className="w-8 h-8 cursor-pointer"
            onClick={toggleMenu}
          />
        </div>
        {[
          { href: "#hospital", label: "Hospital , Labs & Pharmacies" },
          { href: "#Individuals", label: "Individuals & Family" },
          { href: "#challenges", label: "Corporate" },
          { href: "#Insurer", label: "Insurer & TPA" },
          { href: "#security", label: "Security" },
          { href: "#Aboutus", label: "About Us" },
        ].map((item, idx) => (
          <React.Fragment key={idx}>
            <a href={item.href} className="hover:text-teal-600">
              {item.label}
            </a>
            <div className="w-full h-0.5 rounded-full bg-[#D2D2D2]" />
          </React.Fragment>
        ))}
      </div>

      <div className="w-full h-[8vh] flex items-center justify-center shadow-md shadow-blue-100 px-[1vw]">
        <div className="w-full h-full flex items-center justify-between px-[2%]">
          <img src={logo} alt="Checkmed" className="w-18 h-18" />

          <div className="hidden xl:flex items-center justify-center xl:gap-10 gap-6 font-medium xl:text-lg text-md">
            <a href="#hospital" className="hover:text-teal-600">
              Hospital , Labs & Pharmacies
            </a>
            <a href="#Individuals" className="hover:text-teal-600">
              Individuals & Family
            </a>
            <a href="#challenges" className="hover:text-teal-600">
              Corporate
            </a>
            <a href="#Insurer" className="hover:text-teal-600">
              Insurer & TPA
            </a>
            <a href="#security" className="hover:text-teal-600">
              Security
            </a>
            <a href="#Aboutus" className="hover:text-teal-600">
              About Us
            </a>
          </div>

          <div className="xl:hidden flex items-center">
            <img
              src={menu}
              alt="Menu"
              className="w-8 h-8 cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;