import person from "../assets/person.svg";
import batch from "../assets/batch.svg";
import iso from "../assets/iso.svg";
import verified from "../assets/verified.svg";

const PrivacySecurity = () => {
  return (
    <div className="bg-white lg:min-h-[95vh] md:min-h-[60vh] min-h-[70vh] flex flex-col justify-center items-center">
      {/* Heading */}
      <h1 className="px-3 lg:text-3xl md:text-2xl font-semibold text-center xl:mb-20 lg:mb-10 md:mb-12 mb-14 mt-[5vh] text-[#3B3B3B] text-2xl">
        YOUR PRIVACY AND SECURITY IS <span className="md:text-[#3B3B3B] text-[#17A4AD]">NON-NEGOTIABLE.</span>
      </h1>

      <div className="h-full lg:w-[80%] w-[100%]">


        {/* Main content */}
        <div className="flex items-center text-[#3B3B3B] xl:gap-8 lg:gap-6 md:gap-4">

          {/* Left Section */}
          <div className="w-1/2 lg:ml-28 md:ml-28 ml-10">
            <h2 className="text-lg lg:text-2xl md:text-xl mb-12 font-semibold md:text-left w-full">
              Trust Built on a Secure Foundation.
            </h2>
            <ul className="text-gray-700 flex flex-col gap-8 list-disc pl-5 text-xs xl:text-xl font-medium">
              <li>End-to-End Encryption.</li>
              <li>Transparent Data Handling.</li>
              <li>24/7 Real-time Threat Detection.</li>
              <li>Industry-leading Security Architecture.</li>
              <li>Proactive Quarterly Audits.</li>
            </ul>
            {/* Certifications */}
          </div>

          {/* Right Section */}
          <div className="w-1/2 flex justify-center">
            <img src={person} alt="Security Illustration" className="w-[70%]" />
          </div>
        </div>

        <div className="flex justify-center md:justify-start mt-[5vh] mb-[5vh] md:ml-28 lg:ml-28 gap-10 text-black">
          <div className="flex flex-col items-center lg:text-sm md:text-sm text-xs w-24">
            <img src={batch} alt="StartupIndia Certified" className="w-10 h-10 mb-2" />
            <p className="font-bold">StartupIndia</p>
            <p>Certified</p>
          </div>
          <div className="flex flex-col items-center lg:text-sm md:text-sm text-xs w-24">
            <img src={iso} alt="ISO 27001 Certified" className="w-10 h-10 mb-2" />
            <p className="font-bold">ISO 27001</p>
            <p>Certified</p>
          </div>
          <div className="flex flex-col items-center lg:text-sm md:text-sm text-xs w-24">
            <img src={verified} alt="HIPAA Compliant" className="w-12 h-10 mb-2" />
            <p className="font-bold">HIPAA</p>
            <p className="leading-tight text-center">
              compliant data centers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacySecurity;
