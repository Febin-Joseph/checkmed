"use client";
import Image from 'next/image';
import React from 'react';

const Social = () => {
  return (
    <div className="relative">
      <div className="flex justify-center items-center min-h-40 bg-gradient-to-r from-[#17A4AD] to-[#41BFAA] py-8 px-4 sm:px-6"
      style={{
        boxShadow: 'inset 0px 6px 12px -4px rgba(0, 0, 0, 0.6)'
      }}>
        <div
          className="flex flex-wrap justify-center items-center w-full max-w-6xl p-4 bg-teal-100 rounded-lg md:rounded-full shadow-lg space-x-6"
          style={{
            boxShadow: "inset 6px 0px 12px rgba(0, 0, 0, 0.2), inset 0px 6px 12px rgba(0, 0, 0, 0.2)"
          }}
        >
          {[
            { src: "/yesbank.svg", alt: "Yes Bank", width: "w-28 sm:w-28 lg:w-32" },
            { src: "/vi.svg", alt: "VI", width: "w-10 sm:w-10 lg:w-18" },
            { src: "/icici.svg", alt: "ICICI Lombard", width: "w-24 sm:w-28 lg:w-32" },
            { src: "/care.svg", alt: "Care Health", width: "w-24 sm:w-28 lg:w-32" },
            { src: "/liberty.svg", alt: "Liberty Mutual", width: "w-24 sm:w-28 lg:w-32" },
            { src: "/genworth.svg", alt: "Genworth", width: "w-24 sm:w-28 lg:w-32" }
          ].map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={80}
              height={80}
              className={`h-16 ${logo.width} mx-2 sm:mx-4 lg:mx-6 object-contain`}
              aria-label={`Partner logo of ${logo.alt}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Social;