import React from "react";
import Fixbox from "../components/Fixbox";
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
  reverseLayout?: boolean;
  bgcolor: string;
  boxColor: string;
  text: string;
  LineColor: string;
  shadows?: boolean;
}

const Hospital: React.FC<Props> = ({
  challengeData,
  title,
  content,
  sectionTitle,
  reverseLayout = false,
  bgcolor,
  boxColor,
  text,
  LineColor,
  shadows = false,
}) => {
  return (
    <div
      className={`w-full lg:h-full  md:min-h-full  flex flex-col items-center justify-center lg:rounded-[5vh] rounded-[2vh]  bg-white ${
        shadows ? "shadow-[0px_0px_30px_4px_#58d6f24b]" : ""
      }`}
      style={{ backgroundColor: `#${bgcolor}60` }}
    >
      <div className={`w-full h-[100%]  flex items-center lg:mt-[5vh] lg:mb-[5vh] md:mt-0 sm:mt-10 mt-10  justify-center ${reverseLayout ?  "lg:flex-row md:flex-row sm:flex-col flex-col " :"lg:flex-row-reverse md:flex-row-reverse flex-col sm:flex-col" }`}>
        {/* Left Side */}
        <div className={`lg:w-1/2 md:w-[60%] sm:w-full w-full lg:h-full md:h-full sm:min-h-[50%] min-h-[50%]  flex items-center ${reverseLayout ? "lg:justify-end md:justify-end sm:justify-center justify-center" : "justify-center"}`}>
          <div className=" xl:w-[95%] lg:w-[90%] md:w-[90%] w-[90%] h-[80%] flex flex-col lg:items-start md:items-start sm:items-center items-center justify-center xl:gap-10 lg:gap-5 gap-4">
            <div className="lg:w-[100%] md:w-[100%] w-[90%]  flex items-start justify-start">
            <h2 className="lg:text-3xl pt-2 md:text-3xl text-2xl lg:ml-[5%] md:ml-[5%] font-semibold">{sectionTitle}</h2>
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
        <div className={`lg:w-1/2 md:w-[40%] sm:w-full w-full lg:h-full md:h-full sm:min-h-[40%] min-h-[40%] flex items-center justify-center relative ${reverseLayout ? "scale-x-[-1]" : ""}`}>

          <div className="w-full h-full lg:ml-20 ml-5 mb-20 overflow-hidden">
            <img src={Triangle} alt="" className="lg:h-[50vh] md:h-[100%] sm:h-full h-full w-full mix-blend-multiply" />
          </div>
          <div
            className={`lg:w-[55%] md:w-[75%] sm:w-[65%] w-[75%]   aspect-[4/4] absolute  ${
              reverseLayout ? "scale-x-[-1]" : ""
            }`}
          >
            <Fixbox
              boxColor={boxColor}
              text={text}
              LineColor={LineColor}
              title={title}
              content={content}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospital;
