import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BungalowOutlinedIcon from "@mui/icons-material/BungalowOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import TsunamiOutlinedIcon from "@mui/icons-material/TsunamiOutlined";
import PoolOutlinedIcon from "@mui/icons-material/PoolOutlined";
import LandscapeOutlinedIcon from "@mui/icons-material/LandscapeOutlined";
import SnowmobileOutlinedIcon from "@mui/icons-material/SnowmobileOutlined";
import AgricultureIcon from "@mui/icons-material/Agriculture";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useNavigate } from "react-router-dom";

const MobileEstatesSlider = ({ selectedButtonHandler, selectedButton }) => {
  const navigate = useNavigate();
  const buttons = [
    {
      id: 0,
      icon: <LocalFireDepartmentOutlinedIcon fontSize="small" />,
      title: "Trending",
      name: "trending",
    },

    {
      id: 1,
      icon: <AgricultureIcon fontSize="small" />,
      title: "Farms",
      name: "farms",
    },
    {
      id: 2,
      icon: <HomeOutlinedIcon fontSize="small" />,
      title: "Containers",
      name: "containers",
    },

    {
      id: 3,
      icon: <TsunamiOutlinedIcon fontSize="small" />,
      title: "Amazing Views",
      name: "amazingViews",
    },
    {
      id: 4,
      icon: <ApartmentIcon />,
      title: "Apartment",
      name: "apartment",
    },
    {
      id: 5,
      icon: <BungalowOutlinedIcon />,
      title: "Tiny Houses",
      name: "tinyHouses",
    },
    {
      id: 6,
      icon: <PoolOutlinedIcon />,
      title: "Amazing Pools",
      name: "amazingPools",
    },
    {
      id: 7,
      icon: <LandscapeOutlinedIcon />,
      title: "In Nature",
      name: "inNature",
    },
    {
      id: 8,
      icon: <SnowmobileOutlinedIcon />,
      title: "Luxe",
      name: "luxe",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };
  return (
    <>
      {/* <div onClick={() => navigate(-1)} className="md:hidden p-3">
        <WestOutlinedIcon />
      </div> */}
      <Slider
        {...settings}
        className=" bg-gray-100/80 rounded-lg border-b-2 shadow mb-3"
      >
        {buttons.map((button) => (
          <div key={button.id} className="text-center ">
            <div
              onClick={() => selectedButtonHandler(button.id, button.name)}
              className={` p-2 rounded-lg mx-2 h-16 w-20  ${
                selectedButton === button.id ? "bg-[#c0c6ff]" : "bg-gray-100/80"
              }`}
            >
              {button.icon}
              <p className="mt-2 text-[0.55rem]">{button.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default MobileEstatesSlider;
