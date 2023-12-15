import React, { useContext, useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { Context } from "../../Context/AuthContext";

const useUserPosts = () => {
  // aktif kullanıcının estates collectionda bulunan ilan bilgilerini getirir

  const [estateData, setEstateData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userActiveUid, userActive } = useContext(Context);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const currentUserId = userActiveUid;

      const estatesRef = collection(db, "estates");

      const q = query(estatesRef, where("userData", "==", currentUserId));

      try {
        const querySnapshot = await getDocs(q);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setEstateData(data);
      } catch (error) {
        console.error("Error getting documents: ", error);
      } finally {
        setLoading(false);
      }
    };

    if (userActive) {
      // 16.12.2023 where error muhtemel çözümü
      fetchData();
    }
  }, []);
  return { estateData, loading };
};

export default useUserPosts;
