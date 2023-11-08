import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { ContextProfile } from "../../Context/ProfileContext";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { Context } from "../../Context/AuthContext";
import { db } from "../../firebase-config";

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
  const { favoriteClickHandler, isFavorite, setIsFavorite } =
    useContext(ContextProfile);
  const { userActiveUid } = useContext(Context);

  let filteredEstates = estates;

  useEffect(() => {
    if (filter) {
      //quick section'da seçim yapma
      if (filter === "sale") {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.status === "sale" && estate.passivePosts === false
        );
      } else if (filter === "rent") {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.status === "rent" && estate.passivePosts === false
        );
      } else if (filter === "trending") {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.topOffers && estate.passivePosts === false
        );
      } else if (filter === "all") {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.passivePosts === false
        );
      } else {
        filteredEstates = filteredEstates.filter(
          (estate) =>
            estate.category === filter && estate.passivePosts === false
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
          (estate) =>
            estate.topOffers === "sale" && estate.passivePosts === false
        );
      } else {
        filteredEstates = estates.filter(
          (estate) =>
            estate.topOffers === "rent" && estate.passivePosts === false
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
          (estate) => estate.status === "sale" && estate.passivePosts === false
        );
      } else if (selectedButtonsStatus === 2) {
        filteredEstates = filteredEstates.filter(
          (estate) => estate.status === "rent" && estate.passivePosts === false
        );
      }

      if (selectedRoomNumbers) {
        filteredEstates = filteredEstates.filter(
          (estate) =>
            estate?.rooms?.bedrooms === selectedRoomNumbers &&
            estate.passivePosts === false
        );
      }

      if (selectedRoomNumbers2) {
        filteredEstates = filteredEstates.filter(
          (estate) =>
            estate?.rooms?.bathrooms === selectedRoomNumbers2 &&
            estate.passivePosts === false
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
    const passivePosts = filteredEstates.filter(
      (estate) => estate.passivePosts === false
    );
    setFilteredList(passivePosts);
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
            className={`flex flex-col min-w-[14.60rem] h-64 bg-white rounded-2xl transform transition-transform duration-300 cursor-pointer relative`}
            style={{ transform: `translateX(-${currentSlide * 15.9}rem)` }}
          >
            <img
              src={estate?.image}
              alt=""
              className="h-40 object-cover rounded-t-lg"
            />
            <div className={`px-4 py-2 w-full space-y-1 relative `}>
              <h3 className="text-md font-bold">{estate?.title}</h3>
              <p className="text-[--blue] font-bold text-sm">
                {estate?.price} €
              </p>
              <p className="text-xs">{estate?.place?.city}</p>
              {estate?.topOffers && (
                <div className="absolute p-2 right-5 bottom-2 text-sm text-gray-800 font-semibold bg-yellow-300 shadow-lg shadow-gray-200 rounded-md border border-red-100 flex justify-center items-center">
                  Top Offer
                </div>
              )}
            </div>
            <div
              onClick={favoriteClickHandler}
              className="absolute top-2 right-3 text-gray-50 opacity-90 z-10 hover:opacity-100 hover:text-white"
            >
              <FavoriteRoundedIcon
              // sx={{ color: isFavorite ? "#ef4a4a" : "" }}
              />
            </div>
          </div>
        </Link>
      ))}
      {notFound && <p>Not Found</p>}
    </div>
  );
};

export default ProductCard;
