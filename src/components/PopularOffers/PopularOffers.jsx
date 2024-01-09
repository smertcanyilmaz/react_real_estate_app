import SliderSection from "./SliderSection/SliderSection";

const PopularOffers = ({ sale }) => {
  return (
    <>
      <main
        className={`w-[75%] mx-auto md:mx-0 md:w-full duration-500 flex justify-center items-center 
        }`}
      >
        <SliderSection sale={sale} />
      </main>
    </>
  );
};

export default PopularOffers;
