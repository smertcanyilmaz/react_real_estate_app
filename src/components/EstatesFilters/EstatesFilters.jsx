import React from "react";
import "./EstatesFilters.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BungalowOutlinedIcon from "@mui/icons-material/BungalowOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import TsunamiOutlinedIcon from "@mui/icons-material/TsunamiOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import SnowmobileOutlinedIcon from "@mui/icons-material/SnowmobileOutlined";

const EstatesFilters = ({
  openFilters,
  selectedButtonHandler,
  selectedButton,
  filterTypes,
}) => {
  const buttons = [
    {
      id: 0,
      icon: <HouseOutlinedIcon className="icons" />,
      title: "Sale",
      name: "sale",
    },
    {
      id: 1,
      icon: <HomeOutlinedIcon className="icons" />,
      title: "Rent",
      name: "rent",
    },
    {
      id: 2,
      icon: <LocalFireDepartmentOutlinedIcon className="icons" />,
      title: "Trending",
      name: "trending",
    },
    {
      id: 3,
      icon: <TsunamiOutlinedIcon className="icons" />,
      title: "Amazing Views",
      name: "amazingViews",
    },
    {
      id: 4,
      icon: <ApartmentIcon className="icons" />,
      title: "Apartment",
      name: "apartment",
    },
    {
      id: 5,
      icon: <BungalowOutlinedIcon className="icons" />,
      title: "Tiny Houses",
      name: "tinyHouses",
    },
    {
      id: 6,
      icon: <PoolOutlinedIcon className="icons" />,
      title: "Amazing Pools",
      name: "amazingPools",
    },
    {
      id: 7,
      icon: <LandscapeOutlinedIcon className="icons" />,
      title: "In Nature",
      name: "inNature",
    },
    {
      id: 8,
      icon: <SnowmobileOutlinedIcon className="icons" />,
      title: "Luxe",
      name: "luxe",
    },
  ];

  return (
    <div className="categories w-full flex justify-between items-center gap-5">
      <div className="quickSelection flex gap-5 z-20">
        {buttons.map((button) => (
          <div
            key={button.id}
            className={`quick ${selectedButton === button.id && "border-2 "} `}
            onClick={() => selectedButtonHandler(button.id, button.name)}
          >
            {button.icon}
            {button.title}
          </div>
        ))}
      </div>
      <div
        className={`flex items-center justify-center gap-2 w-28 h-12 rounded-xl bg-[--white] border border-gray-400 hover:bg-gray-800  cursor-pointer relative 
        ${
          filterTypes.length !== 0
            ? "border-2 border-gray-800 hover:bg-white hover:text-black duration-0"
            : "hover:text-white duration-200 "
        } 
        
        `}
        onClick={() => openFilters()}
      >
        {filterTypes.length !== 0 && (
          <div className="bg-[--bg_color] absolute -top-1 -right-1 w-5 h-5 rounded-full  flex justify-center items-center ">
            <div className="bg-black rounded-full text-xs text-white flex justify-center items-center  w-[1.125rem] h-[1.125rem] ">
              {filterTypes.length}
            </div>
          </div>
        )}
        <SortOutlinedIcon />
        Filters
      </div>
    </div>
  );
};

export default EstatesFilters;
