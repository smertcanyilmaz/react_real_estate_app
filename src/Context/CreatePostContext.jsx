import { createContext, useState } from "react";

export const PostContext = createContext();

export const CreatePostContext = ({ children }) => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("tr-TR");

  const [sum, setSum] = useState({
    passivePosts: false,
    incompletePosts: false,
    date: formattedDate,
  });

  const [previewImages, setPreviewImages] = useState([]);

  const values = {
    sum: sum,
    setSum: setSum,
    previewImages: previewImages,
    setPreviewImages: setPreviewImages,
  };
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};
