import React from "react";

const EstateImages = ({ item, setOpenOverlayEstate }) => {
  return (
    <div className="images w-full max-h-[90vh]  flex gap-3 rounded-lg">
      <div
        className=" flex-1 rounded-l-lg"
        onClick={() => setOpenOverlayEstate(true)}
      >
        <img
          src={item?.images[0]}
          className="object-cover  rounded-l-lg duration-200 hover:brightness-90 hover:cursor-pointer"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 ">
        <div className="w-full flex gap-3 flex-1">
          <div className=" flex-1" onClick={() => setOpenOverlayEstate(true)}>
            <img
              src={item?.images[1]}
              className="object-cover  duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
          <div className="flex-1" onClick={() => setOpenOverlayEstate(true)}>
            <img
              src={item?.images[2]}
              className="object-cover rounded-tr-lg duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-1">
          <div className=" flex-1" onClick={() => setOpenOverlayEstate(true)}>
            <img
              src={item?.images[3]}
              className="object-cover duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
          <div className="flex-1" onClick={() => setOpenOverlayEstate(true)}>
            <img
              src={item?.images[4]}
              className="object-cover  rounded-br-lg duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateImages;
