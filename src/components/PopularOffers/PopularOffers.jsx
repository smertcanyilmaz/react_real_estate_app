import SliderSection from "./SliderSection/SliderSection";

const PopularOffers = ({ sale, myClass }) => {
  return (
    <>
      <main
        className={`h-[40rem] w-full duration-500 ${
          !sale && "mt-16"
        } ${myClass}`}
      >
        <SliderSection sale={sale} />
      </main>
    </>
  );
};

export default PopularOffers;
