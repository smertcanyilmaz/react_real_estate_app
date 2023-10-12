import React from "react";
import PostLine from "../../components/PostLine/PostLine";
import CreatePostInfo from "../../components/CreatePostInfo/CreatePostInfo";

const CreatePost = () => {
  return (
    <div className="max-w-6xl mt-10 flex flex-col gap-10">
      <PostLine />
      <CreatePostInfo />
    </div>
  );
};

export default CreatePost;
