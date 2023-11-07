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
import {
  doc,
  updateDoc,
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { db } from "../../firebase-config";

const Estate = ({ setUnAuthNavbar }) => {
  const { id } = useParams();
  const { estates } = useFetch();
  const { userActive } = useContext(Context);

  const item = estates.find((estate) => estate.id === id);
  console.log(item);

  const [openOverlayEstate, setOpenOverlayEstate] = useState(false);
  const [imagesIndex, setImagesIndex] = useState(null); // tıklanan seçili resmin büyütülebilmesi için index tutan state

  useEffect(() => {
    setUnAuthNavbar(false);
  }, []);

  const { userActiveUid } = useContext(Context);

  const favoriteClickHandler = async (estateId, email) => {
    // const usersCollectionRef = collection(db, "users");
    // const estatesCollectionRef = collection(db, "estates");
    const userId = userActiveUid;
    console.log(userId, "userid");
    const userRef = doc(db, "users", userId);
    console.log("userref", userRef);

    // Kullanıcının belgesini al
    // const userQuery = query(usersCollectionRef, where("email", "==", email));
    try {
      const userSnapshot = await getDoc(userRef);

      console.log("userSnapshot", userSnapshot);
      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        if (!userData.favorites) {
          // Kullanıcı için 'favorites' alanı yoksa, oluştur
          await updateDoc(userRef, { favorites: [estateId] });
        } else {
          // Kullanıcı için 'favorites' alanı varsa, ilan ID'sini ekleyin
          await updateDoc(userRef, {
            favorites: [...userData.favorites, estateId],
          });
        }

        console.log("İlan favorilere eklendi!");
      }
    } catch (error) {
      console.log("hata", error);
    }

    //let userDocRef;

    // userSnapshot.forEach((doc) => {
    //   userDocRef = doc.ref;
    // });

    // Kullanıcının varlığını kontrol et
    // if (!userDocRef) {
    //   console.error("Kullanıcı bulunamadı!");
    //   return;
    // }
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
              className="text-gray-800/80 rounded-lg px-3 py-2 hover:bg-gray-300/50 cursor-pointer duration-300 active:scale-90"
              onClick={() => favoriteClickHandler(item.id, userActive.email)}
            >
              <FavoriteBorderRoundedIcon fontSize="small" />
              <span className="text-sm font-semibold underline ml-2">Save</span>
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
