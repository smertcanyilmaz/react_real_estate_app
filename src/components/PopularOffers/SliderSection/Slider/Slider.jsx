import React, { useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ProductCard from "../../../ProductCard/ProductCard";

const Slider = ({ sale }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1); //currentSlide - 1
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex gap-5 items-center">
        <div className=" flex w-full h-[3px] rounded-full bg-gray-300">
          <div className="className=h-full bg-[--blue] w-1/5"></div>
          <div
            className=" h-full bg-[--blue]"
            style={{
              width: `${(currentSlide / 5) * 100}%`,
            }}
          ></div>
        </div>
        <div className="w-36 h-12 flex justify-between items-center">
          <div
            onClick={prevSlide}
            className="p-3 bg-[--blue] text-white rounded-full flex justify-center items-center cursor-pointer "
          >
            <ArrowBackIosNewIcon />
          </div>
          <div
            onClick={nextSlide}
            className="p-3 bg-[--blue] text-white rounded-full flex justify-center items-center cursor-pointer "
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>

      <ProductCard currentSlide={currentSlide} sale={sale} />
    </div>
  );
};

export default Slider;
