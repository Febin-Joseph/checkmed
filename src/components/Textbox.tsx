import React from "react";

interface TextBoxProps {
  icon: string;
  heading: string;
  content: string;
}

const Textbox: React.FC<TextBoxProps> = ({ icon, heading, content }) => {
  return (
    <div className="flex items-center  lg:gap-6   gap-4   lg:px-8 lg:py-4 px-4 py-2 rounded-3xl  lg:w-[95%] w-[100%] h-full transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl">
      <div className="lg:w-20 md:w-20 w-10 aspect-square   bg-white flex items-center justify-center rounded-full shadow-[0px_0px_30px_4px_#4fd1c45f]">
        <img src={icon} alt="icon" className="lg:w-8 lg:h-8 md:w-8 md:h-8 w-4 h-4  object-contain" />
      </div>

      <div className="w-full  flex flex-col lg:gap-3 gap-2">
        <h3 className="xl:text-xl lg:text-xl md:text-lg sm:text-md text-md   font-bold ">{heading}</h3>
        <p className="xl:text-lg lg:text-md md:text-md sm:text-md text-sm font-medium ">{content}</p>
      </div>
    </div>
  );
};

export default Textbox;
