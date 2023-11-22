import React from "react";
import "./Advantages.css";

const Advantages = () => {
  return (
    <div className="w-full h-[30rem] flex flex-col gap-14 ">
      <div className="w-full flex items-center justify-center">
        <p className="text-gray-800 h-full text-4xl tracking-wider leading-snug">
          What are the advantages of working with us?
        </p>
      </div>
      <div className="flex w-full h-full">
        <div className="left flex-1 h-full flex items-center justify-between">
          <div className="image w-full h-[25rem] flex ">
            <img
              src="images\family.jpeg"
              alt=""
              className="object-contain w-[95%] h-full"
            />
          </div>
        </div>
        <div className="right flex-1 h-full flex flex-col gap-8">
          <div className="flex-1 flex justify-between">
            <div className="w-[17rem] border border-gray-700 rounded-3xl flex flex-col items-center justify-center gap-8 ">
              <h2 className="font-semibold">Strong Search System</h2>
              <p className="w-full text-xs text-gray-700/80 flex items-center justify-center">
                Personalized home search
              </p>
            </div>
            <div className="w-[17rem] border border-gray-700 rounded-3xl flex flex-col items-center justify-center gap-8">
              <h2 className="font-semibold">Commission rebate</h2>
              <p className="w-full text-xs text-gray-700/80 flex items-center justify-center">
                We offer the best options for rebate
              </p>
            </div>
          </div>
          <div className="flex-1 flex justify-between">
            <div className="w-[17rem] border border-gray-700 rounded-3xl flex flex-col items-center justify-center gap-8">
              <h2 className="font-semibold">Strong Search System</h2>
              <p className="w-full text-xs text-gray-700/80 flex items-center justify-center">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="w-[17rem] border border-gray-700 rounded-3xl flex flex-col items-center justify-center gap-8">
              <h2 className="font-semibold">Strong Search System</h2>
              <p className="w-full text-xs text-gray-700/80 flex items-center justify-center">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
