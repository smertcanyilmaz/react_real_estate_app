import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Button = (props) => {
  return (
    <>
      <button
        onClick={props?.onClick ? props?.onClick : ""}
        disabled={props?.disabled ? props.disabled : ""}
        className={`w-32 h-12 rounded-md duration-200 flex gap-2 justify-center items-center bg-gray-800 text-white ${
          props.showAllOffers && " border border-[--blue] text-gray-800 "
          // : " text-gray-100 "
        } ${
          props.post &&
          "border-2 bg-gray-800 border-gray-800  hover:bg-gray-800 duration-200 hover:text-white"
        } 
        
        ${
          props.postAd &&
          "bg-gray-50 text-gray-800 text-sm font-semibold hover:text-gray-800 shadow-lg shadow-gray-500/80 hover:scale-105  active:scale-95 duration-200"
          // : "bg-gray-800 hover:text-gray-800"
        }
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
