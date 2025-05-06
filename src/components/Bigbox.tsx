import React from "react";

interface bgBoxProps {
  boxColor: string;
}
const Bigbox: React.FC<bgBoxProps> = ({ boxColor }) => {
  return (
      <div
      className="w-full h-full lg:rounded-[65px] rounded-[30px] flex"
      style={{ backgroundColor: boxColor }}
    >
    
      <div className="w-[50%] h-full flex items-center justify-center relative ">
        <div className="w-1 h-[50%] bg-[#A2BFD8] rounded-full relative "></div>
        <div className="absolute  top-[30%] left-1/2 -translate-x-1/2 ">
        <div className="w-4 h-4  bg-white rounded-full shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]"></div>
        </div>
      </div>
    </div>

   
  );
};

export default Bigbox;
