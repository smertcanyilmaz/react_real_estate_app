import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className="w-full h-15 bg-gray-800  text-gray-200 flex items-center justify-center gap-10 p-1">
      <p>This website is a portfolio project coded by Mertcan Yılmaz</p>
      <p>|</p>
      <div className="flex items-center gap-3">
        <p>For business inquiries:</p>
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-3">
            <div className="icons flex items-center justify-center md:block  ">
              <Link to="https://www.linkedin.com/in/s%C3%BCleyman-mertcan-y%C4%B1lmaz-87312b196/">
                <IconButton>
                  <LinkedInIcon className="text-[#1DA1F2]" />
                </IconButton>
              </Link>
              <Link to="https://twitter.com/smertcann">
                <IconButton>
                  <TwitterIcon className=" text-[#1DA1F2]" />
                </IconButton>
              </Link>
              <Link to="https://github.com/smertcanyilmaz">
                <IconButton>
                  <GitHubIcon sx={{ color: "white" }} />
                </IconButton>
              </Link>
            </div>
            <p className="flex gap-3">
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
