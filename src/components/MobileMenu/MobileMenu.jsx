import React, { useContext, useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { ContextFilter } from "../../Context/FilterContext";
import { useNavigate } from "react-router-dom";
import { ContextProfile } from "../../Context/ProfileContext";

const MobileMenu = () => {
  const navigate = useNavigate();
  const { navbarStatusClickHandler, status, setStatus } =
    useContext(ContextFilter);
  const { membershipChecker } = useContext(ContextProfile);

  const [selectedMenuIcon, setSelectedMenuIcon] = useState("");
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const shouldShow =
        currentScrollPos < prevScrollPos || currentScrollPos < 10;

      setIsScrolled(shouldShow);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setSelectedMenuIcon("home");
  }, []);

  const selectedIconClickHandler = (element) => {
    setStatus("");
    if (element === "home") {
      navigate("/");
      setSelectedMenuIcon("home");
    } else if (element === "explore") {
      navbarStatusClickHandler("all");
      setSelectedMenuIcon("explore");
    } else if (element === "postAd") {
      membershipChecker();
      setSelectedMenuIcon("postAd");
    } else if (element === "favorites") {
      navigate("/favorites");
      setSelectedMenuIcon("favorites");
    } else if (element === "profile") {
      navigate("/myprofile");
      setSelectedMenuIcon("profile");
    }
  };

  return (
    <div
      className={`${
        isScrolled
          ? "w-full h-16 sticky bottom-0 bg-gray-100 md:hidden px-5 py-2"
          : "hidden"
      } `}
    >
      <div className="w-full h-full flex items-center justify-between">
        <div
          onClick={() => selectedIconClickHandler("home")}
          className={`flex flex-col items-center justify-center gap-1  ${
            selectedMenuIcon === "home" ? "text-[#5366ff]" : "text-gray-600"
          }`}
        >
          <HomeOutlinedIcon style={{ fontSize: 33 }} />
          <p className="text-xs">Home</p>
        </div>
        <div
          onClick={() => selectedIconClickHandler("explore")}
          className={`flex flex-col items-center justify-center gap-1  ${
            selectedMenuIcon === "explore" ? "text-[#5366ff]" : "text-gray-600"
          }`}
        >
          <SearchOutlinedIcon style={{ fontSize: 33 }} />
          <p className="text-xs">Explore</p>
        </div>
        <div
          onClick={() => selectedIconClickHandler("postAd")}
          className={`flex flex-col items-center justify-center gap-1  ${
            selectedMenuIcon === "postAd" ? "text-[#5366ff]" : "text-gray-600"
          }`}
        >
          <ControlPointOutlinedIcon style={{ fontSize: 33 }} />
          <p className="text-xs">Post Ad</p>
        </div>
        <div
          onClick={() => selectedIconClickHandler("favorites")}
          className={`flex flex-col items-center justify-center gap-1  ${
            selectedMenuIcon === "favorites"
              ? "text-[#5366ff]"
              : "text-gray-600"
          }`}
        >
          <FavoriteBorderOutlinedIcon style={{ fontSize: 33 }} />
          <p className="text-xs">Favorites</p>
        </div>
        <div
          onClick={() => selectedIconClickHandler("profile")}
          className={`flex flex-col items-center justify-center gap-1  ${
            selectedMenuIcon === "profile" ? "text-[#5366ff]" : "text-gray-600"
          }`}
        >
          <PersonOutlineOutlinedIcon style={{ fontSize: 33 }} />
          <p className="text-xs">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
