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
    if (
      path === "posts/actives" ||
      path === "posts/pasives" ||
      path === "posts/incomplete"
    ) {
      setSelectedPosts("posts");
    }
  }, [location]);

  return (
    <div className="flex flex-col gap-6 cursor-pointer w-[25%] h-[25%] p-6 bg-gray-50 text-sm border border-gray-400/50 rounded-sm ">
      <div className="flex items-center gap-5 pb-6 border-b-2 border-gray-200/50">
        <div className="p-4 border border-gray-300 rounded-full bg-gray-200/50">
          <PersonIcon fontSize="large" style={{ color: "gray" }} />
        </div>
        <p className="font-semibold text-lg text-gray-800">Mertcan Yılmaz</p>
      </div>
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
          Active Posts
        </div>
      </div>

      <div
        onClick={() => navigateClick("posts/pasives")}
        className="flex flex-col"
      >
        <div
          className={`icon_container px-11 ${
            selected === "posts/pasives"
              ? "font-semibold text-gray-800"
              : "text-gray-500 font-normal"
          } `}
        >
          Pasive Posts
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
