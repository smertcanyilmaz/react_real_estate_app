import SliderSection from "./SliderSection/SliderSection";

const PopularOffers = ({ sale, myClass }) => {
  return (
    <>
      {/* ${
          !sale && "mt-16"
        } */}
      <main
        className={`max-h-[90vh] w-full duration-500 
        } ${myClass}  ${!sale && "mt-[260px]"}`}
      >
        <SliderSection sale={sale} />
      </main>
    </>
  );
};

export default PopularOffers;
