import React, { useState } from "react";
import "./Rooms.css";

const Rooms = ({
  // bedrooms,
  // bathrooms,
  setSelectedRoomNumbers,
  setSelectedRoomNumbers2,
  selectedNumbers,
  setSelectedNumbers,
  selectedNumbers2,
  setSelectedNumbers2,
  type,
  setFilterTypeValue,
}) => {
  const numbers = ["Any", 1, 2, 3, 4, 5, 6, 7, "8+"];

  const selectedNumbersHandler = (id) => {
    if (type === "bedrooms") {
      setSelectedNumbers(id);
      setSelectedRoomNumbers(id);
      setFilterTypeValue(type);
    } else if (type === "bathrooms") {
      setSelectedNumbers2(id);
      setSelectedRoomNumbers2(id);
      setFilterTypeValue(type);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {numbers.map((number, index) => (
        <>
          {number === "Any" ? (
            <div
              //key={index}
              className={`w-20 h-10 rounded-2xl text-white flex justify-center items-center cursor-pointer duration-300 ${
                (type === "bedrooms" ? selectedNumbers : selectedNumbers2) ===
                null
                  ? "bg-gray-800"
                  : "bg-gray-100 text-gray-700 border border-gray-800"
              }`}
              onClick={() => selectedNumbersHandler(null)}
            >
              {number}
            </div>
          ) : (
            <div
              className={`numbers ${
                (type === "bedrooms" ? selectedNumbers : selectedNumbers2) ===
                index
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-800"
              } flex justify-center items-center cursor-pointer duration-300`}
              key={index}
              onClick={() => selectedNumbersHandler(index)}
            >
              {number}
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default Rooms;
