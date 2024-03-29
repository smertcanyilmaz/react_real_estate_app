import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Button = (props) => {
  return (
    <>
      <button
        onClick={props?.onClick && props?.onClick}
        disabled={props?.disabled && props?.disabled}
        className={`w-32 h-12 rounded-md duration-200 flex gap-2 justify-center items-center ${
          props.showAllOffers &&
          "border border-[--blue] text-gray-100 bg-gray-800 text-sm md:text-base w-20 h-10 md:w-32 md:h-12 mt-5 md:mt-0"
        } ${
          props.postNav &&
          "border-2 bg-gray-800 border-gray-800  hover:bg-gray-800 duration-200 text-white"
        } 
        
        ${
          props.postAd &&
          "bg-gray-50 text-gray-800 text-sm font-semibold hover:text-gray-800 shadow-lg shadow-gray-500/80 hover:scale-105  active:scale-95 duration-200 "
        }
        ${props.popup && "bg-gray-800 text-gray-100"}
        `}
      >
        {props.search && (
          <SearchIcon style={{ color: "white" }} fontSize="small" />
        )}

        {props.children}
      </button>
    </>
  );
};

export default Button;
