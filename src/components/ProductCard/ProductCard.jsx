import React from "react";
const ProductCard = ({ currentSlide }) => {
  const names = [
    "deneme1",
    "deneme2",
    "deneme3",
    "deneme4",
    "deneme5",
    "deneme6",
    "deneme7",
    "deneme8",
  ];

  return (
    <div className="w-6xl flex gap-6 overflow-hidden">
      {names.map((name, index) => (
        <div
          key={index}
          className={`flex justify-between  min-w-[14.40rem] h-60 bg-red-500 rounded-2xl transform transition-transform duration-300 
          }`}
          style={{
            transform: `translateX(-${currentSlide * 15.9}rem)`,
          }}
        >
          {name}
          <p>mertcan</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
