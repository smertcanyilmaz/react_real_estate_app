import React from "react";
import Button from "../../Button/Button";
import Slider from "./Slider/Slider";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom";

const SliderSection = ({ sale }) => {
  const { estates } = useFetch();
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate("/estates");
  };

  return (
    <div className="flex flex-col w-full  items-center justify-center ">
      <div className="content-buy w-full flex flex-col">
        <div className="content flex flex-col gap-8 ">
          <h1 className="text-3xl font-bold">
            Popular Offers for {sale === true ? "Sale" : "Rent"}
          </h1>
          <div className="flex justify-between">
            <p className="text-lg w-1/2">
              Fulfill your career dreams, enjoy all the achievements of the city
              center and luxury housing to the fullest.
            </p>
            {/* <Link to="/estates">
              <Button showAllOffers={true}>Show all offers</Button>
            </Link> */}
            <div onClick={() => buttonHandler()}>
              <Button showAllOffers={true}>Show all offers</Button>
            </div>
          </div>
          <Slider sale={sale} />
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
