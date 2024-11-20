"use client";
import React from 'react';
import Button from '../components/common/Button';

const HealthCTA = () => (
  <div className="relative">
    <div className="bg-white max-w-full mx-auto mt-10 p-6 sm:p-8 rounded-lg text-center">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 leading-snug sm:leading-tight">
        YOU DON&apos;T HAVE TO BE A WELLNESS EXPERT<br />
        TO TRANSFORM EMPLOYEE<br />
        HEALTH
      </h1>
      <p className="text-gray-600 mb-8 text-base sm:text-lg leading-relaxed">
        With CheckMed, you can easily implement tailored wellness programs that drive real results, without needing<br />
        specialized skills or resources.
      </p>
      <Button text="Start Improving Your Workplace Today" />
    </div>
  </div>
);

export default HealthCTA;