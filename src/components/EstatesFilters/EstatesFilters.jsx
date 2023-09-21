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

const EstatesFilters = () => {
  const buttons = [
    {
      id: 1,
      icon: <HouseOutlinedIcon className="icons" />,
      title: "Sale",
    },
    {
      id: 2,
      icon: <HomeOutlinedIcon className="icons" />,
      title: "Rent",
    },
    {
      id: 3,
      icon: <LocalFireDepartmentOutlinedIcon className="icons" />,
      title: "Trending",
    },
    {
      id: 4,
      icon: <TsunamiOutlinedIcon className="icons" />,
      title: "Amazing Views",
    },
    {
      id: 5,
      icon: <ApartmentIcon className="icons" />,
      title: "Apartment",
    },
    {
      id: 6,
      icon: <BungalowOutlinedIcon className="icons" />,
      title: "Tiny Houses",
    },
    {
      id: 7,
      icon: <PoolOutlinedIcon className="icons" />,
      title: "Amazing Pools",
    },
    {
      id: 8,
      icon: <LandscapeOutlinedIcon className="icons" />,
      title: "In Nature",
    },
    {
      id: 9,
      icon: <SnowmobileOutlinedIcon className="icons" />,
      title: "Luxe",
    },
  ];
  return (
    <div className="categories  w-full flex justify-between items-center gap-5">
      <div className="quickSelection flex gap-5">
        {buttons.map((button) => (
          <div key={button.id} className="quick">
            {button.icon}
            {button.title}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 w-28 h-12 rounded-xl bg-[--white] border border-gray-400 hover:border-2 hover:bg-gray-700 hover:border-none hover:text-white duration-100 cursor-pointer">
        <SortOutlinedIcon />
        Filters
      </div>
    </div>
  );
};

export default EstatesFilters;
