import React, { createContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const Context = createContext();

export const AuthContext = ({ children }) => {
  const auth = getAuth();
  const [userGuard, setUserGuard] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;
    unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoading(false);
      if (currentUser) setUserGuard(currentUser);
      else {
        setUserGuard(null);
      }
    });
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [auth]);

  const values = {
    userGuard: userGuard,
    setUserGuard: setUserGuard,
  };
  return (
    <Context.Provider value={values}>{!loading && children}</Context.Provider>
  );
};
