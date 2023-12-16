import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import { useContext, useEffect, useState } from "react";
import Advantages from "../../components/Advantages/Advantages";
import HomePremium from "../../components/HomePremium/HomePremium";
import HomeBrands from "../../components/HomeBrands/HomeBrands";
import { ContextFilter } from "../../Context/FilterContext";
import EngineeringIcon from "@mui/icons-material/Engineering";

const Home = ({ setUnAuthNavbar }) => {
  const { setShowDropDown } = useContext(ContextFilter);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setUnAuthNavbar(false); // anasayfanın navbar'ı her zaman unAuth durumunu koruması için burada false olması lazım
  }, []);

  const closeDropDown = () => {
    setShowDropDown(false);
  };

  const [toggle, setToggle] = useState(false);

  // ${
  //   toggle ? "hidden" : "sm:fixed sm:top-0"
  // }

  return (
    <>
      <div
        className={`w-screen h-screen md:hidden bg-black opacity-90   ${
          toggle ? "sm:hidden" : "sm:fixed sm:top-0 sm:left-0"
        }`}
      ></div>
      <div
        className={` md:hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18rem] h-1/2 bg-gray-200 p-3 rounded-md  ${
          toggle ? "sm:hidden" : "sm:absolute"
        }`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-10">
          <div className="w-full flex flex-col items-center gap-5 ">
            <EngineeringIcon fontSize="large" />
            <h3 className="capitalize font-semibold text-gray-800">
              mobile design is being developed
            </h3>
            <p className="text-sm">Please continue on your computer</p>
          </div>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="capitalize w-2/3 h-1/5  bg-gray-800 text-gray-100 rounded-md text-sm "
          >
            go ahead anyway
          </button>
        </div>
      </div>
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
    </>
  );
};

export default Home;
