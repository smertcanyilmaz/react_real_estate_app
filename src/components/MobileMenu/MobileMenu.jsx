import React, { useContext, useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { ContextFilter } from "../../Context/FilterContext";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ContextProfile } from "../../Context/ProfileContext";
import { Context } from "../../Context/AuthContext";

const MobileMenu = () => {
  const navigate = useNavigate();
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
  const { membershipChecker } = useContext(ContextProfile);
  const { userActive } = useContext(Context);

  const [selectedMenuIcon, setSelectedMenuIcon] = useState("");
  const [isScrolled, setIsScrolled] = useState(true);

  // useEffect(() => {
  //todo: mobil menüyü scroll ile kapatıp açmak için gerekli olan kod. şimdilik bu tasarımı kullanmıyorum
  //   let prevScrollPos = window.scrollY;

  //   if (
  //     location.pathname !== "/profilemenu"
  //   ) {
  //     const handleScroll = () => {
  //       const currentScrollPos = window.scrollY;
  //       const shouldShow =
  //         currentScrollPos < prevScrollPos || currentScrollPos < 10;

  //       setIsScrolled(shouldShow);
  //       prevScrollPos = currentScrollPos;
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }
  // }, [pathname]);

  const { id } = useParams();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setSelectedMenuIcon("home");
        break;
      case "/estates":
      case `/estates/${id}`:
        setSelectedMenuIcon("explore");
        break;
      case "/create-post":
      case "/preview":
        if (!userActive) {
          setSelectedMenuIcon("profile");
        } else {
          setSelectedMenuIcon("postAd");
        }
        break;
      case "/favorites":
        setSelectedMenuIcon("favorites");
        break;
      case "/profilemenu":
      case "/posts/actives":
      case "/posts/pasives":
      case "/login":
      case "/register":
        setSelectedMenuIcon("profile");
        break;

      default:
        setSelectedMenuIcon("");
        break;
    }
  }, [location.pathname]);

  const selectedIconClickHandler = (element) => {
    setStatus("");
    if (element === "home") {
      navigate("/");
      if (location.pathname === "/estates") {
        clearHandler();
        setCityStatus("");
        setSelectedButtons(null);
        setFilter("");
        setProductCardNotFound(false);
        setNavbarFilteringChecker(true);
        setFirstLookChecker(false);
      }
    } else if (element === "explore") {
      navbarStatusClickHandler("all");
    } else if (element === "postAd") {
      membershipChecker();
    } else if (element === "favorites") {
      if (!userActive) {
        navigate("/login");
      } else {
        navigate("/favorites");
      }
    } else if (element === "profile") {
      if (!userActive) {
        navigate("/login");
      } else {
        navigate("/profilemenu");
      }
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
          <p className="text-xs">{userActive ? "Profile" : "Log In"}</p>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
