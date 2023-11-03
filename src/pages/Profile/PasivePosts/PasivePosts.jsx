import React, { useEffect, useState } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import NoMeetingRoomRoundedIcon from "@mui/icons-material/NoMeetingRoomRounded";
import useUserPosts from "../../../components/hooks/useUserPosts";
import { getAuth } from "firebase/auth";
import {
  doc,
  updateDoc,
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../firebase-config";
import ProfileProductCard from "../../../components/ProfileProductCard/ProfileProductCard";
import useFetch from "../../../components/hooks/useFetch";

const PasivePosts = () => {
  const { estateData, loading } = useUserPosts();
  const { estateDataFilter2, setEstateDataFilter2 } = useFetch();
  //const [estateDataFilter2, setEstateDataFilter2] = useState([]);
  const auth = getAuth();

  useEffect(() => {
    const filteredData = estateData.filter(
      (estateFilter) => estateFilter.passivePosts === true
    );
    setEstateDataFilter2(filteredData);

    console.log(filteredData);
  }, [estateData]);

  console.log(estateDataFilter2);

  const activeClickHandler = async (estateId) => {
    const estateRef = doc(db, "estates", estateId);
    try {
      await updateDoc(estateRef, {
        passivePosts: false,
      });
      console.log("İlanın durumu güncellendi.");
    } catch (error) {
      console.error("İlan durumu güncellenirken bir hata oluştu: ", error);
    }
  };

  useEffect(() => {
    // anlık olarak database güncelleme
    const user = auth.currentUser;
    const currentUserId = user.uid;
    const q = query(
      collection(db, "estates"),
      where("userData", "==", currentUserId),
      where("passivePosts", "==", true)
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedEstateData = [];
      querySnapshot.forEach((doc) => {
        updatedEstateData.push({ id: doc.id, ...doc.data() });
      });
      setEstateDataFilter2(updatedEstateData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
            <ProfileProductCard
              estateDataFilter2={estateDataFilter2}
              activeClickHandler={activeClickHandler}
              post="passive"
            />
          )}
        </div>
        <PostAd />
      </div>
    </ProfileTemplate>
  );
};

export default PasivePosts;
