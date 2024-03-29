import React, { useContext, useEffect, useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config";
import { ContextProfile } from "../../Context/ProfileContext";
import { Slide, ToastContainer, toast } from "react-toastify";
import { ContextFilter } from "../../Context/FilterContext";

const Membership = () => {
  const navigate = useNavigate();
  const { userActive, userActiveUid } = useContext(Context);
  const { userSubscribe, setUserSubscribe } = useContext(ContextProfile);
  const [membershipLoading, setMembershipLoading] = useState(false);
  const { setStatus } = useContext(ContextFilter);

  const subscribeHandler = async () => {
    if (userActive) {
      const userRef = doc(db, "users", userActiveUid);
      setMembershipLoading(true);
      try {
        await updateDoc(userRef, {
          subscribe: true,
        });
        setUserSubscribe(true);
        setMembershipLoading(false);
        toast.success("Congrats, you have subscribed!", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
        });
        console.log("Kullanıcı abone oldu");
      } catch (error) {
        console.error("Abonelik hatası:", error);
        setMembershipLoading(false);
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (userSubscribe) {
        navigate("/");
        window.location.reload();
      }
    }, 3500);

    return () => {
      clearTimeout(timeout);
    };
  }, [userSubscribe]);

  const logoClickHandler = () => {
    setStatus("");
    navigate(-1);
  };

  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center md:items-start md:justify-start">
      <div className="left w-[60%] h-full hidden md:block">
        <img
          src="images\pexels-fauxels-3183197.jpg"
          className={`w-full h-full object-cover ${
            imageLoaded ? "block" : "hidden"
          }`}
          onLoad={handleImageLoad}
        />
      </div>
      {imageLoaded ? (
        <>
          <div className="right h-full md:w-[40%] flex flex-col  justify-between py-5">
            <div onClick={logoClickHandler} className="ml-6 cursor-pointer">
              <KeyboardBackspaceIcon fontSize="large" />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-14">
              <div className="title text-3xl font-semibold ">
                Membership
                <span className="font-bold ml-1">
                  <AddRoundedIcon
                    fontSize="large"
                    sx={{ color: "rgb(59 130 246)" }}
                  />
                </span>
              </div>

              <button
                disabled={userSubscribe}
                onClick={subscribeHandler}
                className={`w-28 h-12  text-gray-100 rounded-xl mr-5 ${
                  userSubscribe ? "bg-[#36cf94]" : "bg-red-500"
                } ${membershipLoading && "bg-red-500"}`}
              >
                {!membershipLoading ? (
                  <>{userSubscribe ? "Subscribed" : "Subscribe"}</>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-gray-50 border-r-transparent align-[-0.125em] "></div>
                  </div>
                )}
              </button>
            </div>
            <div className="w-full text-center text-gray-500 text-xs md:text-sm mb-16 md:mb-0">
              Since this is a portfolio project, there will be no fee. Just
              click and subscribe!
            </div>
          </div>{" "}
        </>
      ) : (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="inline-block h-10 w-10 animate-spin rounded-full border-2 border-solid border-gray-800 border-r-transparent align-[-0.125em] "></div>
        </div>
      )}
      <ToastContainer transition={Slide} />
    </div>
  );
};

export default Membership;
