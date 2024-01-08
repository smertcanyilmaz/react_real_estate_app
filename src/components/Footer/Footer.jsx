import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const [profileSubMenuChecker, setProfileSubMenuChecker] = useState(false);
  const pathname = useLocation();

  useEffect(() => {
    if (location.pathname === "/profilemenu") {
      setProfileSubMenuChecker(true);
    }
    return () => {
      setProfileSubMenuChecker(false);
    };
  }, [pathname]);

  return (
    <div
      className={`w-full md:h-10 bg-gray-800 text-gray-200 flex-col md:flex-row items-center justify-center gap-3 md:gap-10 pt-1 md:pt-0 md:p-0 mt-5 md:mt-0 ${
        profileSubMenuChecker ? "hidden" : "flex"
      }`}
    >
      <p className="text-xs md:text-base hidden md:block">
        This website is a portfolio project coded by Mertcan Yılmaz
      </p>
      <p className="text-xs md:text-base hidden md:block">|</p>
      <div className="flex items-center gap-3">
        <p className="text-xs md:text-base hidden md:block">
          For business inquiries:
        </p>
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="icons flex items-center justify-center md:block  ">
              <Link to="https://www.linkedin.com/in/s%C3%BCleyman-mertcan-y%C4%B1lmaz-87312b196/">
                <IconButton>
                  <LinkedInIcon
                    className="text-[#1DA1F2]"
                    fontSize={window.innerWidth <= 640 ? "small" : "medium"}
                  />
                </IconButton>
              </Link>
              <Link to="https://twitter.com/smertcann">
                <IconButton>
                  <TwitterIcon
                    className=" text-[#1DA1F2]"
                    fontSize={window.innerWidth <= 640 ? "small" : "medium"}
                  />
                </IconButton>
              </Link>
              <Link to="https://github.com/smertcanyilmaz">
                <IconButton>
                  <GitHubIcon
                    sx={{ color: "white" }}
                    fontSize={window.innerWidth <= 640 ? "small" : "medium"}
                  />
                </IconButton>
              </Link>
            </div>
            <p className="flex gap-3 text-xs md:text-base">
              <span className="text-gray-100">/</span>
              yilmazsmertcan@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
