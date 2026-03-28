import React from "react";

export default function PopupCard({ activeCard, handleClose }) {
  // Safety check: if there is no active card, don't render anything
  if (!activeCard) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full z-110 bg-transparent">
      
      <div className="sticky top-4 w-full flex justify-end px-6 z-120 pointer-events-none">
        <button
          onClick={handleClose}
          className="pointer-events-auto text-[#141414] bg-white rounded-full w-8 h-8 flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-transform cursor-pointer border-none"
        >
          ✕
        </button>
      </div>

      <div className="pb-20 flex flex-col items-center relative -top-10">
        <img
          src={activeCard.img}
          alt=""
          className=" mt-8 rounded-2xl -left-[10%] w-[90%] max-w-3xl shadow-2xl relative z-10"
        />
        
        <div className="bg-white rounded-4xl text-black mt-[-10%] sm:mt-[-40%] pt-[15%] sm:pt-[45%] p-10 w-[80%] max-w-3xl relative z-0 shadow-xl">
          <h1 className="text-2xl font-bold mb-4">
            {activeCard.title}
          </h1>
          <p style={{fontFamily:"Baskerville "}}>{activeCard.details}</p>
        </div>
      </div>
      
    </div>
  );
}