import { useSelector } from "react-redux";
import SliderSection from "./SliderSection/SliderSection";

const PopularOffers = () => {
  const popularOffersVisible = useSelector(
    (state) => state.popularOffersVisible.visible
  );

  return (
    <div
      className={`h-[40rem] w-full duration-1000  ${
        popularOffersVisible ? "-translate-y-[130%] " : "translate-y-0"
      }`}
    >
      <SliderSection />
    </div>
  );
};

export default PopularOffers;
