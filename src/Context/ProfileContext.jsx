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
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ContextFilter } from "./FilterContext";

export const ContextProfile = createContext();

const ProfileContext = ({ children }) => {
  const navigate = useNavigate();
  // my post sayfasında aktif ve pasif ilan sayısını gösterebilmek için stateleri lift etmem gerekti
  const [estateDataFilter, setEstateDataFilter] = useState([]);
  const [estateDataFilter2, setEstateDataFilter2] = useState([]);
  const [favoriteEstates, setFavoriteEstates] = useState([]);
  const { estateData } = useUserPosts();
  const { userActive, userActiveUid } = useContext(Context);
  const { setStatus } = useContext(ContextFilter);

  const location = useLocation();
  const path = location.pathname.substring(1);

  //ActivePosts page

  const passiveClickHandler = async (estateId) => {
    const estateRef = doc(db, "estates", estateId);
    try {
      await updateDoc(estateRef, {
        passivePosts: true,
      });

      toast.success("Ad has been deactivated successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      console.log("İlanın durumu güncellendi.");
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("İlan durumu güncellenirken bir hata oluştu: ", error);
    }
  };

  useEffect(() => {
    // ActivePosts page anlık olarak database güncelleme

    if (path === "posts/actives" || path === "posts") {
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
  }, [path]);

  //PasivePosts Page

  const activeClickHandler = async (estateId) => {
    const estateRef = doc(db, "estates", estateId);
    try {
      await updateDoc(estateRef, {
        passivePosts: false,
      });
      toast.success("Ad has been activated successfully!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      console.log("İlanın durumu güncellendi.");
    } catch (error) {
      toast.error("Something went wrong!");
      console.error("İlan durumu güncellenirken bir hata oluştu: ", error);
    }
  };

  useEffect(() => {
    //PasivePosts Page anlık olarak database güncelleme

    if (path === "posts/pasives" || path === "posts") {
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
    if (path === "favorites" || path === "posts") {
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

  const [favChecker, setFavChecker] = useState(false);

  const RemoveFavorite = async (estateId) => {
    const userId = userActiveUid;
    setFavChecker(!favChecker);

    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();

        const userFavoritesFiltered = userData.favorites.filter(
          (fav) => fav !== estateId
        );

        await updateDoc(userRef, { favorites: userFavoritesFiltered });
        console.log("favori ilan başarı ile kaldırıldı");
        const updatedFavoriteEstates = favoriteEstates.filter(
          (fav) => fav.id !== estateId
        );
        setFavoriteEstates(updatedFavoriteEstates);
      }
    } catch (error) {
      console.log("favori kaldırma işleminde bir hata oluştu", error);
    }
  };

  const [isFavorite, setIsFavorite] = useState(false); // bu state, favorilenen ilanın veritabanındaki favorited boolean tutuyor ve css özelleştirmesi yapıyor

  const favoriteClickHandler = async (e, estateId) => {
    //estate ve product card'da favori click fonksiyonu
    e.preventDefault();
    const userId = userActiveUid;
    const userRef = doc(db, "users", userId);
    const estateRef = doc(db, "estates", estateId);
    setFavChecker(!favChecker);

    try {
      const userSnapshot = await getDoc(userRef);
      const estateSnapshot = await getDoc(estateRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        if (!userData.favorites || !userData.favorites.includes(estateId)) {
          // If the estate is not in favorites, add it
          await updateDoc(userRef, {
            favorites: [...(userData.favorites || []), estateId],
          });
          await updateDoc(estateRef, { favorited: true });
          setIsFavorite(true);
        } else {
          // If the estate is already in favorites, remove it
          RemoveFavorite(estateId);
          await updateDoc(estateRef, { favorited: false });
          setIsFavorite(false);
        }
      }
    } catch (error) {
      console.log("Hata oluştu:", error);
    }
  };

  //membership section

  const [userSubscribe, setUserSubscribe] = useState(false);

  useEffect(() => {
    if (userActive) {
      if (
        path === "membership" ||
        location.pathname === "/" ||
        location.pathname === "/profilemenu"
      ) {
        const userRef = doc(db, "users", userActiveUid);

        const unsubscribe = onSnapshot(userRef, (doc) => {
          const data = doc.data();
          if (data) {
            setUserSubscribe(data.subscribe);
          }
        });

        return () => {
          unsubscribe();
        };
      } else return;
    }
  }, [path, location]);

  const membershipChecker = () => {
    if (estateData?.length === 0 || userSubscribe) {
      navigate("/create-post");
    } else if (!userSubscribe) {
      navigate("/membership");
    }
    setStatus("");
  };

  const [productCardNotFound, setProductCardNotFound] = useState(false);

  const values = {
    estateDataFilter,
    setEstateDataFilter,
    passiveClickHandler,
    estateDataFilter2,
    setEstateDataFilter2,
    activeClickHandler,
    favoriteEstates,
    setFavoriteEstates,
    loadingFav,
    RemoveFavorite,
    favoriteClickHandler,
    isFavorite,
    setIsFavorite,
    favChecker,
    membershipChecker,
    userSubscribe,
    setUserSubscribe,
    productCardNotFound,
    setProductCardNotFound,
  };
  return (
    <ContextProfile.Provider value={values}>{children}</ContextProfile.Provider>
  );
};

export default ProfileContext;
