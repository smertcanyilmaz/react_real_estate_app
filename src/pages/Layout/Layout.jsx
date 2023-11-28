import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Layout = ({ ref0 = { ref0 }, unAuthNavbar }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="h-screen max-w-full flex flex-col gap-20">
      <div
        className={`flex-1 max-w-6xl mx-auto flex flex-col 
        ${unAuthNavbar && "max-w-full"}
       `}
      >
        {!unAuthNavbar && <Navbar ref0={ref0} />}

        <Outlet />
      </div>
      {!unAuthNavbar && <Footer />}
    </div>
  );
};

export default Layout;
