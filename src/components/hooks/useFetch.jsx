import React, { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const useFetch = () => {
  const [estates, setEstates] = useState([]);
  const estatesCollectionRef = collection(db, "estates");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(estatesCollectionRef);
      setEstates(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getUsers();
  }, []);

  return { estates };
};

export default useFetch;
