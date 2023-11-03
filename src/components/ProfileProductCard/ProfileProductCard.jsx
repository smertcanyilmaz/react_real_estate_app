import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import DeleteIcon from "@mui/icons-material/Delete";
import CallMadeRoundedIcon from "@mui/icons-material/CallMadeRounded";
import RemoveCircleOutlineRoundedIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";

const ProfileProductCard = ({
  estateDataFilter,
  passiveClickHandler,
  estateDataFilter2,
  activeClickHandler,
  post,
}) => {
  const navigate = useNavigate();
  const [deleteValid, setDeleteValid] = useState(false);

  const postChecker = post === "active" ? estateDataFilter : estateDataFilter2;
  const clickChecker =
    post === "active" ? passiveClickHandler : activeClickHandler;

  const deleteClickHandler = async (estateId) => {
    // ilan siler güncelleme işlemi zaten activepost ve passivepost sayfalarında yapılıyor
    const estateRef = doc(db, "estates", estateId);
    try {
      await deleteDoc(estateRef);
      console.log("İlan silindi.");
    } catch (error) {
      console.error("İlan silinirken bir hata oluştu: ", error);
    }
  };

  const deleteValidHandler = (estateId) => {
    const findId = postChecker.find((post) => post.id === estateId);
    console.log(findId);
    if (findId) {
      setDeleteValid(true);
    } else {
      setDeleteValid(false);
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
      {postChecker.map((estate) => (
        <div
          key={estate.id}
          className="flex w-full max-h-[12rem] p-3 shadow-md shadow-gray-200/50"
        >
          {
            <div className="w-full h-full flex gap-3">
              <div
                className="max-w-[14rem] h-full cursor-pointer"
                onClick={() => navigate(`/estates/${estate.id}`)}
              >
                <img
                  src={estate.image}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 h-full flex">
                <div className="flex-1 h-full flex flex-col justify-between text-sm">
                  <p>
                    <span>Date</span>: {estate?.date}
                  </p>
                  <p className="capitalize">
                    <span>Title</span>: {estate?.title}
                  </p>
                  <p className="capitalize">
                    <span>Property Type</span>: {estate?.status}
                  </p>
                  <p className="capitalize">
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
                              <p key={index}>{special},</p>
                            ))
                        : estate?.specials?.map((special, index) => (
                            <p key={index}>{special},</p>
                          ))}
                      {estate?.specials?.length > 3 ? "(...)" : ""}
                    </div>
                  }
                  <p>
                    <span>Price</span>: €{estate?.price}
                  </p>
                  {/* <p>
                    <span>Location</span>: {estate?.place?.district},{" "}
                    {estate?.place?.city},{estate?.place?.country}
                  </p> */}
                </div>
                <div className="w-1/4 h-full flex flex-col items-end justify-between gap-3 relative rounded-md">
                  {post === "active" && (
                    <button
                      onClick={() => navigate(`/estates/${estate.id}`)}
                      className="btn bg-gray-800"
                    >
                      Go
                      <LaunchRoundedIcon fontSize="small" />
                    </button>
                  )}

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
                  <button
                    onClick={() => deleteValidHandler(estate.id)}
                    className="btn bg-[#ef4a4a] duration-300"
                  >
                    Delete
                    <DeleteIcon fontSize="small" />
                  </button>

                  <>
                    <div
                      className={`absolute top-0 left-0 w-full h-full bg-gray-50 after:rounded-md ${
                        deleteValid
                          ? "opacity-100 pointer-events-auto duration-500"
                          : "opacity-0 pointer-events-none duration-500"
                      }`}
                    >
                      {/*overlay*/}
                    </div>
                    <div
                      className={`bg-gray-50 w-full h-full flex items-center justify-center absolute  p-1 rounded-xl border border-[#ef4a4a] ${
                        deleteValid
                          ? "opacity-100 pointer-events-auto duration-500"
                          : "opacity-0 pointer-events-none duration-500"
                      }`}
                    >
                      <div className="w-full flex flex-col items-center justify-center gap-3 rounded-md">
                        <DeleteIcon style={{ color: "#ef4a4a" }} />
                        <p className="text-xs font-semibold">Are you sure?</p>

                        <button
                          onClick={() => deleteClickHandler(estate.id)}
                          className="w-3/4 p-[6px] text-sm text-gray-50 bg-[#ef4a4a] rounded-md hover:brightness-105 duration-300"
                        >
                          Yes, delete
                        </button>
                        <button
                          onClick={() => setDeleteValid((prev) => !prev)}
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
