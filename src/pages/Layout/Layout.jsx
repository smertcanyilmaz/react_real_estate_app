import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import EngineeringIcon from "@mui/icons-material/Engineering";

const Layout = ({ unAuthNavbar }) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (!toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <>
      <div
        className={`md:hidden w-screen h-full bg-black opacity-80 ${
          toggle ? "hidden" : "sm:fixed top-0 left-0 right-0 bottom-0"
        }`}
      ></div>
      <div
        className={`md:hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18rem] h-1/2 bg-gray-200 p-3 rounded-md ${
          toggle ? "hidden" : "sm:absolute"
        } `}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-10">
          <div className="w-full flex flex-col items-center gap-5 ">
            <EngineeringIcon fontSize="large" />
            <h3 className="capitalize font-semibold text-gray-800">
              mobile design is being developed
            </h3>
            <p className="text-sm">Please continue on your computer</p>
          </div>
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="capitalize w-2/3 h-1/5  bg-gray-800 text-gray-100 rounded-md text-sm "
          >
            go ahead anyway
          </button>
        </div>
      </div>
      <div className="min-h-screen max-w-full flex flex-col gap-20 ">
        <div
          className={`flex-1 max-w-6xl mx-auto flex flex-col
        ${unAuthNavbar && "max-w-full"}
       `}
        >
          {!unAuthNavbar && <Navbar />}

          <Outlet />
        </div>
        {!unAuthNavbar && <Footer />}
      </div>{" "}
    </>
  );
};

export default Layout;
