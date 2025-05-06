import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import yes from "../assets/YESBANK.svg";
import care from "../assets/icare.svg";
import icici from "../assets/icici.svg";
import gen from "../assets/genworth.svg";
import liberity from "../assets/liberty.svg";

const sponsors = [
  { src: yes, alt: "Sponsors" },
  { src: care, alt: "Sponsors" },
  { src: icici, alt: "Sponsors" },
  { src: gen, alt: "Sponsors" },
  { src: liberity, alt: "Sponsors" },
];

export default function SponsorCarousel() {
  return (
    <div className="w-full h-full flex items-center justify-center overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={5}
        loop={true}
        autoplay={{
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        speed={1000} 
        grabCursor={true}
        freeMode={true} //  
        allowTouchMove={true} 
      >
        {sponsors.concat(sponsors).map((sponsor, idx) => (
          <SwiperSlide key={idx}>
            <div className="w-full h-[40vh] flex items-center justify-center   ">
            <div className="lg:rounded-[5vh] md:rounded-[5vh] sm:rounded-[3vh] rounded-[3vh] w-[45vw] sm:w-[45vw] md:w-[30vw] lg:w-[23vw] lg:h-[21vh] md:h-[25vh]  sm:h-[20vh] h-[20vh]     p-4 bg-white flex items-center justify-center shadow-[0px_0px_30px_4px_#49c9f05f]">
                <img
                  src={sponsor.src}
                  alt={sponsor.alt}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
