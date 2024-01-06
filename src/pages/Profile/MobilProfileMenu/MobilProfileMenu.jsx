import React, { useContext, useEffect } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { ContextProfile } from "../../../Context/ProfileContext";
import { Context } from "../../../Context/AuthContext";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const MobilProfileMenu = () => {
  const navigate = useNavigate();
  const pathname = useLocation();
  const path = location.pathname;
  const auth = getAuth();
  const { id } = useParams();
  const { userSubscribe, setUserSubscribe } = useContext(ContextProfile);
  const { userActive } = useContext(Context);

  useEffect(() => {
    if (path === "/profilemenu")
      document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = "#e3e3e1";
    };
  }, [pathname]);

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
    <div className="w-screen flex flex-col gap-5 bg-[#ffffff]">
      <div>
        {userActive && (
          <h1 className="text-xl text-gray-800 font-semibold p-3 capitalize">
            {userActive?.firstName} {userActive?.lastName}
          </h1>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <div
          onClick={() => navigate("/myprofile")}
          className="mx-3 py-3 border border-gray-500 rounded-xl"
        >
          <div className="flex p-2 items-center justify-between">
            <div className="flex gap-2">
              <PersonOutlineOutlinedIcon />
              <p className="font-semibold text-lg">My Profile Informations</p>
            </div>
            <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
          </div>
        </div>

        <div className="mx-3 py-3 border border-gray-500 rounded-xl">
          <div className="flex gap-2 p-3">
            <HomeOutlinedIcon />
            <p className="font-semibold text-lg">My Posts</p>
          </div>
          <div
            onClick={() => navigate("/posts/actives")}
            className="flex items-center justify-between border-t border-gray-500/30 px-8 py-3"
          >
            <p>Active Posts</p>
            <ArrowForwardIosOutlinedIcon fontSize="small" className="-mr-2" />
          </div>
          <div
            onClick={() => navigate("/posts/pasives")}
            className="flex items-center justify-between border-t border-gray-500/30 px-8 py-3"
          >
            <p>Passive Posts</p>
            <ArrowForwardIosOutlinedIcon fontSize="small" className="-mr-2" />
          </div>
        </div>

        <div
          onClick={() => navigate("/favorites")}
          className="mx-3 py-3 border border-gray-500 rounded-xl"
        >
          <div className="flex p-2 items-center justify-between">
            <div className="flex gap-2">
              <FavoriteBorderOutlinedIcon />
              <p className="font-semibold text-lg">Favorites</p>
            </div>
            <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
          </div>
        </div>

        <div
          onClick={() => navigate(`${userSubscribe ? "" : "/membership"}`)}
          className={`mx-3 py-3 rounded-xl ${
            userSubscribe
              ? "bg-[#007FFF] border-none"
              : "border border-gray-500 "
          }`}
        >
          <div className="flex p-2 items-center justify-between">
            <div className="flex gap-2">
              <p
                className={`font-semibold text-lg ${
                  userSubscribe ? "text-gray-100" : ""
                }`}
              >
                Membership
              </p>

              <span className="font-bold">
                <AddRoundedIcon
                  className={`${
                    userSubscribe ? "text-gray-50" : "text-[#007FFF]"
                  }`}
                />
              </span>
            </div>

            {userSubscribe ? (
              <CheckOutlinedIcon
                fontSize="small"
                className="mr-4 text-gray-50"
              />
            ) : (
              <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
            )}
          </div>
        </div>

        <div
          onClick={handleSignOut}
          className="mx-3 py-3 border border-gray-500 rounded-xl"
        >
          <div className="flex p-2 items-center justify-between">
            <div className="flex gap-2">
              <LogoutIcon />
              <p className="font-semibold text-lg">Log Out</p>
            </div>
            <ArrowForwardIosOutlinedIcon fontSize="small" className="mr-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilProfileMenu;
