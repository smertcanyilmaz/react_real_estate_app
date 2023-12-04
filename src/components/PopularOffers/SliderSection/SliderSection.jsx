import React, { useContext, useEffect, useState } from "react";
import Button from "../../Button/Button";
//import Slider from "./Slider/Slider";
import { Link } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ProductCard from "../../ProductCard/ProductCard";
import { ContextFilter } from "../../../Context/FilterContext";

const SliderSection = ({ sale }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setFirstLookChecker, setNavbarFilteringChecker } =
    useContext(ContextFilter);

  useEffect(() => {
    setFirstLookChecker(false);
    setNavbarFilteringChecker(false);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : (prev) => prev - 1); //currentSlide - 1
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="flex flex-col w-full h-full items-center justify-center ">
      <div className="content-buy w-full flex flex-col">
        <div className="content flex flex-col gap-12 ">
          <h1 className="text-4xl font-bold">
            Featured Offers for {sale === true ? "Sale" : "Rent"}
          </h1>
          <div className="w-full flex justify-between">
            <p className="text-lg w-1/2">
              Fulfill your career dreams, enjoy all the achievements of the city
              center and luxury housing to the fullest.
            </p>
            <div className="flex items-center gap-10">
              <div className="flex gap-5">
                <div
                  onClick={prevSlide}
                  className="w-14 h-10 border border-gray-800/30  text-gray-800 rounded-xl flex justify-center items-center cursor-pointer "
                >
                  <ArrowBackRoundedIcon />
                </div>
                <div
                  onClick={nextSlide}
                  className="w-14 h-10 border border-gray-800/30   text-gray-800 rounded-xl flex justify-center items-center cursor-pointer "
                >
                  <ArrowForwardRoundedIcon />
                </div>
              </div>
              <Link to="/estates">
                <Button showAllOffers={true}>Show all offers</Button>
              </Link>
            </div>
          </div>
          {/* <Slider sale={sale} currentSlide={currentSlide} /> */}
          <ProductCard currentSlide={currentSlide} sale={sale} />
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
