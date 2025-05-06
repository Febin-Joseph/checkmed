import React, { useState } from 'react';
import { ProductCardProps } from '../types';
import line from '../assets/line.svg';

const ProductCard: React.FC<ProductCardProps> = ({
  icon,
  title,
  description,
  isActive = false,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const active = isActive || isHovered;

  return (
    <div
      className={`lg:px-8 lg:py-12 md:p-6 p-4 rounded-4xl transition-all duration-300 h-full ${active ? 'bg-[#41BFAA] text-white' : 'bg-[#FFFFFF] text-gray-800'
        }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: !active ? '0 4px 20px rgba(189, 232, 249, 0.8)' : undefined
      }}
    >
      <div className="mb-4 flex flex-col items-start">
        <img
          src={icon}
          alt={title}
          className={`w-10 h-10 mb-5 ${active ? 'filter brightness-0 invert' : ''}`}
        />
        <img
          src={line}
          alt="decorative line"
          width={150}
          height={12}
          className={`mb-4 ${active ? 'filter brightness-0 invert' : ''}`}
        />
      </div>
      <h3 className="lg:text-lg md:text-md text-sm font-bold mb-3 text-left">{title}</h3>

      <p className={`text-xs ${active ? 'text-white' : 'text-gray-600'} text-left leading-relaxed`}>
        {description}
      </p>

    </div>
  );
};

export default ProductCard;
