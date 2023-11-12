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

  const [previewImages, setPreviewImages] = useState([]);
  const [uploadImage, setUploadImage] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [postLoading, setPostLoading] = useState(false);

  const postClickHandler = useCallback(
    async (e) => {
      //e.preventDefault();
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
          image: imageRefs[0],
          images: imageRefs,
        };
        addDoc(refDb, userData)
          .then(() => {
            console.log("Belge eklendi");
            setPostLoading(false);
          })
          .catch((error) => {
            console.error("Hata oluştu: ", error);
            setPostLoading(true);
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
  };
  return <PostContext.Provider value={values}>{children}</PostContext.Provider>;
};
