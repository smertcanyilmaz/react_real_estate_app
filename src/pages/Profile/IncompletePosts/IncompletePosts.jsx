import React from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import OtherHousesRoundedIcon from "@mui/icons-material/OtherHousesRounded";

const IncompletePosts = () => {
  return (
    <ProfileTemplate>
      <div className="h-full flex flex-col justify-between gap-5 bg-[--bg_color]">
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-3 p-[4.5rem] border border-gray-400/50">
          <div className="border-2 border-gray-300 p-2 rounded-full flex items-center justify-center">
            <OtherHousesRoundedIcon
              fontSize="large"
              style={{ color: "gray" }}
            />
          </div>
          <p className="text-gray-600">You have no incomplete post yet</p>
        </div>
        <PostAd />
      </div>
    </ProfileTemplate>
  );
};

export default IncompletePosts;
