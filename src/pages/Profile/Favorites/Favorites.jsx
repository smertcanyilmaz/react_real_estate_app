import React from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Favorites = () => {
  return (
    <ProfileTemplate>
      <div className="w-full h-full bg-gray-50 flex flex-col items-center justify-center gap-3 rounded-sm border border-gray-400/50">
        <div className="border-2 border-gray-300 p-2 rounded-full flex items-center justify-center">
          <FavoriteRoundedIcon style={{ color: "gray" }} />
        </div>
        <p className="text-gray-600">You don't have any favorite yet</p>
      </div>
    </ProfileTemplate>
  );
};

export default Favorites;
