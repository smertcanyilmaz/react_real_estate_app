import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ProductCard = ({
  currentSlide,
  sale,
  EstatesList,

  filter,
}) => {
  const { estates } = useFetch();

  const estateTopRent = estates.filter((estate) => estate.topOffers === "rent");
  const estateTopSell = estates.filter((estate) => estate.topOffers === "sale");

  const products = EstatesList
    ? estates
    : sale === true
    ? estateTopSell
    : estateTopRent;

  const [filteredList, setFilteredList] = useState(products);

  useEffect(() => {
    const temp = products;

    if (filter !== "") {
      const tempCat = temp.filter((estate) => estate.category === filter);
      setFilteredList(tempCat);
    }
    if (filter === "sale") {
      const tempSale = temp.filter((estate) => estate.status === filter);
      setFilteredList(tempSale);
    } else if (filter === "rent") {
      const tempRent = temp.filter((estate) => estate.status === filter);
      setFilteredList(tempRent);
    }
  }, [filter]);

  useEffect(() => {
    setFilteredList(products);
  }, [products]);

  console.log(filter);

  return (
    <div
      className={
        EstatesList
          ? "grid grid-cols-4 gap-x-5 gap-y-7"
          : "max-w-6xl flex gap-6 overflow-hidden"
      }
    >
      {filteredList?.map((estate) => (
        <div
          key={estate.id}
          className={`flex flex-col min-w-[14.60rem] h-64 bg-white rounded-2xl transform transition-transform duration-300 cursor-pointer
        }`}
          style={{
            transform: `translateX(-${currentSlide * 15.9}rem)`,
          }}
        >
          <img
            src={estate?.image}
            alt=""
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
