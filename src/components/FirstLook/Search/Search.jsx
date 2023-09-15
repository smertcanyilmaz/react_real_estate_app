import React from "react";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import Button from "../../Button/Button";
import DropDownSearchMenu from "./DropDownSearchMenu/DropDownSearchMenu";

const Search = () => {
  return (
    <div className="w-full flex justify-between gap-3 px-3 py-5 bg-[--light_blue]  rounded-md shadow-sm">
      <div className="flex flex-1  items-center  bg-white  rounded-md border border-gray px-2">
        <PlaceOutlinedIcon fontSize="small" />
        <input
          className="w-full outline-none ml-1 py-3"
          type="text"
          placeholder="Search of location"
        />
      </div>
      <DropDownSearchMenu />
      <Button search="true">Search</Button>
    </div>
  );
};

export default Search;
