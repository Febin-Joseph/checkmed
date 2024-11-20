"use client";
import React, { useState, useRef, useEffect } from 'react';
import GalleryCard from '../components/card/GalleryCard';
import MobileTitle from '../components/common/MobileTitle';
import { cards } from '../utils/cards';

const Gallery = () => {
  const [activeCard, setActiveCard] = useState(cards[0] || null);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardInteraction = (card) => {
    setActiveCard(activeCard?.id === card.id ? null : card);
  };

  return (
    <div
      className={`min-h-60 ${isMobile ? 'pb-20' : 'min-h-[120vh]'} bg-gradient-to-b from-[#17A4AD] to-[#41BFAA] p-4 md:p-6 lg:p-10 relative`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <div className="lg:hidden space-y-2">
          {cards.map((card) => (
            <MobileTitle
              key={card.id}
              title={card.title}
              content={card.content}
              isActive={activeCard?.id === card.id}
              onClick={() => handleCardInteraction(card)}
            />
          ))}
        </div>

        <div className="hidden lg:flex justify-between gap-x-8">
          <div className="w-1/4 space-y-12 sticky top-10 self-start pt-4 pl-18 ml-8">
            {cards.map((card) => (
              <div key={card.id} className="space-y-4">
                <h3
                  className={`text-2xl font-semibold text-white cursor-pointer transition-all duration-200 hover:text-black ${activeCard?.id === card.id ? 'scale-105' : ''}`}
                  onClick={() => handleCardInteraction(card)}
                >
                  {card.title}
                </h3>
                {activeCard?.id === card.id && (
                  <div
                    className="mt-4 p-4 bg-[#17A4AD] w-[270px] shadow-lg text-white"
                    style={{
                      boxShadow: "inset 6px 0px 12px rgba(0, 0, 0, 0.2), inset 0px 6px 12px rgba(0, 0, 0, 0.2)"
                    }}
                  >
                    <p className="mb-4 text-sm font-normal md:font-semibold">{card.content.description}</p>
                    <ul className="space-y-2">
                      {card.content.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4">
                          <span className="w-1 h-1 bg-white rounded-full mt-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            ref={scrollContainerRef}
            className="w-3/4 h-auto overflow-y-scroll flex flex-col space-y-8 pl-16 pr-4 pb-16 scrollbar-hide scroll-smooth scroll-snap-y relative"
            style={{ scrollSnapType: 'y mandatory' }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg--transparent opacity-25 pointer-events-none"></div>

            {cards.map((card) => (
              <div key={card.id} style={{ scrollSnapAlign: 'start' }}>
                <GalleryCard
                  imageSrc={card.imageSrc}
                  title={card.title}
                  onHover={() => handleCardInteraction(card)}
                  onLeave={() => setActiveCard(null)}
                  isActive={activeCard?.id === card.id}
                  isMobile={false}
                />
              </div>
            ))}
            <div className="absolute bottom-0 left-0 w-full h-2 bg-transparent opacity-25 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;