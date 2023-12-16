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

  useEffect(() => {
    document.body.style.overflow = !toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <>
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0" w-screen h-screen bg-black opacity-80 ${
          toggle ? "hidden" : ""
        }`}
      >
        {/* overlay */}
      </div>
      <div
        className={`absolute md:hidden  top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-2/3 h-1/2 text-center  bg-gray-200 p-3 rounded-md ${
          toggle ? "hidden" : ""
        } `}
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
