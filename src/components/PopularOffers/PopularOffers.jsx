import React from "react";

const PopularOffers = ({ section2Visible }) => {
  return (
    <div
      className={`h-[30rem] w-full duration-1000 ${
        section2Visible ? "-translate-y-[200%] mt-36" : "translate-y-0"
      }`}
    >
      deneme
    </div>
  );
};

export default PopularOffers;
