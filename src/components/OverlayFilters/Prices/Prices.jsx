import React from "react";

const Prices = ({
  filterPriceValues,
  setFilterPriceValues,
  setFilterTypes,
  filterTypes,
}) => {
  const handleChange = (e) => {
    const updatedFilterPriceValues = {
      // eğer farklı bir değişkene almasaydım referans sorunundan dolayı dengeli çalışmayacaktı. react render ederken state güncellemesini referans değişmediği için anlayamayabiliyor. bundan dolayı reference data types'da kopyalayarak işlem yapmak her zaman daha güvenli.
      ...filterPriceValues,
      [e.target.name]: e.target.value,
    };

    if (
      updatedFilterPriceValues.min === "" &&
      updatedFilterPriceValues.max === ""
    ) {
      setFilterTypes((prev) => prev.filter((item) => item !== "price"));
    } else {
      if (!filterTypes.includes("price")) {
        setFilterTypes([...filterTypes, "price"]);
      }
    }

    setFilterPriceValues(updatedFilterPriceValues);
  };

  return (
    <div className="section2_1 w-full flex justify-between items-center px-5 md:px-10 md:gap-10">
      <div className="inputbox ">
        <span className="text-xs text-gray-600">Minimum</span>
        <div className="flex items-center gap-1">
          <span>€</span>
          <input
            type="text"
            name="min"
            id="min"
            placeholder="300"
            onChange={handleChange}
            value={filterPriceValues.min}
          />
        </div>
      </div>
      <div className="w-[5vw] h-[1px] bg-gray-400">{/* empty div */}</div>
      <div className="inputbox">
        <span className="text-xs text-gray-600">Maximum</span>
        <div className="flex items-center gap-1">
          <span>€</span>
          <input
            type="text"
            name="max"
            id="max"
            placeholder="100000+"
            onChange={handleChange}
            value={filterPriceValues.max}
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
