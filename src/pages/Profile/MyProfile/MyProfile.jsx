import React, { useEffect } from "react";
import ProfileSideBar from "../../../components/ProfileSideBar/ProfileSideBar";

const MyProfile = () => {
  return (
    <div className="max-w-6xl mt-10 bg-red-500 flex gap-10 ">
      <ProfileSideBar />
      <div>MyProfile</div>
    </div>
  );
};

export default MyProfile;
