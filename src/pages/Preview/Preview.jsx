import React, { useContext, useEffect, useState } from "react";
import PostLine from "../../components/PostLine/PostLine";
import PreviewSum from "../../components/PreviewSum/PreviewSum";
import PreviewaProductCard from "../../components/PreviewaProductCard/PreviewaProductCard";
import { PostContext } from "../../Context/CreatePostContext";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Preview = () => {
  const { postClickHandler, postLoading, postError, setPostError } =
    useContext(PostContext);

  // const handlePostClick = async (e) => {
  //   try {
  //     // Perform post action
  //     e.preventDefault();
  //     await postClickHandler();
  //     if (!postLoading) {
  //       toast.success("Ad created successfully!", {
  //         position: "top-right",
  //         autoClose: 2000,
  //         hideProgressBar: false,
  //         closeOnClick: false,
  //         pauseOnHover: false,
  //         draggable: false,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong!");
  //     console.log("HATA", error);
  //   }
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 3300);
  // };

  // useEffect(() => {
  //   if (!postError) {
  //     const timer = setTimeout(() => {
  //       navigate("/");
  //     }, 5000);

  //     return () => clearTimeout(timer);
  //   }
  //   return () => setPostError(null);
  // }, [postClickHandler]);

  return (
    <>
      <div className="max-w-6xl mt-10 mb-10 flex flex-col gap-10 items-center justify-center">
        <PostLine custom="preview" />
        <div className="w-full flex ">
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
              <p className="text-sm text-gray-50">Loading</p>
            </>
          )}
        </button>
      </div>
      <ToastContainer transition={Slide} />
    </>
  );
};

export default Preview;
