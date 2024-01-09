import React, { useContext, useEffect, useState } from "react";
import Button from "../../Button/Button";
//import Slider from "./Slider/Slider";
import { useNavigate } from "react-router-dom";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ProductCard from "../../ProductCard/ProductCard";
import { ContextFilter } from "../../../Context/FilterContext";

const SliderSection = ({ sale }) => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const {
    setFirstLookChecker,
    setNavbarFilteringChecker,
    setStatus,
    setFilter,
    setSelectedButtons,
    clearHandler,
  } = useContext(ContextFilter);

  useEffect(() => {
    setFirstLookChecker(false);
    setNavbarFilteringChecker(false);
  }, []);

  const forMobile = window.innerWidth <= 700;

  const prevSlide = () => {
    setCurrentSlide(
      forMobile
        ? currentSlide === 0
          ? 5
          : (prev) => prev - 1
        : currentSlide === 0
        ? 2
        : (prev) => prev - 1
    ); //currentSlide - 1
  };

  const nextSlide = () => {
    setCurrentSlide(
      forMobile
        ? currentSlide === 5
          ? 0
          : (prev) => prev + 1
        : currentSlide === 2
        ? 0
        : (prev) => prev + 1
    );
  };

  const showOffersClickHandler = () => {
    sale ? setStatus("sale") : setStatus("rent");

    clearHandler();
    setFilter("trending");
    setSelectedButtons(0);
    navigate("/estates");
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-center ">
      <div className="content-buy w-full flex flex-col">
        <div className="content flex flex-col gap-12 ">
          <h1 className="text-xl md:text-4xl font-bold text-center md:text-start">
            Featured Offers for {sale === true ? "Sale" : "Rent"}
          </h1>
          <div className="w-full flex justify-between">
            <p className="text-lg w-1/2 hidden md:block">
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
                  className="w-14 h-10 border border-gray-800/30   text-gray-800 rounded-xl flex justify-center items-center cursor-pointer"
                >
                  <ArrowForwardRoundedIcon />
                </div>
              </div>

              <Button onClick={showOffersClickHandler} showAllOffers={true}>
                Show all offers
              </Button>
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
