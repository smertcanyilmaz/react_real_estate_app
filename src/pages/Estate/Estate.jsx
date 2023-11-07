import React, { useContext, useEffect, useState } from "react";
import EstateImages from "../../components/EstateImages/EstateImages";
import useFetch from "../../components/hooks/useFetch";
import { Link, useParams } from "react-router-dom";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import OverlayEstate from "../../components/OverlayEstate/OverlayEstate";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Context } from "../../Context/AuthContext";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { ContextProfile } from "../../Context/ProfileContext";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

const Estate = ({ setUnAuthNavbar }) => {
  const { id } = useParams();
  const { estates } = useFetch();
  const { userActiveUid } = useContext(Context);
  const { RemoveFavorite } = useContext(ContextProfile);
  const [isFavorite, setIsFavorite] = useState(false);

  const item = estates.find((estate) => estate.id === id);
  console.log(item);

  const [openOverlayEstate, setOpenOverlayEstate] = useState(false);
  const [imagesIndex, setImagesIndex] = useState(null); // tıklanan seçili resmin büyütülebilmesi için index tutan state

  useEffect(() => {
    setUnAuthNavbar(false);
  }, []);

  useEffect(() => {
    // eğer kullanıcı ilanı favorileşmişse tekrar aynı ilana geldiğinde favorilediğini görebilmesi için veri çekmemiz gerekiyor
    const fetchData = async () => {
      const userId = userActiveUid;
      const userRef = doc(db, "users", userId);
      const estateRef = doc(db, "estates", id);

      try {
        const userSnapshot = await getDoc(userRef);
        const estateSnapshot = await getDoc(estateRef);

        if (userSnapshot.exists() && estateSnapshot.exists()) {
          const userData = userSnapshot.data();
          const estateData = estateSnapshot.data();

          setIsFavorite(
            userData.favorites.includes(id) && estateData.favorited
          );
        }
      } catch (error) {
        console.log("Hata oluştu:", error);
      }
    };

    fetchData();
  }, [id, userActiveUid]);

  const favoriteClickHandler = async (estateId) => {
    const userId = userActiveUid;
    const userRef = doc(db, "users", userId);
    const estateRef = doc(db, "estates", estateId);

    try {
      if (!isFavorite) {
        const userSnapshot = await getDoc(userRef);
        const estateSnapshot = await getDoc(estateRef);

        if (userSnapshot.exists()) {
          const userData = userSnapshot.data();
          if (!userData.favorites) {
            await updateDoc(userRef, { favorites: [estateId] });
          } else {
            await updateDoc(userRef, {
              favorites: [...userData.favorites, estateId],
            });
          }
        }

        if (estateSnapshot.exists()) {
          await updateDoc(estateRef, { favorited: true }); // Favori olarak işaretle
          setIsFavorite(true);
        }
      } else {
        RemoveFavorite(estateId);

        const estateSnapshot = await getDoc(estateRef);

        if (estateSnapshot.exists()) {
          await updateDoc(estateRef, { favorited: false }); // Favori işaretini kaldır
          setIsFavorite(false);
        }
      }
    } catch (error) {
      console.log("Hata oluştu:", error);
    }
  };

  const componentStyle = {
    color: isFavorite ? "#ef4a4a" : "rgba(31 41 55 / 0.8)",
  };

  return (
    <div className="max-w-6xl max-h-[100vh] mt-10 mb-10">
      {openOverlayEstate && (
        <OverlayEstate
          setOpenOverlayEstate={setOpenOverlayEstate}
          imagesIndex={imagesIndex}
          item={item}
          openOverlayEstate={openOverlayEstate}
        />
      )}

      <div key={item?.id} className="flex flex-col gap-5">
        <div className="content flex flex-col gap-2">
          <h1 className="text-3xl font-bold">{item?.title}</h1>
          <div className="w-full flex justify-between items-center">
            <div className="text-sm">
              {item?.place?.district}, {item?.place?.city},
              {item?.place?.country} | {item?.date}
            </div>
            <div
              className={`text-gray-800/80 rounded-lg px-3 py-2 hover:bg-gray-300/50 cursor-pointer duration-300 active:scale-90 ${
                isFavorite && "bg-gray-300/50"
              }`}
              onClick={() => favoriteClickHandler(item.id)}
            >
              {!isFavorite ? (
                <FavoriteBorderRoundedIcon
                  fontSize="small"
                  style={componentStyle}
                />
              ) : (
                <FavoriteRoundedIcon fontSize="small" style={componentStyle} />
              )}
              <span className="text-sm font-semibold underline ml-2">
                {isFavorite ? "Saved" : "Save"}
              </span>
            </div>
          </div>
        </div>
        <EstateImages
          item={item}
          setOpenOverlayEstate={setOpenOverlayEstate}
          setImagesIndex={setImagesIndex}
          openOverlayEstate={openOverlayEstate}
        />
        <div className="info flex justify-between mt-5">
          <div className="info1 flex-1 flex flex-col gap-2">
            <div className="w-full flex justify-between text-xl font-bold">
              House Status: {item?.status?.toUpperCase()}
              <div className="flex-1 text-2xl font-bold text-end">
                € {item?.price}
              </div>
            </div>
            <div className="text-gray-700 flex gap-1">
              <p>{item?.rooms?.bedrooms} bedrooms |</p>{" "}
              <p>{item?.rooms?.bathrooms} bathrooms |</p>
              {item?.specials?.map((special, index) => (
                <div key={index}>
                  {special} {index === item.specials.length - 1 ? "" : "|"}
                </div>
              ))}
            </div>
          </div>
          <div className="info2 flex-1 flex items-center justify-between">
            <div className="flex-1 flex flex-col items-center justify-center  font-semibold text-[15px]">
              Contact the owner: Mertcan Yılmaz
              <div className="flex justify-between items-center gap-5">
                <div className="icons flex items-center justify-center md:block  ">
                  <Link to="https://github.com/smertcanyilmaz">
                    <IconButton>
                      <GitHubIcon fontSize="medium" />
                    </IconButton>
                  </Link>
                  <Link to="https://www.linkedin.com/in/s%C3%BCleyman-mertcan-y%C4%B1lmaz-87312b196/">
                    <IconButton>
                      <LinkedInIcon
                        className="text-[#0077b5]"
                        fontSize="medium"
                      />
                    </IconButton>
                  </Link>

                  <Link to="https://twitter.com/smertcann">
                    <IconButton>
                      <TwitterIcon
                        className=" text-[#1DA1F2]"
                        fontSize="medium"
                      />
                    </IconButton>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-16 h-16 rounded-full mr-6">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/real-estate-app-b1e5c.appspot.com/o/profile%2FWhatsApp%20G%C3%B6rsel%202023-10-02%20saat%2005.28.54_74cba30e.jpg?alt=media&token=998763b7-a0e0-45c7-8406-8528b64ddc53&_gl=1*11liie4*_ga*MTY1NzMyNDUxNi4xNjk2MjAyMDI3*_ga_CW55HF8NVT*MTY5NjIxMTkwMy40LjEuMTY5NjIxNDQ2NS42MC4wLjA."
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
