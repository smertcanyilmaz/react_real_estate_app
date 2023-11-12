import React, { useState } from "react";
import PostType from "./PostType/PostType";
import PostInfo from "./PostInfo/PostInfo";
import { useNavigate } from "react-router-dom";

const CreatePostInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 relative">
      <PostType
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <PostInfo selectedCategory={selectedCategory} />
      <p>TEST</p>
      <button
        className="w-20 h-10 border border-gray-800"
        onClick={() => navigate("/preview")}
      >
        preview
      </button>
    </div>
  );
};

export default CreatePostInfo;
