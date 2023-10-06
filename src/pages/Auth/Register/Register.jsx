import React, { useEffect, useState } from "react";
import AuthEntranceSide from "../../../components/AuthEntranceSide/AuthEntranceSide";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = ({ setUnAuthNavbar }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();
  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);

  const { email, password } = user;

  const handleSignUp = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex max-w-full">
      <AuthEntranceSide />

      <div className="flex-1 bg-[#ffffff]">
        <div className="flex flex-col gap-5 w-full px-16 py-32">
          <p className="text-gray-800 mb-2 font-semibold text-sm">
            Sell, Rent or Explore Your New Home..
          </p>
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
            <div className="passwords flex gap-5">
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
              <input
                type="password"
                name="passwordc"
                id="passwordc"
                className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
                placeholder="Password Confirm"
                onChange={(e) => {
                  setUser({ ...user, passwordc: e.target.value });
                }}
              />
            </div>

            <button
              onClick={handleSignUp}
              className="w-24 h-12 text-white bg-[#36cf94] rounded-md mb-5"
            >
              SIGN UP
            </button>
          </form>
          <Link to="/login">
            <div>
              Have an account?
              <span className="text-[#36cf94] ml-1 font-medium hover:brightness-100 duration-300 text-sm">
                Sign In
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
