import React, { useContext, useState } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import "./MyProfile.css";
import EditIcon from "@mui/icons-material/Edit";
import ProfilePopup from "../../../components/ProfilePopup/ProfilePopup";
import { Context } from "../../../Context/AuthContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { Slide, ToastContainer } from "react-toastify";

const MyProfile = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [edit, setEdit] = useState(null);
  const { userActive, userActiveUid } = useContext(Context);
  const [isPasswordCheck, setIsPasswordCheck] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);

  const clickHandler = (index) => {
    setShowOverlay((prev) => !prev);
    setEdit(index);
    setIsPasswordCheck(false);
    setNewPassword("");
    setPasswordCheck("");
    setWrongPassword(false);
  };

  return (
    <>
      <ProfileTemplate>
        {userActive && (
          <div className="info_container">
            <div className="w-full flex justify-between">
              <h1 className="text-xl font-semibold text-gray-700 mb-5">
                My Profile Informations
              </h1>
              {userActive.subscribe && (
                <div className="font-semibold flex justify-center gap-1 text-xl">
                  <h1>Membership</h1>
                  <span className="font-bold">
                    <AddRoundedIcon sx={{ color: "rgb(59 130 246)" }} />
                  </span>
                </div>
              )}
            </div>
            <div className="name input_box">
              <label htmlFor="name">Name Surname</label>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  name="name"
                  id="name"
                  disabled
                  value={userActive?.firstName + " " + userActive?.lastName}
                  className="capitalize"
                />
                <div onClick={() => clickHandler(1)} className="iconss">
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="email input_box">
              <label htmlFor="email">Email</label>
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  disabled
                  value={userActive?.email}
                />
                <div onClick={() => clickHandler(2)} className="iconss">
                  <EditIcon />
                </div>
              </div>
            </div>
            <div className="passowrd input_box">
              <label htmlFor="password">Password</label>
              <div className="flex items-center gap-3">
                <input
                  type="password"
                  name="password"
                  id="password"
                  disabled
                  value={userActive?.password}
                />
                <div onClick={() => clickHandler(3)} className="iconss">
                  <EditIcon />
                </div>
              </div>
            </div>
          </div>
        )}
      </ProfileTemplate>

      <ProfilePopup
        clickHandler={clickHandler}
        showOverlay={showOverlay}
        edit={edit}
        isPasswordCheck={isPasswordCheck}
        setIsPasswordCheck={setIsPasswordCheck}
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        passwordCheck={passwordCheck}
        setPasswordCheck={setPasswordCheck}
        wrongPassword={wrongPassword}
        setWrongPassword={setWrongPassword}
      />

      <div //overlay
        onClick={() =>
          clickHandler(
            (edit === 1 && 1) || (edit === 2 && 2) || (edit === 3 && 3)
          )
        }
        className={`fixed left-0 top-0 w-full h-full bg-black duration-500  ${
          showOverlay ? "visible opacity-60" : "invisible opacity-0"
        }`}
      ></div>
      <ToastContainer transition={Slide} />
    </>
  );
};

export default MyProfile;
