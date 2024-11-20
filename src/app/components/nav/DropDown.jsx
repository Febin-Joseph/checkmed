"use client";
import MenuItem from "./MenuItem";

const Dropdown = ({ isOpen, toggleDropdown, items }) => {
    return (
        <div className="relative">
            <button
                onClick={toggleDropdown}
                className="flex items-center text-gray-700 hover:text-gray-900 w-full px-4 py-2"
            >
                Resources
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute bg-white border border-gray-200 rounded-md shadow-lg mt-2 w-full z-10">
                    {items.map((item, index) => (
                        <MenuItem key={index} href={item.href}>
                            {item.label}
                        </MenuItem>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;