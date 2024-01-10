import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FirstLookDropDown from "../FirstLookDropDown/FirstLookDropDown";
import { useContext } from "react";
import { ContextFilter } from "../../Context/FilterContext";

const FirstLook = () => {
  const { setInputValue, showDropDown } = useContext(ContextFilter);

  const forMobile = window.innerWidth > 700;

  return (
    <div className="md:max-w-6xl h-[30vh] md:h-[90vh] flex flex-col gap-16 md:justify-normal md:gap-[10rem]">
      <div className="md:w-[50%] flex flex-col items-center justify-center md:items-start md:justify-normal gap-5 mt-10 md:mt-[10rem] ">
        <h1 className="text-xl md:text-4xl font-bold leading-snug">
          Modern Living For Everyone
        </h1>
        <p className="hidden md:block text-base text-justify leading-normal md:w-[95%]">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in all Europe more than 15 years.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-[90%] mx-auto md:mx-0 md:w-[40rem] h-16 flex bg-gray-100 md:bg-gray-100/60 rounded-lg p-2 ">
          <input
            type="text"
            className="w-full h-full outline-none pl-5 bg-transparent md:text-lg"
            placeholder="Istanbul, Sicily, Porto, etc.."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="w-20 md:w-28 h-full">
            <SearchRoundedIcon
              style={{
                width: forMobile ? "1.8rem" : "1.5rem",
                height: forMobile ? "1.8rem" : "1.5rem",
                color: "gray",
              }}
            />
          </button>
        </div>
        {showDropDown && <FirstLookDropDown />}
      </div>
      <img
        src="images/first_look.png"
        className="hidden md:block w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
    </div>
  );
};

export default FirstLook;
