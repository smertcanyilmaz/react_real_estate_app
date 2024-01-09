import React, { useContext } from "react";
import { PostContext } from "../../Context/CreatePostContext";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const PreviewaProductCard = () => {
  const { sum, previewImages } = useContext(PostContext);

  return (
    <div className="flex-1 flex flex-col items-center justify-between">
      <div className="flex flex-col md:min-w-[20rem] md:h-[20rem] bg-gray-50 rounded-2xl relative mt-3 mb-3 md:mb-0 md:mt-12">
        <img
          className="w-full h-[12rem] object-cover rounded-t-2xl"
          src={previewImages[0]}
        />
        <div className="px-4 py-2 w-full h-full space-y-2 relative flex flex-col ">
          <p className="capitalize font-bold text-lg">{sum?.title}</p>
          <p className="text-[--blue] font-bold">€{sum?.price}</p>
          <p className="text-sm">{sum?.place?.city}</p>
        </div>
        <div className="absolute top-2 right-3 text-gray-50 opacity-90 z-10 hover:opacity-100 hover:text-white">
          <FavoriteRoundedIcon />
        </div>
      </div>
      <p className="text-xs md:text-sm text-gray-700/60 font-semibold">
        This is estate ad card that will be seen by customers
      </p>
    </div>
  );
};

export default PreviewaProductCard;
