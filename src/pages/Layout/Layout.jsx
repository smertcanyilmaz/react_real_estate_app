import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Layout = ({ unAuthNavbar, authMenuChecker, setAuthMenuChecker }) => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div
      className={`min-h-screen max-w-full flex flex-col  ${
        authMenuChecker || window.innerWidth <= 640 ? "gap-0" : "gap-20"
      }`}
    >
      <div
        className={`flex-1 max-w-6xl md:mx-auto flex flex-col  ${
          unAuthNavbar && "max-w-full"
        }
         
       `}
      >
        {path !== "/membership" &&
          path !== "/login" &&
          path !== "/register" && <Navbar />}

        <Outlet />
      </div>
      {path !== "/membership" && path !== "/login" && path !== "/register" && (
        <Footer />
      )}
      <MobileMenu />
    </div>
  );
};

export default Layout;
