"use client";
import React from "react";
import Button from "../components/common/Button";

const HealthCTA = () => (
  <div className="relative">
    <div className="bg-white mx-auto mt-6 p-6 sm:p-8 rounded-lg text-center max-w-full mb-5">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-snug sm:leading-tight">
        YOU DON&apos;T HAVE TO BE A WELLNESS EXPERT<br />
        TO TRANSFORM EMPLOYEE<br />
        HEALTH
      </h1>
      <p className="text-gray-600 mb-5 text-base sm:text-lg leading-relaxed w-4/6 mx-auto">
        With CheckMed, you can easily implement tailored wellness programs that drive real results, without needing 
        specialized skills or resources.
      </p>
      <Button text="Start Improving Your Workplace Today" />
    </div>
  </div>
);

export default HealthCTA;