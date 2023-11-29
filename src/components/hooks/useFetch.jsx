import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const useFetch = () => {
  const [estates, setEstates] = useState([]);
  const [estateLength, setEstateLength] = useState();

  const [isLoadingFetch, setIsLoadingFetch] = useState(true);
  const estatesCollectionRef = collection(db, "estates");

  useEffect(() => {
    try {
      const getUsers = async () => {
        const data = await getDocs(estatesCollectionRef);
        const estatesDatas = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setEstates(estatesDatas);
        console.log(estateLength, " estatesDatas estatesDatas estatesDatas");
        setIsLoadingFetch(false);
      };
      getUsers();
    } catch (error) {
      console.log(error);
      setIsLoadingFetch(false);
    }
  }, []);

  return { estates, isLoadingFetch };
};

export default useFetch;
