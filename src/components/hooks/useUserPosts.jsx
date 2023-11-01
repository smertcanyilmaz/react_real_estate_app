import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getAuth } from "firebase/auth";

const useUserPosts = () => {
  const auth = getAuth();
  const [estateData, setEstateData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const user = auth.currentUser;
      const currentUserId = user.uid;

      const estatesRef = collection(db, "estates");
      const q = query(estatesRef, where("id", "==", currentUserId));

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

    fetchData();
  }, []);
  return { estateData, loading };
};

export default useUserPosts;
