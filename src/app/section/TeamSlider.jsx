"use client";
import React, { useState } from "react";
import Image from "next/image";

const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "All-in-One Wellness Platform",
      description:
        "Combine doctor visits, tests, and pharmacy needs in one place, making healthcare easier for your employees.",
      image: "/firstSlider.svg",
    },
    {
      title: "Better Employee Health",
      description:
        "Offer wellness programs that include mental health, fitness, nutrition, and health check-ups, helping your team stay healthy and happy.",
      image: "/secondSlider.svg",
    },
    {
      title: "Instant Healthcare Access",
      description:
        "Let employees use their benefits to pay for healthcare services on the spot, avoiding long waits and getting the care they need immediately.",
      image: "/thirdSlider.svg",
    },
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col items-center p-6 md:p-10 bg-gray-50 min-h-fit w-full">
      <div className="flex flex-col items-center p-6 md:p-10 bg-white max-w-full md:max-w-7xl rounded-[30px] mt-5 md:mt-10 mb-10" style={{ boxShadow: "inset 6px 0px 12px rgba(0, 0, 0, 0.2), inset 0px 6px 12px rgba(0, 0, 0, 0.2)" }}>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">How We Help</h2>
        <p className="text-center text-gray-700 max-w-2xl text-md md:text-lg p-6">
          We make healthcare easier by bringing all services into one place, supporting employee health, and providing instant access to care.
        </p>

        <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {slides.map((slide, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <Image src={slide.image} alt={slide.title} className="h-25 w-25" width={250} height={250} />
              </div>
              <div className="bg-gradient-to-r from-[#41BFAA] to-[#17A4AD] p-6 h-[220px] md:h-[260px] xl:h-[160px]" style={{ boxShadow: "inset 6px 0px 12px rgba(0, 0, 0, 0.2), inset 0px 6px 12px rgba(0, 0, 0, 0.2)" }}>
                <h3 className="text-xl font-extrabold text-white mb-2">{slide.title}</h3>
                <p className="text-white">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:hidden w-full max-w-full overflow-hidden relative">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full p-4 flex flex-col items-center bg-white shadow-lg rounded-lg">
                <Image src={slide.image} alt={slide.title} className="h-40 w-40 mb-4" width={80} height={80} />
                <div className="bg-teal-500 p-6 py-10 overflow-hidden">
                  <h3 className="text-xl font-bold text-white mb-2 text-center break-words">{slide.title}</h3>
                  <p className="text-white text-center text-sm md:xl break-words overflow-hidden">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-2 mt-4">
            {slides.map((_, index) => (
              <button key={index} className={`h-2 w-2 rounded-full ${currentSlide === index ? "bg-teal-500" : "bg-gray-300"}`} onClick={() => goToSlide(index)}></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSlider;