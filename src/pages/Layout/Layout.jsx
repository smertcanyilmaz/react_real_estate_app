import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Layout = () => {
  const location = useLocation();
  const path = location.pathname;
  const layoutChecker = !["/membership", "/login", "/register"].includes(path);

  return (
    <div
      className={`min-h-screen max-w-full flex flex-col  ${
        window.innerWidth <= 640 ? "gap-0" : "gap-20"
      }`}
    >
      <div
        className={`flex-1 md:mx-auto flex flex-col  
        ${layoutChecker ? "max-w-6xl" : "max-w-screen"}
       `}
      >
        {layoutChecker && <Navbar />}

        <Outlet />
      </div>
      {layoutChecker && <Footer />}
      <MobileMenu />
    </div>
  );
};

export default Layout;
