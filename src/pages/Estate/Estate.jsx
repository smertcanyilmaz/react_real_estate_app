import React, { useContext, useEffect, useState } from "react";
import EstateImages from "../../components/EstateImages/EstateImages";
import useFetch from "../../components/hooks/useFetch";
import { useParams } from "react-router-dom";
import OverlayEstate from "../../components/OverlayEstate/OverlayEstate";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Context } from "../../Context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase-config";
import { ContextProfile } from "../../Context/ProfileContext";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import { ContextFilter } from "../../Context/FilterContext";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";

const Estate = ({ setUnAuthNavbar }) => {
  const { id } = useParams();
  const { estates } = useFetch();
  const { userActive, userActiveUid } = useContext(Context);
  const { favoriteClickHandler, setIsFavorite, favChecker } =
    useContext(ContextProfile);
  const { setStatus } = useContext(ContextFilter);

  const item = estates.find((estate) => estate.id === id);
  console.log(item);

  const [openOverlayEstate, setOpenOverlayEstate] = useState(false);
  const [imagesIndex, setImagesIndex] = useState(null); // tıklanan seçili resmin büyütülebilmesi için index tutan state

  useEffect(() => {
    setUnAuthNavbar(false);
    setStatus("");
  }, []);

  const [userActiveFavorited, setUserActiveFavorited] = useState(null);

  useEffect(() => {
    setUserActiveFavorited(userActive?.favorites?.includes(id));
  }, [userActive]);

  const componentStyle = {
    color: userActiveFavorited ? "#ef4a4a" : "rgba(31 41 55 / 0.8)",
  };

  useEffect(() => {
    if (userActive) {
      const currentUserId = userActiveUid;
      const userRef = doc(db, "users", currentUserId);
      const unsubscribe = onSnapshot(userRef, async (userSnapshot) => {
        try {
          const userData = userSnapshot.data();
          setUserActiveFavorited(userData?.favorites?.includes(id));
        } catch (error) {
          console.error("Kullanıcı verilerini getirme hatası: ", error);
        }
      });

      return () => {
        unsubscribe();
      };
    }
  }, [favChecker]);

  return (
    <div className="w-[72rem] max-h-[100vh] mt-10 mb-10">
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
                userActiveFavorited && "bg-gray-300/50"
              }`}
              onClick={(e) => favoriteClickHandler(e, item.id)}
            >
              {!userActiveFavorited ? (
                <FavoriteBorderRoundedIcon
                  fontSize="small"
                  style={componentStyle}
                />
              ) : (
                <FavoriteRoundedIcon fontSize="small" style={componentStyle} />
              )}
              <span className="text-sm font-semibold underline ml-2">
                {userActiveFavorited ? "Saved" : "Save"}
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
            <div className="text-gray-700 flex flex-col gap-5">
              <div className="w-full flex gap-3">
                <p>{item?.rooms?.bedrooms} bedrooms</p>
                <p>|</p>
                <p>{item?.rooms?.bathrooms} bathrooms</p>
              </div>
              <div className="w-full flex flex-col gap-3 bg-gray-200/50 border border-gray-800 rounded-lg p-2">
                <h3 className="font-semibold">Features</h3>
                <div className="w-full flex flex-wrap gap-3">
                  {item?.specials?.map((special, index) => (
                    <div className="flex gap-1" key={index}>
                      {index === item.specials.length ? (
                        ""
                      ) : (
                        <CheckOutlinedIcon />
                      )}
                      {special}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 h-full flex items-center justify-center text-lg">
            Contact our agents by call center:
            <span className="font-semibold">55555-55</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estate;
