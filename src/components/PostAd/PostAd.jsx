import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const PostAd = () => {
  return (
    <div className="bg-gray-800 flex justify-center items-center px-5 py-8 gap-20 shadow-md shadow-gray-600 rounded-sm">
      <h1 className="text-2xl font-semibold text-gray-7000 text-gray-50 tracking-wider ">
        Post
        <span className="ml-1"> Free</span> Ad
      </h1>
      <Link to="/create-post">
        <Button postAd="postAd">Post Ad Now</Button>
      </Link>
    </div>
  );
};

export default PostAd;
