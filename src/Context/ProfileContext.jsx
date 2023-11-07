import React, { createContext, useContext, useEffect, useState } from "react";
import {
  doc,
  updateDoc,
  collection,
  onSnapshot,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase-config";
import useUserPosts from "../components/hooks/useUserPosts";
import { Context } from "./AuthContext";
import { useLocation } from "react-router-dom";

export const ContextProfile = createContext();

const ProfileContext = ({ children }) => {
  // my post sayfasında aktif ve pasif ilan sayısını gösterebilmek için stateleri lift etmem gerekti
  const [estateDataFilter, setEstateDataFilter] = useState([]);
  const [estateDataFilter2, setEstateDataFilter2] = useState([]);
  const [favoriteEstates, setFavoriteEstates] = useState([]);
  const { estateData } = useUserPosts();
  const { userActiveUid } = useContext(Context);

  console.log("estateDataFilter", estateDataFilter);
  console.log("estateDataFilter2", estateDataFilter2);
  console.log("favoriteEstates", favoriteEstates);
  console.log("estateData", estateData);
  const location = useLocation();

  //ActivePosts page

  const passiveClickHandler = async (estateId) => {
    const estateRef = doc(db, "estates", estateId);
    try {
      await updateDoc(estateRef, {
        passivePosts: true,
      });
      console.log("İlanın durumu güncellendi.");
    } catch (error) {
      console.error("İlan durumu güncellenirken bir hata oluştu: ", error);
    }
  };

  const path = location.pathname.substring(1);

  useEffect(() => {
    // ActivePosts page anlık olarak database güncelleme

    console.log(path, "aaaaaaa");
    if (path === "posts/actives" || path === "posts/myposts") {
      const currentUserId = userActiveUid;
      const q = query(
        collection(db, "estates"),
        where("userData", "==", currentUserId),
        where("passivePosts", "==", false)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const updatedEstateData = [];
        querySnapshot.forEach((doc) => {
          updatedEstateData.push({ id: doc.id, ...doc.data() });
        });
        setEstateDataFilter(updatedEstateData);
        console.log("girdi");
      });

      return () => {
        unsubscribe();
      };
    } else return;
  }, [path]);

  //PasivePosts Page

  const activeClickHandler = async (estateId) => {
    const estateRef = doc(db, "estates", estateId);
    try {
      await updateDoc(estateRef, {
        passivePosts: false,
      });
      console.log("İlanın durumu güncellendi.");
    } catch (error) {
      console.error("İlan durumu güncellenirken bir hata oluştu: ", error);
    }
  };

  useEffect(() => {
    //PasivePosts Page anlık olarak database güncelleme

    if (path === "posts/actives" || path === "posts/myposts") {
      const currentUserId = userActiveUid;
      const q = query(
        collection(db, "estates"),
        where("userData", "==", currentUserId),
        where("passivePosts", "==", true)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const updatedEstateData = [];
        querySnapshot.forEach((doc) => {
          updatedEstateData.push({ id: doc.id, ...doc.data() });
        });
        setEstateDataFilter2(updatedEstateData);
      });

      return () => {
        unsubscribe();
      };
    } else return;
  }, [path]);

  const [loadingFav, setLoadingFav] = useState(true);
  // Favorites page

  const fetchFavoriteEstates = async () => {
    try {
      const currentUserId = userActiveUid;
      const userRef = doc(db, "users", currentUserId);
      const userSnapshot = await getDoc(userRef);
      const userData = userSnapshot.data();

      if (!userData || !userData.favorites) {
        setLoadingFav(false);
        return;
      }

      const favorites = userData.favorites;

      const favoriteEstatesPromises = favorites.map(async (estateId) => {
        const estateRef = doc(db, "estates", estateId);
        const estateSnapshot = await getDoc(estateRef);

        if (estateSnapshot.exists()) {
          return { id: estateSnapshot.id, ...estateSnapshot.data() };
        }
        return null;
      });

      const favoriteEstatesData = await Promise.all(favoriteEstatesPromises);
      const filteredFavoriteEstates = favoriteEstatesData.filter(
        (estate) => estate !== null
      );

      setFavoriteEstates(filteredFavoriteEstates);
      setLoadingFav(false);
    } catch (error) {
      console.error("Favori ilanları getirme hatası: ", error);
      setLoadingFav(false);
    }
  };

  useEffect(() => {
    if (path === "favorites") {
      const currentUserId = userActiveUid;
      const userRef = doc(db, "users", currentUserId);
      const unsubscribe = onSnapshot(userRef, async (userSnapshot) => {
        try {
          const userData = userSnapshot.data();
          if (userData && userData.favorites) {
            await fetchFavoriteEstates();
          } else {
            setFavoriteEstates([]); // Kullanıcı favori ilanı yoksa boş bir diziye ayarlayın
            setLoadingFav(false);
          }
        } catch (error) {
          console.error("Kullanıcı verilerini getirme hatası: ", error);
          setLoadingFav(false);
        }
      });

      return () => {
        unsubscribe();
      };
    } else return;
  }, [path]);

  const values = {
    estateDataFilter: estateDataFilter,
    setEstateDataFilter: setEstateDataFilter,
    passiveClickHandler: passiveClickHandler,
    estateDataFilter2: estateDataFilter2,
    setEstateDataFilter2: setEstateDataFilter2,
    activeClickHandler: activeClickHandler,
    favoriteEstates: favoriteEstates,
    setFavoriteEstates: setFavoriteEstates,
    loadingFav: loadingFav,
  };
  return (
    <ContextProfile.Provider value={values}>{children}</ContextProfile.Provider>
  );
};

export default ProfileContext;
