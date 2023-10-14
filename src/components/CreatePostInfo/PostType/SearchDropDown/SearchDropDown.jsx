import React from "react";

const SearchDropDown = () => {
  return (
    <div className="w-60 h-20 flex flex-col gap-5 p-[6px] border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50">
      <div className="flex items-center justify-between cursor-pointer bg-gray-50 rounded-sm border border-gray-500/50 pr-2">
        <input
          type="text"
          className="w-[90%] border-2 border-none outline-none"
        />
      </div>
      <div className="items_container w-full flex flex-col bg-red-500">
        {/* maplenecek yer burası. aşağıdaki div maplenecek */}
        <div className="item w-full h-[35px] flex items-center justify-between cursor-pointer bg-gray-50 rounded-sm border border-gray-500/50  bg-green-500"></div>
      </div>
    </div>
  );
};

export default SearchDropDown;
