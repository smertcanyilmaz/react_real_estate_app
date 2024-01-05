import React, { useContext } from "react";
import Button from "../Button/Button";
import { ContextProfile } from "../../Context/ProfileContext";

const PostAd = () => {
  const { membershipChecker } = useContext(ContextProfile);
  return (
    <div className="hidden bg-gray-800 md:flex justify-center items-center px-5 py-8 gap-20 shadow-md shadow-gray-600 rounded-sm">
      <h1 className="text-2xl font-semibold text-gray-7000 text-gray-50 tracking-wider ">
        Post
        <span className="ml-1"> Free</span> Ad
      </h1>

      <div onClick={membershipChecker}>
        <Button postAd="postAd">Post Ad Now</Button>
      </div>
    </div>
  );
};

export default PostAd;
