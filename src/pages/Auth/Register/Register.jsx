import React, { useEffect } from "react";
import SideEntrance from "../../../components/sideEntrance/sideEntrance";

const Register = ({ setUnAuthNavbar }) => {
  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);
  return (
    <div className="flex max-w-full">
      <SideEntrance />

      <div className="flex-1 bg-gray-500"> register side</div>
    </div>
  );
};

export default Register;
