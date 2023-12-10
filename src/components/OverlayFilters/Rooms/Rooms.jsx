import React, { useState } from "react";
import "./Rooms.css";

const Rooms = ({
  setSelectedRoomNumbers,
  setSelectedRoomNumbers2,
  selectedNumbers,
  setSelectedNumbers,
  selectedNumbers2,
  setSelectedNumbers2,
  type,
  setFilterTypes,
  filterTypes,
}) => {
  const numbers = ["Any", 1, 2, 3, 4, 5, 6, 7, "8+"];

  const selectedNumbersHandler = (id) => {
    if (type === "bedrooms") {
      if (selectedNumbers === id) {
        setSelectedNumbers(null);
        setSelectedRoomNumbers(null);
        setFilterTypes((prev) => prev.filter((item) => item !== type));
      } else {
        setSelectedNumbers(id);
        setSelectedRoomNumbers(id);

        if (!filterTypes.includes(type)) {
          setFilterTypes([...filterTypes, type]);
        }
      }
    } else if (type === "bathrooms") {
      if (selectedNumbers2 === id) {
        setSelectedNumbers2(null);
        setSelectedRoomNumbers2(null);
        setFilterTypes((prev) => prev.filter((item) => item !== type));
      } else {
        setSelectedNumbers2(id);
        setSelectedRoomNumbers2(id);

        if (!filterTypes.includes(type)) {
          setFilterTypes([...filterTypes, type]);
        }
      }
    }
  };

  return (
    <div className="flex gap-4 items-center">
      {numbers.map((number, index) => (
        <>
          {number === "Any" ? (
            <div
              //key={index}
              className={`w-20 h-10 rounded-2xl  flex justify-center items-center cursor-pointer duration-300 ${
                (type === "bedrooms" ? selectedNumbers : selectedNumbers2) ===
                null
                  ? "bg-gray-800 text-white "
                  : "bg-gray-100 text-gray-800 border border-gray-800"
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
