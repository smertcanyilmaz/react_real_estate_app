import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import { useContext, useEffect } from "react";
import Advantages from "../../components/Advantages/Advantages";
import HomePremium from "../../components/HomePremium/HomePremium";
import HomeBrands from "../../components/HomeBrands/HomeBrands";
import { ContextFilter } from "../../Context/FilterContext";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CloseIcon from "@mui/icons-material/Close";

const Home = ({ setUnAuthNavbar }) => {
  const { setShowDropDown } = useContext(ContextFilter);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setUnAuthNavbar(false); // anasayfanın navbar'ı her zaman unAuth durumunu koruması için burada false olması lazım
  }, []);

  const closeDropDown = () => {
    setShowDropDown(false);
  };

  return (
    <div
      onClick={closeDropDown}
      className="w-full mx-auto sm:hidden md:flex flex-col gap-40"
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
