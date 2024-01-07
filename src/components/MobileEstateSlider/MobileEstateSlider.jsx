import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useNavigate } from "react-router-dom";

const MobileEstateSlider = ({
  item,
  setOpenOverlayEstate,
  openOverlayEstate,
  setImagesIndex,
  favoriteClickHandler,
  componentStyle,
  userActiveFavorited,
}) => {
  // ? bu kütüphane css adına kullandığım tek kütüphane olabilir. mobile slider yapmak için bu kütüphaneyi kurabilirsin: npm install react-slick slick-carousel

  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const clickHandler = (index) => {
    setOpenOverlayEstate(true);
    setImagesIndex(index);
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {item?.images.map((image, index) => (
          <div
            onClick={() => clickHandler(index)}
            key={index}
            className="relative h-[40vh]"
          >
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>

      <div className="absolute top-0 left-0 w-full flex justify-between p-2">
        <div
          onClick={() => navigate(-1)}
          className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-800 shadow-md"
        >
          <ArrowBackIosNewOutlinedIcon
            style={{ with: "1rem", height: "1rem" }}
          />
        </div>
        <div
          onClick={(e) => favoriteClickHandler(e, item.id)}
          className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600/80 shadow-md ${
            openOverlayEstate ? "z-0" : "z-50"
          }`}
        >
          {!userActiveFavorited ? (
            <FavoriteBorderRoundedIcon
              fontSize="small"
              style={componentStyle}
            />
          ) : (
            <FavoriteRoundedIcon fontSize="small" style={componentStyle} />
          )}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 text-center">
        {item?.images.map((_, index) => (
          <span
            key={index}
            onClick={() => setImagesIndex(index)}
            className={`cursor-pointer mx-1 mb-2 inline-block w-2 h-2 rounded-full ${
              index === currentSlide ? "bg-gray-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileEstateSlider;
