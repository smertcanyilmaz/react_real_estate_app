import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Button = (props) => {
  return (
    <>
      <button className="bg-[--blue] text-white px-4 py-2 rounded-md hover:bg-[--hover] duration-200 flex gap-2 items-center">
        {props.search && (
          <SearchIcon style={{ color: "white" }} fontSize="small" />
        )}
        {props.children}
      </button>
    </>
  );
};

export default Button;
