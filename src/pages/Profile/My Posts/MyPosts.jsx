import React, { useContext, useEffect } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import useUserPosts from "../../../components/hooks/useUserPosts";
import { useNavigate } from "react-router-dom";
import { ContextProfile } from "../../../Context/ProfileContext";
import ProfileProductCard from "../../../components/ProfileProductCard/ProfileProductCard";
import "../Favorites/Favorites.css";
import OtherHousesRoundedIcon from "@mui/icons-material/OtherHousesRounded";

const MyPosts = () => {
  const navigate = useNavigate();
  const { loading } = useUserPosts();
  const { estateDataFilter, estateDataFilter2, favoriteEstates, loadingFav } =
    useContext(ContextProfile);

  useEffect(() => {
    console.log("estateDataFilter in myPost", estateDataFilter);
    console.log("estateDataFilter2 in myPost", estateDataFilter2);
  }, [estateDataFilter, estateDataFilter2]);

  return (
    <ProfileTemplate>
      <div className="favorites h-full flex flex-col justify-between gap-3 bg-[--bg_color] cursor-pointer favorites">
        <div className="flex gap-10 mb-1">
          <div
            onClick={() => navigate("/posts/actives")}
            className="flex-1 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-center justify-between rounded-md bg-gray-50"
          >
            <h1 className="text-lg font-semibold text-gray-700">
              Active Posts
            </h1>
            <p
              className={`text-sm ${
                loading
                  ? "h-[10px] w-3/4 rounded-full bg-gray-200/80 animate-pulse"
                  : ""
              } ${
                estateDataFilter.length > 0
                  ? "text-[#36cf94] font-semibold"
                  : "text-gray-600 font-normal"
              }`}
            >
              {!loading &&
                (estateDataFilter.length === 0
                  ? "No post yet"
                  : estateDataFilter.length === 1
                  ? `You have ${estateDataFilter.length} active post`
                  : `You have ${estateDataFilter.length} active posts`)}
            </p>
          </div>
          <div
            onClick={() => navigate("/posts/pasives")}
            className="flex-1 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-center  justify-between rounded-md bg-gray-50"
          >
            <h1 className="text-lg font-semibold text-gray-700">
              Passive Posts
            </h1>
            <p
              className={`text-sm ${
                loading
                  ? "h-[10px] w-3/4 rounded-full bg-gray-200/80 animate-pulse"
                  : ""
              } ${
                estateDataFilter2.length > 0
                  ? "text-gray-700 font-semibold"
                  : "text-gray-600 font-normal"
              }`}
            >
              {!loading &&
                (estateDataFilter2.length === 0
                  ? "No post yet"
                  : estateDataFilter2.length === 1
                  ? `You have ${estateDataFilter2.length} passive post`
                  : `You have ${estateDataFilter2.length} passive posts`)}
            </p>
          </div>
        </div>

        <div className="free flex-1 pb-3 bg-gray-50 flex flex-col items-center justify-center border border-gray-400/50">
          {favoriteEstates.length === 0 && !loadingFav ? (
            <>
              <div className="border-2 border-gray-300 p-2 rounded-full flex items-center justify-center">
                <OtherHousesRoundedIcon
                  fontSize="large"
                  style={{ color: "gray" }}
                />
              </div>
              <p className="text-gray-600 mt-2">
                You don't have any favorite yet
              </p>
            </>
          ) : (
            <ProfileProductCard post="favorites" myPost={true} />
          )}
        </div>
        <PostAd />
      </div>
    </ProfileTemplate>
  );
};

export default MyPosts;
