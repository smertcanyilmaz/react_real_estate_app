import React from "react";

const HomeBrands = () => {
  return (
    <div className="w-full max-w-6xl mx-auto h-[8rem] flex flex-col items-center justify-center gap-12 px-10 -mt-5 mb-5">
      <h2 className="font-semibold text-2xl leading-snug text-gray-800">
        Brands We Work With
      </h2>
      <div className="w-full flex items-center justify-between">
        <img src="images/coldwell.png" className="w-28 h-12" />
        <img src="images/remax.png" className="w-28 h-12" />
        <img src="images/compass.png" className="w-28 h-12" />
        <img src="images/kw.png" className="w-28 h-12" />
        <img src="images/century.png" className="w-28 h-12" />
        <img src="images/homeservices.png" className="w-28 h-12" />
      </div>
    </div>
  );
};

export default HomeBrands;
