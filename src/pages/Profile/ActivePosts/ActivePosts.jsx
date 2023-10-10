import React from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";

const ActivePosts = () => {
  return (
    <ProfileTemplate>
      <div className="flex flex-col gap-5 bg-[--bg_color]">
        active posts <PostAd />
      </div>
    </ProfileTemplate>
  );
};

export default ActivePosts;
