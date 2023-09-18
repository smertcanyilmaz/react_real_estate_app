import React from "react";
import Button from "../../Button/Button";
import Slider from "./Slider/Slider";
import useFetch from "../../hooks/useFetch";

const SliderSection = ({ sale }) => {
  const { estates } = useFetch();

  return (
    <div className="flex flex-col w-full  p-20">
      <div className="content-buy w-full flex flex-col">
        {/* TODO:SLİDER SECTİON BURADAN BAŞLIYOR ŞİMDİLİK W-FULL AMA DURUMA GÖRE
          İKİYE BÖL */}
        <div className="content flex flex-col gap-8 ">
          <h1 className="text-3xl font-bold">
            Popular Offers for {sale === true ? "Sale" : "Rent"}
          </h1>
          <div className="flex justify-between">
            <p className="text-lg w-1/2">
              Fulfill your career dreams, enjoy all the achievements of the city
              center and luxury housing to the fullest.
            </p>
            <Button showAllOffers={true}>Show all offers</Button>
          </div>
          <Slider sale={sale} />
        </div>
      </div>
      <div className="content-rent"></div>
    </div>
  );
};

export default SliderSection;
