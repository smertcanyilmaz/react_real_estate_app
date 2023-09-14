import React from "react";
import Search from "./Search/Search";
import PopularOffers from "./PopularOffers/PopularOffers";

const FirstLook = () => {
  return (
    <div className="w-full flex justify-between mt-20 ">
      <div className="flex-1 flex flex-col gap-10 justify-center items-center">
        <h1 className="text-5xl font-bold leading-snug">
          Modern Living For Everyone
        </h1>
        <p className="text-justify text-xl leading-normal">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in Madrid and Barcelona more than 15
          years.
        </p>
        <Search />
      </div>
      <div className="flex-1 flex justify-end relative">
        <img src="src\assets\FirstLook\pexels-timur-saglambilek-87223 2.png" />
        <img
          src="src\assets\FirstLook\pexels-timur-saglambilek-87223 1.png"
          className="absolute bottom-0"
        />
      </div>
      <PopularOffers />
    </div>
  );
};

export default FirstLook;
