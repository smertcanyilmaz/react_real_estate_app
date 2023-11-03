import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const useFetch = () => {
  const [estateDataFilter2, setEstateDataFilter2] = useState([]);
  const [estates, setEstates] = useState([]);

  const estatesCollectionRef = collection(db, "estates");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(estatesCollectionRef);
      setEstates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return { estates, setEstates, estateDataFilter2, setEstateDataFilter2 };
};

export default useFetch;
