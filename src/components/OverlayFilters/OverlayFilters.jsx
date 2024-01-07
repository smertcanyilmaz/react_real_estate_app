import React, { useContext } from "react";
import "./OverlayFilters.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import Rooms from "./Rooms/Rooms";
import Prices from "./Prices/Prices";
import { ContextFilter } from "../../Context/FilterContext";

const OverlayFilters = () => {
  const {
    openFilters,
    selectedButtonsStatus,
    setSelectedButtonsStatus,
    setSelectedRoomNumbers,
    setSelectedRoomNumbers2,
    selectedNumbers,
    setSelectedNumbers,
    selectedNumbers2,
    setSelectedNumbers2,
    setFilterTypeValue,
    setFilterTypes,
    filterPriceValues,
    setFilterPriceValues,
    clearHandler,
    showHandler,
    openFiltersOverlay,
    filterTypes,
  } = useContext(ContextFilter);

  const buttonsStatusHandler = (id) => {
    if (selectedButtonsStatus === id) {
      setSelectedButtonsStatus(null);
      setFilterTypes((prev) => prev.filter((item) => item !== "property"));
    } else {
      setSelectedButtonsStatus(id);

      if (!filterTypes.includes("property")) {
        setFilterTypes([...filterTypes, "property"]);
      }
    }
  };

  const forMobile = window.innerWidth <= 640;

  const buttonsStatus = [
    {
      id: 1,
      icon: (
        <HomeWorkOutlinedIcon
          className="icons"
          fontSize={forMobile ? "medium" : "large"}
        />
      ),
      title: "Any",
    },
    {
      id: 2,
      icon: (
        <HouseOutlinedIcon
          className="icons"
          fontSize={forMobile ? "medium" : "large"}
        />
      ),
      title: "Sell",
    },
    {
      id: 3,
      icon: (
        <HomeOutlinedIcon
          className="icons"
          fontSize={forMobile ? "medium" : "large"}
        />
      ),
      title: "Rent",
    },
  ];

  return (
    <div
      className={`fixed w-screen h-full md:w-[55vw] md:h-[90vh] top-1/2 left-1/2 bottom-0 -translate-x-[50%] -translate-y-[50%] md:rounded-2xl bg-white  flex flex-col  md:gap-0 justify-between transform-translate duration-500 ${
        openFiltersOverlay
          ? "-translate-y-[50%] z-30 opacity-100"
          : "translate-y-[30%] -z-30 opacity-0"
      } `}
    >
      <div className="section1 w-full flex justify-between py-2 px-5 md:py-6 md:px-10">
        <CloseOutlinedIcon
          className="cursor-pointer"
          onClick={() => openFilters()}
        />
        <h3 className=" font-semibold mr-5">Filters</h3>
        <div>{/* empty div */}</div>
      </div>
      <div className="overflow-auto flex-1 border-t border-b border-gray-200">
        <div className="section2 flex-1 flex flex-col justify-between md:justify-normal h-full md:h-auto gap-3 md:gap-10 md:mt-4  py-3 md:py-6 md:px-10">
          <Prices
            filterPriceValues={filterPriceValues}
            setFilterPriceValues={setFilterPriceValues}
            setFilterTypeValue={setFilterTypeValue}
            setFilterTypes={setFilterTypes}
            filterTypes={filterTypes}
          />
          <div className="section2_2 w-full flex flex-col gap-3 items-center md:items-start md:gap-0 md:flex-row md:justify-around">
            {buttonsStatus.map((buttonStatus, index) => (
              <div
                key={buttonStatus.id}
                className={`house ${
                  selectedButtonsStatus === index &&
                  "bg-[#f6f6f6] border-2 border-gray-800 "
                }`}
                onClick={() => buttonsStatusHandler(index)}
              >
                {buttonStatus.icon}
                {buttonStatus.title}
              </div>
            ))}
          </div>
          <div className="section2_3 flex flex-col gap-5 px-3 md:px-0">
            <h1 className="text-2xl font-semibold">Rooms</h1>
            <div className="flex flex-col gap-3">
              Bedrooms
              <Rooms
                setSelectedRoomNumbers={setSelectedRoomNumbers}
                selectedNumbers={selectedNumbers}
                setSelectedNumbers={setSelectedNumbers}
                type="bedrooms"
                setFilterTypeValue={setFilterTypeValue}
                setFilterTypes={setFilterTypes}
                filterTypes={filterTypes}
              />
            </div>
            <div className="flex flex-col gap-3">
              Bathrooms
              <Rooms
                setSelectedRoomNumbers2={setSelectedRoomNumbers2}
                selectedNumbers2={selectedNumbers2}
                setSelectedNumbers2={setSelectedNumbers2}
                type="bathrooms"
                setFilterTypeValue={setFilterTypeValue}
                setFilterTypes={setFilterTypes}
                filterTypes={filterTypes}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="section3 w-full flex justify-between items-center py-2 px-5 md:py-6 md:px-10">
        <p
          className="underline font-semibold cursor-pointer"
          onClick={clearHandler}
        >
          Clear all
        </p>
        <div
          className="w-28 h-10 md:w-40 md:h-12 text-sm md:text-base rounded-lg bg-gray-800 flex justify-center items-center text-white cursor-pointer"
          onClick={showHandler}
        >
          Show Places
        </div>
      </div>
    </div>
  );
};

export default OverlayFilters;
