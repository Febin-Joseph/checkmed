import React, { useState } from "react";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="z-30  min-h-[11vh] w-full relative md:bg-[#F2F9FF] bg-white ">
      <div className={`top-0 right-0 lg:w-[30vw]  md:w-[30vw] sm:w-[50vw] w-[70vw]  font-medium fixed  rounded-l-[5vh] bg-[#F2F9FF] shadow-[0px_0px_30px_4px_#4fd1c45f] flex flex-col items-start justify-center gap-3 text-lg text-black md:p-[3%] p-[4%] transition-transform duration-500 ease-in-out ${ isOpen ? "translate-x-0 shadow-[0px_0px_30px_4px_#4fd1c45f]" : "translate-x-full shadow-none"
        }`}>
      <div className="w-full flex items-end justify-end">
      <img src={menu} alt="" className="w-8 h-8 cursor-pointer" onClick={toggleMenu}  />
       
      </div>
        <div className="w-full h-0.5 rounded-full bg-[#D2D2D2]"></div>
        <a href="#hospital" className="hover:text-teal-600 ">
          Hospital , Labs & Pharmacies
        </a>
        <div className="w-full h-0.5 rounded-full bg-[#D2D2D2]"></div>
        <a href="#Individuals" className="hover:text-teal-600  ">
          Individuals & Family
        </a>
        <div className="w-full h-0.5 rounded-full bg-[#D2D2D2]"></div>
        <a href="#challenges" className="hover:text-teal-600">
          Corporate
        </a>
        <div className="w-full h-0.5 rounded-full bg-[#D2D2D2]"></div>
        <a href="#Insurer" className="hover:text-teal-600">
          Insurer & TPA
        </a>
        <div className="w-full h-0.5 rounded-full bg-[#D2D2D2]"></div>

        <a href="#security" className="hover:text-teal-600">
          Security
        </a>
        <div className="w-full h-0.5 rounded-full bg-[#D2D2D2]"></div>
        <a href="#Aboutus" className="hover:text-teal-600">
          About Us
        </a>
      </div>
      <div className="w-full h-[8vh] flex items-center justify-center shadow-md shadow-blue-100 px-[1vw] ">
        <div className="w-full h-full flex items-center justify-between px-[2%]">
          <img src={logo} alt="Checkmed" className="md:w-18 md:h-18 w-14 h-14" />
          <img src={menu} alt="" className="w-8 h-8 cursor-pointer" onClick={toggleMenu}  />
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
