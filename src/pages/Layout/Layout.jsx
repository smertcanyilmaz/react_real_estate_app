import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

//TODO: NAVBAR SİTE İCONU TIKLANDIĞINDA VE ANASAYFAYA GİTTİĞİNDE KAYIYOR. ÇÖZÜM: SCROLLBAR AÇIK KAPALI OLDUĞUNDA OLUYOR.

const Layout = ({ ref0 = { ref0 } }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex flex-col">
      <Navbar ref0={ref0} />
      <Outlet />
    </div>
  );
};

export default Layout;