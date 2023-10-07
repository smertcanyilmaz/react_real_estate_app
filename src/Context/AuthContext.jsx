import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Context = createContext();

export const AuthContext = ({ children }) => {
  const auth = getAuth();
  const [userActive, setUserActive] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) setUserActive(currentUser);
      else {
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
