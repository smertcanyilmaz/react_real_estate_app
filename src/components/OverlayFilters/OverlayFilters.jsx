import React, { useEffect, useState } from "react";
import "./OverlayFilters.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import Rooms from "./Rooms/Rooms";

const OverlayFilters = ({
  openFilters,
  selectedButtonsStatus,
  setSelectedButtonsStatus,
  showHandler,
  setSelectedRoomNumbers,
  setSelectedRoomNumbers2,
  selectedNumbers,
  setSelectedNumbers,
  selectedNumbers2,
  setSelectedNumbers2,
}) => {
  const buttonsStatusHandler = (id) => {
    setSelectedButtonsStatus(id);
  };

  const buttonsStatus = [
    {
      id: 1,
      icon: (
        <HomeWorkOutlinedIcon
          className="icons"
          fontSize="large"
          style={{
            color: selectedButtonsStatus === 0 ? "rgb(209 213 219)" : "initial",
          }}
        />
      ),
      title: "Any",
    },
    {
      id: 2,
      icon: (
        <HouseOutlinedIcon
          className="icons"
          fontSize="large"
          style={{
            color: selectedButtonsStatus === 1 ? "rgb(209 213 219)" : "initial",
          }}
        />
      ),
      title: "Sell",
    },
    {
      id: 3,
      icon: (
        <HomeOutlinedIcon
          className="icons"
          fontSize="large"
          style={{
            color: selectedButtonsStatus === 2 ? "rgb(209 213 219)" : "initial",
          }}
        />
      ),
      title: "Rent",
    },
  ];

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
          {buttonsStatus.map((buttonStatus, index) => (
            <div
              key={buttonStatus.id}
              className={`house ${
                selectedButtonsStatus === index && "bg-gray-800 text-gray-300"
              }`}
              onClick={() => buttonsStatusHandler(index)}
            >
              {buttonStatus.icon}
              {buttonStatus.title}
            </div>
          ))}
        </div>
        <div className="section2_3 flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Rooms</h1>
          <div className="flex flex-col gap-3">
            Bedrooms
            <Rooms
              //bedrooms={true}
              setSelectedRoomNumbers={setSelectedRoomNumbers}
              selectedNumbers={selectedNumbers}
              setSelectedNumbers={setSelectedNumbers}
              type="bedrooms"
            />
          </div>
          <div className="flex flex-col gap-3">
            Bathrooms
            <Rooms
              //bathrooms={true}
              setSelectedRoomNumbers2={setSelectedRoomNumbers2}
              selectedNumbers2={selectedNumbers2}
              setSelectedNumbers2={setSelectedNumbers2}
              type="bathrooms"
            />
          </div>
        </div>
      </div>
      <div className="section3 w-full flex justify-between items-center">
        <p className="underline font-semibold cursor-pointer">Clear all</p>
        <div
          className="w-40 h-12 rounded-lg bg-gray-800 flex justify-center items-center text-white cursor-pointer"
          onClick={showHandler}
        >
          Show 100 places
        </div>
      </div>
    </div>
  );
};

export default OverlayFilters;
