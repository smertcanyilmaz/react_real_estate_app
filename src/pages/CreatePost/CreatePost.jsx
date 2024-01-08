import React from "react";
import PostLine from "../../components/PostLine/PostLine";
import CreatePostInfo from "../../components/CreatePostInfo/CreatePostInfo";

const CreatePost = () => {
  return (
    <div className="w-[95%] mx-auto mt-3 mb-3 md:max-w-6xl md:mt-10 md:mb-10 md:mx-0 flex flex-col gap-3 md:gap-10">
      <PostLine custom="adInfo" />
      <CreatePostInfo />
    </div>
  );
};

export default CreatePost;
