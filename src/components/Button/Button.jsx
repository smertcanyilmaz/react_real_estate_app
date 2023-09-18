import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Button = (props) => {
  return (
    <>
      <button
        className={`bg-[--blue] text-white w-32 h-12 rounded-md hover:bg-[--hover] duration-200 flex gap-2 justify-center  items-center ${
          props.showAllOffers &&
          "bg-transparent border border-[--blue] text-black hover:bg-[#a8a8a8] "
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
