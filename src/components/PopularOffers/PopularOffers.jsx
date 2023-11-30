import { forwardRef } from "react";
import SliderSection from "./SliderSection/SliderSection";

const PopularOffers = ({ sale }) => {
  return (
    <>
      <main
        className={`w-full duration-500 flex justify-center items-center 
        }`}
      >
        <SliderSection sale={sale} />
      </main>
    </>
  );
};

export default PopularOffers;
// forwardRef(PopularOffers)
