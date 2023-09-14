import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const PopularOffers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        className={`${
          isVisible
            ? "translate-y-0 duration-1000"
            : "translate-y-full opacity-0"
        } flex items-center gap-2 absolute bottom-14 px-5 py-2 mx-[30rem] bg-[--white] rounded-full font-bold text-gray-600 text-lg hover:scale-105 hover:duration-300 cursor-pointer`}
      >
        Popular Offers
        <KeyboardArrowDownIcon fontSize="large" />
      </div>
    </>
  );
};

export default PopularOffers;
