import React from "react";
import { useSelector } from "react-redux";

const PopularOffers = () => {
  const popularOffersVisible = useSelector(
    (state) => state.popularOffersVisible.visible
  );
  return (
    <div
      className={`h-[30rem] w-full duration-1000 ${
        popularOffersVisible ? "-translate-y-[200%] mt-36" : "translate-y-0"
      }`}
    >
      deneme
    </div>
  );
};

export default PopularOffers;
