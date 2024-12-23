"use client";

import React, { useState, useEffect, useCallback } from "react";
import Button from "../common/Button";
import Image from "next/image";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
  });
  console.log(formData);
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => setShowForm(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxgJKmZ1qGIiJkd4tCZKaVVe1ufxM441Wm2C8dQce5mZXBdKLidpnsR6RrRdKblhWqXGg/exec";
    const form = e.target;

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      });

      if (response.ok) {
        setMessage("Message Sent Successfully");
        setTimeout(() => {setMessage("");setFormData({
          name: "",
          mobile: "",
          email: "",
          company: "",
        })}, 5000);
        
      } else {
        setMessage("Failed to submit");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setMessage("Error submitting form");
    }
  };

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 100;

    if (currentScrollY === 0) {
      setShowNavbar(true);
    } else if (
      currentScrollY > lastScrollY &&
      currentScrollY > scrollThreshold
    ) {
      setShowNavbar(false);
    } else if (currentScrollY < lastScrollY) {
      setShowNavbar(true);
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="absolute top-0 left-0 right-0 h-[80px] bg-gray-100"></div>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 
          transition-transform duration-500 ease-in-out 
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="bg-white border-b border-gray-300 flex items-center justify-between p-1">
          <div className="flex items-center pl-4">
            <Image
              src="/checkmed.svg"
              alt="CheckMed"
              width={80}
              height={80}
              className="mr-2 w-[72px] h-[72px]"
            />
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-900 pr-4"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="hidden lg:block pr-6 mb-3">
            <Button
              text="GET A QUOTE"
              onClick={() => {
                console.log("GET A QUOTE clicked");
                openForm();
              }}
            />
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-md z-10">
            <div className="px-4 py-2">
              <Button
                text="GET A QUOTE"
                onClick={() => {
                  console.log("GET A QUOTE clicked (mobile)");
                  openForm();
                }}
              />
            </div>
          </div>
        )}
      </nav>

      {showForm && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-[100]">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
            <button
              onClick={closeForm}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Get a Quote</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Enter your company name"
                  required
                />
              </div>
              <div className="text-teal-500 text-sm">{message}</div>
              <div className="flex justify-between items-center space-x-4 mt-6">
                <Button text="CLOSE" onClick={closeForm} />
                <Button text="SUBMIT" type="submit" />
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;