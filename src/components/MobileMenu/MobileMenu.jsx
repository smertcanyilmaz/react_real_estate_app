import React, { useContext } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { ContextFilter } from "../../Context/FilterContext";
import { useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const { navbarStatusClickHandler, status, setStatus } =
    useContext(ContextFilter);
  const navigate = useNavigate();

  const logoClickHandler = () => {
    setStatus("");
    navigate("/");
  };

  const profileClickHandler = () => {
    // setShowUser(false);
    navigate("/myprofile");
    setStatus("");
  };
  return (
    <div className="w-full h-20 sticky bottom-0 bg-gray-100 md:hidden px-5 py-2">
      <div className="w-full h-full flex items-center justify-between">
        <div
          onClick={logoClickHandler}
          className="flex flex-col items-center justify-center"
        >
          <HomeOutlinedIcon fontSize="large" />
          <p>Home</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <SearchOutlinedIcon fontSize="large" />
          <p>Explore</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ControlPointOutlinedIcon fontSize="large" />
          <p>Post Ad</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <FavoriteBorderOutlinedIcon fontSize="large" />
          <p>Favorites</p>
        </div>
        <div
          onClick={profileClickHandler}
          className="flex flex-col items-center justify-center"
        >
          <PersonOutlineOutlinedIcon fontSize="large" />
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
