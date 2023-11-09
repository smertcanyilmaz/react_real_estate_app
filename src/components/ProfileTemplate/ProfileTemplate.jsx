import React from "react";
import ProfileSideBar from "../ProfileSideBar/ProfileSideBar";

const ProfileTemplate = ({ children }) => {
  return (
    // mt-16
    <div className="max-w-6xl mt-20 flex gap-5 bg-[--bg_color]">
      <ProfileSideBar />
      <div className="bg-gray-50 flex-1 flex flex-col mb-10 min-h-[28.8rem]">
        {children}
      </div>
    </div>
  );
};

export default ProfileTemplate;
