import React, { useContext, useEffect, useState } from "react";
import AuthEntranceSide from "../../../components/AuthEntranceSide/AuthEntranceSide";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { db } from "../../../firebase-config";
import { doc, setDoc } from "@firebase/firestore";
import { Context } from "../../../Context/AuthContext";
import CheckIcon from "@mui/icons-material/Check";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Register = ({ setUnAuthNavbar }) => {
  const navigate = useNavigate();
  const { userActive } = useContext(Context);

  const auth = getAuth();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    favorites: [],
    subscribe: false,
  });

  useEffect(() => {
    setUnAuthNavbar(true);
  }, []);

  const { firstName, lastName, email, password, favorites, subscribe } = user;

  const [inputValidity, setInputValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);
  const [emailChecker, setEmailChecker] = useState(false); // aynı email ile kayıt olunamayacağı için bunu kullanıcıya gösteren state

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      !isValidEmail(email)
    ) {
      setInputValidity(true);
    } else {
      setInputValidity(false);
    }

    if (password.length >= 6) {
      setPasswordValidity(true);
    } else {
      setPasswordValidity(false);
      setInputValidity(true);
    }
  }, [firstName, lastName, email, password]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        favorites,
        subscribe
      );
      const user = userCredential.user;

      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        favorites: favorites,
        subscribe: subscribe,
        // Diğer kullanıcı bilgileri
      });
      console.log("kayıt başarılı");

      //signOut(auth);
      //await auth.signOut();
      // kayıt olduğu an çıkış yaptırılması gerekiyor çünkü firebase çalışma mantığında register olunduğu an login de oluyor

      //navigate("/login");
      //navigate("/");
      console.log("USER", user);
    } catch (error) {
      console.log(error);
      console.error("Firebase Hata Kodu:", error.code);
      if (error.code === "auth/email-already-in-use") {
        setEmailChecker(true);
      } else {
        setEmailChecker(false);
      }
    }
  };

  useEffect(() => {
    if (userActive) {
      navigate("/");
    }
  }, [userActive]);

  const [passwordVisible, setpasswordVisible] = useState(false);

  const passwordVisibleHandler = () => {
    setpasswordVisible(!passwordVisible);
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
              type="text"
              name="firstName"
              id="firstName"
              className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
              placeholder="First Name"
              onChange={(e) => {
                setUser({ ...user, firstName: e.target.value });
              }}
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              className="bg-transparent border border-gray-400/60 w-full h-12 pl-3 rounded-md"
              placeholder="Surname"
              onChange={(e) => {
                setUser({ ...user, lastName: e.target.value });
              }}
            />
            <div className="w-full flex flex-col gap-2">
              <input
                type="email"
                name="email"
                id="email"
                className={`w-full h-12 pl-3 bg-transparent rounded-md ${
                  emailChecker
                    ? "border border-[#ef4a4a]"
                    : "border border-gray-400/60"
                }`}
                placeholder="E-mail"
                onChange={(e) => {
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>
            <div className="passwords w-1/2 flex flex-col gap-3">
              <div className="w-full flex items-center border border-gray-400/60 rounded-md">
                <input
                  type={passwordVisible ? "string" : "password"}
                  name="password"
                  id="password"
                  className="bg-transparent border-none outline-none w-full h-12 pl-3"
                  placeholder="Password"
                  onChange={(e) => {
                    setUser({ ...user, password: e.target.value });
                  }}
                />
                <div
                  onClick={passwordVisibleHandler}
                  className="mr-2 cursor-pointer"
                >
                  {passwordVisible ? (
                    <VisibilityIcon sx={{ color: "rgb(156 163 175 / 0.6)" }} />
                  ) : (
                    <VisibilityOffIcon
                      sx={{ color: "rgb(156 163 175 / 0.6)" }}
                    />
                  )}
                </div>
              </div>
              <div className="flex items-center gap-[2px] h-3">
                <p className="text-xs text-gray-800/70">
                  Password must be at least 6 characters
                </p>
                {passwordValidity ? (
                  <CheckIcon fontSize="small" sx={{ color: "#36cf94" }} />
                ) : (
                  ""
                )}
              </div>
            </div>

            {emailChecker && (
              <div className=" w-1/2 h-12 flex items-center justify-center  bg-red-200/80 font-semibold text-[#ef4a4a] text-xs rounded-md">
                This email address is already taken!
              </div>
            )}

            <button
              onClick={handleSignUp}
              className={`w-24 h-12 text-white bg-[#36cf94] rounded-md mb-5 ${
                inputValidity
                  ? "opacity-60 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              }`}
              disabled={inputValidity}
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
