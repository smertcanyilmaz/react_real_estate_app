import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Layout = ({ unAuthNavbar, authMenuChecker, setAuthMenuChecker }) => {
  return (
    <div
      className={`min-h-screen max-w-full flex flex-col ${
        authMenuChecker || window.innerWidth <= 640 ? "gap-0" : "gap-20"
      }`}
    >
      <div
        className={`flex-1 max-w-6xl md:mx-auto flex flex-col ${
          unAuthNavbar && "max-w-full"
        }
         
       `}
      >
        {!unAuthNavbar && <Navbar />}

        <Outlet />
      </div>
      {!unAuthNavbar && <Footer />}
      <MobileMenu />
    </div>
  );
};

export default Layout;
