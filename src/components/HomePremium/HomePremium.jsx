import React, { useContext } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";
import { ContextProfile } from "../../Context/ProfileContext";

const HomePremium = () => {
  const { userSubscribe } = useContext(ContextProfile);
  const navigate = useNavigate();
  return (
    <div className="w-full h-[46rem] flex flex-col items-center gap-20">
      <div className="main_title font-semibold text-4xl tracking-wide leading-snug text-gray-800">
        Simple Plan For Everything
      </div>
      <div className="w-full h-full flex">
        <div className="flex-1 flex flex-col items-center">
          <div className="content w-[75%] flex-1 flex flex-col justify-between text-gray-800 bg-gray-300 p-10 rounded-3xl ml-10">
            <h1 className="title w-full text-center text-2xl font-semibold text-black">
              Membership
            </h1>
            <h2 className=" w-full text-center text-2xl font-semibold text-black mb-2">
              Free
            </h2>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Full service agent
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Personalized home search
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> On-demand private showing
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Board package preparation
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Online home buying platform
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Post ad
              <div className="bg-red-400 text-gray-100 text-sm font-semibold px-4 py-1 rounded-xl flex items-center justify-center ml-2">
                Only 1 post
              </div>
            </div>
            <div className="flex gap-2 font-semibold">
              <CloseIcon fontSize="small" /> Negotiation assistance
            </div>
            <div className="flex gap-2 font-semibold">
              <CloseIcon fontSize="small" /> Commission rebate
            </div>

            <div className="w-full flex items-center justify-center">
              <button
                disabled
                onClick={() => navigate("/membership")}
                className={`w-48 h-12 text-base tracking-normal leading-none rounded-lg text-gray-50 flex items-center justify-center gap-1 mt-2 bg-gray-800 ${
                  userSubscribe ? "opacity-60" : "opacity-100"
                }`}
              >
                Taken
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-10 relative">
          <div className="content w-[75%] flex-1 flex flex-col justify-between text-gray-300 bg-gray-800 p-10 rounded-3xl mr-10">
            <div className="title w-full text-center text-2xl font-semibold ">
              Membership
              <span className="font-bold ml-1">
                <AddRoundedIcon
                  fontSize="large"
                  sx={{ color: "rgb(59 130 246)" }}
                />
              </span>
            </div>
            <h2 className=" w-full text-center text-2xl font-semibold mb-2 tracking-wide">
              €80<span className="text-xs">/mo</span>
            </h2>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Full service agent
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Personalized home search
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> On-demand private showing
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Board package preparation
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Online home buying platform
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Post ad
              <p className="bg-blue-500 text-gray-100 text-sm font-semibold px-4 py-1 rounded-xl flex items-center justify-center ml-2">
                Limitless
              </p>
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Negotiation assistance
            </div>
            <div className="flex gap-2 font-semibold">
              <CheckIcon fontSize="small" /> Commission rebate
            </div>
            <div className="w-full flex items-center justify-center">
              <button
                disabled={userSubscribe}
                onClick={() => navigate("/membership")}
                className={`w-48 h-12 text-base tracking-normal leading-none rounded-lg text-gray-50 flex items-center justify-center gap-1 mt-2 bg-[#36cf94]  ${
                  userSubscribe ? "shadow-none" : "shadow-2xl shadow-[#36cf94]"
                }`}
              >
                {userSubscribe ? "Subscribed" : "Choose Plan"}
                {userSubscribe ? (
                  <span>
                    <CheckIcon />
                  </span>
                ) : (
                  ""
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePremium;
