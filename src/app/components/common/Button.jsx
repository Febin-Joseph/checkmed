import React from 'react';

const Button = ({
  text,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary'
}) => {
  const baseStyles = 'mt-6 px-6 py-3 bg-gradient-to-r from-[#17A4AD] to-[#41BFAA] text-white font-semibold hover:bg-teal-600 transition border border-[#17A4AD] shadow-[0_0_10px_rgba(0,0,0,0.25)]';
  
  const variantStyles = {
    primary: 'bg-teal-500 hover:bg-teal-600',
    secondary: 'bg-gray-500 hover:bg-gray-600'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
