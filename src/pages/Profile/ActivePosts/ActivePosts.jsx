import React from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

const ActivePosts = () => {
  return (
    <ProfileTemplate>
      <div className="h-full flex flex-col justify-between gap-5 bg-[--bg_color]">
        <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-3 p-[4.5rem] border border-gray-400/50">
          <div className="border-2 border-gray-300 p-2 rounded-full flex items-center justify-center">
            <HomeRoundedIcon fontSize="large" style={{ color: "gray" }} />
          </div>
          <p className="text-gray-600">You have no active post yet</p>
        </div>
        <PostAd />
      </div>
    </ProfileTemplate>
  );
};

export default ActivePosts;
