import React, { useContext, useEffect, useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DropDown from "./DropDown/DropDown";
import { PostContext } from "../../../Context/CreatePostContext";

const PostType = ({ selectedCategory, setSelectedCategory }) => {
  const { setSum } = useContext(PostContext);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showDropDown2, setShowDropDown2] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

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

  useEffect(() => {
    setSum((prevSum) => ({
      ...prevSum,
      status: selectedProperty?.value,
      category: selectedCategory?.value,
    }));
  }, [selectedProperty, selectedCategory]);

  const forMobile = window.innerWidth <= 640;

  return (
    <div className="bg-gray-50 p-5 flex flex-col gap-5 rounded-[4px] border border-gray-400/50 ">
      <h1 className="text-sm md:text-lg font-semibold text-gray-800">
        Ad Category
      </h1>
      <div className="flex justify-between md:justify-start md:gap-10">
        <div className="flex flex-col gap-2 relative">
          <h2 className="text-[0.7rem] md:text-sm font-semibold">
            Property Type <span className="text-red-500">*</span>
          </h2>
          <div
            onClick={clickDown1}
            className="w-32 h-8 md:w-60 md:h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer "
          >
            <div className="flex-1 ">{selectedProperty?.label}</div>
            <DropDown
              property="property"
              showDropDown={showDropDown}
              setSelectedProperty={setSelectedProperty}
              setShowDropDown={setShowDropDown}
            />
          </div>
        </div>
        <div
          className={`h-[3.3rem] md:h-[4rem] flex items-end justify-center duration-500 ${
            selectedProperty ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="md:w-8 md:h-8 bg-gray-50 border-2 border-gray-500/30 flex items-center justify-center rounded-full  ">
            <ArrowForwardIcon
              style={{
                color: "var(--bg_color)",
                width: forMobile && "1rem",
                height: forMobile && "1rem",
              }}
            />
          </div>
        </div>
        <div
          className={`flex flex-col gap-2 relative duration-500 ${
            selectedProperty ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-[0.7rem] md:text-sm font-semibold">
            Category <span className="text-red-500">*</span>
          </h2>
          <div className="w-32 h-8 md:w-60 md:h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer relative ">
            <div
              onClick={clickDown2}
              className="flex-1 h-full bg-gray-50 flex items-center"
            >
              {selectedCategory?.label}
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
