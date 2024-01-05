import React, { useContext, useEffect } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import useUserPosts from "../../../components/hooks/useUserPosts";
import "./ActivePosts.css";
import ProfileProductCard from "../../../components/ProfileProductCard/ProfileProductCard";
import { ContextProfile } from "../../../Context/ProfileContext";
import { Slide, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

const ActivePosts = () => {
  const { loading } = useUserPosts();
  const { estateDataFilter } = useContext(ContextProfile);
  const pathname = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/posts/actives" && window.innerWidth <= 640)
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
      <div>
        <h1 className="md:hidden px-3 py-2 text-xl font-semibold text-gray-700">
          Active Posts
        </h1>
      </div>
      <div className="active_posts w-[95%] md:w-full mx-auto md:mx-none mt-3 md:mt-0 h-full flex flex-col justify-between gap-3 bg-[--bg_color] rounded-lg md:rounded-none">
        <div
          className={`note w-full h-full  bg-gray-50 flex flex-col gap-5 border border-gray-400/50 rounded-lg md:rounded-none${
            estateDataFilter.length === 0 && "not_post"
          }`}
        >
          {estateDataFilter.length === 0 && !loading ? (
            <>
              <div className="border-2 border-gray-300 p-2 rounded-full flex items-center justify-center">
                <HomeRoundedIcon fontSize="large" style={{ color: "gray" }} />
              </div>
              <p className="text-gray-600">You have no active post yet</p>
            </>
          ) : (
            <ProfileProductCard post="active" />
          )}
        </div>
        <PostAd />
      </div>
      <ToastContainer transition={Slide} />
    </ProfileTemplate>
  );
};

export default ActivePosts;
