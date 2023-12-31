import React, { useContext } from "react";
import PostLine from "../../components/PostLine/PostLine";
import PreviewSum from "../../components/PreviewSum/PreviewSum";
import PreviewaProductCard from "../../components/PreviewaProductCard/PreviewaProductCard";
import { PostContext } from "../../Context/CreatePostContext";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Preview = () => {
  const { postClickHandler, postLoading } = useContext(PostContext);

  return (
    <>
      <div className="w-screen md:w-[72rem] mt-3 md:mt-10 flex flex-col gap-3 md:gap-10 items-center justify-center">
        <PostLine custom="preview" />
        <div className="w-full flex flex-col md:flex-row ">
          <PreviewSum />
          <PreviewaProductCard />
        </div>
        <button
          className={`w-32 h-12 rounded-md duration-200 flex gap-2 mt-10 justify-center items-center bg-gray-800 text-gray-50 ${
            postLoading
              ? "opacity-70 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
          onClick={postClickHandler}
        >
          {!postLoading ? (
            <>Post</>
          ) : (
            <>
              <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-gray-50 border-r-transparent align-[-0.125em]"></div>
            </>
          )}
        </button>
      </div>
      <ToastContainer transition={Slide} />
    </>
  );
};

export default Preview;
