import React from "react";
import "./Advantages.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";

const Advantages = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="up flex-1 h-full flex">
        <div className="flex-1 flex items-center">
          <h1 className="text-5xl text-[#06815b] w-2/3 leading-snug">
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
              <h2 className="font-semibold text-3xl text-[#ecba59]">
                Full service agent
              </h2>
              <p className="w-full  flex items-center justify-center font-semibold">
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
              <h2 className="font-semibold text-3xl text-[#ecba59]">
                Personalized search engine
              </h2>
              <p className="w-full  flex items-center justify-center font-semibold">
                Search engine capable of finding the most suitable home for you
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex ">
        <div className="w-[30%] flex items-center">
          <h1 className="text-3xl text-black w-2/3 leading-snug italic">
            "I am profitable with my subscription with a reliable business plan"
          </h1>
        </div>
        <div className="w-[70%] h-full flex justify-end gap-5 text-gray-100">
          <div className="w-[65%] rounded-xl">
            <img
              src="images/owner_tiny.jpg"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex w-[35%] flex-col gap-5">
            <div className="w-full h-[17.813rem] flex flex-col items-center gap-8 bg-[#06815b] rounded-xl p-5">
              <div className="w-full flex items-center justify-between">
                <h2 className="text-xs font-semibold">YOUR ECONOMY</h2>
                <PaidOutlinedIcon />
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="font-semibold text-3xl text-[#ecba59]">
                  Commission rebate
                </h2>
                <p className="w-full flex items-center justify-center font-semibold">
                  We offer you the best rebate rate 25%
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-[#ecba59] rounded-xl">
              <h2 className="font-semibold text-xl text-black">House Owner</h2>
              <p className="font-semibold text-black">Jack Smith</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
