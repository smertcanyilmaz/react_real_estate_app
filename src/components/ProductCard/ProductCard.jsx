import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { ContextProfile } from "../../Context/ProfileContext";
import { Context } from "../../Context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";
import { ContextFilter } from "../../Context/FilterContext";

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
  const [notFound, setNotFound] = useState(false);
  const { favoriteClickHandler, setIsFavorite, favChecker } =
    useContext(ContextProfile);
  const { userActiveUid, userActive } = useContext(Context);

  const {
    setFirstLookChecker,
    city,
    firstLookChecker,
    forSaleFiltering,
    forSaleFilteringChecker,
    setForSaleFilteringChecker,
  } = useContext(ContextFilter);

  const [finalEstates, setFinalEstates] = useState([]);
  const [finalEstates2, setFinalEstates2] = useState([]);
  let filteredEstates = estates;

  useEffect(() => {
    setFinalEstates(estates);
  }, [estates]);

  useEffect(() => {
    forSaleFilteringChecker
      ? setFinalEstates2(forSaleFiltering)
      : firstLookChecker
      ? setFinalEstates2(city)
      : setFinalEstates2(finalEstates);
  }, [
    finalEstates,
    city,
    firstLookChecker,
    forSaleFiltering,
    forSaleFilteringChecker,
  ]);

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
      //setFilteredList(filteredEstates);
      setFinalEstates(filteredEstates);
      setFirstLookChecker(false);
      setForSaleFilteringChecker(false);
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
        setFinalEstates(filteredEstates);
      } else {
        filteredEstates = estates.filter(
          (estate) =>
            estate.topOffers === "rent" && estate.passivePosts === false
        );
        setFinalEstates(filteredEstates);
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
      //setFilteredList(filteredEstates);
      setFinalEstates(filteredEstates);
      setFiltersApplied(false); //overlayda filtreleme seçeneklerine tıkladığımızda estatelerin gelmemesini sağlayan state
      setForSaleFilteringChecker(false);
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
    firstLookChecker,
  ]);

  const [controlFav, setControlFav] = useState([]);

  useEffect(() => {
    if (userActive) {
      // 14.11.23 de ekledim çünkü userActiveUid giriş yapılmadan undefined dönüyor o zaman indexOf hatası alıyorum
      const currentUserId = userActiveUid;
      const userRef = doc(db, "users", currentUserId);
      const unsubscribe = onSnapshot(userRef, async (userSnapshot) => {
        try {
          const userData = userSnapshot.data();
          setControlFav(userData?.favorites);
        } catch (error) {
          console.error("Kullanıcı verilerini getirme hatası: ", error);
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [favChecker]);

  return (
    <div
      className={
        EstatesList
          ? "grid grid-cols-4 gap-x-5 gap-y-7"
          : " flex gap-6 overflow-hidden"
      }
    >
      {finalEstates2.map((estate) => (
        <Link to={`/estates/${estate.id}`} key={estate.id}>
          {/* min-w-[14.60rem] h-64 */}
          <div
            className={`flex flex-col  bg-gray-50 rounded-2xl transform transition-transform duration-300 cursor-pointer relative ${
              EstatesList ? "min-w-[14.60rem] h-64" : "min-w-[23rem] h-[24rem]"
            }`}
            style={{ transform: `translateX(-${currentSlide * 24.5}rem)` }}
          >
            <img
              src={estate?.image}
              alt=""
              className={`object-cover rounded-t-2xl ${
                EstatesList ? "h-40 " : "h-[15rem]"
              }`}
            />
            <div
              className={`px-4 py-2 w-full relative ${
                EstatesList ? "space-y-1" : "space-y-2"
              }`}
            >
              <h3
                className={`font-bold ${EstatesList ? "text-base" : "text-lg"}`}
              >
                {estate?.title}
              </h3>
              <p
                className={`text-[--blue] font-bold ${
                  EstatesList ? "text-sm " : "text-base"
                }`}
              >
                {estate?.price} €
              </p>
              <p className={`${EstatesList ? "text-xs " : "text-sm"}`}>
                {estate?.place?.city}
              </p>
              {estate?.topOffers && (
                <div className="absolute p-2 right-5 bottom-2 text-sm text-gray-800 font-semibold bg-yellow-300 shadow-lg shadow-gray-200 rounded-md border border-red-100 flex justify-center items-center">
                  Top Offer
                </div>
              )}
            </div>
            <button
              onClick={(e) => favoriteClickHandler(e, estate?.id)}
              className="absolute top-2 right-3 text-gray-50 opacity-90 z-10 hover:opacity-100 hover:text-white"
            >
              <FavoriteRoundedIcon
                sx={{
                  color: controlFav?.includes(estate.id) ? "#ef4a4a" : "",
                }}
              />
            </button>
          </div>
        </Link>
      ))}
      {notFound && <p>Not Found</p>}
    </div>
  );
};

export default ProductCard;
