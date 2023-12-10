import React, { useEffect } from "react";

const EstateImages = ({
  item,
  setOpenOverlayEstate,
  openOverlayEstate,
  setImagesIndex,
}) => {
  const clickHandler = (index) => {
    setOpenOverlayEstate(true);
    setImagesIndex(index);
  };

  useEffect(() => {
    document.body.style.overflow = openOverlayEstate ? "hidden" : "auto";
  }, [openOverlayEstate]);

  return (
    <div className="images w-full max-h-[40rem] flex gap-2 rounded-lg">
      <div
        className=" flex-1 rounded-l-lg max-h-[26rem]"
        onClick={() => clickHandler(0)}
      >
        <img
          src={item?.images[0]}
          className="object-cover w-full h-full rounded-l-lg duration-200 hover:brightness-90 hover:cursor-pointer"
        />
      </div>
      <div className="flex-1 flex flex-col gap-2 ">
        <div className="w-full flex gap-2 flex-1">
          <div
            className=" flex-1 max-h-[13rem]"
            onClick={() => clickHandler(1)}
          >
            <img
              src={item?.images[1]}
              className="object-cover w-full h-full duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
          <div className="flex-1 max-h-[13rem]" onClick={() => clickHandler(2)}>
            <img
              src={item?.images[2]}
              className="object-cover w-full h-full rounded-tr-lg duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-2 flex-1">
          <div
            className=" flex-1 max-h-[13rem]"
            onClick={() => clickHandler(3)}
          >
            <img
              src={item?.images[3]}
              className="object-cover w-full h-full duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
          <div className="flex-1 max-h-[13rem]" onClick={() => clickHandler(4)}>
            <img
              src={item?.images[4]}
              className="object-cover w-full h-full rounded-br-lg duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateImages;
