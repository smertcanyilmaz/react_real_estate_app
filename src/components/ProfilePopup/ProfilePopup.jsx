import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import "./ProfilePopup.css";
import Button from "../Button/Button";
import {
  getAuth,
  sendEmailVerification,
  updateEmail,
  updatePassword,
} from "firebase/auth";
import { Context } from "../../Context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";

const ProfilePopup = ({
  clickHandler,
  showOverlay,
  edit,
  isPasswordCheck,
  setIsPasswordCheck,
  newPassword,
  setNewPassword,
  passwordCheck,
  setPasswordCheck,
}) => {
  const [newName, setNewName] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  //const [newPassword, setNewPassword] = useState("");
  const auth = getAuth();
  const { userActive, userActiveUid } = useContext(Context);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const user = auth.currentUser;
  //const [passwordCheck, setPasswordCheck] = useState("");
  //const [isPasswordCheck, setIsPasswordCheck] = useState(false);

  const changePasswordHandler = async (e) => {
    e.preventDefault();
    const userRef = doc(db, "users", userActiveUid);
    try {
      await updatePassword(user, newPassword);
      console.log("auth şifre güncellendi");
      await updateDoc(userRef, {
        password: newPassword,
      });
      console.log("db şifre güncellendi");
      clickHandler(3);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`);
    }
  };

  const passwordCheckerHandler = (e) => {
    e.preventDefault();

    if (passwordCheck === userActive?.password) {
      setIsPasswordCheck(true);
      console.log("başarılı");
    } else {
      console.log("başarısız");
    }
  };

  const [buttonValid, setButtonValid] = useState(false);

  useEffect(() => {
    if (newPassword?.length >= 6) {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  }, [newPassword, buttonValid]);

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
          <p className="font-semibold text-xl tracking-wide text-gray-700">
            {edit === 1 && "Change Your Name and Surname"}
            {edit === 2 && "Change Your E-Mail Address"}
            {edit === 3 &&
              (isPasswordCheck
                ? "Change Your Password"
                : "Verify Your Password")}
          </p>
          <div className="flex flex-col gap-3">
            <label
              htmlFor={
                (edit === 1 && "popupName") ||
                (edit === 2 && "popupEmail") ||
                (edit === 3 && "popupPassword")
              }
            >
              {edit === 1 && "Your Name"}
              {edit === 2 && "Your New E-Mail Address"}
              {edit === 3 &&
                (isPasswordCheck ? "New Password" : "Your Password")}
              <span className="text-red-500">*</span>
            </label>
            {edit === 1 && (
              <input
                type="text"
                name="popupName"
                id="popupName"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
              />
            )}
            {edit === 2 && (
              <input
                type="email"
                name="popupEmail"
                id="popupEmail"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
            )}

            {edit === 3 && (
              <div className="flex items-center border border-black pr-2">
                <input
                  className="border-none outline-none flex-1"
                  type={showPassword ? "type" : "password"}
                  name="popupPassword"
                  id="popupPassword"
                  value={isPasswordCheck ? newPassword : passwordCheck}
                  onChange={(e) => {
                    isPasswordCheck
                      ? setNewPassword(e.target.value)
                      : setPasswordCheck(e.target.value);
                  }}
                />

                {isPasswordCheck &&
                  (showPassword ? (
                    <VisibilityOffIcon
                      style={{ cursor: "pointer" }}
                      sx={{ color: "rgb(156 163 175 / 0.9)" }}
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  ) : (
                    <VisibilityIcon
                      style={{ cursor: "pointer" }}
                      sx={{ color: "rgb(156 163 175 / 0.9)" }}
                      onClick={() => setShowPassword((prev) => !prev)}
                    />
                  ))}
              </div>
            )}
            {isPasswordCheck && (
              <div className="flex items-center gap-[2px] h-3">
                <p className="text-xs text-gray-800/70">
                  Password must be at least 6 characters
                </p>
                {buttonValid ? (
                  <CheckIcon fontSize="small" sx={{ color: "#36cf94" }} />
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
          {edit === 1 && (
            <div className="flex flex-col gap-2">
              <label htmlFor={edit === 1 && "popupSurname"}>
                {edit === 1 && "Your Surname"}

                <span className="text-red-500">*</span>
              </label>
              {edit === 1 && (
                <input
                  type="text"
                  name="popupSurname"
                  id="popupSurname"
                  value={newLastname}
                  onChange={(e) => setNewLastname(e.target.value)}
                />
              )}
            </div>
          )}

          {/* <Button onClick={handleEmailUpdate}>Save</Button> */}

          <div
            className={`${
              !buttonValid && isPasswordCheck ? "opacity-70" : "opacity-100"
            }`}
          >
            <Button
              disabled={!buttonValid && isPasswordCheck}
              onClick={
                isPasswordCheck ? changePasswordHandler : passwordCheckerHandler
              }
            >
              {isPasswordCheck ? "Change" : "Continue"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePopup;
