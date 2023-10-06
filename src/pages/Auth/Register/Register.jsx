import React, { useEffect } from "react";
import AuthEntranceSide from "../../../components/AuthEntranceSide/AuthEntranceSide";
import { Link } from "react-router-dom";

const Register = ({ setUnAuthNavbar }) => {
  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);
  return (
    <div className="flex max-w-full">
      <AuthEntranceSide />

      <div className="flex-1 bg-[#ffffff]">
        <div className="flex flex-col gap-5 w-full px-16 py-32">
          <p className="text-gray-800 mb-2 font-semibold text-sm">
            Sell, Rent or Explore Your New Home..
          </p>
          <form action="" className="flex flex-col gap-5">
            <div className="names flex gap-5">
              <input
                type="text"
                name="name"
                id="name"
                className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
                placeholder="Name"
              />
              <input
                type="text"
                name="surname"
                id="surname"
                className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
                placeholder="Surname"
              />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
              placeholder="E-mail"
            />
            <div className="passwords flex gap-5">
              <input
                type="password"
                name="password"
                id="password"
                className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
                placeholder="Password"
              />
              <input
                type="password"
                name="passwordc"
                id="passwordc"
                className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
                placeholder="Password Confirm"
              />
            </div>

            <button className="w-24 h-12 text-white bg-[#36cf94] rounded-md mb-5">
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
