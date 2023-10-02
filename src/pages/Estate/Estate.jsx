import React, { useState } from "react";
import EstateImages from "../../components/EstateImages/EstateImages";
import useFetch from "../../components/hooks/useFetch";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import OverlayEstate from "../../components/OverlayEstate/OverlayEstate";

const Estate = () => {
  const { estates } = useFetch();

  const temp = estates.filter(
    (estate) => estate.title === "Apartment Monolith"
  );

  const special = temp.map((estate) => estate.specials);

  const [openOverlayEstate, setOpenOverlayEstate] = useState(false);
  const [imagesIndex, setImagesIndex] = useState(0);

  return (
    <div className="max-w-6xl max-h-[100vh] mt-10 mb-10">
      {openOverlayEstate && (
        <OverlayEstate
          setOpenOverlayEstate={setOpenOverlayEstate}
          estates={estates}
          imagesIndex={imagesIndex}
        />
      )}
      {temp.map((item) => (
        <div key={item.id} className="flex flex-col gap-10 ">
          <div className="content flex flex-col gap-2">
            <h1 className="text-3xl font-bold">{item?.title}</h1>
            <div className="text-sm">
              {item?.place?.district}, {item?.place?.city},
              {item?.place?.country}
            </div>
          </div>
          <EstateImages
            item={item}
            setOpenOverlayEstate={setOpenOverlayEstate}
            setImagesIndex={setImagesIndex}
          />
          <div className="info flex justify-between mt-5">
            <div className="info1 flex-1 flex flex-col gap-2">
              <div className="w-full flex justify-between text-xl font-bold">
                House Status: {item.status.toUpperCase()}
                <div className="flex-1 text-2xl font-bold text-end">
                  € {item.price}
                </div>
              </div>
              <div className="text-gray-700">
                {item.rooms.bedrooms} bedrooms | {item.rooms.bathrooms}
                bathrooms | {special}
              </div>
            </div>
            <div className="info2 flex-1 flex items-center justify-between">
              <div className="flex-1 flex flex-col items-center justify-center  font-semibold text-[15px]">
                Contact the owner: Mertcan Yılmaz
                <div className="flex justify-between items-center gap-5">
                  <div className="icons flex items-center justify-center md:block  ">
                    <Link to="https://github.com/smertcanyilmaz">
                      <IconButton>
                        <GitHubIcon fontSize="medium" />
                      </IconButton>
                    </Link>
                    <Link to="https://www.linkedin.com/in/s%C3%BCleyman-mertcan-y%C4%B1lmaz-87312b196/">
                      <IconButton>
                        <LinkedInIcon
                          className="text-[#0077b5]"
                          fontSize="medium"
                        />
                      </IconButton>
                    </Link>

                    <Link to="https://twitter.com/smertcann">
                      <IconButton>
                        <TwitterIcon
                          className=" text-[#1DA1F2]"
                          fontSize="medium"
                        />
                      </IconButton>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-16 h-16 rounded-full mr-6">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/real-estate-app-b1e5c.appspot.com/o/profile%2FWhatsApp%20G%C3%B6rsel%202023-10-02%20saat%2005.28.54_74cba30e.jpg?alt=media&token=998763b7-a0e0-45c7-8406-8528b64ddc53&_gl=1*11liie4*_ga*MTY1NzMyNDUxNi4xNjk2MjAyMDI3*_ga_CW55HF8NVT*MTY5NjIxMTkwMy40LjEuMTY5NjIxNDQ2NS42MC4wLjA."
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Estate;
