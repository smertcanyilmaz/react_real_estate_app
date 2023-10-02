import React from "react";

const EstateImages = ({ item }) => {
  return (
    <div className="images w-full h-[50vh] flex gap-3 rounded-lg">
      <div className=" flex-1 rounded-l-lg">
        <img
          src={item?.images[0]}
          className="object-cover h-full rounded-l-lg duration-200 hover:brightness-75 hover:cursor-pointer"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 ">
        <div className="w-full flex gap-3 flex-1">
          <div className=" flex-1">
            <img
              src={item?.images[1]}
              className="object-cover h-full rounded-l-lg duration-200 hover:brightness-75 hover:cursor-pointer"
            />
          </div>
          <div className="flex-1">
            <img
              src={item?.images[2]}
              className="object-cover h-full rounded-l-lg duration-200 hover:brightness-75 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-1">
          <div className=" flex-1">
            <img
              src={item?.images[3]}
              className="object-cover h-full rounded-l-lg duration-200 hover:brightness-75 hover:cursor-pointer"
            />
          </div>
          <div className="flex-1">
            <img
              src={item?.images[4]}
              className="object-cover h-full rounded-l-lg duration-200 hover:brightness-75 hover:cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateImages;
