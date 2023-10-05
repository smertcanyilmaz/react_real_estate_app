import React, { useEffect } from "react";
import AuthEntranceSide from "../../../components/AuthEntranceSide/AuthEntranceSide";

const Register = ({ setUnAuthNavbar }) => {
  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);
  return (
    <div className="flex max-w-full">
      <AuthEntranceSide />

      <div className="flex-1 bg-gray-500"> register side</div>
    </div>
  );
};

export default Register;
