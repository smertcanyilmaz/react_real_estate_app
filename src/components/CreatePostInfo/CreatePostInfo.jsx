import React, { useCallback, useState } from "react";
import PostType from "./PostType/PostType";
import PostInfo from "./PostInfo/PostInfo";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getAuth } from "firebase/auth";

const ref = collection(db, "estates");

const CreatePostInfo = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sum, setSum] = useState({});
  const auth = getAuth();

  const continueClickHandler = useCallback(
    (e) => {
      e.preventDefault();
      const user = auth.currentUser; //profil de verilen ilanların bilgilerini görmek için auth id almak gerekiyor
      if (user) {
        const userData = {
          ...sum,
          id: user.uid,
        };
        addDoc(ref, userData);
      }
    },
    [sum]
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
      />
    </div>
  );
};

export default CreatePostInfo;
