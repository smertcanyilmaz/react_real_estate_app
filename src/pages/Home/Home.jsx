import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import { useContext, useEffect } from "react";
import Advantages from "../../components/Advantages/Advantages";
import HomePremium from "../../components/HomePremium/HomePremium";
import { useLocation } from "react-router-dom";
import HomeBrands from "../../components/HomeBrands/HomeBrands";
import { ContextFilter } from "../../Context/FilterContext";

const Home = ({ setUnAuthNavbar }) => {
  const { setShowDropDown } = useContext(ContextFilter);

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
      <PopularOffers sale={true} />
      <PopularOffers sale={false} />
      <HomeBrands />
    </div>
  );
};

export default Home;
