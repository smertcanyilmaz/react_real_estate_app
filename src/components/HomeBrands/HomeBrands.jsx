import React from "react";

const HomeBrands = () => {
  return (
    <div className="w-full md:max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 md:gap-12 px-3 md:px-10 mb-5 md:mb-16 ">
      <h2 className="font-semibold md:text-2xl leading-snug text-gray-800">
        Brands We Work With
      </h2>
      <div className="w-full flex items-center justify-between">
        <img src="images/coldwell.png" className="w-12 h-8 md:w-28 md:h-12 " />
        <img src="images/remax.png" className="w-12 h-8 md:w-28 md:h-12" />
        <img src="images/compass.png" className="w-12 h-8 md:w-28 md:h-12" />
        <img src="images/kw.png" className="w-12 h-8 md:w-28 md:h-12" />
        <img src="images/century.png" className="w-12 h-8 md:w-28 md:h-12" />
        <img
          src="images/homeservices.png"
          className="w-10 h-6 md:w-28 md:h-12"
        />
      </div>
    </div>
  );
};

export default HomeBrands;
