import React, { useCallback, useState, useContext } from "react";
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
import { PostContext } from "../../Context/CreatePostContext";

//const refDb = collection(db, "estates");

const CreatePostInfo = () => {
  //const ref = collection(db, "estates");
  const auth = getAuth();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const {
    sum,
    setSum,
    uploadImage,
    setUploadImage,
    selectedFiles,
    setSelectedFiles,
  } = useContext(PostContext);

  // const [passivePosts, setPassivePosts] = useState(false);
  // const [incompletePosts, setIncompletePosts] = useState(false);

  // const today = new Date();
  // const formattedDate = today.toLocaleDateString("tr-TR");

  // const [sum, setSum] = useState({
  //   passivePosts: false,
  //   incompletePosts: false,
  //   date: formattedDate,
  // });

  //const [selectedFiles, setSelectedFiles] = useState([]); // seçilen fotoğrafların ekranda gösterilmesi için tutan state
  //const [uploadImage, setUploadImage] = useState([]);

  const [features, setFeatures] = useState([]);

  //console.log("UPLOADIMAGES", uploadImages);

  // const continueClickHandler = useCallback(
  //   async (e) => {
  //     e.preventDefault();

  //     const imageRefs = [];

  //     // Seçilen her dosyayı Firebase Storage'a yükledim ve URL'lerini aldım çünkü storage'daki resim linklerinin estates databasedeki estate objesine gitmesi lazımdı
  //     for (const file of uploadImage) {
  //       const imageRef = ref(storage, `userImages/${v4()}`);

  //       await uploadBytes(imageRef, file).then((snapshot) => {
  //         const contentType = "image/jpeg"; // Örnek: jpeg, png, vb.

  //         // Dosyanın metadata'sını güncelle
  //         getMetadata(imageRef)
  //           .then((metadata) => {
  //             metadata.contentType = contentType;
  //             return updateMetadata(imageRef, metadata);
  //           })
  //           .then((updatedMetadata) => {
  //             console.log(
  //               "Dosya türü güncellendi:",
  //               updatedMetadata.contentType
  //             );
  //           });
  //       });

  //       const downloadURL = await getDownloadURL(imageRef);
  //       imageRefs.push(downloadURL);
  //       console.log("DOWNLOAD URL", downloadURL);
  //     }

  //     console.log("İMAGEREFS", imageRefs);

  //     const user = auth.currentUser;

  //     if (user) {
  //       const userData = {
  //         ...sum,
  //         userData: user.uid,
  //         image: imageRefs[0],
  //         images: imageRefs,
  //       };
  //       addDoc(refDb, userData)
  //         .then(() => {
  //           console.log("Belge eklendi");
  //         })
  //         .catch((error) => {
  //           console.error("Hata oluştu: ", error);
  //         });
  //     }
  //   },
  //   [sum, selectedFiles]
  // );

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
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        uploadImage={uploadImage}
        setUploadImage={setUploadImage}
        features={features}
        setFeatures={setFeatures}
      />
    </div>
  );
};

export default CreatePostInfo;
