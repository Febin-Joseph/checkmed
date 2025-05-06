import React from 'react';
import india from '../assets/india.svg';
import triangles from '../assets/indiabg.svg';

const TrustedNationwide: React.FC = () => {
    return (
        <div className="w-[80%] mx-auto mt-[5vh]  rounded-3xl overflow-hidden relative   ">
            {/* Background color */}
            <div className="absolute inset-0 bg-[#6FD0F166] z-0"></div>

            <img
    src={triangles}
    alt="Triangles Background"
    className="absolute inset-0 w-[70vw] md:w-[55%] ml-[25%] md:ml-[40%] mt-60 md:mt-2 h-full object-contain mix-blend-multiply brightness-110 saturate-150 z-10"
    aria-hidden="true"
/>



            {/* Mobile-only Triangle */}
<img
    src={triangles}
    alt="Triangles Mobile Background"
    className="absolute inset-0 w-[70vw] mr-[20%] object-cover mix-blend-multiply brightness-110 saturate-150 z-10 md:hidden"
    aria-hidden="true"
/>
            {/* Main content */}

            <div className="grid md:grid-cols-2 relative z-20 p-2 mb-12 mt-4 text-center md:text-left py-5" >
                {/* India Map Section */}
                <div className="flex justify-center items-center w-full relative">

                    <img
                        src={india}
                        alt="India Map"
                        className="w-15/15 max-w-lg scale-[1.4] "
                    />
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-center mt-4 md:mt-0 p-4 ">
                    <h2 className="xl:text-[5vh]  text-3xl  font-semibold mb-4 text-gray-800">
                        Trusted Nationwide
                    </h2>

                    <div className="mb-6 mt-6">
                        <p className="text-gray-800 xl:text-2xl md:text-md">
                            ICICI Lombard | Care Health | Liberty General
                        </p>
                    </div>

                    <div className="flex flex-row lg:justify-start justify-center items-center space-x-2 md:space-x-4 mb-6">
                        {/* Diagnostics */}
                        <div className="text-left">
                            <p className="text-gray-800 text-sm md:text-lg xl:text-2xl">Diagnostics</p>
                            <p className="font-medium text-lg md:text-sm xl:text-3xl ">25,000+</p>
                        </div>

                        <div className="h-10 w-px bg-gray-400"></div>

                        {/* Doctors */}
                        <div className="text-left">
                            <p className="text-gray-800 text-sm md:text-lg xl:text-2xl">Doctors</p>
                            <p className="font-medium text-lg md:text-sm xl:text-3xl">1.25 Lakh+</p>
                        </div>

                        <div className="h-10 w-px bg-gray-400"></div>

                        {/* Pin Codes */}
                        <div className="text-left">
                            <p className="text-gray-800 text-sm md:text-lg xl:text-2xl">Pin Codes</p>
                            <p className="font-medium text-lg md:text-sm xl:text-3xl">12,000+</p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <p className="text-gray-800 text-lg xl:text-2xl">
                            ISO Certified | HIPAA Compliant
                        </p>
                        <p className="text-gray-800 text-lg mt-1 xl:text-xl">
                            Recognized By Startup India
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustedNationwide;
