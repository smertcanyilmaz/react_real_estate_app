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
    <div className="flex flex-col gap-6 cursor-pointer w-[25%] p-6 bg-gray-50 text-sm text-gray-500 ">
      <div
        onClick={() => navigateClick("myprofile")}
        className="icon_container"
      >
        <div className="icon">
          <PersonIcon style={{ color: "gray" }} />
        </div>
        My Profile
      </div>

      <div onClick={() => navigateClick("posts")} className="flex flex-col">
        <div className="icon_container">
          <div className="icon">
            <ListIcon style={{ color: "gray" }} />
          </div>
          My Posts
        </div>
      </div>

      <div
        onClick={() => navigateClick("posts/actives")}
        className="flex flex-col"
      >
        <div className="icon_container px-11">Actives Posts</div>
      </div>

      <div
        onClick={() => navigateClick("posts/incomplete")}
        className="flex flex-col"
      >
        <div className="icon_container px-11">Incomplete Posts</div>
      </div>

      <div
        onClick={() => navigateClick("favorites")}
        className="icon_container"
      >
        <div className="icon">
          <FavoriteIcon fontSize="small" style={{ color: "gray" }} />
        </div>
        Favorites
      </div>
    </div>
  );
};

export default ProfileSideBar;
