import React, { useContext } from "react";
import { signOut, getAuth } from "firebase/auth";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useParams } from "react-router-dom";
import { ContextProfile } from "../../../Context/ProfileContext";
const Logout = () => {
  const auth = getAuth();
  const { id } = useParams();
  const location = useLocation();
  const path = location.pathname;
  const { setUserSubscribe } = useContext(ContextProfile);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      if (path === "/" || path === "/estates" || path === `/estates/${id}`) {
        window.location.reload();
      }
      setUserSubscribe(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      onClick={handleSignOut}
      className="logout cursor-pointer flex items-center gap-2 "
    >
      Logout <LogoutIcon fontSize="small" />
    </div>
  );
};

export default Logout;
