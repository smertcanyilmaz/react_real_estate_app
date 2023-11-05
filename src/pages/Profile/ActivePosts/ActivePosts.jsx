import React, { useContext, useEffect } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import useUserPosts from "../../../components/hooks/useUserPosts";
import "./ActivePosts.css";

import ProfileProductCard from "../../../components/ProfileProductCard/ProfileProductCard";
import { ContextProfile } from "../../../Context/ProfileContext";
import { Context } from "../../../Context/AuthContext";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../firebase-config";

const ActivePosts = () => {
  const { estateData, loading } = useUserPosts();
  const { estateDataFilter, setEstateDataFilter } = useContext(ContextProfile);
  const { userActive, userActiveUid } = useContext(Context);

  //console.log("userActiveUid - Active Posts", userActiveUid);

  // useEffect(() => {
  //   // ActivePosts page anlık olarak database güncelleme
  //   // const user = auth.currentUser;
  //   // const currentUserId = user.uid;
  //   if (userActive) {
  //     const currentUserId = userActiveUid;
  //     const q = query(
  //       collection(db, "estates"),
  //       where("userData", "==", currentUserId),
  //       where("passivePosts", "==", false)
  //     );
  //     const unsubscribe = onSnapshot(q, (querySnapshot) => {
  //       const updatedEstateData = [];
  //       querySnapshot.forEach((doc) => {
  //         updatedEstateData.push({ id: doc.id, ...doc.data() });
  //       });
  //       setEstateDataFilter(updatedEstateData);
  //     });

  //     return () => {
  //       unsubscribe();
  //     };
  //   } else return;
  // }, []);

  return (
    <ProfileTemplate>
      <div className="active_posts h-full flex flex-col justify-between gap-3 bg-[--bg_color]">
        <div
          className={`note w-full h-full  bg-gray-50 flex flex-col gap-5 border border-gray-400/50 ${
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
    </ProfileTemplate>
  );
};

export default ActivePosts;
