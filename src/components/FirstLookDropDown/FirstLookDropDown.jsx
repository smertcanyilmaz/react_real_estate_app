import React, { useContext } from "react";
import { ContextFilter } from "../../Context/FilterContext";

const FirstLookDropDown = () => {
  const { filteredCities, clickHandler } = useContext(ContextFilter);

  return (
    <div className="w-[40rem] max-h-[12rem] overflow-y-auto bg-[#e8e8e9] rounded-lg">
      <div className=" w-full h-full flex flex-col gap-2  cursor-pointer">
        {filteredCities?.map((city, index) => (
          <p
            className=" hover:bg-gray-300/50 px-7 py-1"
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
