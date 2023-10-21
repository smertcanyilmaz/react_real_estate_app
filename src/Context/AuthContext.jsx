import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "@firebase/firestore";
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
        // Firestore'da kullanıcı bilgilerini kaydetme
        const userRef = doc(db, "users", currentUser.uid);
        const nameParts = (currentUser.displayName || "").split(" "); // TODO:burada eğer isim ve soyisim boş bıraklırsa database'e boş olarak kaydediyor
        await setDoc(userRef, {
          firstName: nameParts[0] || "",
          lastName: nameParts[1] || "",
          email: currentUser.email,
          // Diğer kullanıcı bilgileri
        });
        setUserActive(currentUser);
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
