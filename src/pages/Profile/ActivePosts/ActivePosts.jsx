import React from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import useUserPosts from "../../../components/hooks/useUserPosts";
import "./ActivePosts.css";
import { useNavigate } from "react-router-dom";

const ActivePosts = () => {
  const navigate = useNavigate();
  const { estateData, loading } = useUserPosts();

  const replacements = [
    //database'e filtreleme için giden kategorileri birleşik olarak yazmıştım. burada onları ayırdım
    { from: "amazingViews", to: "Amazing Views" },
    { from: "tinyHouses", to: "Tiny Houses" },
    { from: "amazingPools", to: "Amazing Pools" },
    { from: "inNature", to: "In Nature" },
  ];

  function formatCategory(category) {
    let formattedCategory = category;
    replacements.forEach((replacement) => {
      formattedCategory = formattedCategory.replace(
        replacement.from,
        replacement.to
      );
    });
    return formattedCategory;
  }

  // className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-3 p-[4.5rem] border border-gray-400/50" burası estate yokken note divinin içinde olmalı
  return (
    <ProfileTemplate>
      <div className="active_posts h-full flex flex-col justify-between gap-3 bg-[--bg_color]">
        <div className="note w-full h-full  bg-gray-50 flex flex-col gap-5 border border-gray-400/50">
          {/* <div className="border-2 border-gray-300 p-2 rounded-full flex items-center justify-center">
            <HomeRoundedIcon fontSize="large" style={{ color: "gray" }} />
          </div>
          <p className="text-gray-600">You have no active post yet</p> */}
          {estateData.map((estate) => (
            <div className="flex w-full max-h-[13rem] p-3 shadow-md shadow-gray-200/50">
              <div key={estate.id} className="w-full h-full flex gap-3">
                <div className="max-w-[14rem] h-full">
                  <img
                    src={estate.image}
                    className="w-[14rem] h-full object-cover"
                  />
                </div>
                <div className="flex-1 h-full flex">
                  <div className="flex-1 h-full flex flex-col justify-between text-sm">
                    <p>
                      <span>Ad Date</span>:{estate?.date}
                    </p>
                    <p className="capitalize">
                      <span>Property Type</span>: {estate?.status}
                    </p>
                    <p>
                      <span>Category</span>: {formatCategory(estate?.category)}
                    </p>
                    <div className="flex gap-1">
                      <p>
                        <span>Bedrooms</span>: {estate?.rooms?.bedrooms},
                      </p>
                      <p>
                        <span>Bathrooms</span>: {estate?.rooms?.bathrooms}
                      </p>
                    </div>
                    {
                      <div className="flex gap-1">
                        <span>Features</span>:
                        {estate?.specials?.length > 3
                          ? estate?.specials
                              .slice(0, 3)
                              .map((special, index) => (
                                <p key={index}>{special}</p>
                              ))
                          : estate?.specials?.map((special, index) => (
                              <p key={index}>{special}</p>
                            ))}
                        {estate?.specials?.length > 3 ? "(...)" : ""}
                      </div>
                    }
                    <p>
                      <span>Price</span>: €{estate?.price}
                    </p>
                    <p>
                      <span>Location</span>: {estate?.place?.district},{" "}
                      {estate?.place?.city},{estate?.place?.country}
                    </p>
                  </div>
                  <div className="flex-2 h-full flex flex-col justify-between gap-3 ">
                    <button
                      onClick={() => navigate(`/estates/${estate.id}`)}
                      className="btn bg-gray-800 "
                    >
                      Go Ad
                    </button>
                    <button className="btn bg-[#f0957e]">Edit Ad</button>
                    <button className="btn bg-gray-500/60">Passive Ad</button>
                    <button className="btn bg-red-600">Delete Ad</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <PostAd />
      </div>
    </ProfileTemplate>
  );
};

export default ActivePosts;
