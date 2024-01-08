import React, { useState } from "react";
import PostType from "./PostType/PostType";
import PostInfo from "./PostInfo/PostInfo";

const CreatePostInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="flex flex-col gap-3 md:gap-10 relative">
      <PostType
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <PostInfo selectedCategory={selectedCategory} />
    </div>
  );
};

export default CreatePostInfo;
