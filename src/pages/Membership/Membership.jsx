import React, { useEffect } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";

const Membership = ({ setUnAuthNavbar }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);
  return (
    <div className="w-full h-[100vh] flex">
      <div className="left flex-1 h-full">
        <img
          src="images\pexels-fauxels-3183197.jpg"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="right h-full flex-1 flex flex-col  justify-between py-5">
        <div onClick={() => navigate("/")} className="ml-6 cursor-pointer">
          <KeyboardBackspaceIcon fontSize="large" />
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-14">
          {/* <div className="bg-[#CBC3E3] w-full h-[37rem] absolute -top-[6.8rem] rounded-[3rem] -z-10 shadow-2xl shadow-indigo-500/50"></div> */}
          <div className="title text-3xl font-semibold ">
            Membership
            <span className="font-bold ml-1">
              <AddRoundedIcon
                fontSize="large"
                sx={{ color: "rgb(59 130 246)" }}
              />
            </span>
          </div>
          <button className="w-28 h-12 bg-red-500 text-gray-100 rounded-xl mr-5">
            Subscribe
          </button>
        </div>
        <div className="w-full text-center text-gray-500 text-sm">
          Since this is a portfolio project, there will be no fee. Just click
          and subscribe!
        </div>
      </div>
    </div>
  );
};

export default Membership;
