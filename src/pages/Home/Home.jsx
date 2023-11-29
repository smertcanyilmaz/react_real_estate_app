import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import PopularOffersButton from "../../components/FirstLook/PopularOffersButton/PopularOffersButton";
import { useContext, useEffect, useRef, useState } from "react";
import Advantages from "../../components/Advantages/Advantages";
import HomePremium from "../../components/HomePremium/HomePremium";
import { useLocation } from "react-router-dom";
import HomeBrands from "../../components/HomeBrands/HomeBrands";
import Footer from "../../components/Footer/Footer";
import { ContextFilter } from "../../Context/FilterContext";

const Home = ({ ref0, setUnAuthNavbar }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const [refStatus, setRefStatus] = useState(ref1);
  const [start, setStart] = useState(true);
  const { setShowDropDown } = useContext(ContextFilter);

  const handleButtonClick = () => {
    if (refStatus === ref1) {
      ref1.current?.scrollIntoView({ behavior: "smooth" });
      setRefStatus(ref2);
    } else if (refStatus === ref2) {
      ref2.current?.scrollIntoView({ behavior: "smooth" });
      setRefStatus(ref1);
    }
    setStart(false);
  };

  const handleGoTop = () => {
    ref0.current?.scrollIntoView({ behavior: "smooth" });
    setStart(true);
    setRefStatus(ref1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setUnAuthNavbar(false); // anasayfanın navbar'ı her zaman unAuth durumunu koruması için burada false olması lazım
  }, []);

  const location = useLocation();
  console.log(location, "LOCATİON");

  const closeDropDown = () => {
    setShowDropDown(false);
  };

  return (
    <div
      onClick={closeDropDown}
      className="w-full mx-auto flex flex-col gap-40"
    >
      <FirstLook />
      <Advantages />
      <HomePremium />
      <PopularOffers sale={true} refStatus={ref1} />
      {/* <PopularOffersButton
        handleButtonClick={handleButtonClick}
        handleGoTop={handleGoTop}
        start={start}
        ref1={ref1}
        refStatus={refStatus}
      /> */}
      <HomeBrands />
      <PopularOffers sale={false} refStatus={ref2} />
    </div>
  );
};

export default Home;
