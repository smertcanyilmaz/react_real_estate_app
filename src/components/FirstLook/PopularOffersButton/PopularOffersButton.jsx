import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useDispatch, useSelector } from "react-redux";
import { visible, down } from "../../../redux/popularOffersVisibleReducer";

const PopularOffersButton = ({ setMyClass, rent, setRent }) => {
  const popularOffersVisible = useSelector(
    (state) => state.popularOffersVisible.visible
  );

  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleButtonClick = () => {
    dispatch(visible());
    setMyClass(
      !popularOffersVisible ? "-translate-y-[130%]" : "-translate-y-0"
    );
    setRent(false);
  };

  const downClick = () => {
    dispatch(down());
    setMyClass("-translate-y-[240%]");
    setRent(true);
  };

  const backClick = () => {
    setRent(false);
    setMyClass("-translate-y-[52rem]");
  };

  return (
    <>
      <div
        onClick={
          rent
            ? backClick
            : popularOffersVisible
            ? downClick
            : handleButtonClick
        }
        className={`${
          isVisible
            ? "translate-y-0 duration-1000"
            : "translate-y-full opacity-0"
        } flex items-center gap-2 absolute bottom-10 px-5 py-2 mx-[31rem] bg-[--white] rounded-full font-bold text-gray-600 text-lg hover:scale-105 hover:duration-300 cursor-pointer shadow-lg z-50 `}
      >
        {rent ? (
          <>
            <p>Back To Top</p> <KeyboardArrowUpIcon fontSize="large" />
          </>
        ) : (
          <>
            <p>Popular Offers</p> <KeyboardArrowDownIcon fontSize="large" />
          </>
        )}
      </div>
      {popularOffersVisible && (
        <div
          onClick={handleButtonClick}
          className="absolute bottom-10 p-[2px] right-8 bg-[--white] rounded-full hover:scale-105 hover:duration-300 cursor-pointer shadow-lg z-50"
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </div>
      )}
    </>
  );
};

export default PopularOffersButton;
