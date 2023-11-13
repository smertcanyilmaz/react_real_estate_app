import React, { useState } from "react";
import PostType from "./PostType/PostType";
import PostInfo from "./PostInfo/PostInfo";
import { useNavigate } from "react-router-dom";

const CreatePostInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  console.log(selectedCategory, "BEŞİKTAŞ");

  return (
    <div className="flex flex-col gap-10 relative">
      <PostType
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <PostInfo selectedCategory={selectedCategory} />
    </div>
  );
};

export default CreatePostInfo;
