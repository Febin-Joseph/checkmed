import React from "react";
import Triangle from "../assets/triangles.svg";
import iphone from "../assets/iphone.svg";
import GradientBackground from "../components/GradientBackground";

function Hero() {
  return (
    <div className="w-full min-h-[89vh] lg:bg-[#F2F9FF] md:bg-[#F2F9FF] bg-white flex lg:items-end lg:justify-end md:items-end md:justify-end sm:items-center sm:justify-center items-center justify-center relative mt-2 lg:mt-10">
      <div className="absolute lg:w-[70%] md:w-[70%] sm:w-full w-full lg:mb-[22vh] md:mb-[15vh] h-full flex lg:items-start md:items-start sm:items-center items-center lg:justify-start md:justify-start sm:justify-center justify-center lg:rotate-0 md:rotate-0 rotate-45 lg:scale-[0.8] md:scale-[0.8] scale-[1.15]">
        <img src={Triangle} alt="" className="w-full h-full object-contain" />
      </div>
      <div className="w-full md:h-[45vh] lg:h-[60vh] sm:h-[40vh] hidden lg:flex md:flex items-end justify-end absolute">
        <GradientBackground  />
      </div>

      <div className=" lg:h-[95%] md:h-[95%] sm:h-[60%] h-[60%] lg:w-[45%] md:w-[45%] sm:w-[65%] w-[65%] flex lg:items-end md:items-end sm:items-center items-center lg:justify-end md:justify-end sm:justify-center justify-center absolute ">
        <img src={iphone} alt="" className="h-full w-full object-contain " />
      </div>

      <div className="lg:w-[90%] md:w-[90%] w-full sm:w-full h-[95%] absolute flex sm:justify-center lg:justify-start md:justify-start justify-center sm:items-center md:items-start lg:items-start items-start  ">
        <div className="xl:w-[60%] lg:w-[70%] md:w-[70%] sm:w-[90%] w-[90%] h-full flex flex-col md:items-start lg:items-start items-center sm:items-center lg:justify-start md:justify-start sm:justify-between justify-between lg:gap-10 gap-6 lg:text-start md:text-start sm:text-center text-center">
          <div className=" flex flex-col lg:gap-8 md:gap-6 sm:gap-4 gap-4 w-full ">
            <h1 className="lg:text-[#16A4AD] md:text-[#16A4AD] sm:text-black text-black xl:text-[5vh] lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-semibold lg:uppercase md:uppercase sm:capitalize capitalize">
              Healthcare, Simplified. Claims, Digitised.
              <span className="text-[#16A4AD]"> Lives, Better.</span>
            </h1>
            <h3 className="font-medium lg:text-2xl md:text-xl sm:text-md text-xs">
              From instant OPD billing with QR Scan & Pay to nationwide wellness
              access and seamless insurance integration
            </h3>
          </div>
          <div className="flex flex-col lg:gap-8 md:gap-6 sm:gap-4 gap-17 lg:items-start md:items-start sm:items-center items-center">
            <p className="lg:w-[80%] md:w-[80%] sm:w-full w-full font-medium lg:text-md md:text-lg sm:text-md text-xs text-wrap">
              Checkmed empowers insurers, corporates, and care providers with a
              smarter way to deliver healthcare.
            </p>
            <button className="text-white bg-[#6FD0F1] lg:px-12 md:px-12 sm:px-8 px-8 py-2.5 lg:text-2xl md:text-2xl sm:text-xl text-xl rounded-full shadow-2xl shadow-[#38C3ED]">
              Book A Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;