import React, { useState, useRef } from "react";
import { CARDS_DATA } from "./Data_of_Card";
import { useCardJS } from "./Card";
import PopupCard from "./Popup_Card"; // <-- 1. Import your new component here

export default function CardGallery() {
  const {
    activeCard,
    coverStyle,
    isOpen,
    containerRef,
    cardRefs,
    handleCardClick,
    handleClose,
  } = useCardJS();
  return (
    <div ref={containerRef} className="relative w-full rounded-xl bg-[#ceacd2] text-[18px] font-sans pt-13">
      <div className="max-w-200 mx-auto pt-10 px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
          <div className="flex flex-col gap-16">
            {CARDS_DATA.filter((_, i) => i % 2 === 0).map((card) => (
              <Card
                key={card.id}
                card={card}
                setRef={(el) => (cardRefs.current[card.id] = el)}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </div>
          <div className="flex flex-col gap-16 sm:pt-24">
            {CARDS_DATA.filter((_, i) => i % 2 !== 0).map((card) => (
              <Card
                key={card.id}
                card={card}
                setRef={(el) => (cardRefs.current[card.id] = el)}
                onClick={() => handleCardClick(card)}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={coverStyle} className="origin-center pointer-events-none" />

      {/* 2. Drop the extracted component in right here! */}
      {isOpen && (
        <PopupCard 
          activeCard={activeCard} 
          handleClose={handleClose} 
        />
      )}

    </div>
  );
}

// Keeping your smaller Card component right where it is
function Card({ card, onClick, setRef }) {
  return (
    <div
      ref={setRef}
      onClick={onClick}
      className={`relative w-[92%] max-w-85 mx-auto text-black cursor-pointer transition-all duration-300 hover:scale-105 ${card.twColor}`}
    >
      <div className="absolute w-full h-full border  border-white/60 -top-1 -left-1"></div>
      <img
        src={card.img}
        alt={card.title}
        className="w-[90%] absolute -top-[8%] -left-[10%]"
      />
      <h1 className="relative pt-49 pb-10  w-[90%] text-xl font-bold pl-7">
        {card.title}
      </h1>
      
    </div>
  );
}