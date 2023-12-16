import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CloseIcon from "@mui/icons-material/Close";

const Layout = ({ unAuthNavbar }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="min-h-screen max-w-full flex flex-col gap-20">
      <div
        className={`md:hidden w-screen h-screen sm:overflow-y-hidden bg-black opacity-80 ${
          toggle ? "hidden" : "sm:fixed  "
        }`}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18rem] h-1/2 bg-gray-200/80 p-3 rounded-md">
          <div className="w-full h-full flex flex-col items-center gap-8">
            <div
              onClick={() => setToggle((prev) => !prev)}
              className="close w-full"
            >
              <CloseIcon />
            </div>
            <div className="w-full flex flex-col items-center justify-center gap-8">
              <EngineeringIcon fontSize="large" />
              <h3 className="capitalize font-semibold text-gray-800">
                mobile design is being developed
              </h3>
              <p className="text-sm">Please continue on your computer</p>
            </div>
            <button className="capitalize w-2/3 h-16  bg-gray-800 text-gray-100 rounded-md text-sm ">
              go ahead anyway
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex-1 max-w-6xl mx-auto flex flex-col
        ${unAuthNavbar && "max-w-full"}
       `}
      >
        {!unAuthNavbar && <Navbar />}

        <Outlet />
      </div>
      {!unAuthNavbar && <Footer />}
    </div>
  );
};

export default Layout;
