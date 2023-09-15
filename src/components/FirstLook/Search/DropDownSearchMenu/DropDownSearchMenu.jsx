import React, { useState } from "react";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const DropDownSearchMenu = () => {
  const [arrowVisible, setArrowVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const arrowVisibleHandler = () => {
    setArrowVisible((prev) => !prev);
  };

  const selectedOptionHandler = (option) => {
    setSelectedOption(option);
    setArrowVisible(false);
  };

  return (
    <div className="relative flex-1 flex flex-col">
      <div className="flex flex-1 justify-between  items-center  bg-white  rounded-md border border-gray px-2">
        <div className="">
          <MapsHomeWorkOutlinedIcon fontSize="small" />
        </div>
        <input
          type="text"
          readOnly
          placeholder="Buy or Rent"
          value={selectedOption}
          className="outline-none pl-2 w-full "
        />
        <div className="cursor-pointer relative" onClick={arrowVisibleHandler}>
          {!arrowVisible ? (
            <div className="absolute right-0 -top-3">
              <KeyboardArrowDownIcon fontSize="small" />
            </div>
          ) : (
            <div className="absolute right-0 -top-3">
              <KeyboardArrowUpIcon fontSize="small" />
            </div>
          )}
        </div>
      </div>
      {arrowVisible && (
        <div className="absolute -bottom-[75px] flex flex-col bg-white w-full rounded-md">
          <div
            className="border-b-2 border-gray-100 py-1 px-[38px]  cursor-pointer"
            onClick={() => selectedOptionHandler("Buy")}
          >
            Buy
          </div>
          <div
            className="py-1 px-[38px] cursor-pointer"
            onClick={() => selectedOptionHandler("Rent")}
          >
            Rent
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDownSearchMenu;
