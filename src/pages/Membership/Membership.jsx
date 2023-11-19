import React, { useEffect } from "react";

const Membership = ({ setUnAuthNavbar }) => {
  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);
  return <div>Membership</div>;
};

export default Membership;
