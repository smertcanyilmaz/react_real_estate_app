import React from "react";
import PostLine from "../../components/PostLine/PostLine";
import CreatePostInfo from "../../components/CreatePostInfo/CreatePostInfo";

const CreatePost = () => {
  return (
    <div className="max-w-6xl mt-10 mb-10 flex flex-col gap-10">
      <PostLine custom="adInfo" />
      <CreatePostInfo />
    </div>
  );
};

export default CreatePost;
