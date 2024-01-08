import React from "react";

const DropDown = ({
  property,
  category,
  showDropDown,
  showDropDown2,
  setSelectedProperty,
  setSelectedCategory,
  setShowDropDown2,
}) => {
  const properties = [
    { label: "Sale", value: "sale" },
    { label: "Rent", value: "rent" },
  ];
  const categories = [
    { label: "Farms", value: "farms" },
    { label: "Containers", value: "containers" },
    { label: "Amazing Views", value: "amazingViews" },
    { label: "Apartment", value: "apartment" },
    { label: "Tiny Houses", value: "tinyHouses" },
    { label: "Amazing Pools", value: "amazingPools" },
    { label: "In Nature", value: "inNature" },
    { label: "Luxe", value: "luxe" },
  ];

  const selectedHandler = (name) => {
    setSelectedProperty(name);
  };

  const selectedHandler2 = (name) => {
    setSelectedCategory(name);
    setShowDropDown2(false);
  };

  return (
    <div
      className={`absolute left-0 w-32  md:w-60 flex flex-col items-center gap-2 border border-gray-500/50 bg-gray-50 rounded-[4px] duration-300 px-1 py-2 overflow-y-auto  ${
        showDropDown || showDropDown2
          ? "translate-y-[8%] opacity-100 z-10 pointer-events-auto"
          : "translate-y-0 opacity-0 pointer-events-none"
      } ${property ? "-bottom-[4.5rem]" : "-bottom-[15.6rem]"}`}
    >
      {property &&
        properties.map((property, index) => (
          <div
            key={index}
            onClick={() => selectedHandler(property)}
            className="flex w-full rounded-sm px-1 hover:bg-[--bg_color] cursor-pointer"
          >
            {property.label}
          </div>
        ))}

      {category &&
        categories.map((property, index) => (
          <div
            key={index}
            onClick={() => selectedHandler2(property)}
            className="flex w-full rounded-sm px-1 hover:bg-[--bg_color] cursor-pointer"
          >
            {property.label}
          </div>
        ))}
    </div>
  );
};

export default DropDown;
