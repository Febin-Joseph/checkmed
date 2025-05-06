import React from "react";
interface BoxProps {
  LineColor: string;
  title: string;
  content: string;
  boxColor: string;
  text: string;
}
const Fixbox: React.FC<BoxProps> = ({
  LineColor,
  title,
  content,
  boxColor,
  text = "#000000",
}) => {
  return (
    <div
      className="w-full h-full lg:h-[80%] lg:w-[80%] rounded-3xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.4)] "
      style={{ backgroundColor: boxColor, color: text }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="lg:w-[75%] w-[90%]  h-full flex flex-col lg:gap-6 md:gap-4 sm:gap-6 gap-3 items-center justify-center text-center">
          <div className="w-full flex items-start justify-start ">
            <div
              className=" w-[60%] h-1 rounded-full shadow-md shadow-blue-100 "
              style={{ backgroundColor: LineColor }}
            ></div>
          </div>
          <div>
            <h3 className="xl:text-xl md:text-md sm:text-xl text-sm font-bold">{title}</h3>
          </div>
          <div>
            <p className="xl:text-lg md:text-sm sm:text-lg text-xs font-medium">{content}</p>
          </div>
          <div className="w-full flex items-end justify-end ">
            <div
              className=" w-[60%] h-1 rounded-full shadow-md shadow-blue-100  "
              style={{ backgroundColor: LineColor }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixbox;
