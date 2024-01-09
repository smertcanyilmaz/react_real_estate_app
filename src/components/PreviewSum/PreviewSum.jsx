import React, { useContext } from "react";
import { PostContext } from "../../Context/CreatePostContext";
import "./PreviewSum.css";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const PreviewSum = () => {
  const { sum } = useContext(PostContext);

  const replacements = [
    //database'e filtreleme için giden kategorileri birleşik olarak yazmıştım. burada onları ayırdım
    { from: "amazingViews", to: "Amazing Views" },
    { from: "tinyHouses", to: "Tiny Houses" },
    { from: "amazingPools", to: "Amazing Pools" },
    { from: "inNature", to: "In Nature" },
  ];

  function formatCategory(category) {
    let formattedCategory = category;
    replacements?.forEach((replacement) => {
      formattedCategory = formattedCategory?.replace(
        replacement.from,
        replacement.to
      );
    });
    return formattedCategory;
  }

  return (
    <div className=" w-[95%] mx-auto md:mx-0 md:w-[50%] bg-gray-50 rounded-[4px] border border-gray-400/50 flex flex-col gap-5 p-5 text-gray-800">
      <div className="w-full flex justify-between items-center">
        <p className="capitalize font-semibold md:text-lg">{sum?.title}</p>
        <p className="font-semibold md:text-lg">€{sum?.price}</p>
      </div>

      <div className="flex items-center md:items-start gap-2 text-xs md:text-base">
        <PlaceOutlinedIcon
          fontSize={window.innerWidth <= 640 ? "small" : "medium"}
        />
        {/* <p>{sum?.place?.district},</p> */}
        <p>{sum?.place?.city},</p>
        <p>{sum?.place?.country}</p>
      </div>

      <div className="w-full flex flex-col gap-3">
        <p className="font-semibold">Ad Informations</p>
        <div className="w-full flex flex-col">
          <div className="ad_infos bg-gray-100">
            <p>Date</p>
            <p className="ad_infos_res">{sum?.date}</p>
          </div>
          <div className="ad_infos">
            <p>Property Type</p>
            <p className="ad_infos_res">{sum?.status}</p>
          </div>
          <div className="ad_infos bg-gray-100">
            <p>Category</p>
            <p className="ad_infos_res">{formatCategory(sum?.category)}</p>
          </div>
          <div className="ad_infos">
            <p>Bedrooms</p>
            <p className="ad_infos_res">{sum?.rooms?.bedrooms}</p>
          </div>
          <div className="ad_infos bg-gray-100">
            <p>Bathrooms</p>
            <p className="ad_infos_res">{sum?.rooms?.bathrooms}</p>
          </div>
        </div>
        <div className="w-full space-y-3">
          <p className="font-semibold">Features</p>
          <div className="grid grid-cols-3 gap-2">
            {sum?.specials?.map((special, index) => (
              <div key={index} className="flex gap-1 text-xs md:text-sm">
                <CheckOutlinedIcon fontSize="small" />
                <p>{special}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSum;
