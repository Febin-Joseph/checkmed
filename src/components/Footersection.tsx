import React, { useState, useEffect } from "react";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import arrow from "../assets/arrow.svg";
import FooterBackground from "./FooterBackground";

const Footersection: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative w-full lg:h-[40vh] md:h-[40vh]  h-[50vh] c:\Users\mukes\Downloads\TestimonialCarousel 1.tsx  ">
      <div className="relative w-full h-full flex items-end justify-center">
        {/* Background SVG container */}
        <div className="absolute inset-0 w-full h-full">
          <FooterBackground />
        </div>

        {/* Content container with higher z-index */}
        <div className="absolute  w-full h-full flex  flex-col  items-center justify-end  ">
          <div className="w-full h-full flex items-end">
            <div className="w-[100%] lg:w-[85%] md:w-[85%] lg:h-[40%] md:h-[35%] h-[95%]  flex flex-col md:flex-row lg:flex-row justify-between items-center lg:mx-8 md:mx-4 mx-2 pb-4 gap-4 lg:border-b-2 md:border-b-2 border-white/60 ">
              <div className="lg:w-[30%] md:w-[30%] sm:w-[70%] w-[90%] h-full flex flex-col lg:items-center md:items-center items-start  justify-center  text-left gap-4 lg:border-r-2 md:border-r-2 border-white/60">
                <div className="h-full  flex flex-col gap-4">
                  <h2 className="text-white lg:text-2xl md:text-xl sm:text-md text-sm font-medium ">
                    Connect With Us
                  </h2>
                  <div className="flex items-center justify-center gap-2">
                    <a
                      href="https://wa.me/919914256267"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-teal-600 px-4 md:px-4  py-2 rounded-full md:text-sm lg:text-md text-xs font-medium hover:bg-opacity-90 transition"
                    >
                      Contact Us
                    </a>
                    <a
                      href="https://demo.checkmed.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-white text-white px-4 md:px-4 py-2 rounded-full md:text-sm lg:text-md text-xs font-medium"
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:w-[50%] md:w-[50%] w-[100%] h-full flex flex-col items-center  justify-center text-left lg:p-2 md:p-2 gap-4 lg:border-r-2 md:border-r-2 border-white/60">
                <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-4">
                  <a
                    href="#"
                    className="text-white text-sm sm:text-lg lg:text-lg md:text-sm border border-white/60 rounded-lg px-2  py-1 text-center"
                  >
                    Home
                  </a>
                  <a
                    href="#challenges"
                    className="text-white text-sm sm:text-lg lg:text-lg md:text-sm border border-white/60 rounded-lg px-2  py-1 text-center"
                  >
                    Challenges
                  </a>
                  <a
                    href="#products"
                    className="text-white text-sm sm:text-lg lg:text-lg md:text-sm border border-white/60 rounded-lg px-2  py-1 text-center"
                  >
                    Products
                  </a>
                  <a
                    href="#security"
                    className="text-white text-sm sm:text-lg lg:text-lg md:text-sm border border-white/60 rounded-lg px-2  py-1 text-center"
                  >
                    Security
                  </a>
                  <a
                    href="#Aboutus"
                    className="text-white text-sm sm:text-lg lg:text-lg md:text-sm border border-white/60 rounded-lg px-2  py-1 text-center"
                  >
                    About Us
                  </a>
                  <a
                    href="#testimonial"
                    className="text-white text-sm sm:text-lg lg:text-lg md:text-sm border border-white/60 rounded-lg px-2  py-1 text-center"
                  >
                    Testimonials
                  </a>
                </div>
              </div>

              <div className=" lg:w-[15%] md:w-[15%] w-full  lg:flex md:flex hidden flex-col items-center justify-center text-left gap-4 ">
                <p className="text-white text-xs md:text-sm lg:text-lg  ">
                  Copyright 2025 © Checkmed
                </p>
              </div>
            </div>

          </div>
          {/* secound line  */}
          <p className="text-white lg:hidden md:hidden sm:block block text-md   ">
            Copyright 2025 © Checkmed
          </p>
          <div className="flex justify-center items-center w-full h-[20%] gap-6">
            <a
              href="https://www.linkedin.com/company/checkmed-private-limited/"
              target="_blank"
              rel="noopener noreferrer"
              className="leading-none"
            >
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-10 h-10 md:w-10 md:h-10"
              />
            </a>
            <a
              href="https://m.facebook.com/checkmedapp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={facebook}
                alt="Facebook"
                className="w-9 h-9 md:w-8 md:h-8"
              />
            </a>
            <a
              href="https://x.com/checkmedindia?s=11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitter}
                alt="X Logo"
                className="w-6 h-6 md:w-6 md:h-6"
              />
            </a>
          </div>
        </div>

      </div>
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed right-2 bottom-8 md:right-2 md:bottom-2 z-10 cursor-pointer"
          aria-label="Scroll to top"
        >
          <img src={arrow} alt="Scroll to top" className="w-24 h-24 md:w-36 md:h-36" />
        </button>
      )}
 
    </footer>
  );
};

export default Footersection;
