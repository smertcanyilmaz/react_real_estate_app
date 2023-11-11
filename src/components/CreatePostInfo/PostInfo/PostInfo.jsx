import React, { useContext, useState } from "react";
import "./PostInfo.css";
import AdressInfo from "./AdressInfo/AdressInfo";
import UploadPhoto from "./UploadPhoto/UploadPhoto";
import AdFeatures from "./AdFeatures/AdFeatures";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { PostContext } from "../../../Context/CreatePostContext";

const PostInfo = ({ selectedCategory }) => {
  const {
    sum,
    setSum,
    selectedFiles,
    setSelectedFiles,
    uploadImage,
    setUploadImage,
  } = useContext(PostContext);

  const [features, setFeatures] = useState([]);

  const navigate = useNavigate();

  const adInfoChangeHandler = (e, field) => {
    if (field === "bedrooms" || field === "bathrooms") {
      setSum((prevSum) => ({
        ...prevSum,
        rooms: {
          ...prevSum.rooms,
          [field]: parseInt(e.target.value),
        },
      }));
    } else {
      setSum((prevSum) => ({
        ...prevSum,
        [field]: e.target.value,
      }));
    }
  };

  return (
    <div
      className={`max-w-6xl duration-500 flex flex-col gap-10 items-center  ${
        selectedCategory
          ? "translate-y-0 opacity-100"
          : "translate-y-[10%] opacity-0 -z-10"
      } `}
    >
      <form className="one form_box">
        <h1 className="text-lg font-semibold text-gray-800 mb-5">
          Ad Information
        </h1>
        <div className="info_boxes info_boxes_even">
          <label htmlFor="title">
            Ad Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => adInfoChangeHandler(e, "title")}
          />
        </div>
        <div className="info_boxes">
          <label htmlFor="price">
            Price <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="price"
            id="price"
            onChange={(e) => adInfoChangeHandler(e, "price")}
          />
        </div>
        <div className="info_boxes info_boxes_even">
          <label htmlFor="bedrooms">
            Bedrooms <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="bedrooms"
            id="bedrooms"
            onChange={(e) => adInfoChangeHandler(e, "bedrooms")}
          />
        </div>
        <div className="info_boxes">
          <label htmlFor="bathrooms">
            Bathrooms <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="bathrooms"
            id="bathrooms"
            onChange={(e) => adInfoChangeHandler(e, "bathrooms")}
          />
        </div>
      </form>
      <AdressInfo sum={sum} setSum={setSum} />
      <UploadPhoto
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        uploadImage={uploadImage}
        setUploadImage={setUploadImage}
      />
      <AdFeatures
        features={features}
        setFeatures={setFeatures}
        setSum={setSum}
      />

      {/* <button
        className="w-32 h-12 rounded-md duration-200 flex gap-2 justify-center items-center bg-gray-800 text-gray-50"
        onClick={continueClickHandler}
      >
        Continue
        <ArrowForwardIcon style={{ color: "rgb(249 250 251)" }} />
      </button> */}
      <button
        onClick={() => navigate("/preview")}
        className="w-32 h-12 rounded-md duration-200 flex gap-2 justify-center items-center bg-gray-800 text-gray-50"
      >
        Preview
        <ArrowForwardIcon style={{ color: "rgb(249 250 251)" }} />
      </button>
    </div>
  );
};

export default PostInfo;
