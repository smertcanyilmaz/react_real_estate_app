import React from "react";
import useFetch from "../hooks/useFetch";
import { useId } from "react-id-generator";

const ProductCard = ({ currentSlide }) => {
  const { estates } = useFetch();
  const [htmlId] = useId();
  return (
    <div className="w-6xl flex gap-6 overflow-hidden">
      {estates.map((estate) => (
        <div
          key={htmlId}
          className={`flex flex-col min-w-[14.40rem] h-64 bg-white rounded-2xl transform transition-transform duration-300 cursor-pointer
        }`}
          style={{
            transform: `translateX(-${currentSlide * 15.9}rem)`,
          }}
        >
          <img
            src={estate?.image}
            alt=""
            srcset=""
            className="h-40 object-cover rounded-t-lg"
          />
          <div className="px-4 py-2 w-full space-y-1">
            <h3 className="text-md font-bold">{estate?.title}</h3>
            <p className="text-[--blue] font-bold text-sm">{estate?.price} €</p>
            <p className="text-xs">{estate?.place?.city}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

// // {estate.title} {estate.price} {estate.place.country}
// //             {estate.place.city}
// //             <img src={estate.images} alt="" srcset="" /> */
