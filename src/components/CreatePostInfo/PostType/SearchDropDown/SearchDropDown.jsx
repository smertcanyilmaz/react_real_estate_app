import React from "react";

const SearchDropDown = () => {
  return (
    <div className="w-60 h-20 flex flex-col p-[6px] border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50">
      <input
        type="text"
        className="search w-full h-10 px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50"
      />
      <div className="items"></div>
    </div>
  );
};

export default SearchDropDown;
