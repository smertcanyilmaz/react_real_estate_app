import React, { useContext, useEffect } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import ProfileProductCard from "../../../components/ProfileProductCard/ProfileProductCard";
import { ContextProfile } from "../../../Context/ProfileContext";
import "./Favorites.css";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useLocation, useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favoriteEstates, loadingFav } = useContext(ContextProfile);
  const pathname = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/posts/favorites" && window.innerWidth <= 640)
      document.body.style.backgroundColor = "#ffffff";
    return () => {
      document.body.style.backgroundColor = "#e3e3e1";
    };
  }, [pathname]);

  return (
    <ProfileTemplate>
      <div onClick={() => navigate("/profilemenu")} className="md:hidden p-3">
        <WestOutlinedIcon />
      </div>
      <div className="active_posts w-[95%] md:w-full mx-auto md:mx-none mt-3 md:mt-0 h-full flex flex-col justify-between gap-3 bg-[--bg_color] rounded-lg md:rounded-none">
        <div
          className={`note w-full h-full  bg-gray-50 flex flex-col gap-5 border border-gray-400/50 rounded-lg md:rounded-none ${
            favoriteEstates.length === 0 && "not_post"
          }`}
        >
          {favoriteEstates.length === 0 && !loadingFav ? (
            <>
              <div className="border-2 border-gray-300 p-2 rounded-full flex items-center justify-center">
                <FavoriteRoundedIcon style={{ color: "gray" }} />
              </div>
              <p className="text-gray-600">You don't have any favorite yet</p>
            </>
          ) : (
            <ProfileProductCard post="favorites" />
          )}
        </div>
      </div>
    </ProfileTemplate>
  );
};

export default Favorites;
