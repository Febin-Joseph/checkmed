import React from "react";
import Fixbox from "../components/Fixbox";
import Bigbox from "../components/Bigbox";
import Triangle from "../assets/triangles2.svg";
import Textbox from "../components/Textbox";

interface ChallengeItem {
  heading: string;
  content: string;
  icon: string;
}

interface Props {
  title: string;
  content: string;
  challengeData: ChallengeItem[];
  sectionTitle: string;
  boximg :string;
  reverseLayout?: boolean; 
}

const Challenges: React.FC<Props> = ({
  challengeData,
  title,
  content,
  sectionTitle,
  boximg,
  reverseLayout = false,
}) => {
  return (
    <div className="w-full lg:h-full md:h-full flex flex-col items-center justify-center lg:gap-0 md:gap-0 sm:gap-8 gap-8 lg:mb-[5vh] ">

      <h2
        className={`break-normal px-1 sm:w-full xl:text-[4.5vh] lg:text-4xl md:text-4xl sm:text-3xl text-3xl sm:p-2 lg:mt-[10vh] md:mt-[3vh] md:mb-[3vh] sm:mt-[10vh] mt-[10vh] text-center font-semibold uppercase ${reverseLayout ? "hidden" : "block"} `}
      >
        Challenges We Solve at <span className="lg:text-black md:text-black sm:text-[#17A4AD] text-[#17A4AD]"> Checkmed</span>
      </h2>

      <div className={`w-full h-[80%] flex items-center lg:mt-0 md:mt-0 sm:mt-3 mt-3  justify-center ${reverseLayout ?  "lg:flex-row md:flex-row sm:flex-col flex-col " :"lg:flex-row-reverse md:flex-row-reverse flex-col sm:flex-col" }`}>
        {/* Left Side */}
        <div className={`lg:w-1/2 md:w-[55%] sm:w-full w-full lg:h-full md:h-full sm:min-h-[50%] min-h-[50%]  flex items-center ${reverseLayout ? "lg:justify-end md:justify-end sm:justify-center justify-center" : "justify-center"}`}>
          <div className=" xl:w-[90%] lg:w-[90%] md:w-[93%] w-[90%]  h-[80%] flex flex-col lg:items-start md:items-start sm:items-center items-center justify-center xl:gap-10 lg:gap-5 gap-4">
            <div className="lg:w-[100%] md:w-[100%] w-[90%]  flex items-start justify-start">
            <h2 className="md:text-3xl text-2xl lg:ml-[5%] md:ml-[5%] font-semibold">{sectionTitle}</h2>
            </div> 
            {challengeData.map((item, index) => (
              <Textbox
                key={index}
                icon={item.icon}
                heading={item.heading}
                content={item.content}
              />
            ))}
          </div>
        </div>

        {/* Right Side with Visuals */}
        <div className={`lg:w-1/2 md:w-[45%] lg:mt-0 md:mt-0 sm:mt-17 mt-17 sm:w-full w-full lg:h-full md:h-full sm:min-h-[50%] min-h-[50%] flex items-center justify-center relative ${reverseLayout ? "scale-x-[-1]" : ""}`}>
          <div className="lg:w-[900px] h-full w-full mr-[200px]">
            <img src={Triangle} alt="" className="h-full w-full object-contain" />
          </div>
          <div className=" lg:w-[60%] md:w-[70%] sm:w-[65%] w-[75%] aspect-[4/4] absolute">
            <Bigbox boxColor="#BAE6F7" />
          </div>
          <div className={`lg:w-[60%] lg:min-h-[8vh] lg:h-[55vh] md:w-[60%] w-[55%] flex items-center absolute aspect-[4/4] lg:left-3/7 left-3/7 -translate-x-[5%] md:-translate-x-[0%] transform ${reverseLayout ? "scale-x-[-1] lg:-translate-x-[20%] -translate-x-[5%]" : ""}`}>
            <Fixbox boxColor="white" LineColor="#6FD0F1" title={title} content={content} />
          </div>
          <div className="absolute w-full h-full flex items-center aspect-[4/4] lg:ml-[20%] md:ml-[10%] sm:ml-[10%] ml-[0%] z-20 ">
            <img src={boximg} alt="" className={`w-[23%] h-[23%] ${reverseLayout ? "scale-x-[-1]" : ""}`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
