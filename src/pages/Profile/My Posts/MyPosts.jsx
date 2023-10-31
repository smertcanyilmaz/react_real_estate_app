import React, { useEffect, useState } from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../firebase-config";
import { getAuth } from "firebase/auth";

const MyPosts = () => {
  const auth = getAuth();
  const [estateData, setEstateData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      const currentUserId = user.uid;

      const estatesRef = collection(db, "estates");
      const q = query(estatesRef, where("id", "==", currentUserId));

      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setEstateData(data);
      } catch (error) {
        console.error("Error getting documents: ", error);
      }
    };

    fetchData();
  }, []);
  console.log(estateData);
  return (
    <ProfileTemplate>
      <div className="h-full flex flex-col justify-between gap-5 bg-[--bg_color]">
        <div className="flex justify-between gap-5">
          <div className="flex-1 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-start justify-between rounded-md bg-gray-50">
            <h1 className="text-lg font-semibold text-gray-700">
              Active Posts
            </h1>
            <p
              className={`text-sm ${
                estateData.length > 0
                  ? "text-[#36cf94] font-semibold"
                  : "text-gray-600 font-normal"
              }`}
            >
              {estateData.length === 0
                ? "No post yet"
                : estateData.length === 1
                ? `You have ${estateData.length} active post`
                : `You have ${estateData.length} active posts`}
            </p>
          </div>
          <div className="flex-1 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-start justify-between rounded-md bg-gray-50">
            <h1 className="text-lg font-semibold text-gray-700">
              Passive Posts
            </h1>
            <p className="text-gray-600 text-sm">No post yet</p>
          </div>
          <div className="flex-1 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-start justify-between rounded-md bg-gray-50">
            <h1 className="text-lg font-semibold text-gray-700">
              Incomplete Posts
            </h1>
            <p className="text-gray-600 text-sm">No post yet</p>
          </div>
        </div>
        <div className="free h-full bg-gray-50 flex flex-col items-center justify-center ">
          <div className="flex gap-8 ">
            <div className="w-80 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-start justify-between rounded-md bg-gray-50">
              <h1 className="text-lg font-semibold text-gray-700">
                Rent Posts
              </h1>
              <p className="text-gray-600 text-sm">No rent post yet</p>
            </div>
            <div className="w-80 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-start justify-between rounded-md bg-gray-50">
              <h1 className="text-lg font-semibold text-gray-700">
                Sell Posts
              </h1>
              <p className="text-gray-600 text-sm">No sell post yet</p>
            </div>
          </div>
        </div>
        <PostAd />
      </div>
    </ProfileTemplate>
  );
};

export default MyPosts;
