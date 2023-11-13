import { createContext, useCallback, useState } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
  updateMetadata,
} from "firebase/storage";
import { db, storage } from "../firebase-config";
import { addDoc, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const PostContext = createContext();
const refDb = collection(db, "estates");

export const CreatePostContext = ({ children }) => {
  const auth = getAuth();
  const today = new Date();
  const formattedDate = today.toLocaleDateString("tr-TR");
  const [sum, setSum] = useState({
    passivePosts: false,
    incompletePosts: false,
    date: formattedDate,
  });

  const navigate = useNavigate();

  const [previewImages, setPreviewImages] = useState([]);
  const [uploadImage, setUploadImage] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState(null);

  const postClickHandler = useCallback(
    async (e) => {
      e.preventDefault();
      setPostLoading(true);
      const imageRefs = [];

      // Seçilen her dosyayı Firebase Storage'a yükledim ve URL'lerini aldım çünkü storage'daki resim linklerinin estates databasedeki estate objesine gitmesi lazımdı
      for (const file of uploadImage) {
        const imageRef = ref(storage, `userImages/${v4()}`);

        await uploadBytes(imageRef, file).then((snapshot) => {
          const contentType = "image/jpeg"; // Örnek: jpeg, png, vb.

          // Dosyanın metadata'sını güncelle
          getMetadata(imageRef)
            .then((metadata) => {
              metadata.contentType = contentType;
              return updateMetadata(imageRef, metadata);
            })
            .then((updatedMetadata) => {
              console.log(
                "Dosya türü güncellendi:",
                updatedMetadata.contentType
              );
            });
        });

        const downloadURL = await getDownloadURL(imageRef);
        imageRefs.push(downloadURL);
        console.log("DOWNLOAD URL", downloadURL);
      }

      console.log("İMAGEREFS", imageRefs);

      const user = auth.currentUser;

      if (user) {
        const userData = {
          ...sum,
          userData: user.uid,
          image: imageRefs?.[0],
          images: imageRefs,
        };
        addDoc(refDb, userData)
          .then(() => {
            console.log("Belge eklendi");
            setPostLoading(false);
            toast.success("Ad created successfully!", {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
              theme: "light",
            });
            setTimeout(() => {
              navigate("/");
            }, 3300);
          })
          .catch((error) => {
            console.error("Hata oluştu: ", error);
            setPostLoading(false);
            toast.error("Something went wrong!");
            setPostError(error);
          });
      }
    },
    [sum, selectedFiles]
  );

  const values = {
    sum: sum,
    setSum: setSum,
    previewImages: previewImages,
    setPreviewImages: setPreviewImages,
    uploadImage: uploadImage,
    setUploadImage: setUploadImage,
    selectedFiles: selectedFiles,
    setSelectedFiles: setSelectedFiles,
    postClickHandler: postClickHandler,
    postLoading: postLoading,
    postError: postError,
    setPostError: setPostError,
  };
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};
