import React, { useContext } from "react";
import { ContextFilter } from "../../Context/FilterContext";

const FirstLookDropDown = () => {
  const { filteredCities, clickHandler } = useContext(ContextFilter);

  return (
    <div className="w-[90%] mx-auto md:mx-0 md:w-[40rem] h-32 md:max-h-[12rem] overflow-y-auto  md:bg-[#e8e8e9 z-30 rounded-lg bg-gray-100">
      <div className="w-full h-full flex flex-col gap-2 cursor-pointer">
        {filteredCities?.map((city, index) => (
          <p
            className=" hover:bg-gray-300/50 px-7 py-[2px] md:py-1 text-sm md:text-base"
            onClick={() => clickHandler(city)}
            key={index}
          >
            {city}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FirstLookDropDown;
