import React from "react";
import "./PostInfo.css";
import AdressInfo from "../PostType/AdressInfo/AdressInfo";

const PostInfo = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div
      className={`max-w-6xl duration-500 flex flex-col gap-10  ${
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
          <input type="text" name="title" id="title" />
        </div>
        <div className="info_boxes">
          <label htmlFor="price">
            Price <span className="text-red-500">*</span>
          </label>
          <input type="text" name="price" id="price" />
        </div>
        <div className="info_boxes info_boxes_even">
          <label htmlFor="bedrooms">
            Bedrooms <span className="text-red-500">*</span>
          </label>
          <input type="text" name="bedrooms" id="bedrooms" />
        </div>
        <div className="info_boxes">
          <label htmlFor="bathrooms">
            Bathrooms <span className="text-red-500">*</span>
          </label>
          <input type="text" name="bathrooms" id="bathrooms" />
        </div>
      </form>
      <AdressInfo />
      <div className="three"></div>
      <div className="for"></div>
    </div>
  );
};

export default PostInfo;
