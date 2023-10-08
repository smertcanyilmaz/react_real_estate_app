import React from "react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProfileSideBar.css";

const ProfileSideBar = () => {
  const navigate = useNavigate();

  const navigateClick = (name) => {
    navigate(`/${name}`);
  };

  return (
    <div className="flex flex-col gap-8 cursor-pointer w-[25%] p-3 bg-gray-50 text-sm text-gray-800 ">
      <div
        onClick={() => navigateClick("myprofile")}
        className="icon_container"
      >
        <div className="icon">
          <PersonIcon />
        </div>
        My Profile
      </div>

      <div onClick={() => navigateClick("posts")} className="icon_container">
        <div className="icon">
          <ListIcon />
        </div>
        My Posts
      </div>

      <div
        onClick={() => navigateClick("favorites")}
        className="icon_container"
      >
        <div className="icon">
          <FavoriteIcon fontSize="small" />
        </div>
        Favorites
      </div>
    </div>
  );
};

export default ProfileSideBar;
