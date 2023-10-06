import React from "react";
import { signOut, getAuth } from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";
const Logout = () => {
  const auth = getAuth();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div onClick={handleSignOut} className="logout cursor-pointer ">
      <LogoutIcon />
    </div>
  );
};

export default Logout;
