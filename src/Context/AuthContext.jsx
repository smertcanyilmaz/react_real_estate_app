import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

export const Context = createContext();

export const AuthContext = ({ children }) => {
  const auth = getAuth();
  const [userActive, setUserActive] = useState();
  const [isLoading, setIsLoading] = useState(true);

  console.log(userActive);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setIsLoading(true); // İşlem başlamadan önce isLoading durumu true olarak ayarlanır
      if (currentUser) {
        try {
          const uid = currentUser.uid;
          const userRef = doc(db, "users", uid);
          getDoc(userRef)
            .then((docSnapshot) => {
              if (docSnapshot.exists()) {
                const userData = docSnapshot.data();
                console.log("Kullanıcı bilgileri:", userData);
                setUserActive(userData);
                setIsLoading(false); // İşlem başarılı bir şekilde tamamlandığında false olarak güncellenir
              } else {
                console.log("Kullanıcı bulunamadı");
                setIsLoading(false); // Hata durumunda da false olarak güncellenir
              }
            })
            .catch((error) => {
              console.error(
                "Kullanıcı bilgilerini alma sırasında hata oluştu:",
                error
              );
              setIsLoading(false); // Hata durumunda false olarak güncellenir
            });
        } catch (error) {
          console.error("Hata oluştu:", error);
          setIsLoading(false); // Hata durumunda false olarak güncellenir
        }
      } else {
        setUserActive(null);
        setIsLoading(false); // Kullanıcı yoksa false olarak güncellenir
      }
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [auth]);

  const values = {
    userActive: userActive,
    setUserActive: setUserActive,
  };

  return (
    <Context.Provider value={values}>{!isLoading && children}</Context.Provider> // children render edilmeden önce isLoading durumu kontrol edilir
  );
};
