import React, { useState } from "react";
import "./OverlayFilters.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";

const OverlayFilters = ({ openFilters }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, "8+"];
  const [selectedNumbers1, setSelectedNumbers1] = useState(null);
  const [selectedNumbers2, setSelectedNumbers2] = useState(null);
  const selectedNumbersHandler1 = (id) => {
    setSelectedNumbers1(id);
  };
  const selectedNumbersHandler2 = (id) => {
    setSelectedNumbers2(id);
  };
  return (
    <div className="overlayFilters absolute w-[55vw] h-[90vh] top-1/2 left-1/2 rounded-2xl bg-white z-50 flex flex-col justify-between py-6 px-10 ">
      <div className="section1 w-full flex justify-between">
        <CloseOutlinedIcon className="cursor-pointer" onClick={openFilters} />
        <h3 className=" font-semibold mr-5">Filters</h3>
        <div>{/* empty div */}</div>
      </div>
      <div className="section2 flex-1 flex flex-col gap-10 mt-10">
        <div className="section2_1 w-full flex justify-between items-center px-10 gap-10">
          <div className="inputbox ">
            <span className="text-xs text-gray-600">Minimum</span>
            <div className="flex items-center gap-1">
              <span>€</span>
              <input type="text" name="max" id="min" placeholder="300" />
            </div>
          </div>
          <div className="w-[5vw] h-[1px] bg-gray-400">{/* empty div */}</div>
          <div className="inputbox">
            <span className="text-xs text-gray-600">Maximum</span>
            <div className="flex items-center gap-1">
              <span>€</span>
              <input type="text" name="min" id="max" placeholder="100000+" />
            </div>
          </div>
        </div>
        <div className="section2_2 w-full flex justify-between gap-10">
          <div className="house">
            <HomeWorkOutlinedIcon className="icons" fontSize="large" />
            Any
          </div>
          <div className="house">
            <HouseOutlinedIcon className="icons" fontSize="large" />
            Sell
          </div>
          <div className="house">
            <HomeOutlinedIcon className="icons" fontSize="large" />
            Rent
          </div>
        </div>
        <div className="section2_3 flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Rooms</h1>
          <div className="flex flex-col gap-3">
            Bedrooms
            <div className="flex gap-4 items-center">
              <div
                className={`w-20 h-10 rounded-2xl bg-gray-800 text-white flex justify-center items-center cursor-pointer duration-300 ${
                  selectedNumbers1 &&
                  "bg-gray-100 text-gray-800 border border-gray-800"
                }`}
              >
                Any
              </div>
              {numbers.map((number, index) => (
                <div
                  className={`numbers ${
                    selectedNumbers1 === index &&
                    "border-2 border-gray-800 text-white bg-gray-800"
                  } `}
                  key={index}
                  onClick={() => selectedNumbersHandler1(index)}
                >
                  {number}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            Bathrooms
            <div className="flex gap-4 items-center">
              <div
                className={`w-20 h-10 rounded-2xl bg-gray-800 text-white flex justify-center items-center cursor-pointer duration-300 ${
                  selectedNumbers2 &&
                  "bg-gray-100 text-gray-800 border border-gray-800"
                }`}
              >
                Any
              </div>
              {numbers.map((number, index) => (
                <div
                  className={`numbers ${
                    selectedNumbers2 === index &&
                    "border-2 border-gray-800 text-white bg-gray-800"
                  } `}
                  key={index}
                  onClick={() => selectedNumbersHandler2(index)}
                >
                  {number}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="section3 w-full flex justify-between items-center">
        <p className="underline font-semibold">Clear all</p>
        <div className="w-40 h-12 rounded-lg bg-gray-800 flex justify-center items-center text-white">
          Show 100 places
        </div>
      </div>
    </div>
  );
};

export default OverlayFilters;
