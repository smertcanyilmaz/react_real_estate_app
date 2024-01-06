import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobileEstateSlider = ({
  item,
  setOpenOverlayEstate,
  openOverlayEstate,
  setImagesIndex,
}) => {
  //? bu kütüphane css adına kullandığım tek kütüphane olabilir. mobile slider yapmak için bu kütüphaneyi kurabilirsin: npm install react-slick slick-carousel

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {item?.images.map((image, index) => (
          <div key={index} className="relative">
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </Slider>

      <div className="absolute bottom-0 left-0 right-0 text-center">
        {item?.images.map((_, index) => (
          <span
            key={index}
            onClick={() => setImagesIndex(index)}
            className={`cursor-pointer mx-[5px] mb-2 inline-block w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-gray-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileEstateSlider;
