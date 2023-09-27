import React, { useState } from "react";
import "./Rooms.css";

const Rooms = ({
  bedrooms,
  bathrooms,
  setSelectedRoomNumbers,
  setSelectedRoomNumbers2,
}) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, "8+"];
  const [selectedNumbers, setSelectedNumbers] = useState(null);

  const selectedNumbersHandler = (id) => {
    setSelectedNumbers(id);
    if (bedrooms) {
      setSelectedRoomNumbers(id);
    } else if (bathrooms) {
      setSelectedRoomNumbers2(id);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <div
        className={`w-20 h-10 rounded-2xl text-white flex justify-center items-center cursor-pointer duration-300 ${
          selectedNumbers === null
            ? "bg-gray-800"
            : "bg-gray-100 text-gray-900 border border-gray-800"
        }`}
        onClick={() => selectedNumbersHandler(null)}
      >
        Any
      </div>
      {numbers.map((number, index) => (
        <div
          className={`numbers ${
            selectedNumbers === index
              ? "bg-gray-800 text-white"
              : "bg-gray-100 text-gray-800"
          } flex justify-center items-center cursor-pointer duration-300`}
          key={index}
          onClick={() => selectedNumbersHandler(index)}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default Rooms;
