import React from "react";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";

const ProfileTemplate = ({ children }) => {
  return (
    <div className="max-w-6xl mt-16 flex gap-5 bg-[--bg_color]">
      <ProfileSideBar />
      <div className="bg-gray-50 flex-1 flex flex-col gap-3 border border-gray-400/50 rounded-sm ">
        {children}
      </div>
    </div>
  );
};

export default ProfileTemplate;
