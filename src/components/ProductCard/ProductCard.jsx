import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ProductCard = ({
  currentSlide,
  sale,
  EstatesList,
  filter,
  selectedButtonsStatus,
  filtersApplied,
  setFiltersApplied,
  selectedRoomNumbers,
  selectedRoomNumbers2,
}) => {
  const { estates } = useFetch();

  const estateTopRent = estates.filter((estate) => estate.topOffers === "rent");
  const estateTopSell = estates.filter((estate) => estate.topOffers === "sale");
  // const estateBedrooms = estates.filter((estate) => estate.rooms.bedrooms);

  // console.log(estateBedrooms);

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
    } else if (filter === "trending") {
      setFilteredList(temp);
    }
  }, [filter]);

  useEffect(() => {
    setFilteredList(products);
  }, [products]);

  useEffect(() => {
    const temp2 = products;

    if (filtersApplied) {
      let filteredList = temp2;

      if (selectedButtonsStatus === 1) {
        filteredList = filteredList.filter(
          (estate) => estate.status === "sale"
        );
      } else if (selectedButtonsStatus === 2) {
        filteredList = filteredList.filter(
          (estate) => estate.status === "rent"
        );
      }

      if (selectedRoomNumbers) {
        filteredList = filteredList.filter(
          (estate) => estate.rooms.bedrooms === selectedRoomNumbers + 1
        );
      }

      if (selectedRoomNumbers2) {
        filteredList = filteredList.filter(
          (estate) => estate.rooms.bathrooms === selectedRoomNumbers2 + 1
        );
      }

      setFilteredList(filteredList);
      setFiltersApplied(false);
    }
  }, [
    filtersApplied,
    selectedButtonsStatus,
    selectedRoomNumbers,
    selectedRoomNumbers2,
  ]);

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

// if (selectedRoomNumbers) {
//   const estateBedrooms = temp2.filter(
//     (estate) => estate.rooms.bedrooms === selectedRoomNumbers + 1
//   );
//   const estateBathrooms = temp2.filter(
//     (estate) => estate.rooms.bathrooms === selectedRoomNumbers + 1
//   );

//   const arr = [...estateBedrooms, ...estateBathrooms];
//   if (arr !== null) {
//     setFilteredList(arr);
//     setFiltersApplied(false);
//   }

//   console.log(arr);
// }
