import React, { useContext } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import NoMeetingRoomRoundedIcon from "@mui/icons-material/NoMeetingRoomRounded";
import useUserPosts from "../../../components/hooks/useUserPosts";
import ProfileProductCard from "../../../components/ProfileProductCard/ProfileProductCard";
import { Context } from "../../../Context/ProfileContext";

const PasivePosts = () => {
  const { estateData, loading } = useUserPosts();
  const { estateDataFilter2 } = useContext(Context);

  return (
    <ProfileTemplate>
      <div className="active_posts h-full flex flex-col justify-between gap-3 bg-[--bg_color]">
        <div
          className={`note w-full h-full  bg-gray-50 flex flex-col gap-5 border border-gray-400/50 ${
            estateDataFilter2.length === 0 && "not_post"
          }`}
        >
          {estateDataFilter2.length === 0 && !loading ? (
            <>
              <div className="border-2 border-gray-300 p-2 rounded-full flex items-center justify-center">
                <NoMeetingRoomRoundedIcon
                  fontSize="large"
                  style={{ color: "gray" }}
                />
              </div>
              <p className="text-gray-600">You have no pasive post yet</p>
            </>
          ) : (
            <ProfileProductCard post="passive" />
          )}
        </div>
        <PostAd />
      </div>
    </ProfileTemplate>
  );
};

export default PasivePosts;
