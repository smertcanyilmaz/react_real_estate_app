import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DropDown from "./DropDown/DropDown";

const PostType = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const clickDown1 = () => {
    setShowDropDown((prev) => !prev);
    setShowDropDown2(false);
  };
  const clickDown2 = () => {
    setShowDropDown2((prev) => !prev);
    setShowDropDown(false);
  };

  const closeSelectedHandler = () => {
    setSelectedProperty(false);
    setSelectedCategory(false);
  };

  return (
    <div className="bg-gray-50 p-5 flex flex-col gap-5">
      <h1 className="text-lg font-semibold text-gray-800">Ad Category</h1>
      <div className="flex gap-10">
        <div className="flex flex-col gap-3 relative">
          <h2 className="">
            Property Type <span className="text-red-500">*</span>
          </h2>
          <div
            onClick={clickDown1}
            className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer"
          >
            <div className="flex-1 ">{selectedProperty}</div>
            <DropDown
              property="property"
              showDropDown={showDropDown}
              setSelectedProperty={setSelectedProperty}
              setShowDropDown={setShowDropDown}
            />
          </div>
        </div>
        <div
          className={`h-[4.5rem] flex items-end justify-center duration-300 ${
            selectedProperty ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-8 h-8 bg-gray-50 border-2 border-gray-500/30 flex items-center justify-center rounded-full ">
            <ArrowForwardIcon style={{ color: "var(--bg_color)" }} />
          </div>
        </div>
        <div
          className={`flex flex-col gap-3 relative duration-300 ${
            selectedProperty ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2>
            Category <span className="text-red-500">*</span>
          </h2>
          <div className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer relative">
            <div
              onClick={clickDown2}
              className="flex-1 h-full bg-gray-50 flex items-center"
            >
              {selectedCategory}
            </div>
            <div
              onClick={() => closeSelectedHandler()}
              className="w-5 h-5  bg-gray-300/80 flex items-center justify-center rounded-full cursor-pointer z-30"
            >
              <CloseRoundedIcon
                style={{
                  width: "14px",
                  height: "14px",
                  color: "rgb(249 250 251)",
                }}
              />
            </div>
          </div>
          <DropDown
            category="category"
            showDropDown2={showDropDown2}
            setSelectedCategory={setSelectedCategory}
            setShowDropDown2={setShowDropDown2}
          />
        </div>
      </div>
    </div>
  );
};

export default PostType;
