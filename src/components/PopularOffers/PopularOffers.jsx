import { forwardRef } from "react";
import SliderSection from "./SliderSection/SliderSection";

const PopularOffers = ({ refStatus, sale }) => {
  return (
    <>
      <main
        className={`h-[100vh] max-w-[70vw] mx-auto duration-500 flex justify-center items-center 
        }`}
        ref={refStatus}
      >
        <SliderSection sale={sale} />
      </main>
    </>
  );
};

export default forwardRef(PopularOffers);
