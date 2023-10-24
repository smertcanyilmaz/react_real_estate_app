import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

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
  filterPriceValues,
  handleAddItem,
}) => {
  const { estates } = useFetch();
  const [filteredList, setFilteredList] = useState([]);
  const [notFound, setNotFound] = useState(false);

  let filteredEstates = estates;

  useEffect(() => {
    if (filter) {
      //quick section'da seçim yapma
      if (filter === "sale") {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.status === "sale"
        );
      } else if (filter === "rent") {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.status === "rent"
        );
      } else if (filter === "trending" || filter === "all") {
        filteredEstates = filteredEstates.filter((estate) => estate);
      } else {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.category === filter
        );
      }
      setFilteredList(filteredEstates);
    }
  }, [filter]);

  useEffect(() => {
    if (!EstatesList) {
      // top offers'da gelecek olan cardların sell mi rent mi olduğunu belirleyen koşul
      if (sale) {
        filteredEstates = estates.filter(
          (estate) => estate.topOffers === "sale"
        );
      } else {
        filteredEstates = estates.filter(
          (estate) => estate.topOffers === "rent"
        );
      }
    }

    if (filtersApplied) {
      if (filterPriceValues.min !== "" && filterPriceValues.max !== "") {
        filteredEstates = filteredEstates.filter(
          (estate) =>
            estate.price >= parseInt(filterPriceValues.min) &&
            estate.price <= parseInt(filterPriceValues.max)
        );
      }

      if (selectedButtonsStatus === 1) {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.status === "sale"
        );
      } else if (selectedButtonsStatus === 2) {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.status === "rent"
        );
      }

      if (selectedRoomNumbers) {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.rooms.bedrooms === selectedRoomNumbers
        );
      }

      if (selectedRoomNumbers2) {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.rooms.bathrooms === selectedRoomNumbers2
        );
      }

      if (filteredEstates.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
      handleAddItem();
      setFilteredList(filteredEstates);
      setFiltersApplied(false); //overlayda filtreleme seçeneklerine tıkladığımızda estatelerin gelmemesini sağlayan state
    }
  }, [
    estates,
    sale,
    EstatesList,
    selectedButtonsStatus,
    filtersApplied,
    selectedRoomNumbers,
    selectedRoomNumbers2,
    filterPriceValues,
  ]);

  useEffect(() => {
    setFilteredList(filteredEstates);
  }, [filteredEstates]);

  return (
    <div
      className={
        EstatesList
          ? "grid grid-cols-4 gap-x-5 gap-y-7"
          : "max-w-6xl flex gap-6 overflow-hidden"
      }
    >
      {filteredList.map((estate) => (
        <Link to={`/estates/${estate.id}`} key={estate.id}>
          <div
            className={`flex flex-col min-w-[14.60rem] h-64 bg-white rounded-2xl transform transition-transform duration-300 cursor-pointer`}
            style={{ transform: `translateX(-${currentSlide * 15.9}rem)` }}
          >
            <img
              src={estate?.image}
              alt=""
              className="h-40 object-cover rounded-t-lg"
            />
            <div className="px-4 py-2 w-full space-y-1">
              <h3 className="text-md font-bold">{estate?.title}</h3>
              <p className="text-[--blue] font-bold text-sm">
                {estate?.price} €
              </p>
              <p className="text-xs">{estate?.place?.city}</p>
            </div>
          </div>
        </Link>
      ))}
      {notFound && <p>Not Found</p>}
    </div>
  );
};

export default ProductCard;
