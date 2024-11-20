"use client";
import React from 'react'

const Button = ({ text }) => {
  return (
    <div>
      <button className="mt-6 px-6 py-3 bg-gradient-to-r from-[#17A4AD] to-[#41BFAA] text-white font-semibold
       hover:bg-teal-600 transition border border-[#17A4AD] shadow-[0_0_10px_rgba(0,0,0,0.25)] uppercase"
      >
        {text}
      </button>
    </div>
  )
}

export default Button