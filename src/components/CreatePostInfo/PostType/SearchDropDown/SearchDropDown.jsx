import React, { useEffect, useState } from "react";

const SearchDropDown = ({ id, country, cities }) => {
  const [datas, setDatas] = useState([]);
  const [InputValue, setInputValue] = useState("");

  const [filterState, setFilterState] = useState([]);
  const cityFiltering = (value) => {
    const filtering = cities.filter((city) => city.name === value);
    setFilterState([filtering]);

    console.log(filterState);
  };

  useEffect((value) => {
    if (id === "countryId") {
      setDatas(country);
      setInputValue(value);
    } else if (id === "cityId") {
      setDatas(cities);
      setInputValue(value);
      cityFiltering(value);
    } else {
      setDatas([{ name: "mertcan" }]);
      setInputValue(value);
    }
  }, []);

  console.log(InputValue);

  return (
    <div className="w-60 h-20 flex flex-col gap-5 p-[6px] border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50">
      <div className="flex items-center justify-between cursor-pointer bg-gray-50 rounded-sm border border-gray-500/50 pr-2">
        <input
          type="text"
          className="w-[90%] border-2 border-none outline-none"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className="items_container w-full flex flex-col bg-red-500">
        {/* maplenecek yer burası. aşağıdaki div maplenecek */}
        {/* {datas.map((country, index) => (
          <div
            key={index}
            className="item w-full h-[35px] flex items-center justify-between cursor-pointer bg-gray-50 rounded-sm border border-gray-500/50  bg-green-500"
          >
            {country.name}
          </div>
        ))} */}
        {/* {filterState.map((city, index) => (
          <div
            key={index}
            className="item w-full h-[35px] flex items-center justify-between cursor-pointer bg-gray-50 rounded-sm border border-gray-500/50  bg-green-500"
          >
            {city.name}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SearchDropDown;
