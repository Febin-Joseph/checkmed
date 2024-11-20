"use client";
import React from "react";
import Button from "../components/common/Button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 py-8 md:py-16 px-8 md:px-4 md:h-[740px] mt-20 lg:mt-24">
      <div
        className="flex flex-col md:flex-row items-center max-w-7xl bg-white rounded-[20px] md:rounded-[30px] p-6 sm:p-8 md:p-12 mx-4 sm:mx-8 md:mx-0"
        style={{
          boxShadow:
            "inset 6px 0px 12px rgba(0, 0, 0, 0.2), inset 0px 6px 12px rgba(0, 0, 0, 0.2)"
        }}
      >
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-base sm:text-lg font-bold text-gray-600">
            Wellness Solutions That Put Your Employees First
          </h3>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 sm:mt-6 md:mt-10">
            Improve Employee Health and Productivity with Tailored Care
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mt-4 sm:mt-6 md:mt-10 md:mb-10">
            Support your team and reduce absenteeism with CheckMed’s tailored
            wellness programs. Create a thriving, engaged workforce that drives
            your business forward.
          </p>
          <div className="mt-4 sm:mt-6 md:mt-8">
            <Button text="Get Started Today!" />
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 flex justify-center">
          <Image
            src="/hero.svg"
            alt="Office Illustration"
            width={500}
            height={300}
            className="w-full max-w-xs sm:max-w-md h-auto object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;