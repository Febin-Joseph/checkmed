import React from "react";
import Triangle from "../assets/triangles2.svg";
import whatsapp from "../assets/whatsapp.svg";
import ytplay from "../assets/ytplay.svg";
function AboutUs() {
  const handleExploreClick = () => {
    window.open("https://demo.checkmed.in", "_blank");
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/919914256267", "_blank");
  };

  // Extract video ID from the URL and construct the embed URL

  const videoId = "yhUbelqlp9M";
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&controls=1`;

  return (
    <div className="w-full min-h-full flex lg:flex-row md:flex-col sm:flex-col flex-col relative">
      <div className="lg:w-1/2 md:w-full   sm:w-full w-full lg:min-h-full md:min-h-full sm:min-h-full min-h-full  flex items-center justify-center  overflow-hidden  relative">
        <div className="relative w-full h-full lg:mr-[40%] md:mr-[0] mr-[0%]  flex lg:items-start lg:justify-start md:items-center md:justify-center sm:items-center sm:justify-center items-center justify-center   lg:rotate-20 md:rotate-20 rotate-0">
          <img
            src={Triangle}
            alt=""
            className="lg:h-[60%] lg:w-[80%] md:h-[60%] md:w-[80%] w-full h-full object-contain scale-x-[-1]"
          />
        </div>

        <div className="w-[90%] h-full flex items-center justify-center absolute">
      
         <div className=" lg:w-[50%] md:w-[55%] sm:w-[38%] w-[70%] lg:rounded-[4vh] rounded-[3vh] mb-[40%] mr-[20%]  bg-[#BAE6F7]  aspect-[4/4] absolute"></div>
         <div className="absolute w-full h-full flex items-center aspect-[4/4]  lg:ml-[15%] md:ml-[10%] sm:ml-[25%] ml-0   mb-[40%] z-20">
            <img src={ytplay} alt="" className="w-[15%] h-[15%] " />
          </div>
          <div className="absolute lg:w-[70%] md:w-[70%] sm:w-[65%] w-[85%]  flex items-center aspect-[4/4]  lg:ml-[25%] md:ml-[30%] sm:ml-[25%] ml-[10%] z-20">
            <iframe
              width="100%"
              height="100%"
              src={embedUrl}
              title="CheckMed Video"
              className="lg:rounded-[4vh] rounded-[2vh] "
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

      </div>

      {/* Right Side */}
      <div className="lg:w-1/2 md:w-full w-full 
                flex items-center justify-center  relative 
               lg:min-h-full md:min-h-full min-h-full lg:mb-0 md:mb-[10vh] mb-[5vh] ">

        {/* Background Triangle */}
        <div className="absolute w-full overflow-hidden h-full flex lg:items-end lg:justify-end md:items-center md:justify-center  sm:items-center sm:justify-center items-center justify-center">
          <img
            src={Triangle}
            alt=""
            className="lg:h-[50%] md:h-full h-full w-full scale-x-[-1]"
          />
        </div>

        {/* Text Content */}
        <div className="relative lg:w-[90%] w-[90%] h-full flex flex-col lg:items-start md:items-center items-center lg:text-start md:text-center text-center  justify-center gap-8 p-4">
          <h3 className="text-3xl lg:text-4xl xl:text-[5vh] font-semibold">About Us</h3>
          <p className="text-base lg:text-xl xl:text-2xl md:text-lg sm:text-lg leading-relaxed">
            CheckMed is a leading SaaS platform that simplifies cashless
            insurance services. Serving over 12,000 pin codes, CheckMed provides
            nationwide doctor coverage, diagnostics, pharmacy access,
            consultation, and wellness programs. It offers innovative features
            like scan & pay, camp module, and pre-post policy process ensuring
            personalized care and customer satisfaction.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap  lg:gap-6 md:gap-2 gap-4 items-center lg:justify-start md:justify-start justify-center">
            <button
              onClick={handleExploreClick}
              className="flex cursor-pointer items-center gap-3 text-white bg-[#6FD0F1] lg:px-6 lg:py-3 px-3 py-2 rounded-full xl:text-xl lg:text-lg sm:text-lg text-md  font-semibold shadow-[0px_0px_30px_4px_#4fd1c45f] hover:bg-[#5bc8ea] transition"
            >
              Explore Demos
            </button>
            <button
              onClick={handleWhatsappClick}
              className="flex cursor-pointer items-center lg:gap-3 md:gap-1 border border-[#5D5D5D] text-[#5D5D5D] lg:px-6 lg:py-3 px-3 py-2 rounded-full xl:text-xl lg:text-lg sm:text-lg text-md font-semibold hover:bg-[#f5f5f5] transition"
            >
              <img src={whatsapp} alt="Whatsapp" className="w-8 h-8" />
              Connect With Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
