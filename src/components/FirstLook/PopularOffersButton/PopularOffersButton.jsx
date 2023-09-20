import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const PopularOffersButton = ({
  handleButtonClick,
  handleGoTop,
  start,
  ref1,
  refStatus,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [rent, setRent] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        onClick={handleButtonClick}
        className={`${
          isVisible
            ? "translate-y-0 duration-1000"
            : "translate-y-full opacity-0"
        } flex items-center gap-2 fixed bottom-10 px-5 py-2 mx-[31rem] bg-[--white] rounded-full font-bold text-gray-600 text-lg hover:scale-105 hover:duration-300 cursor-pointer shadow-lg z-50  `}
      >
        {refStatus === ref1 && !start ? (
          <>
            <p>Return up</p> <KeyboardArrowUpIcon fontSize="large" />
          </>
        ) : (
          <>
            <p>Popular Offers</p> <KeyboardArrowDownIcon fontSize="large" />
          </>
        )}
      </div>
      {!start && (
        <div
          onClick={handleGoTop}
          className="fixed bottom-10 p-[2px] right-8 bg-[--white] rounded-full hover:scale-105 hover:duration-300 cursor-pointer shadow-lg z-50"
        >
          <KeyboardArrowUpIcon fontSize="large" />
        </div>
      )}
    </>
  );
};

export default PopularOffersButton;
