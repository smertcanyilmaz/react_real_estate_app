import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

export const Context = createContext();

export const AuthContext = ({ children }) => {
  const auth = getAuth();
  const [userActive, setUserActive] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(false);
      if (currentUser) {
        //console.log("CURRENTUSER", currentUser);
        const uid = currentUser.uid;
        const userRef = doc(db, "users", uid);
        getDoc(userRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              const userData = docSnapshot.data();
              console.log("Kullanıcı bilgileri:", userData);
              // Kullanıcı bilgilerini profil sayfasında kullanın
              setUserActive(userData);
            } else {
              console.log("Kullanıcı bulunamadı");
            }
          })
          .catch((error) => {
            console.error(
              "Kullanıcı bilgilerini alma sırasında hata oluştu:",
              error
            );
          });
        //setUserActive(currentUser);
      } else {
        setUserActive(null);
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
    <Context.Provider value={values}>{!loading && children}</Context.Provider>
  );
};
