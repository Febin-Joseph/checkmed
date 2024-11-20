"use client";
import Image from 'next/image';
import React from 'react';

const GalleryCard = ({ imageSrc, title, onHover, onLeave, isActive, isMobile }) => {
  return (
    <div
      className={`relative flex-shrink-0 w-full md:w-[600px] h-[250px] md:h-[350px] overflow-hidden bg-white transition-all duration-300 transform ${isActive ? 'scale-105' : 'hover:scale-102'
        } ${isMobile ? 'flex justify-center items-center' : ''}`}
      onMouseEnter={!isMobile ? onHover : undefined}
      onMouseLeave={!isMobile ? onLeave : undefined}
      onClick={isMobile ? onHover : undefined}
      style={{
        boxShadow: '0px 4px 20px 6px rgba(0, 0, 0, 0.5)'
      }}
    >
      <div className="relative w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          width={80}
          height={80}
          className="w-full h-full object-cover"
        />
        {/* Overlay for additional shadow effect */}
        <div
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 30px 10px rgba(0, 0, 0, 0.3)'
          }}
        />
      </div>
      {(isActive || !isMobile) && (
        <div
          className="absolute bottom-4 left-4 px-4 py-2 bg-white bg-opacity-75 text-black text-lg md:text-xl font-bold shadow"
          style={{ maxWidth: "80%" }}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default GalleryCard;