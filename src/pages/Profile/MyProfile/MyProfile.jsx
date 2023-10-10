import React, { useState } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import "./MyProfile.css";
import EditIcon from "@mui/icons-material/Edit";
import ProfilePopup from "../../../components/ProfilePopup/ProfilePopup";

const MyProfile = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [edit, setEdit] = useState(null);

  const clickHandler = (index) => {
    setShowOverlay((prev) => !prev);
    setEdit(index);
  };

  return (
    <>
      <ProfileTemplate>
        <div className="infoo">
          <h1 className="text-xl font-semibold text-gray-700 mb-5">
            My Profile Informations
          </h1>
          <div className="name input_box">
            <label htmlFor="name">Name Surname</label>
            <div className="flex items-center gap-3">
              <input type="text" name="name" id="name" disabled />
              <div onClick={() => clickHandler(1)} className="iconss">
                <EditIcon />
              </div>
            </div>
          </div>
          <div className="email input_box">
            <label htmlFor="email">Email</label>
            <div className="flex items-center gap-3">
              <input type="email" name="email" id="email" disabled />
              <div onClick={() => clickHandler(2)} className="iconss">
                <EditIcon />
              </div>
            </div>
          </div>
          <div className="passowrd input_box">
            <label htmlFor="password">Password</label>
            <div className="flex items-center gap-3">
              <input type="password" name="password" id="password" disabled />
              <div onClick={() => clickHandler(3)} className="iconss">
                <EditIcon />
              </div>
            </div>
          </div>
        </div>
      </ProfileTemplate>
      <ProfilePopup
        clickHandler={clickHandler}
        showOverlay={showOverlay}
        edit={edit}
      />

      <div //overlay
        onClick={clickHandler}
        className={`fixed left-0 top-0 w-full h-full bg-black duration-300  ${
          showOverlay ? "visible opacity-60" : "invisible opacity-0"
        }`}
      ></div>
    </>
  );
};

export default MyProfile;
