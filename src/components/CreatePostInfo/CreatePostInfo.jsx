import React, { useCallback, useState } from "react";
import PostType from "./PostType/PostType";
import PostInfo from "./PostInfo/PostInfo";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  getMetadata,
  updateMetadata,
} from "firebase/storage";
import { v4 } from "uuid";

const refDb = collection(db, "estates");

const CreatePostInfo = () => {
  //const ref = collection(db, "estates");
  const auth = getAuth();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sum, setSum] = useState({});
  const [selectedFiles, setSelectedFiles] = useState([]); // seçilen fotoğrafların ekranda gösterilmesi için tutan state
  const [uploadImage, setUploadImage] = useState([]);
  const uploadImages = [];

  console.log("UPLOADIMAGE", uploadImage);
  // console.log("UPLOADIMAGES", uploadImages);

  const continueClickHandler = useCallback(
    async (e) => {
      e.preventDefault();

      const imageRefs = [];

      for (const image of uploadImage) {
        // Seçilen her dosyayı Firebase Storage'a yükleyin ve URL'lerini alın
        for (const file of image) {
          const imageRef = ref(storage, `userImages/${v4()}`);
          //await uploadBytes(imageRef, file);
          await uploadBytes(imageRef, file).then((snapshot) => {
            // Yükleme işlemi başarılı oldu, dosya türünü ayarlayın
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
      }
      console.log("İMAGEREFS", imageRefs);

      const user = auth.currentUser;

      if (user) {
        const userData = {
          ...sum,
          id: user.uid,
          image: imageRefs[0],
          images: imageRefs,
        };
        addDoc(refDb, userData)
          .then(() => {
            console.log("Belge eklendi");
          })
          .catch((error) => {
            console.error("Hata oluştu: ", error);
          });
      }
    },
    [sum, selectedFiles]
  );

  return (
    <div className="flex flex-col gap-10 relative">
      <PostType
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sum={sum}
        setSum={setSum}
      />
      <PostInfo
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sum={sum}
        setSum={setSum}
        continueClickHandler={continueClickHandler}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        uploadImage={uploadImage}
        setUploadImage={setUploadImage}
        uploadImages={uploadImages}
      />
    </div>
  );
};

export default CreatePostInfo;
