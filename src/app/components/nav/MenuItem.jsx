"use client";
const MenuItem = ({ href, children }) => {
    return (
        <a
            href={href}
            className="relative block px-4 py-2 text-gray-700 hover:text-gray-900 transition duration-300"
        >
            {children}
            <span className="absolute left-1/2 bottom-0 w-3/4 h-0.5 bg-gradient-to-r from-[#17A4AD] to-[#41BFAA] scale-x-0
             transition-transform duration-300 transform -translate-x-1/2 origin-left group-hover:scale-x-100"></span>
        </a>
    );
}

export default MenuItem;