import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import "./ProfilePopup.css";
import Button from "../Button/Button";

const ProfilePopup = ({ clickHandler, showOverlay, edit }) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 transform-translate -translate-x-1/2 w-[30%]  bg-gray-50 border border-gray-400 duration-300 shadow-md shadow-gray-500 rounded-md px-3 py-5 ${
        showOverlay
          ? "-translate-y-[60%] z-30 opacity-100"
          : "-translate-y-[75%] -z-30 opacity-0"
      }`}
    >
      <div className="absolute top-2 left-2">
        <CloseIcon
          fontSize="small"
          onClick={() =>
            clickHandler(
              (edit === 1 && 1) || (edit === 2 && 2) || (edit === 3 && 3)
            )
          }
          className="cursor-pointer"
        />
      </div>
      <div>
        <form className=" flex flex-col items-center gap-5">
          <div className="w-14 h-14 border-2 border-gray-300 rounded-full flex items-center justify-center">
            {edit === 1 && (
              <PersonRoundedIcon fontSize="large" style={{ color: "gray" }} />
            )}
            {edit === 2 && (
              <EmailRoundedIcon fontSize="large" style={{ color: "gray" }} />
            )}
            {edit === 3 && (
              <KeyRoundedIcon fontSize="large" style={{ color: "gray" }} />
            )}
          </div>
          <p className="font-semibold text-lg tracking-wide text-gray-700">
            {edit === 1 && "Change Your Name and Surname"}
            {edit === 2 && "Change Your E-Mail Address"}
            {edit === 3 && "Change Your Password"}
          </p>
          <div className="flex flex-col gap-2">
            <label
              htmlFor={
                (edit === 1 && "popupName") ||
                (edit === 2 && "popupEmail") ||
                (edit === 3 && "popupPassword")
              }
            >
              {edit === 1 && "Your Name"}
              {edit === 2 && "Your New E-Mail Address"}
              {edit === 3 && "Your Password"}
              <span className="text-red-500">*</span>
            </label>
            {edit === 1 && (
              <input type="text" name="popupName" id="popupName" />
            )}
            {edit === 2 && (
              <input type="email" name="popupEmail" id="popupEmail" />
            )}
            {edit === 3 && (
              <input type="password" name="popupPassword" id="popupPassword" />
            )}
          </div>
          {(edit === 1 || edit === 3) && (
            <div className="flex flex-col gap-2">
              <label
                htmlFor={
                  (edit === 1 && "popupSurname") ||
                  (edit === 3 && "popupPassword2")
                }
              >
                {edit === 1 && "Your Surname"}
                {edit === 3 && "Your New Password"}
                <span className="text-red-500">*</span>
              </label>
              {edit === 1 && (
                <input type="text" name="popupSurname" id="popupSurname" />
              )}
              {edit === 3 && (
                <input
                  type="password"
                  name="popupPassword2"
                  id="popupPassword2"
                />
              )}
            </div>
          )}
          {edit === 3 && (
            <div className="flex flex-col gap-2">
              <label htmlFor="popupPassword3">
                Your New Password Confirm
                <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                name="popupPassword3"
                id="popupPassword3"
              />
            </div>
          )}
          <Button>Save</Button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePopup;
