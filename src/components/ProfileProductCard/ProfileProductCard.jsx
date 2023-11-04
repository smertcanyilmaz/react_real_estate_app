import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import { Context } from "../../Context/ProfileContext";
import { getAuth } from "firebase/auth";

const ProfileProductCard = ({ post, myPost }) => {
  const navigate = useNavigate();
  const auth = getAuth();
  const {
    estateDataFilter,
    estateDataFilter2,
    passiveClickHandler,
    activeClickHandler,
    favoriteEstates,
  } = useContext(Context);
  const [deleteValid, setDeleteValid] = useState({});

  let postChecker = post === "active" ? estateDataFilter : estateDataFilter2;
  const postCheckerResult =
    post === "favorites" ? favoriteEstates : postChecker;
  const clickChecker =
    post === "active" ? passiveClickHandler : activeClickHandler;

  const deleteClickHandler = async (estateId) => {
    // ilan silen güncelleme işlemi zaten activepost ve passivepost sayfalarında yapılıyor
    const estateRef = doc(db, "estates", estateId);
    try {
      await deleteDoc(estateRef);
      console.log("İlan silindi.");
    } catch (error) {
      console.error("İlan silinirken bir hata oluştu: ", error);
    }
  };

  const removeFavoriteHandler = async (estateId) => {
    const user = auth.currentUser;
    const userId = user.uid;
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const favorites = userData.favorites.filter((fav) => fav !== estateId);

        // Kullanıcı belgesini güncelle
        await updateDoc(userRef, { favorites: favorites });
        console.log("Favori başarıyla kaldırıldı.");
      } else {
        console.error("Kullanıcı bulunamadı.");
      }
    } catch (error) {
      console.error("Hata oluştu: ", error);
    }
  };

  const deleteValidHandler = (estateId) => {
    // delete butonuna basıldığında tüm ilanlarda are you sure yazısının çıkmasını önler ve sadece tıklanan ilanda bu sorunun çıkmasını sağlar
    setDeleteValid((prev) => ({
      ...prev,
      [estateId]: !prev[estateId],
    }));
  };

  const replacements = [
    //database'e filtreleme için giden kategorileri birleşik olarak yazmıştım. burada onları ayırdım
    { from: "amazingViews", to: "Amazing Views" },
    { from: "tinyHouses", to: "Tiny Houses" },
    { from: "amazingPools", to: "Amazing Pools" },
    { from: "inNature", to: "In Nature" },
  ];

  function formatCategory(category) {
    let formattedCategory = category;
    replacements.forEach((replacement) => {
      formattedCategory = formattedCategory.replace(
        replacement.from,
        replacement.to
      );
    });
    return formattedCategory;
  }

  return (
    <>
      {postCheckerResult.map((estate) => (
        <div
          key={estate.id}
          className={`flex flex-col w-full shadow-md shadow-gray-200/50 ${
            myPost ? " h-[20.1rem] relative p-10" : "p-3 h-[12rem]"
          }`}
        >
          {myPost && (
            <p className="absolute top-3 left-3 text-sm font-semibold text-gray-800">
              Glimpse at favorite,{" "}
              <Link to="/favorites">
                <span className="underline">click for more</span>
              </Link>
            </p>
          )}
          {
            <div
              className={`w-full h-full flex gap-5 ${myPost ? "mt-3" : "mt-0"}`}
            >
              <div
                className={`cursor-pointer ${
                  myPost ? "h-full" : "max-w-[14rem]"
                }`}
                onClick={() => navigate(`/estates/${estate.id}`)}
              >
                <img
                  src={estate.image}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div
                className={`flex-1 h-full flex ${
                  myPost ? "flex-col" : "flex-row"
                }`}
              >
                <div
                  className={`flex-1 h-full flex flex-col ${
                    myPost ? "text-base gap-2" : "text-sm justify-between "
                  }`}
                >
                  {!myPost && (
                    <p>
                      <span>Date</span>: {estate?.date}
                    </p>
                  )}
                  <p className="capitalize">
                    <span>Title</span>: {estate?.title}
                  </p>
                  <p className="capitalize">
                    <span>Property Type</span>: {estate?.status}
                  </p>
                  {!myPost && (
                    <p className="capitalize">
                      <span>Category</span>: {formatCategory(estate?.category)}
                    </p>
                  )}
                  {!myPost && (
                    <div className="flex gap-1">
                      <p>
                        <span>Bedrooms</span>: {estate?.rooms?.bedrooms},
                      </p>
                      <p>
                        <span>Bathrooms</span>: {estate?.rooms?.bathrooms}
                      </p>
                    </div>
                  )}
                  {!myPost && (
                    <div className="flex gap-1">
                      <span>Features</span>:
                      {estate?.specials?.length > 3
                        ? estate?.specials
                            .slice(0, 3)
                            .map((special, index) => (
                              <p key={index}>{special},</p>
                            ))
                        : estate?.specials?.map((special, index) => (
                            <p key={index}>{special},</p>
                          ))}
                      {estate?.specials?.length > 3 ? "(...)" : ""}
                    </div>
                  )}
                  <p>
                    <span>Price</span>: €{estate?.price}
                  </p>
                  {myPost && (
                    <p>
                      <span>Location</span>: {estate?.place?.district},{" "}
                      {estate?.place?.city},{estate?.place?.country}
                    </p>
                  )}
                </div>
                <div
                  className={`flex flex-col items-end justify-between gap-3 relative rounded-md ${
                    myPost ? "w-full" : "w-1/4 h-full "
                  }`}
                >
                  {(post === "active" || post === "favorites") && (
                    <button
                      onClick={() => navigate(`/estates/${estate.id}`)}
                      className={`bg-gray-800 ${myPost ? "btnMyPost" : "btn"}`}
                    >
                      Go
                      <LaunchRoundedIcon fontSize="small" />
                    </button>
                  )}

                  {!(post === "favorites") && (
                    <button
                      onClick={() => clickChecker(estate.id)}
                      className={`btn ${
                        post === "active" ? "bg-[#7D7C7C]" : "bg-[#36cf94]"
                      } `}
                    >
                      {post === "active" ? "Passive" : "Active"}
                      {post === "active" ? (
                        <RemoveCircleOutlineRoundedIcon fontSize="small" />
                      ) : (
                        <CheckRoundedIcon />
                      )}
                    </button>
                  )}
                  {!myPost && (
                    <button
                      onClick={() => deleteValidHandler(estate.id)}
                      className="btn bg-[#ef4a4a] duration-300"
                    >
                      {post === "favorites" ? "Remove " : "Delete"}
                      <DeleteIcon fontSize="small" />
                    </button>
                  )}

                  <>
                    <div
                      className={`absolute top-0 left-0 w-full h-full bg-gray-50 after:rounded-md ${
                        deleteValid[estate.id]
                          ? "opacity-100 pointer-events-auto duration-500"
                          : "opacity-0 pointer-events-none duration-500"
                      }`}
                    >
                      {/*overlay*/}
                    </div>
                    <div
                      className={`bg-gray-50 w-full h-full flex items-center justify-center absolute  p-1 rounded-xl border border-[#ef4a4a] ${
                        deleteValid[estate.id]
                          ? "opacity-100 pointer-events-auto duration-500"
                          : "opacity-0 pointer-events-none duration-500"
                      }`}
                    >
                      <div className="w-full flex flex-col items-center justify-center gap-3 rounded-md">
                        <DeleteIcon style={{ color: "#ef4a4a" }} />
                        <p className="text-xs font-semibold">Are you sure?</p>

                        {post === "favorites" ? (
                          <button
                            onClick={() => removeFavoriteHandler(estate.id)}
                            className="w-3/4 p-[6px] text-sm text-gray-50 bg-[#ef4a4a] rounded-md hover:brightness-105 duration-300"
                          >
                            Yes, remove
                          </button>
                        ) : (
                          <button
                            onClick={() => deleteClickHandler(estate.id)}
                            className="w-3/4 p-[6px] text-sm text-gray-50 bg-[#ef4a4a] rounded-md hover:brightness-105 duration-300"
                          >
                            Yes, delete
                          </button>
                        )}
                        <button
                          onClick={() => deleteValidHandler(estate.id)}
                          className=" w-full text-xs text-[#ef4a4a] font-semibold hover:brightness-120"
                        >
                          Keep it
                        </button>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          }
        </div>
      ))}
    </>
  );
};

export default ProfileProductCard;
