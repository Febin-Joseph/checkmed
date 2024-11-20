"use client";
import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-blue-50 py-10 px-5">
    <div className="bg-white rounded-3xl p-8 max-w-7xl mx-auto shadow-[inset_6px_0px_12px_rgba(0,0,0,0.2),_inset_0px_6px_12px_rgba(0,0,0,0.2)]">
      <div className="flex flex-col lg:flex-row justify-between items-center md:items-start gap-8 max-w-6xl mx-auto">
        <Image
          src="/logo.svg"
          alt="CheckMed Logo"
          width={80}
          height={80}
          className="w-20 h-20 lg:w-28 lg:h-28"
        />

        <div className="flex flex-col md:justify-start md:flex-row lg:justify-end gap-8">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">Company</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              {["How it works", "Pricing", "Docs"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-800 hover:underline text-lg md:text-xl">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              {["Pricing", "Resources"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-gray-800 hover:underline text-lg md:text-xl">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">Subscribe</h3>
            <form className="mt-2 flex">
              <input
                type="email"
                placeholder="Get product updates"
                className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-blue-500 text-base md:text-lg"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 md:px-6 md:py-4 rounded-r-lg hover:bg-gray-800 text-base md:text-lg"
              >
                &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-gray-200 pt-5 text-gray-600 mt-10 max-w-6xl mx-auto text-sm md:text-lg">
        <p>© 2024 Checkmed. All rights reserved</p>
        <div className="flex space-x-4">
          {[ 
            { href: "https://www.linkedin.com/company/checkmed-private-limited/", icon: <FaLinkedinIn />, label: "Twitter" },
            { href: "https://www.facebook.com/checkmedapp/", icon: <FaFacebookF />, label: "Facebook" },
            { href: "https://x.com/checkmedindia?s=11", icon: <FaTwitter />, label: "LinkedIn" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="hover:text-gray-800 border border-gray-300 shadow-[0_0_10px_rgba(0,0,0,0.25)] p-3 rounded-full"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;