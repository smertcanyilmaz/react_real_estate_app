import React, { useEffect, useState } from "react";
import "./SearchDropDown.css";

const SearchDropDown = ({
  id,
  country,
  cities,
  arrowState,
  arrowClickHandler,
  setInputBoxCountry,
  setInputBoxCity,
  setInputBoxDistricts,
  selectedFilterHandler,
  cityFilterHandler,
  newDistricts,
}) => {
  const [datas, setDatas] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [scrollShow, setScrollShow] = useState(false);
  const [countryBox, setCountryBox] = useState(false); // bu componentin sadece country için olan kısmını açar
  const [cityBox, setCityBox] = useState(false);
  const [districtBox, setDistrictBox] = useState(false);
  const [notFound, setNotFound] = useState(false);

  // useEffect(() => {
  //   if (id === "countryId") {
  //     setDatas(country);
  //     setCountryBox(arrowState.country);
  //   } else if (id === "cityId") {
  //     setDatas(cities);
  //     setCityBox(arrowState.city);
  //   } else if (id === "districtId") {
  //     setDatas(newDistricts);
  //     setDistrictBox(arrowState.district);
  //   }
  // }, [
  //   id,
  //   country,
  //   cities,
  //   newDistricts,
  //   arrowState,
  //   setCountryBox,
  //   setCityBox,
  //   setDistrictBox,
  // ]);

  // useEffect(() => {
  //   const lowerInputValue = inputValue.toLowerCase();
  //   if (datas) {
  //     const filtered = datas.filter((data) =>
  //       data.name.toLowerCase().includes(lowerInputValue)
  //     );

  //     setFilteredData(filtered);
  //   }
  // }, [inputValue, datas]);

  // useEffect(() => {
  //   if (filteredData.length === 0 && !inputValue) {
  //     setNotFound(true);
  //   } else {
  //     setNotFound(false);
  //   }
  // }, [filteredData]);

  const inputBoxHandler = (data) => {
    if (id === "countryId") {
      setInputBoxCountry(data);
      arrowClickHandler("country");
      selectedFilterHandler(data);
    } else if (id === "cityId") {
      setInputBoxCity(data);
      arrowClickHandler("city");
      cityFilterHandler(data);
    } else if (id === "districtId") {
      setInputBoxDistricts(data);
      arrowClickHandler("district");
    }
  };

  return (
    <div
      className={`w-60 flex flex-col items-center gap-2 p-[6px] border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50 absolute left-0  duration-300 ${
        countryBox || cityBox || districtBox
          ? `top-[4.5rem] z-10 opacity-100 pointer-events-auto `
          : "top-[4rem]  opacity-0 pointer-events-none"
      }`}
    >
      {/* {notFound ? (
        <p className="text-sm p-2">not found</p>
      ) : (
        <>
          <input
            type="text"
            className="w-full mx-auto border border-gray-500/50 rounded-[4px] outline-none"
            onChange={(e) => setInputValue(e.target.value)}
          />

          <div
            className={`items_container w-full max-h-40 flex flex-col overflow-y-auto  ${
              scrollShow ? "scroll_custom" : "scroll_custom_none"
            }`}
          >
            {filteredData?.map((data, index) => (
              <div
                key={index}
                className="item w-full px-1 py-2 mx-auto cursor-pointer bg-gray-50 border-none hover:bg-gray-100"
                onMouseEnter={() => setScrollShow(true)}
                onMouseLeave={() => setScrollShow(false)}
                onClick={() => inputBoxHandler(data.name)}
              >
                {data.name}
              </div>
            ))}
          </div>
        </>
      )} */}
    </div>
  );
};

export default SearchDropDown;
