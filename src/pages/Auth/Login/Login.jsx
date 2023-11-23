import React, { useEffect, useState } from "react";
import AuthEntranceSide from "../../../components/AuthEntranceSide/AuthEntranceSide";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Slide, ToastContainer, toast } from "react-toastify";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

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
  const [logingLoading, setLogingLoading] = useState(false);

  const [inputValidity, setInputValidity] = useState(false);
  const [emailPasswordChecker, setEmailPasswordChecker] = useState(false);
  const [emailInvalidChecker, setEmailInvalidChecker] = useState(false);

  useEffect(() => {
    if (email === "" || password === "") {
      setInputValidity(true);
    } else {
      setInputValidity(false);
    }
  }, [email, password]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLogingLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user, "userrrrrrrrrrr");
        setLogingLoading(false);

        toast.success(
          "Successfully signed in! You are directed to the home page",
          {
            position: "top-right",
            autoClose: 2000,

            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            onClose: () => {
              // Toast kapatıldığında yapılacak işlemler
              navigate("/"); // Yeni sayfaya yönlendirme
            },
          }
        );

        // setTimeout(() => {
        //   navigate("/");
        // }, 5000);
      })
      .catch((error) => {
        console.log(error.code);
        setLogingLoading(false);
        toast.error("Something went wrong!", { autoClose: "1000" });
        if (error.code === "auth/invalid-login-credentials") {
          setEmailPasswordChecker(true);
          setEmailInvalidChecker(false);
        } else if (error.code === "auth/invalid-email") {
          setEmailInvalidChecker(true);
          setEmailPasswordChecker(false);
        } else {
          setEmailPasswordChecker(false);
          setEmailInvalidChecker(false);
        }
      });
  };

  const [passwordVisible, setpasswordVisible] = useState(false);

  const passwordVisibleHandler = () => {
    setpasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex w-screen ">
      <AuthEntranceSide />
      <div className="flex-1 flex bg-[#ffffff]  items-center justify-center">
        <div className="flex flex-col gap-5 w-full px-16 ">
          <h3 className="font-semibold">Welcome!</h3>
          <form action="" className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              id="email"
              className={`bg-transparent w-full h-12 pl-3 rounded-md ${
                emailPasswordChecker || emailInvalidChecker
                  ? " border border-[#ef4a4a]"
                  : "border border-gray-400/60"
              }`}
              placeholder="E-mail"
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <div
              className={`w-full flex items-center  rounded-md ${
                emailPasswordChecker || emailInvalidChecker
                  ? " border border-[#ef4a4a]"
                  : "border border-gray-400/60"
              }`}
            >
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
                className="mr-3 cursor-pointer"
              >
                {passwordVisible ? (
                  <VisibilityOffIcon sx={{ color: "rgb(156 163 175 / 0.6)" }} />
                ) : (
                  <VisibilityIcon sx={{ color: "rgb(156 163 175 / 0.6)" }} />
                )}
              </div>
            </div>
            {(emailPasswordChecker || emailInvalidChecker) && (
              <div className=" w-1/2 h-12 flex items-center justify-center  bg-red-200/80 font-semibold text-[#ef4a4a] text-xs rounded-md">
                {emailPasswordChecker
                  ? "Incorrect email address or password"
                  : "This email address is invalid"}
              </div>
            )}
            <button
              onClick={handleSignIn}
              disabled={inputValidity}
              className={`w-24 h-12 text-white bg-[#36cf94] rounded-md mb-5 cursor-not-allowed ${
                logingLoading ? "opacity-60" : "opacity-100"
              } ${inputValidity ? "opacity-60" : "opacity-100 cursor-pointer"}`}
            >
              {!logingLoading ? (
                <> SIGN IN</>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <div className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-gray-50 border-r-transparent align-[-0.125em] "></div>
                  <p className="text-sm text-gray-50">Loading</p>
                </div>
              )}
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
      <ToastContainer transition={Slide} />
    </div>
  );
};

export default Login;
