import React, { createContext, useEffect, useState } from "react";
import {
  doc,
  updateDoc,
  collection,
  onSnapshot,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../firebase-config";

export const Context = createContext();

const ProfileContext = ({ children }) => {
  // my post sayfasında aktif ve pasif ilan sayısını gösterebilmek için stateleri lift etmem gerekti
  const [estateDataFilter, setEstateDataFilter] = useState([]);
  const [estateDataFilter2, setEstateDataFilter2] = useState([]);
  const [favoriteEstates, setFavoriteEstates] = useState([]);
  const auth = getAuth();

  //ActivePosts page
  // useEffect(() => {
  //   const filteredData = estateData.filter(
  //     (estateFilter) => estateFilter.passivePosts === false
  //   );
  //   setEstateDataFilter(filteredData);

  //   console.log(filteredData);
  // }, [estateData]);

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

  useEffect(() => {
    // ActivePosts page anlık olarak database güncelleme
    const user = auth.currentUser;
    const currentUserId = user.uid;
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
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //PasivePosts Page
  // useEffect(() => {
  //   const filteredData = estateData.filter(
  //     (estateFilter) => estateFilter.passivePosts === true
  //   );
  //   setEstateDataFilter2(filteredData);

  //   console.log(filteredData);
  // }, [estateData]);

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
    const user = auth.currentUser;
    const currentUserId = user.uid;
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
  }, []);

  const [loadingFav, setLoadingFav] = useState(true);
  // Favorites page
  const fetchFavoriteEstates = async () => {
    try {
      // Kullanıcı verilerini al
      const user = auth.currentUser;
      const currentUserId = user.uid;
      const userRef = doc(db, "users", currentUserId);
      const userSnapshot = await getDoc(userRef);
      const userData = userSnapshot.data();

      if (!userData || !userData.favorites) {
        setLoadingFav(false);
        return;
      }

      const favorites = userData.favorites;

      // Favori ilanların gerçek verilerini alma
      const favoriteEstatesPromises = favorites.map(async (estateId) => {
        const estateRef = doc(db, "estates", estateId);
        const estateSnapshot = await getDoc(estateRef);

        if (estateSnapshot.exists()) {
          return { id: estateSnapshot.id, ...estateSnapshot.data() };
        }
        return null;
      });

      const favoriteEstatesData = await Promise.all(favoriteEstatesPromises);
      setFavoriteEstates(
        favoriteEstatesData.filter((estate) => estate !== null)
      );
      setLoadingFav(false);
    } catch (error) {
      console.error("Favori ilanları getirme hatası: ", error);
      setLoadingFav(false);
    }
  };

  useEffect(() => {
    fetchFavoriteEstates();
  }, [favoriteEstates, loadingFav]);

  const values = {
    estateDataFilter: estateDataFilter,
    setEstateDataFilter: setEstateDataFilter,
    passiveClickHandler: passiveClickHandler,
    estateDataFilter2: estateDataFilter2,
    setEstateDataFilter2: setEstateDataFilter2,
    activeClickHandler: activeClickHandler,
    favoriteEstates: favoriteEstates,
    loadingFav: loadingFav,
  };
  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ProfileContext;
