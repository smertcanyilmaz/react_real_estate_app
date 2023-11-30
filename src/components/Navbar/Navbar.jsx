import { Link, useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "./Logout/Logout";
import { Context } from "../../Context/AuthContext";
import { ContextProfile } from "../../Context/ProfileContext";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const Navbar = ({ ref0 }) => {
  const [showBox, setShowBox] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const { userActive } = useContext(Context);
  const { membershipChecker } = useContext(ContextProfile);
  const { userSubscribe } = useContext(ContextProfile);
  const navigate = useNavigate();

  const mouseOn = () => {
    setShowUser(true);
  };

  const mouseLeave = () => {
    setShowUser(false);
  };

  const showBoxHandler = () => {
    setShowBox((prev) => !prev);
  };

  return (
    <div
      ref={ref0}
      // pt-10
      className="flex w-full max-w-6xl mx-auto h-[11vh] justify-between items-end relative"
    >
      <Link to="/">
        <svg
          width="65"
          height="40"
          viewBox="0 0 65 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-1"
        >
          <path
            d="M43.2072 0L32.4211 7.88354L21.626 0L0 15.794V40H12.551V34.6876H5.31243V18.4994L21.626 6.58455L27.9059 11.1713L21.5722 15.794V40H30.1008H36.6853H43.252V15.794L36.9183 11.1713L43.1982 6.58455L59.5118 18.4994V34.6876H51.6909V40H64.8421V15.794L43.2072 0ZM37.9395 18.4994V34.6876H36.6943H30.1097H26.8936V18.4994L32.4121 14.4681L37.9395 18.4994Z"
            fill="#091638"
          />
        </svg>
      </Link>

      <div className="links flex  text-gray-800 font-semibold">
        <p onClick={() => navigate("/estates")}>All Estates</p>
        <p>For Sale</p>
        <p>To Rent</p>
        <button
          disabled={userSubscribe}
          onClick={() => navigate("/membership")}
          className={`px-8 py-3 rounded-lg duration-200  hover:bg-gray-300/50 ${
            userSubscribe ? "cursor-default" : "cursor-pointer"
          }`}
        >
          Membership
          <span className="font-bold">
            <AddRoundedIcon
              fontSize="small"
              sx={{ color: "rgb(59 130 246)" }}
            />
          </span>
        </button>
      </div>

      <div className="related_user flex gap-5 items-center justify-between relative w-60">
        <div>{/*empty div*/}</div>
        <div
          onMouseLeave={mouseLeave}
          className="user absolute left-0 top-1 w-20 h-[15vh] flex flex-col items-center justify-between  hover:shadow-gray-500/50"
        >
          <div
            onMouseEnter={mouseOn}
            className={`flex items-center gap-3 border border-gray-400/80 rounded-3xl py-1 px-2 duration-300 cursor-pointer ${
              showUser ? "shadow-md shadow-gray-500/50" : "hover:shadow-md"
            }`}
          >
            <MenuIcon />
            <div className="w-8 h-8 text-sm rounded-full bg-gray-700 flex items-center justify-center text-white">
              {userActive ? (
                userActive?.firstName.at(0).toUpperCase()
              ) : (
                <PersonIcon style={{ color: "rgb(229 231 235)" }} />
              )}
            </div>
          </div>

          <div
            className={`w-48 border border-gray-300 shadow-md flex flex-col  gap-2 rounded-md  bg-gray-100 text-gray-800 p-2 text-sm duration-500 ${
              showUser
                ? "-translate-y-0 opacity-100 z-50 pointer-events-auto"
                : "translate-y-[30%] opacity-0 pointer-events-none"
            }`}
          >
            {userActive ? (
              <>
                <Link to="myprofile" onClick={() => setShowUser(false)}>
                  Profile
                </Link>
                <Logout />
              </>
            ) : (
              <>
                <Link to="register">
                  <span className="cursor-pointer pl-2 pt-2 font-semibold hover:text-gray-700">
                    Sign up
                  </span>
                </Link>
                <Link to="login">
                  <span className="cursor-pointer pl-2 pb-2 hover:text-gray-700">
                    Login
                  </span>
                </Link>
              </>
            )}
          </div>
        </div>
        <div
          onClick={membershipChecker}
          onMouseEnter={showBoxHandler}
          onMouseLeave={showBoxHandler}
        >
          <Button postNav="postNav">Post Ad</Button>
        </div>
        {showBox && !userActive && (
          <div className="box absolute -bottom-[3.7rem] -right-6 border border-gray-300 shadow-lg flex items-center justify-center p-3 gap-1 rounded-md z-50 bg-gray-100">
            Post first ad for
            <span className="font-semibold text-red-500">free!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
