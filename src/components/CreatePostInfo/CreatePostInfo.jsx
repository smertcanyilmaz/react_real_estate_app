import React from "react";
import PostType from "./PostType/PostType";
import PostInfo from "./PostInfo/PostInfo";

const CreatePostInfo = () => {
  return (
    <div className="flex flex-col gap-10">
      <PostType />
      <PostInfo />
    </div>
  );
};

export default CreatePostInfo;
