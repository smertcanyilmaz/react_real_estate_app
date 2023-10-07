import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";
import { useContext, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "./Logout/Logout";
import { Context } from "../../Context/AuthContext";
import Profile from "../../pages/Profile/Profile";

const Navbar = ({ ref0 }) => {
  const [showBox, setShowBox] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const { userActive } = useContext(Context);

  const showUserHandler = () => {
    setShowUser((prev) => !prev); //TODO: boşluğa tıklandığında üyelik girişi kısmı kapanabilir. fırsat olursa bir bak
  };

  const handleMouseEnter = () => {
    setShowBox(true);
    setShowUser(false);
  };

  const handleMouseLeave = () => {
    setShowBox(false);
  };

  return (
    <div
      ref={ref0}
      className="flex w-full h-[10vh] mx-auto justify-between items-center pt-10 relative"
    >
      <Link to="/">
        <svg
          width="65"
          height="40"
          viewBox="0 0 65 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M43.2072 0L32.4211 7.88354L21.626 0L0 15.794V40H12.551V34.6876H5.31243V18.4994L21.626 6.58455L27.9059 11.1713L21.5722 15.794V40H30.1008H36.6853H43.252V15.794L36.9183 11.1713L43.1982 6.58455L59.5118 18.4994V34.6876H51.6909V40H64.8421V15.794L43.2072 0ZM37.9395 18.4994V34.6876H36.6943H30.1097H26.8936V18.4994L32.4121 14.4681L37.9395 18.4994Z"
            fill="#091638"
          />
        </svg>
      </Link>
      {/* <ul className="flex gap-10">
        <li>Top offers</li>
        <li>Search in offers</li>
        <li>References</li>
        <li>About us</li>
        <li>Our team</li>
      </ul> */}
      <div className="related_user flex gap-5 items-center ">
        <div
          onClick={showUserHandler}
          className={`user cursor-pointer flex items-center gap-2 border border-gray-400/80 rounded-3xl py-1 px-2 ${
            showUser ? "shadow-md shadow-gray-500/50" : " hover:shadow-md"
          } hover:shadow-gray-500/50 duration-300`}
        >
          <MenuIcon />
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <PersonIcon style={{ color: "rgb(229 231 235)" }} />
          </div>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Button post="true">Post Ad</Button>
        </div>
        {showUser && (
          <div
            className={`absolute  right-24 border border-gray-300 shadow-md flex flex-col  gap-2 rounded-md z-50 bg-gray-100 text-gray-800 p-2 text-sm -bottom-[6rem] w-48`}
            // ${userGuard ? "-bottom-14 w-24" : " -bottom-[6rem] w-48" }
          >
            {userActive ? (
              <>
                <Link to="profile">
                  <Profile />
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
        )}
        {showBox && (
          <div className="box absolute -bottom-[3.7rem] -right-10 border border-gray-300 shadow-lg flex items-center justify-center p-3 gap-1 rounded-md z-50 bg-gray-100">
            Post first three ads for
            <span className="font-semibold text-red-500">free!</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
