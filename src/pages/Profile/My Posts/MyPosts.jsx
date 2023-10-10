import React from "react";
import ProfileTemplate from "../../../components/ProfileTemplate/ProfileTemplate";
import PostAd from "../../../components/PostAd/PostAd";

const MyPosts = () => {
  return (
    <ProfileTemplate>
      <div className="flex flex-col gap-5 bg-[--bg_color]">
        <div className="flex justify-between gap-5">
          <div className="flex-1 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-start justify-between rounded-md bg-gray-50">
            <h1 className="text-lg font-semibold text-gray-700">
              Active Posts
            </h1>
            <p className="text-gray-600 text-sm">No post yet</p>
          </div>
          <div className="flex-1 h-28 border border-gray-400/50 shadow-md px-3 py-5 flex flex-col items-start justify-between rounded-md bg-gray-50">
            <h1 className="text-lg font-semibold text-gray-700">
              Pasive Posts
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
        <div className="free h-full p-8 bg-gray-50 flex flex-col gap-8 ">
          <div className="flex items-center justify-center gap-8">
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
