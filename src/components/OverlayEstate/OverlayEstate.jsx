import React, { useEffect, useState } from "react";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const OverlayEstate = ({
  setOpenOverlayEstate,
  estates,
  imagesIndex,
  item,
}) => {
  //   const temp = estates.filter(
  //     (estate) => estate.title === "Apartment Monolith"
  //   );

  const imagesDatas = item.images;
  console.log(imagesDatas);

  const images = imagesDatas.flatMap((t) => t);

  console.log(images);

  const [count, setCount] = useState(imagesIndex);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(true);

  const nextHandler = () => {
    if (count < images.length - 1) {
      setCount(count + 1);
      setShowLeftArrow(true);
      if (count + 2 === images.length) {
        setShowRightArrow(false);
      }
    }
  };

  const prevHandler = () => {
    if (count > 0) {
      setCount(count - 1);
      setShowRightArrow(true);
      if (count - 1 === 0) {
        setShowLeftArrow(false);
      }
    }
  };

  useEffect(() => {
    if (count === 0) {
      setShowLeftArrow(false);
    } else if (count === images.length - 1) {
      setShowRightArrow(false);
    } else {
      setShowLeftArrow(true);
      setShowRightArrow(true);
    }
  }, [count, images.length]);

  return (
    <div className="overlayEstate absolute top-0 left-0 w-full h-full p-12 bg-black z-30 text-gray-200">
      <div className=" flex items-center justify-between ">
        <div
          className="w-24 p-2 text-gray-200 hover:bg-gray-800 hover:border-black rounded-lg flex items-center gap-2 cursor-pointer"
          onClick={() => setOpenOverlayEstate(false)}
        >
          <CloseOutlinedIcon /> Close
        </div>
        <div className="text-lg tracking-wider">
          {count + 1}/{images.length}
        </div>
        <div></div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <div
          onClick={prevHandler}
          className={`w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer ${
            !showLeftArrow && "opacity-0"
          }`}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </div>
        <div className="max-w-4xl h-[75vh] flex-1 ">
          <img src={images[count]} alt="" />
        </div>

        <div
          onClick={nextHandler}
          className={`w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer ${
            !showRightArrow && "opacity-0"
          }`}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
};

export default OverlayEstate;
