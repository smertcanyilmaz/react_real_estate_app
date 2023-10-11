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
    document.body.style.overflow = openOverlayEstate ? "hidden" : "auto"; // TODO:scrollbar hidden yerine transparent olması için alternatif ara
  }, [openOverlayEstate]);

  return (
    <div className="images w-full max-h-[90vh]  flex gap-3 rounded-lg">
      <div className=" flex-1 rounded-l-lg" onClick={() => clickHandler(0)}>
        <img
          src={item?.images[0]}
          className="object-cover h-full rounded-l-lg duration-200 hover:brightness-90 hover:cursor-pointer"
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 ">
        <div className="w-full flex gap-3 flex-1">
          <div className=" flex-1" onClick={() => clickHandler(1)}>
            <img
              src={item?.images[1]}
              className="object-cover  duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
          <div className="flex-1" onClick={() => clickHandler(2)}>
            <img
              src={item?.images[2]}
              className="object-cover rounded-tr-lg duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex gap-3 flex-1">
          <div className=" flex-1" onClick={() => clickHandler(3)}>
            <img
              src={item?.images[3]}
              className="object-cover duration-200 hover:brightness-90 hover:cursor-pointer"
            />
          </div>
          <div className="flex-1" onClick={() => clickHandler(4)}>
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
