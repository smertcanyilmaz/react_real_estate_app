import React from "react";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";

const ProfileTemplate = ({ children }) => {
  return (
    <div className="max-w-6xl mt-16 flex gap-5 bg-[--bg_color]">
      <ProfileSideBar />
      <div className="bg-gray-50 flex-1 flex flex-col">{children}</div>
    </div>
  );
};

export default ProfileTemplate;