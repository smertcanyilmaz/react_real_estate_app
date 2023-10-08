import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ListIcon from "@mui/icons-material/List";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./ProfileSideBar.css";

const ProfileSideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState(null);
  const [selectedPosts, setSelectedPosts] = useState(null);

  const navigateClick = (name) => {
    navigate(`/${name}`);
  };

  useEffect(() => {
    const path = location.pathname.substring(1); // "/" çıkartmam gerekti
    setSelected(path);
    if (path === "posts/actives" || path === "posts/incomplete") {
      setSelectedPosts("posts");
    }
  }, [location]);

  console.log(location);

  return (
    <div className="flex flex-col gap-6 cursor-pointer w-[25%] p-6 bg-gray-50 text-sm">
      <div
        onClick={() => navigateClick("myprofile")}
        className={`icon_container ${
          selected === "myprofile"
            ? "font-semibold text-gray-800"
            : "text-gray-500 font-normal"
        }`}
      >
        <div
          className={`icon ${
            selected === "myprofile" && "bg-gray-800 duration-50 border-none"
          }`}
        >
          <PersonIcon
            style={{ color: selected === "myprofile" ? "#f9fafb" : "gray" }}
          />
        </div>
        My Profile
      </div>

      <div onClick={() => navigateClick("posts")} className="flex flex-col">
        <div
          className={`icon_container ${
            selected === "posts" || selectedPosts === "posts"
              ? "font-semibold text-gray-800"
              : "text-gray-500 font-normal"
          }`}
        >
          <div
            className={`icon ${
              (selected === "posts" || selectedPosts === "posts") &&
              "bg-gray-800 duration-50 border-none"
            }`}
          >
            <ListIcon
              style={{
                color:
                  selected === "posts" || selectedPosts === "posts"
                    ? "#f9fafb"
                    : "gray",
              }}
            />
          </div>
          My Posts
        </div>
      </div>

      <div
        onClick={() => navigateClick("posts/actives")}
        className="flex flex-col"
      >
        <div
          className={`icon_container px-11 ${
            selected === "posts/actives"
              ? "font-semibold text-gray-800"
              : "text-gray-500 font-normal"
          } `}
        >
          Actives Posts
        </div>
      </div>

      <div
        onClick={() => navigateClick("posts/incomplete")}
        className="flex flex-col"
      >
        <div
          className={`icon_container px-11 ${
            selected === "posts/incomplete"
              ? "font-semibold text-gray-800"
              : "text-gray-500 font-normal"
          } `}
        >
          Incomplete Posts
        </div>
      </div>

      <div
        onClick={() => navigateClick("favorites")}
        className={`icon_container ${
          selected === "favorites"
            ? "font-semibold text-gray-800"
            : "text-gray-500 font-normal"
        }`}
      >
        <div
          className={`icon ${
            selected === "favorites" && "bg-gray-800 duration-50 border-none"
          }`}
        >
          <FavoriteIcon
            fontSize="small"
            style={{ color: selected === "favorites" ? "#f9fafb" : "gray" }}
          />
        </div>
        Favorites
      </div>
    </div>
  );
};

export default ProfileSideBar;