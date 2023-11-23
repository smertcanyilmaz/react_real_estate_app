import React from "react";

const FirstLookDropDown = ({ filteredCities }) => {
  return (
    <div className="w-[40rem] max-h-[12rem] overflow-y-auto bg-[#e8e8e9] rounded-lg p-2">
      <div className=" w-full h-full flex flex-col gap-2 pl-5">
        {filteredCities?.map((city) => (
          <p>{city}</p>
        ))}
      </div>
    </div>
  );
};

export default FirstLookDropDown;
