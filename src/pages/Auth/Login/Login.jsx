import React, { useEffect, useState } from "react";
import AuthEntranceSide from "../../../components/AuthEntranceSide/AuthEntranceSide";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setUnAuthNavbar }) => {
  const navigate = useNavigate();
  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();

  const { email, password } = user;

  const handleSignIn = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex max-w-full ">
      <AuthEntranceSide />

      <div className="flex-1 flex bg-[#ffffff]">
        <div className="flex flex-col gap-5 w-full px-16 py-32">
          <h3 className="font-semibold">Welcome!</h3>
          <form action="" className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
              placeholder="E-mail"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <input
              type="password"
              name="password"
              id="password"
              className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
              placeholder="Password"
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <button
              onClick={handleSignIn}
              className="w-24 h-12 text-white bg-[#36cf94] rounded-md mb-5"
            >
              SIGN IN
            </button>
          </form>
          <div className=" text-[0.9rem] text-gray-600">
            Don't have an account yet?
            <Link to="/register">
              <span className="text-[#36cf94] ml-1 font-medium hover:brightness-100 duration-300 text-sm">
                Click to register
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
