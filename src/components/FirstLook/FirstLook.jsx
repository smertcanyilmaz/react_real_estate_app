import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FirstLookDropDown from "../FirstLookDropDown/FirstLookDropDown";
import { useContext, useEffect } from "react";
import { ContextFilter } from "../../Context/FilterContext";

const FirstLook = () => {
  const { setInputValue, showDropDown, setShowDropDown } =
    useContext(ContextFilter);

  return (
    <div className="max-w-6xl h-[90vh] flex flex-col gap-[10rem] ">
      <div className="w-[50%] flex flex-col gap-5 mt-[10rem]">
        <h1 className="text-4xl font-bold leading-snug">
          Modern Living For Everyone
        </h1>
        <p className="text-justify leading-normal w-[95%]">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in all Europe more than 15 years.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-[40rem] h-20 flex bg-gray-100/60 rounded-lg p-2 ">
          <input
            type="text"
            className="w-full h-full outline-none pl-5 bg-transparent text-lg"
            placeholder="Istanbul, Amsterdam, Rome, etc.."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="w-28 h-full">
            <SearchRoundedIcon
              style={{ width: "1.8rem", height: "1.8rem", color: "gray" }}
            />
          </button>
        </div>
        {showDropDown && <FirstLookDropDown />}
      </div>
      <img
        src="images/first_look.png"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
    </div>
  );
};

export default FirstLook;
