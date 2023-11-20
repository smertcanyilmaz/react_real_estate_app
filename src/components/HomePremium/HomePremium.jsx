import React, { useContext } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import CheckIcon from "@mui/icons-material/Check";
import { ContextProfile } from "../../Context/ProfileContext";

const HomePremium = () => {
  const { userActive } = useContext(Context);
  const { userSubscribe } = useContext(ContextProfile);
  const navigate = useNavigate();
  return (
    <div className="w-full h-[41rem] flex flex-col items-center mt-[10rem] mb-[10rem] gap-40">
      <div className="main_title text-4xl tracking-wider leading-snug lineer_text relative">
        Take a closer look at your membership options
        <button
          disabled={userSubscribe}
          onClick={() => navigate("/membership")}
          className={`text-base tracking-normal leading-none absolute top-20 -right-[10rem] h-14 px-3 rounded-lg text-gray-50  flex items-center gap-1 ${
            userSubscribe ? "bg-[#36cf94]" : "bg-gray-800"
          }`}
        >
          {userSubscribe ? "Subscribed" : "Become Member"}
          {userSubscribe ? (
            <span>
              <CheckIcon />
            </span>
          ) : (
            <span className="font-bold">
              <AddRoundedIcon sx={{ color: "rgb(59 130 246)" }} />
            </span>
          )}
        </button>
      </div>
      <div className="w-full h-full flex border-2 border-gray-300 rounded-3xl p-10 -z-20">
        <div className="flex-1 flex flex-col gap-10">
          <div className="title text-2xl font-semibold">
            Save up to 2% an any home
          </div>
          <div className="content flex-1 flex flex-col justify-between text-gray-800/80 ">
            <p>Full service agent</p>
            <p>Personalized home search</p>
            <p>On-demand private showing</p>
            <p>Board package preparation</p>
            <p>Online home buying platform</p>
            <p>Commission rebate</p>
            <p>Valuation and negotiation assistance</p>
            <p className="text-blue-500 font-semibold">Limitless post ad</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-10 relative">
          <div className="bg-[#CBC3E3] w-full h-[37rem] absolute -top-[6.8rem] rounded-[3rem] -z-10 shadow-2xl shadow-indigo-500/50"></div>
          <div className="title text-3xl font-semibold ">
            Membership
            <span className="font-bold ml-1">
              <AddRoundedIcon
                fontSize="large"
                sx={{ color: "rgb(59 130 246)" }}
              />
            </span>
          </div>
          <div className="content flex-1 flex flex-col items-center justify-between text-gray-800/80 text-blue-500">
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-10">
          <div className="title text-2xl font-semibold">Membership</div>
          <div className="content flex-1 flex flex-col items-center justify-between text-gray-800/80">
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <CheckCircleRoundedIcon />
            <HighlightOffRoundedIcon />
            <HighlightOffRoundedIcon style={{ marginBottom: "-6px" }} />
            <div className="bg-red-200/80 text-red-500 text-sm font-semibold px-4 py-2 rounded-xl flex items-center justify-center">
              Only 1 post ad
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePremium;
