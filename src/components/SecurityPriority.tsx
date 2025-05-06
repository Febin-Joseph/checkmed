import React from "react";
import performance from "../assets/perf.svg";
import triangle from "../assets/triangles2.svg";

const SecurityPriority = () => {
  return (
    <div className="bg-white xl:py-12 px-6 xl:px-16 py-2   ">
      <div className="relative bg-[#BEE9F8] rounded-3xl md:mt-20  p-6 md:p-12 overflow-visible flex flex-col-reverse xl:flex-row  items-center justify-between gap-8 xl:min-h-[60vh] min-h-[70vh]">

        <div className="hidden xl:flex xl:w-1/2 justify-center">
          <img
            src={performance}
            alt="Security Visual"
            className="w-[50%] xl:w-[65%] md:w-[75%] xl:-top-20 xl:-ml-20 md:-top-10"
            style={{
              zIndex: 10,
              position: "absolute",
            }}
          />
        </div>
        <div className="w-full h-full flex items-end justify-end absolute scale-x-[-1]">
          <img
            src={triangle}
            alt=""
            className="h-[50%] xl:hidden w-full object-contain mix-blend-darken opacity-70"
          />
        </div>

        {/* Text Section */}
        <div className="relative w-full xl:w-1/2 xl:ml-16  text-center xl:text-left  md:text-center z-10">

          <h2 className="text-2xl md:text-4xl font-semibold xl:mb-10 mb-5 text-gray-900">
            Your security is{" "}
            <span className="text-[#17A4AD]">our priority</span>.
          </h2>
          <p className="text-black font-semibold text-sm xl:text-xl md:text-xl leading-relaxed pr-0 xl:pr-8 md:pr-0 mb-10">
            CheckMed follows industry-standard encryption and compliance
            measures to ensure your data remains safe and confidential. We
            adher e to HIPAA and ISO 27001 regulations to protect your health
            information.
          </p>
        </div>

        {/* For Mobile */}
        <div className="flex xl:hidden relative w-full justify-center">
          <img
            src={performance}
            alt="Security Visual Mobile"
            className="w-[100%] mt-10"
            style={{
              zIndex: 10,
              position: "relative",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SecurityPriority;
