import React from "react";
import "./PostInfo.css";

const PostInfo = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div
      className={`max-w-6xl duration-500 ${
        selectedCategory
          ? "translate-y-0 opacity-100"
          : "translate-y-[10%] opacity-0 -z-10"
      }`}
    >
      <form className="one w-full bg-gray-50 rounded-[4px] border border-gray-400/50 flex flex-col p-5">
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
      <div className="two"></div>
      <div className="three"></div>
      <div className="for"></div>
    </div>
  );
};

export default PostInfo;
