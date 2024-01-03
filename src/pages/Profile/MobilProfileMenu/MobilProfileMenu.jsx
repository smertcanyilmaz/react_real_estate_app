import React, { useContext, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useLocation, useParams } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { ContextProfile } from "../../../Context/ProfileContext";

const MobilProfileMenu = () => {
  const pathname = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path === "/profilemenu")
      document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = "#e3e3e1";
    };
  }, [pathname]);

  const auth = getAuth();
  const { id } = useParams();
  const { setUserSubscribe } = useContext(ContextProfile);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      if (path === "/" || path === "/estates" || path === `/estates/${id}`) {
        window.location.reload();
      }
      setUserSubscribe(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen min-h-screen flex flex-col gap-3 bg-[#ffffff] ">
      <h1 className="text-xl text-gray-800 font-semibold p-3">
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

      <div
        onClick={handleSignOut}
        className="mx-3 py-3 border border-gray-500 rounded-xl"
      >
        <div className="flex p-2 items-center justify-between">
          <div className="flex gap-2">
            <LogoutIcon />
            <p className="font-semibold text-lg">Log Out</p>
          </div>
          <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
        </div>
      </div>
    </div>
  );
};

export default MobilProfileMenu;
