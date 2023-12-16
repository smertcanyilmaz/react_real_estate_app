import React, { useContext, useEffect, useState } from "react";
import "./PostInfo.css";
import AdressInfo from "./AdressInfo/AdressInfo";
import UploadPhoto from "./UploadPhoto/UploadPhoto";
import AdFeatures from "./AdFeatures/AdFeatures";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useLocation, useNavigate } from "react-router-dom";
import { PostContext } from "../../../Context/CreatePostContext";

const PostInfo = ({ selectedCategory }) => {
  const {
    setSum,
    selectedFiles,
    setSelectedFiles,
    uploadImage,
    setUploadImage,
  } = useContext(PostContext);

  const [features, setFeatures] = useState([]);

  const navigate = useNavigate();

  const [sumChecker, setSumChecker] = useState({
    title: false,
    price: false,
    bedrooms: false,
    bathrooms: false,
    country: false,
    city: false,
    district: false,
    images: [],
  });

  const [formValid, setFormValid] = useState(false);

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

    switch (field) {
      case "title":
        setSumChecker((prev) => ({
          ...prev,
          [field]: e.target.value.trim() !== "",
        }));
        break;
      case "price":
        setSumChecker((prev) => ({
          ...prev,
          [field]: e.target.value.trim() !== "",
        }));
        break;
      case "bedrooms":
        setSumChecker((prev) => ({
          ...prev,
          [field]: e.target.value.trim() !== "",
        }));
        break;
      case "bathrooms":
        setSumChecker((prev) => ({
          ...prev,
          [field]: e.target.value.trim() !== "",
        }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const validChecker =
      sumChecker.title &&
      sumChecker.price &&
      sumChecker.bedrooms &&
      sumChecker.bathrooms &&
      sumChecker.country !== "choose" &&
      sumChecker.city !== "choose" &&
      sumChecker.district !== "choose" &&
      sumChecker.images.length >= 5;
    setFormValid(validChecker);
  }, [sumChecker]);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/preview") {
      setSelectedFiles([]);
      setUploadImage([]);
      setFeatures([]);
    }
  }, [location]);

  return (
    <div
      className={`max-w-6xl duration-500 flex flex-col gap-10 items-center  ${
        selectedCategory
          ? "translate-y-0 opacity-100 h-full"
          : "translate-y-[10%] opacity-0 -z-10 max-h-0 overflow-y-hidden"
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
      {/* <AdressInfo setSum={setSum} setSumChecker={setSumChecker} /> */}
      <UploadPhoto
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        uploadImage={uploadImage}
        setUploadImage={setUploadImage}
        setSumChecker={setSumChecker}
      />
      <AdFeatures
        features={features}
        setFeatures={setFeatures}
        setSum={setSum}
      />

      {/* <button
        onClick={() => navigate("/preview")}
        disabled={!formValid}
        className={`w-32 h-12 rounded-md duration-200 flex gap-2 justify-center items-center bg-gray-800 text-gray-50 ${
          !formValid
            ? "opacity-60 cursor-not-allowed"
            : "opacity-100 cursor-pointer"
        }`}
      >
        Preview
        <ArrowForwardIcon style={{ color: "rgb(249 250 251)" }} />
      </button> */}
    </div>
  );
};

export default PostInfo;
