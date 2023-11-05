import React, { useContext, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import "./ProfilePopup.css";
import Button from "../Button/Button";
import { getAuth, updateEmail } from "firebase/auth";
import { Context } from "../../Context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

const ProfilePopup = ({ clickHandler, showOverlay, edit }) => {
  const [newName, setNewName] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const auth = getAuth();
  const { userActive, userActiveUid } = useContext(Context);

  const handleEmailUpdate = async (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    updateEmail(user, newEmail)
      .then(() => {
        // E-posta adresi başarıyla güncellendi
        // Yeni e-posta adresi: newEmail
        console.log("e güncellendi.");
      })
      .catch((error) => {
        // E-posta adresi güncellenirken bir hata oluştu
        // Hata detayları: error
        console.error("e hata oluştu: ", error);
      });

    const userRef = doc(db, "users", userActiveUid);
    try {
      let updateFields = {};

      if (edit === 1) {
        updateFields = { firstName: newName, lastName: newLastname };
      } else if (edit === 2) {
        updateFields = { email: newEmail };
      } else if (edit === 3) {
        updateFields = { password: newPassword };
      }

      await updateDoc(userRef, updateFields);
      console.log("Kullanıcı bilgileri güncellendi.");
    } catch (error) {
      console.error(
        "Kullanıcı bilgileri güncellenirken bir hata oluştu: ",
        error
      );
    }
  };

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
                <input
                  type="text"
                  name="popupSurname"
                  id="popupSurname"
                  value={newLastname}
                  onChange={(e) => setNewLastname(e.target.value)}
                />
              )}
              {edit === 3 && (
                <input
                  type="password"
                  name="popupPassword2"
                  id="popupPassword2"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
          {/* <Button onClick={handleEmailUpdate}>Save</Button> */}
          <button onClick={handleEmailUpdate}>kaydet</button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePopup;
