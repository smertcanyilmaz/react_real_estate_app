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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileEstatesSlider from "../MobileEstatesSlider/MobileEstatesSlider";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();
  const forMobile = window.innerWidth <= 640;
  const {
    navbarStatusClickHandler,
    status,
    setStatus,
    clearHandler,
    setCityStatus,
    setSelectedButtons,
    setFilter,
    setProductCardNotFound,
    setNavbarFilteringChecker,
    setFirstLookChecker,
  } = useContext(ContextFilter);

  const arrowClickHandler = () => {
    navigate("/");
    clearHandler();
    setCityStatus("");
    setSelectedButtons(null);
    setFilter("");
    setProductCardNotFound(false);
    setNavbarFilteringChecker(true);
    setFirstLookChecker(false);
  };

  return (
    <div className="categories w-full flex flex-col-reverse  md:flex-row md:justify-between md:items-center md:gap-5">
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
      <div className="flex items-center justify-between my-3">
        {forMobile && (
          <>
            <div onClick={arrowClickHandler} className="md:hidden">
              <WestOutlinedIcon />
            </div>

            <div className="links flex text-gray-800 font-semibold gap-3">
              <p
                disabled={status === "all"}
                onClick={() => navbarStatusClickHandler("all")}
                className={`hover:bg-[#c0c6ff] duration-200 ${
                  status === "all"
                    ? "bg-[#c0c6ff] border border-[#5366ff]  cursor-default"
                    : "cursor-pointer"
                }`}
              >
                All Estates
              </p>
              <p
                onClick={() => navbarStatusClickHandler("sale")}
                className={`hover:bg-[#c0c6ff] duration-200  ${
                  status === "sale"
                    ? "bg-[#c0c6ff] border border-[#5366ff]  cursor-default"
                    : "cursor-pointer"
                }`}
              >
                For Sale
              </p>
              <p
                onClick={() => navbarStatusClickHandler("rent")}
                className={`hover:bg-[#c0c6ff] duration-200  ${
                  status === "rent"
                    ? "bg-[#c0c6ff] border border-[#5366ff] cursor-default"
                    : "cursor-pointer"
                }`}
              >
                To Rent
              </p>
            </div>
          </>
        )}

        <div
          className={`flex items-center justify-center gap-2 w-10 h-10 md:w-28 md:h-12 rounded-full bg-[--white] border border-gray-400 hover:bg-gray-800 cursor-pointer relative text-sm md:text-base
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
          <SortOutlinedIcon fontSize={forMobile ? "small" : "medium"} />
          {forMobile ? "" : "Filters"}
        </div>
      </div>
    </div>
  );
};

export default EstatesFilters;
