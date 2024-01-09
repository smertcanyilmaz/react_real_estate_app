import React from "react";
import "./Advantages.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const Advantages = () => {
  return (
    <div className="w-[95%] mx-auto md:mx-0 md:w-full flex flex-col gap-5">
      <div className="up flex-1 h-full flex flex-col md:flex-row gap-5 md:gap-0">
        <div className="flex-1 flex items-center">
          <h1 className="text-lg md:text-5xl text-[#06815b] md:w-2/3 leading-snug text-center md:text-start">
            What are the <span className="font-semibold">advantages </span> of
            working with us?
          </h1>
        </div>
        <div className="flex-1 h-full flex justify-between gap-5 text-gray-100">
          <div className="flex-1 flex flex-col items-center gap-8  bg-[#06815b] rounded-xl p-5">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-xs font-semibold">YOUR BUSINESS</h2>
              <TrendingUpIcon />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold  md:text-3xl text-[#ecba59]">
                Full service agent
              </h2>
              <p className="w-full flex items-center justify-center font-semibold text-xs md:text-base">
                We will be by your side whenever you wish with our experienced
                and professional staff
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center gap-8  bg-[#06815b] rounded-xl p-5">
            <div className="w-full flex items-center justify-between">
              <h2 className="text-xs font-semibold">YOUR TIME</h2>
              <AccessTimeIcon />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-semibold  md:text-3xl text-[#ecba59]">
                Personalized search engine
              </h2>
              <p className="w-full flex items-center justify-center font-semibold text-xs md:text-base">
                Search engine capable of finding the most suitable home for you
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col-reverse md:flex-row">
        <div className="w-fullmd:w-[30%] flex items-center mt-3 md:mt-0">
          <h1 className=" md:text-3xl text-black md:w-2/3 leading-snug italic">
            "I make a profit from my subscription with a reliable business plan"
          </h1>
        </div>
        <div className="md:w-[70%] h-full flex justify-end gap-5 text-gray-100 ">
          <div className="w-[50%] md:w-[65%] rounded-xl">
            <img
              src="images/owner_tiny.jpg"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex w-[50%] md:w-[35%] flex-col gap-5">
            <div className="w-full md:h-[17.813rem] flex flex-col items-center gap-8 bg-[#06815b] rounded-xl p-5">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-xs font-semibold">YOUR ECONOMY</h2>
                <PaidOutlinedIcon />
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="font-semibold  md:text-3xl text-[#ecba59]">
                  Commission rebate
                </h2>
                <p className="w-full flex items-center justify-center font-semibold text-xs md:text-base">
                  We offer you the best rebate rate 25%
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-1 md:p-0 md:gap-1 bg-[#ecba59] rounded-xl">
              <h2 className="font-semibold text-xs md:text-xl text-black">
                House Owner
              </h2>
              <p className="font-semibold text-black text-xs md:text-base">
                Jack Smith
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
