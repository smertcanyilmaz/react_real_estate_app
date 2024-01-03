import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const MobilProfileMenu = () => {
  return (
    <div className="w-screen h-[calc(100vh-4rem)] flex flex-col justify-between bg-[#ffffff]">
      <h1 className="text-xl text-gray-800 font-semibold p-3 border-b border-gray-400/80">
        Mertcan Yılmaz
      </h1>
      <div className="mx-3 py-3 border border-gray-500 rounded-xl">
        <div className="flex gap-2 p-3">
          <HomeOutlinedIcon />
          <p className="font-semibold text-lg">My Posts</p>
        </div>
        <div className="flex items-center justify-between border-t border-gray-500/30 px-8 py-3">
          <p>Active Posts</p>
          <ArrowForwardIosOutlinedIcon fontSize="small" className="-mr-2" />
        </div>
        <div className="flex items-center justify-between border-t border-gray-500/30 px-8 py-3">
          <p>Passive Posts</p>
          <ArrowForwardIosOutlinedIcon fontSize="small" className="-mr-2" />
        </div>
      </div>
      <div className="mx-3 py-3 border border-gray-500 rounded-xl">
        <div className="flex p-2 items-center justify-between">
          <div className="flex gap-2">
            <FavoriteBorderOutlinedIcon />
            <p className="font-semibold text-lg">Favorites</p>
          </div>
          <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
        </div>
      </div>
      <div className="mx-3 py-3 border border-gray-500 rounded-xl">
        <div className="flex p-2 items-center justify-between">
          <div className="flex gap-2">
            <PersonOutlineOutlinedIcon />
            <p className="font-semibold text-lg">My Profile Informations</p>
          </div>
          <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
        </div>
      </div>

      <div className="mx-3 py-3 border border-gray-500 rounded-xl">
        <div className="flex p-2 items-center justify-between">
          <div className="flex gap-2">
            <p className="font-semibold text-lg">Membership</p>

            <span className="font-bold">
              <AddRoundedIcon sx={{ color: "rgb(59 130 246)" }} />
            </span>
          </div>
          <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
        </div>
      </div>

      <div className="mx-3 py-3 border border-gray-500 rounded-xl">
        <div className="flex p-2 items-center justify-between">
          <div className="flex gap-2">
            <LogoutIcon />
            <p className="font-semibold text-lg">Log Out</p>
          </div>
          <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
        </div>
      </div>
      <div>{/*Empty Div*/}</div>
    </div>
  );
};

export default MobilProfileMenu;
