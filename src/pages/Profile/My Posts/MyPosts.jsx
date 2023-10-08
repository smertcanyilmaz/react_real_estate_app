import React, { useEffect } from "react";
import ProfileSideBar from "../../../components/ProfileSideBar/ProfileSideBar";

const MyPosts = () => {
  return (
    <div className="max-w-6xl mt-10 bg-red-500 flex gap-10">
      <ProfileSideBar />
      MyPosts
    </div>
  );
};

export default MyPosts;
