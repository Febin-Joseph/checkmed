import { useState, useEffect, useRef } from 'react';
import testimonialImage from '../assets/testimonial.svg';
import quotationMark from '../assets/quotation.svg';
import profileImage from '../assets/profile.svg';
import starsImage from '../assets/stars.svg';
import twentyFourPlus from '../assets/24plus.svg';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rahul Verma",
    position: "HR Manager",
    text: "CheckMed has completely transformed the way we handle health insurance services. From seamless cashless payments to efficient pre- and post-policy support, their platform is intuitive and reliable. Our employees now have hassle-free access to healthcare, making the entire process stress-free. Highly recommended!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Operations Director",
    text: "Working with CheckMed has been a game-changer for our organization. Their customer service is exceptional, and the platform's user-friendly interface makes managing insurance claims a breeze. The time we save on administrative tasks alone makes it worth every penny.",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "CEO",
    text: "As a growing startup, finding affordable healthcare solutions for our team was challenging until we discovered CheckMed. Their transparent pricing and comprehensive coverage options are perfect for businesses of our size. The onboarding process was surprisingly simple!",
    rating: 4
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "Benefits Administrator",
    text: "CheckMed's reporting tools have given us valuable insights into our healthcare spending patterns. The analytics dashboard is powerful yet simple to use. Their support team is always responsive and knowledgeable when we need assistance.",
    rating: 5
  }
];

export const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
    stopAutoSlide();
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
    };
  }, []);

  return (
    <div className="min-h-[80vh] w-full sm:w-[90%] md:w-[90%] lg:w-[94%] xl:w-[80%] mx-auto px-4 py-8 sm:py-10 md:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-12 lg:mt-5 lg:mb-17">
        WHAT CUSTOMER SAYS ABOUT{' '}
        <span className="text-[#17A4AD] lg:text-inherit xl:text-inherit">OUR SERVICES</span>
      </h2>


      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-4 md:gap-6 lg:gap-8">
        {/* Left side image */}
        <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[34%] mx-auto lg:mx-0 relative">
          <img
            src={testimonialImage}
            alt="Customer testimonial"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <img
              src={twentyFourPlus}
              alt="24+ more users"
              className="w-[100%]"
            />
          </div>
        </div>

        {/* Right side testimonial carousel */}
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[60%] xl:w-[66%] mt-12 lg:mt-0 mx-auto lg:mx-0">
          <div className="w-full h-full overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-out h-full"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full p-6 sm:p-7 md:p-8 rounded-xl flex flex-col justify-between h-full"
                  style={{ backgroundColor: 'rgba(189, 232, 249, 0.4)' }}
                >
                  <div>
                    <div className="flex items-start mb-5">
                      <img src={quotationMark} alt="Quotation mark" className="w-8 h-8 mr-2" />
                      <img src={starsImage} alt={`${testimonial.rating} stars rating`} className="h-6 ml-auto" />
                    </div>
                    <p className="text-gray-700 text-sm sm:text-base mt-12 md:text-lg lg:text-xl leading-relaxed">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={profileImage}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600 text-xs sm:text-sm ">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 mb-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="w-12 h-2 rounded-full overflow-hidden relative"
            aria-label={`Go to testimonial ${index + 1}`}
          >
            <div
              className={`absolute top-0 left-0 h-full transition-all duration-500 ease-in-out ${index === activeIndex ? 'bg-gradient-to-r from-[#3DBCAA] to-[#BDE8F9] w-full' : 'bg-[#BDE8F9] w-full'
                }`}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;