import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import MobileMenu from "../../components/MobileMenu/MobileMenu";

const Layout = ({ unAuthNavbar, toggle }) => {
  return (
    <div className="min-h-screen max-w-full flex flex-col gap-20 ">
      <div
        className={`flex-1 max-w-6xl mx-auto flex flex-col
        ${unAuthNavbar && "max-w-full"}
       `}
      >
        {toggle && !unAuthNavbar && <Navbar />}

        <Outlet />
      </div>
      {toggle && !unAuthNavbar && <Footer />}
      <MobileMenu />
    </div>
  );
};

export default Layout;
