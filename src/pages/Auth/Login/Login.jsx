import React, { useEffect } from "react";

const Login = ({ setUnAuthNavbar }) => {
  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);
  return <div>Login</div>;
};

export default Login;
