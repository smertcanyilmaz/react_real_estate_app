import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

export const Context = createContext();

export const AuthContext = ({ children }) => {
  const auth = getAuth();
  const [userActive, setUserActive] = useState();
  const [userActiveUid, setUserActiveUid] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(userActive);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setIsLoading(true);
      if (currentUser) {
        try {
          const uid = currentUser.uid;
          const userRef = doc(db, "users", uid);
          setUserActiveUid(uid);
          getDoc(userRef)
            .then((docSnapshot) => {
              if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                console.log("Kullanıcı bilgileri:", userData);
                setUserActive(userData);
                setIsLoading(false);
              } else {
                console.log("Kullanıcı bulunamadı");
                setIsLoading(false);
              }
            })
            .catch((error) => {
              console.error(
                "Kullanıcı bilgilerini alma sırasında hata oluştu:",
                error
              );
              setIsLoading(false);
            });
        } catch (error) {
          console.error("Hata oluştu:", error);
          setIsLoading(false);
        }
      } else {
        setUserActive(null);
        setIsLoading(false);
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [auth]);

  const values = {
    userActive: userActive,
    setUserActive: setUserActive,
    userActiveUid: userActiveUid,
  };

  return (
    <Context.Provider value={values}>{!isLoading && children}</Context.Provider> // children render edilmeden önce isLoading durumu kontrol edilir
  );
};
