import React, { useContext } from "react";
import PostLine from "../../components/PostLine/PostLine";
import PreviewSum from "../../components/PreviewSum/PreviewSum";
import PreviewaProductCard from "../../components/PreviewaProductCard/PreviewaProductCard";
import { PostContext } from "../../Context/CreatePostContext";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Preview = () => {
  const { continueClickHandler } = useContext(PostContext);
  return (
    <div className="max-w-6xl mt-10 mb-10 flex flex-col gap-10 items-center justify-center">
      <PostLine custom="preview" />
      <div className="w-full flex ">
        <PreviewSum />
        <PreviewaProductCard />
      </div>
      <button
        className="w-32 h-12 rounded-md duration-200 flex gap-2 justify-center items-center bg-gray-800 text-gray-50"
        onClick={continueClickHandler}
      >
        Continue
        <ArrowForwardIcon style={{ color: "rgb(249 250 251)" }} />
      </button>
    </div>
  );
};

export default Preview;
