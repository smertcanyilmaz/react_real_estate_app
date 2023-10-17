import React, { useEffect, useState } from "react";
import "./SearchDropDown.css";

const SearchDropDown = ({
  id,
  country,
  cities,
  arrowState,
  setInputBox,
  arrowClickHandler,
}) => {
  const [datas, setDatas] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [scrollShow, setScrollShow] = useState(false);

  useEffect(() => {
    if (id === "countryId") {
      setDatas(country);
    } else if (id === "cityId") {
      setDatas(cities);
    } else {
      setDatas([{ name: "mertcan" }]);
    }
  }, [id, country, cities]);

  useEffect(() => {
    const lowerInputValue = inputValue.toLowerCase();
    if (datas) {
      const filtered = datas.filter((data) =>
        data.name.toLowerCase().includes(lowerInputValue)
      );
      setFilteredData(filtered);
    }
  }, [inputValue, datas]);

  const inputBoxHandler = (data) => {
    setInputBox(data);
    arrowClickHandler("city");
  };

  return (
    <div
      className={`w-60 flex flex-col items-center gap-2 p-[6px] border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50 absolute left-0 top-[5rem] duration-500 ${
        arrowState.city ? "opacity-100 z-10 " : "opacity-0 -z-10  "
      } `}
    >
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
        {/* maplenecek yer burası. aşağıdaki div maplenecek */}

        {filteredData.map((data, index) => (
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
    </div>
  );
};

export default SearchDropDown;
