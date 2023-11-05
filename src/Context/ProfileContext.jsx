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
import { getAuth } from "firebase/auth";
import { db } from "../firebase-config";
import useUserPosts from "../components/hooks/useUserPosts";
import { Context } from "./AuthContext";

export const ContextProfile = createContext();

const ProfileContext = ({ children }) => {
  // my post sayfasında aktif ve pasif ilan sayısını gösterebilmek için stateleri lift etmem gerekti
  const [estateDataFilter, setEstateDataFilter] = useState([]);
  const [estateDataFilter2, setEstateDataFilter2] = useState([]);
  const [favoriteEstates, setFavoriteEstates] = useState([]);
  const { estateData } = useUserPosts();
  const auth = getAuth();
  const { userActiveUid, userActive } = useContext(Context);

  console.log("estateDataFilter", estateDataFilter);
  console.log("estateDataFilter2", estateDataFilter2);
  console.log("favoriteEstates", favoriteEstates);
  console.log("estateData", estateData);

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
    // const user = auth.currentUser;
    // const currentUserId = user.uid;
    if (userActive) {
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
      });

      return () => {
        unsubscribe();
      };
    } else return;
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
    // const user = auth.currentUser;
    // const currentUserId = user.uid;
    if (userActive) {
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
  }, []);

  // const [loadingFav, setLoadingFav] = useState(true);
  // // Favorites page

  // const fetchFavoriteEstates = async () => {
  //   try {
  //     // const user = auth.currentUser;
  //     // const currentUserId = user.uid;
  //     const currentUserId = userActiveUid;
  //     const userRef = doc(db, "users", currentUserId);
  //     const userSnapshot = await getDoc(userRef);
  //     const userData = userSnapshot.data();

  //     if (!userData || !userData.favorites) {
  //       setLoadingFav(false);
  //       return;
  //     }

  //     const favorites = userData.favorites;

  //     const favoriteEstatesPromises = favorites.map(async (estateId) => {
  //       const estateRef = doc(db, "estates", estateId);
  //       const estateSnapshot = await getDoc(estateRef);

  //       if (estateSnapshot.exists()) {
  //         return { id: estateSnapshot.id, ...estateSnapshot.data() };
  //       }
  //       return null;
  //     });

  //     const favoriteEstatesData = await Promise.all(favoriteEstatesPromises);
  //     const filteredFavoriteEstates = favoriteEstatesData.filter(
  //       (estate) => estate !== null
  //     );

  //     setFavoriteEstates(filteredFavoriteEstates);
  //     setLoadingFav(false);
  //   } catch (error) {
  //     console.error("Favori ilanları getirme hatası: ", error);
  //     setLoadingFav(false);
  //   }
  // };

  // useEffect(() => {
  //   // const user = auth.currentUser;
  //   // const currentUserId = user.uid;
  //   if (userActive) {
  //     const currentUserId = userActiveUid;
  //     const userRef = doc(db, "users", currentUserId);
  //     const unsubscribe = onSnapshot(userRef, async (userSnapshot) => {
  //       try {
  //         const userData = userSnapshot.data();
  //         if (userData && userData.favorites) {
  //           await fetchFavoriteEstates();
  //         } else {
  //           setFavoriteEstates([]); // Kullanıcı favori ilanı yoksa boş bir diziye ayarlayın
  //           setLoadingFav(false);
  //         }
  //       } catch (error) {
  //         console.error("Kullanıcı verilerini getirme hatası: ", error);
  //         setLoadingFav(false);
  //       }
  //     });

  //     return () => {
  //       unsubscribe();
  //     };
  //   } else return;
  // }, []);

  const [userFavorite, setUserFavorite] = useState();

  const getFavorites = async () => {
    const temp = [];
    await userActive.favorites.forEach((favorite) => {
      const uid = favorite;
      const estateRef = doc(db, "estates", uid);

      getDoc(estateRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
          const estateData = docSnapshot.data();
          //console.log("estate bilgileri:", estateData);
          //estateData.push({ id: uid });
          estateData["id"] = uid;
          temp.push(estateData);
          console.log("MERT", estateData, temp);
          //setIsLoading(false);
        } else {
          console.log("Kullanıcı bulunamadı");
          //setIsLoading(false);
        }
      });
    });
    //setUserFavorite(temp);
    console.log("girdi", userActive.favorites);
    //console.log("temp", temp);
    setFavoriteEstates(temp);
  };

  const values = {
    estateDataFilter: estateDataFilter,
    setEstateDataFilter: setEstateDataFilter,
    passiveClickHandler: passiveClickHandler,
    estateDataFilter2: estateDataFilter2,
    setEstateDataFilter2: setEstateDataFilter2,
    activeClickHandler: activeClickHandler,
    favoriteEstates: favoriteEstates,
    //loadingFav: loadingFav,
    userFavorite: userFavorite,
    getFavorites: getFavorites,
  };
  return (
    <ContextProfile.Provider value={values}>{children}</ContextProfile.Provider>
  );
};

export default ProfileContext;
