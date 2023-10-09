import React, { useEffect, useState } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import "./MyProfile.css";
import EditIcon from "@mui/icons-material/Edit";

const MyProfile = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const clickHandler = () => {
    setShowOverlay((prev) => !prev);
  };

  return (
    <>
      <ProfileTemplate>
        <div className="infoo">
          <h1 className="text-lg mb-5">My Profile Informations</h1>
          <div className="name input_box">
            <label htmlFor="name">Name Surname</label>
            <div className="flex items-center gap-3">
              <input type="text" name="name" id="name" disabled />
              <div onClick={clickHandler} className="iconss">
                <EditIcon />
              </div>
            </div>
          </div>
          <div className="email input_box">
            <label htmlFor="email">Email</label>
            <div className="flex items-center gap-3">
              <input type="email" name="email" id="email" disabled />
              <div className="iconss">
                <EditIcon />
              </div>
            </div>
          </div>
          <div className="passowrd input_box">
            <label htmlFor="password">Password</label>
            <div className="flex items-center gap-3">
              <input type="password" name="password" id="password" disabled />
              <div className="iconss">
                <EditIcon />
              </div>
            </div>
          </div>
        </div>
      </ProfileTemplate>

      <div
        className={`absolute top-1/2 left-1/2 transform-translate -translate-x-1/2 w-[25%] h-[40%] bg-gray-50 border border-gray-400 duration-500 shadow-md shadow-gray-500 ${
          showOverlay
            ? "-translate-y-[60%] z-30 opacity-100"
            : "-translate-y-[90%] -z-30 opacity-0 "
        }`}
      >
        <button onClick={clickHandler}>close</button>
      </div>

      <div
        onClick={clickHandler}
        className={`fixed left-0 top-0 w-full h-full bg-black duration-500  ${
          showOverlay ? "visible opacity-60" : "invisible opacity-0"
        }`}
      ></div>
    </>
  );
};

export default MyProfile;
