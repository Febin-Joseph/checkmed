'use client';
import { useState, useEffect } from 'react';
import Button from '../common/Button';
import MenuItem from '../nav/MenuItem';
import Dropdown from '../nav/DropDown';
import Image from 'next/image';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const dropdownItems = [
    { href: '#resource1', label: 'Resource 1' },
    { href: '#resource2', label: 'Resource 2' },
    { href: '#resource3', label: 'Resource 3' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 
        ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        } flex items-center justify-between p-1 bg-white border-gray-300`}
    >
      <div className="flex items-center pl-4">
        <Image
          src="/checkmed.svg"
          alt="CheckMed"
          width={80}
          height={80}
          className="mr-[100px] w-[72px] h-[72px]"
        />
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-700 hover:text-gray-900 pr-4">
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      <div className="hidden lg:flex text-lg mt-2 items-center space-x-2 pl-0 ml-[440px]">
        <div className="group">
          <MenuItem href="#about">About</MenuItem>
        </div>
        <div className="group">
          <MenuItem href="#solutions">Solutions</MenuItem>
        </div>
        <Dropdown isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} items={dropdownItems} />
      </div>

      <div className="hidden lg:block pr-6 mb-3">
        <Button text="GET A QUOTE" />
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-[80px] left-0 w-full bg-white shadow-md z-10">
          <MenuItem href="#about">About</MenuItem>
          <MenuItem href="#solutions">Solutions</MenuItem>
          <Dropdown isOpen={isDropdownOpen} toggleDropdown={toggleDropdown} items={dropdownItems} />
          <div className="px-4 py-2">
            <Button text="Get a quote" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;