import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import "./ProfilePopup.css";
import Button from "../Button/Button";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import { Context } from "../../Context/AuthContext";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CheckIcon from "@mui/icons-material/Check";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

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
  wrongPassword,
  setWrongPassword,
  newName,
  setNewName,
  newLastname,
  setNewLastname,
  newEmail,
  setNewEmail,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [buttonValid, setButtonValid] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [passwordLoading, setPasswordLoading] = useState(false);
  const [emailLoading, setEmailLoading] = useState(false);
  const [nameLoading, setNameLoading] = useState(false);

  const { userActive, userActiveUid } = useContext(Context);
  const auth = getAuth();
  const user = auth.currentUser;
  const userRef = doc(db, "users", userActiveUid);

  const changeEmailHandler = async (e) => {
    e.preventDefault();
    setEmailLoading(true);
    try {
      await updateEmail(user, newEmail);
      console.log("auth email güncellendi");
      await updateDoc(userRef, {
        email: newEmail,
      });
      console.log("db email güncellendi");
      setEmailLoading(false);

      toast.success("Email is changed!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      clickHandler(2);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`);
      setEmailLoading(false);
    }
  };

  const changePasswordHandler = async (e) => {
    e.preventDefault();
    setPasswordLoading(true);
    try {
      await updatePassword(user, newPassword);
      console.log("auth şifre güncellendi");
      await updateDoc(userRef, {
        password: newPassword,
      });
      console.log("db şifre güncellendi");
      setPasswordLoading(false);
      toast.success("Password is changed!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      clickHandler(3);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode}: ${errorMessage}`);
      setPasswordLoading(false);
    }
  };

  const passwordCheckerHandler = (e) => {
    e.preventDefault();
    if (passwordCheck === userActive?.password) {
      setIsPasswordCheck(true);
      setWrongPassword(false);
      console.log("başarılı");
    } else {
      setIsPasswordCheck(false);
      setWrongPassword(true);
      console.log("başarısız");
    }
  };

  const nameHandler = async (e) => {
    e.preventDefault();
    setNameLoading(true);
    try {
      await updateDoc(userRef, {
        firstName: newName,
        lastName: newLastname,
      });
      setNameLoading(false);

      toast.success("Name and surname are changed!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      clickHandler(1);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      setNameLoading(false);
    }
  };

  useEffect(() => {
    if (newPassword?.length >= 6) {
      setButtonValid((prev) => ({ ...prev, password: true }));
    } else {
      setButtonValid((prev) => ({ ...prev, password: false }));
    }
  }, [newPassword]);

  useEffect(() => {
    if (newName?.length === 0 || newLastname?.length === 0) {
      setButtonValid((prev) => ({ ...prev, name: false }));
    } else {
      setButtonValid((prev) => ({ ...prev, name: true }));
    }
  }, [newName, newLastname]);

  useEffect(() => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailCheck = emailRegex.test(newEmail);

    if (!emailCheck) {
      setButtonValid((prev) => ({ ...prev, email: false }));
    } else {
      setButtonValid((prev) => ({ ...prev, email: true }));
    }
  }, [newEmail]);

  const passwordSum = isPasswordCheck
    ? changePasswordHandler
    : passwordCheckerHandler;

  const passwordSum2 = isPasswordCheck
    ? changeEmailHandler
    : passwordCheckerHandler;

  const selectedButtonFunc =
    edit === 1 ? nameHandler : edit === 2 ? passwordSum2 : passwordSum;

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
            {edit === 2 &&
              (isPasswordCheck ? "Change Your Email" : "Verify Your Password")}
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
              {edit === 1 && "Your New Name"}
              {edit === 2 && (isPasswordCheck ? "New Email" : "Your Password")}
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
              <div
                className={`flex items-center border pr-2 ${
                  wrongPassword ? " border-red-500" : "border-gray-800"
                }`}
              >
                <input
                  className="border-none outline-none flex-1"
                  type={isPasswordCheck ? "email" : "password"}
                  name="popupEmail"
                  id="popupEmail"
                  value={isPasswordCheck ? newEmail : passwordCheck}
                  onChange={(e) => {
                    isPasswordCheck
                      ? setNewEmail(e.target.value)
                      : setPasswordCheck(e.target.value);
                  }}
                />
              </div>
            )}

            {edit === 3 && (
              <div
                className={`flex items-center border pr-2 ${
                  wrongPassword ? " border-red-500" : "border-gray-800"
                }`}
              >
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
            {isPasswordCheck && edit === 3 && (
              <div className="flex items-center gap-[2px] h-3">
                <p className="text-xs text-gray-800/70">
                  Password must be at least 6 characters
                </p>
                {buttonValid?.password ? (
                  <CheckIcon fontSize="small" sx={{ color: "#36cf94" }} />
                ) : (
                  ""
                )}
              </div>
            )}
            {wrongPassword && (
              <div className=" w-full h-8 flex items-center justify-center  bg-red-200/80 font-semibold text-[#ef4a4a] text-xs rounded-md">
                <p className="text-xs">Password is incorrect</p>
              </div>
            )}
          </div>
          {edit === 1 && (
            <div className="flex flex-col gap-2">
              <label htmlFor={edit === 1 && "popupSurname"}>
                {edit === 1 && "Your New Surname"}

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

          <div
            className={`${
              (!buttonValid?.name && edit === 1) ||
              (!buttonValid?.password && isPasswordCheck && !buttonValid?.email)
                ? "opacity-70"
                : "opacity-100"
            }`}
          >
            <Button
              disabled={
                (!buttonValid?.name && edit === 1) ||
                (!buttonValid?.password &&
                  isPasswordCheck &&
                  !buttonValid?.email)
              }
              onClick={selectedButtonFunc}
            >
              <div className="flex items-center justify-center gap-2">
                {passwordLoading || nameLoading || emailLoading ? (
                  <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-gray-50 border-r-transparent align-[-0.125em] "></div>
                ) : (!passwordLoading || !emailLoading) &&
                  (edit === 3 || edit === 2) ? (
                  isPasswordCheck ? (
                    "Change"
                  ) : (
                    "Continue"
                  )
                ) : !nameLoading && edit === 1 ? (
                  "Change"
                ) : (
                  ""
                )}
              </div>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePopup;
