import React from "react";
import "./EstateList.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BungalowOutlinedIcon from "@mui/icons-material/BungalowOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import TsunamiOutlinedIcon from "@mui/icons-material/TsunamiOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";

const EstatesList = () => {
  return (
    <div className="max-w-6xl mt-10">
      <div className="categories flex w-full">
        <div className="quickSelection flex gap-5">
          <div className="quick">
            <HouseOutlinedIcon className="icons" />
            Sale
          </div>
          <div className="quick">
            <HomeOutlinedIcon className="icons" />
            Rent
          </div>
          <div className="quick">
            <LocalFireDepartmentOutlinedIcon
              fontSize="large"
              sx={{ fontSize: 25 }}
              className="icons"
            />
            Trending
          </div>
          <div className="quick">
            <TsunamiOutlinedIcon className="icons" />
            Amazing views
          </div>
          <div className="quick">
            <ApartmentIcon className="icons" />
            Apartment
          </div>
          <div className="quick">
            <BungalowOutlinedIcon className="icons" />
            Tiny houses
          </div>
          <div className="quick">
            <PoolOutlinedIcon className="icons" />
            Amazing Pools
          </div>
        </div>
        <div className="filters"></div>
      </div>
      <div className="list"></div>
    </div>
  );
};

export default EstatesList;
