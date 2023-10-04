import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Button = (props) => {
  return (
    <>
      <button
        className={`bg-gray-800  w-32 h-12 rounded-md hover:text-white duration-200 flex gap-2 justify-center  items-center ${
          props.showAllOffers
            ? "bg-transparent border border-[--blue] text-gray-800 hover:bg-gray-800 "
            : " text-gray-100 "
        } ${
          props.post &&
          "border-2 bg-bg-gray-800 border-gray-800 text-gray-800 hover:bg-gray-800 duration-200"
        }`}
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
