import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import SideEntrance from "../../components/sideEntrance/sideEntrance";

//TODO: NAVBAR SİTE İCONU TIKLANDIĞINDA VE ANASAYFAYA GİTTİĞİNDE KAYIYOR. ÇÖZÜM: SCROLLBAR AÇIK KAPALI OLDUĞUNDA OLUYOR.

const Layout = ({ ref0 = { ref0 }, unAuthNavbar }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div
      className={`max-w-6xl mx-auto flex flex-col ${
        unAuthNavbar && "max-w-full"
      }`}
    >
      {!unAuthNavbar ? <Navbar ref0={ref0} /> : <SideEntrance />}

      <Outlet />
    </div>
  );
};

export default Layout;
