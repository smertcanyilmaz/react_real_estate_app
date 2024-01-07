import React, { useContext } from "react";
import "./EstatesFilters.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BungalowOutlinedIcon from "@mui/icons-material/BungalowOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import TsunamiOutlinedIcon from "@mui/icons-material/TsunamiOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import SnowmobileOutlinedIcon from "@mui/icons-material/SnowmobileOutlined";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import { ContextFilter } from "../../Context/FilterContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileEstatesSlider from "../MobileEstatesSlider/MobileEstatesSlider";

const EstatesFilters = () => {
  const {
    openFilters,
    selectedButtonHandler,
    selectedButton,
    filterTypes,
    filtersApplied,
    openFiltersOverlay,
  } = useContext(ContextFilter);

  const buttons = [
    {
      id: 0,
      icon: <LocalFireDepartmentOutlinedIcon className="icons" />,
      title: "Trending",
      name: "trending",
    },

    {
      id: 1,
      icon: <AgricultureIcon className="icons" />,
      title: "Farms",
      name: "farms",
    },
    {
      id: 2,
      icon: <HomeOutlinedIcon className="icons" />,
      title: "Containers",
      name: "containers",
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

  const forMobile = window.innerWidth <= 640;

  return (
    <div className="categories w-full flex flex-col md:flex-row md:justify-between md:items-center md:gap-5">
      {!forMobile ? (
        <div className="quickSelection flex gap-5">
          {buttons.map((button) => (
            <div
              key={button.id}
              className={`quick z-10  ${
                selectedButton === button.id
                  ? "border-2 border-[--dark_blue]"
                  : "border border-[--dark_blue]"
              }`}
              onClick={() => selectedButtonHandler(button.id, button.name)}
            >
              {button.icon}
              {button.title}
            </div>
          ))}
        </div>
      ) : (
        <MobileEstatesSlider
          selectedButtonHandler={selectedButtonHandler}
          selectedButton={selectedButton}
        />
      )}
      <div
        className={`flex items-center justify-center gap-2 w-28 h-12 rounded-xl bg-[--white] border border-gray-400 hover:bg-gray-800  cursor-pointer relative 
        ${
          filterTypes.length !== 0 && !openFiltersOverlay
            ? "border-2 border-gray-800 hover:bg-white hover:text-black duration-0"
            : "hover:text-white duration-200 "
        } 
        
        `}
        onClick={() => openFilters()}
      >
        {filterTypes.length !== 0 &&
          (!openFiltersOverlay || (filtersApplied && openFiltersOverlay)) && (
            <div className="bg-[--bg_color] absolute -top-1 -right-1 w-5 h-5 rounded-full  flex justify-center items-center">
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
