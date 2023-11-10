import React from "react";
import PostLine from "../../components/PostLine/PostLine";
import PreviewSum from "../../components/PreviewSum/PreviewSum";
import PreviewaProductCard from "../../components/PreviewaProductCard/PreviewaProductCard";

const Preview = () => {
  return (
    <div className="max-w-6xl mt-10 mb-10 flex flex-col gap-10">
      <PostLine />
      <div className="w-full flex ">
        <PreviewSum />
        <PreviewaProductCard />
      </div>
    </div>
  );
};

export default Preview;
