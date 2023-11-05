import React, { useContext } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { getAuth } from "firebase/auth";
import ProfileProductCard from "../../../components/ProfileProductCard/ProfileProductCard";
import { ContextProfile } from "../../../Context/ProfileContext";
import "./Favorites.css";

const Favorites = () => {
  const { favoriteEstates, loadingFav } = useContext(ContextProfile);

  return (
    <ProfileTemplate>
      <div className="favorites w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-3 rounded-sm border border-gray-400/50">
        <div
          className={`note w-full h-full  bg-gray-50 flex flex-col gap-5 border border-gray-400/50 ${
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
