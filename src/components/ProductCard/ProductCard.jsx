import React from "react";
import useFetch from "../hooks/useFetch";
import { useId } from "react-id-generator";

const ProductCard = ({ currentSlide, sale, EstatesList }) => {
  const { estates } = useFetch();
  const [htmlId] = useId();

  const estateRent = estates.filter((estate) => estate.topOffers === "rent");
  const estateSell = estates.filter((estate) => estate.topOffers === "sale");

  const products = EstatesList
    ? estates
    : sale === true
    ? estateSell
    : estateRent;

  return (
    <div
      className={
        EstatesList
          ? "grid grid-cols-4 gap-x-5 gap-y-7"
          : "max-w-6xl flex gap-6 overflow-hidden"
      }
    >
      {products?.map((estate) => (
        <div
          key={htmlId}
          className={`flex flex-col min-w-[14.60rem] h-64 bg-white rounded-2xl transform transition-transform duration-300 cursor-pointer
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
