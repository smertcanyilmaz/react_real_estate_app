import React from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  doc,
  updateDoc,
  collection,
  onSnapshot,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase-config";

const ProfileProductCard = ({
  estateDataFilter,
  passiveClickHandler,
  estateDataFilter2,
  activeClickHandler,
  post,
}) => {
  const navigate = useNavigate();

  const postChecker = post === "active" ? estateDataFilter : estateDataFilter2;
  const clickChecker =
    post === "active" ? passiveClickHandler : activeClickHandler;

  const deleteClickHandler = async (estateId) => {
    const estateRef = doc(db, "estates", estateId);
    try {
      await deleteDoc(estateRef);
      console.log("İlan silindi.");
    } catch (error) {
      console.error("İlan silinirken bir hata oluştu: ", error);
    }
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
      {postChecker.map((estate, index) => (
        <div
          key={index}
          className="flex w-full max-h-[13rem] p-3 shadow-md shadow-gray-200/50"
        >
          {
            <div className="w-full h-full flex gap-3">
              <div
                className="max-w-[14rem] h-full cursor-pointer"
                onClick={() => navigate(`/estates/${estate.id}`)}
              >
                <img
                  src={estate.image}
                  className="w-[14rem] h-full object-cover"
                />
              </div>
              <div className="flex-1 h-full flex">
                <div className="flex-1 h-full flex flex-col justify-between text-sm">
                  <p>
                    <span>Ad Date</span>:{estate?.date}
                  </p>
                  <p className="capitalize">
                    <span>Property Type</span>: {estate?.status}
                  </p>
                  <p>
                    <span>Category</span>: {formatCategory(estate?.category)}
                  </p>
                  <div className="flex gap-1">
                    <p>
                      <span>Bedrooms</span>: {estate?.rooms?.bedrooms},
                    </p>
                    <p>
                      <span>Bathrooms</span>: {estate?.rooms?.bathrooms}
                    </p>
                  </div>
                  {
                    <div className="flex gap-1">
                      <span>Features</span>:
                      {estate?.specials?.length > 3
                        ? estate?.specials
                            .slice(0, 3)
                            .map((special, index) => (
                              <p key={index}>{special}</p>
                            ))
                        : estate?.specials?.map((special, index) => (
                            <p key={index}>{special}</p>
                          ))}
                      {estate?.specials?.length > 3 ? "(...)" : ""}
                    </div>
                  }
                  <p>
                    <span>Price</span>: €{estate?.price}
                  </p>
                  <p>
                    <span>Location</span>: {estate?.place?.district},{" "}
                    {estate?.place?.city},{estate?.place?.country}
                  </p>
                </div>
                <div className="flex-2 h-full flex flex-col justify-between gap-3 ">
                  <button
                    onClick={() => navigate(`/estates/${estate.id}`)}
                    className="btn bg-gray-800 "
                  >
                    Go Ad
                  </button>
                  <button className="btn bg-[#f0957e]">Edit Ad</button>
                  <button
                    onClick={() => clickChecker(estate.id)}
                    className="btn bg-gray-500/60"
                  >
                    {post === "active" ? "Passive Ad" : "Active Ad"}
                  </button>
                  <button
                    onClick={() => deleteClickHandler(estate.id)}
                    className="btn bg-red-600"
                  >
                    Delete Ad
                  </button>
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
