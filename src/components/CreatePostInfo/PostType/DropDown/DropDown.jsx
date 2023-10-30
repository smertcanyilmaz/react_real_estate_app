import React from "react";

const DropDown = ({
  property,
  category,
  showDropDown,
  showDropDown2,
  setSelectedProperty,
  setSelectedCategory,
  setShowDropDown,
  setShowDropDown2,
  setSelectedCategoryFirebase,
  setSelectedPropertyFirebase,
}) => {
  const properties = ["Sell", "Rent"];
  const categories = [
    "Amazing Views",
    "Apartment",
    "Tiny Houses",
    "Amazing Pools",
    "In Nature",
    "Luxe",
  ];

  const selectedHandler = (name) => {
    setSelectedProperty(name);
    setSelectedPropertyFirebase(name.toLowerCase());
  };

  const selectedHandler2 = (name) => {
    setSelectedCategory(name);

    const result = name.split(" "); // bu kodları yazmam gerekti çünkü firebase'de categoriyi en başından örneğin şu formatta tutmuştum: amazingPools filtrelemenin düzgün çalışması için ilan oluştururken buna uygun bir hale getirmem gerekti
    const firstName = result[0].toLowerCase();
    result.push(firstName);
    let temp = result[0];
    result[0] = result[2];
    result[2] = temp;
    result.pop();

    setSelectedCategoryFirebase(result.join("")); //firebase categoriye giden değeri tutan state

    setShowDropDown2(false);
  };

  return (
    <div
      className={`absolute left-0 w-60 flex flex-col items-center gap-2 border border-gray-500/50 bg-gray-50 rounded-[4px] duration-300 px-1 py-2 overflow-y-auto ${
        showDropDown || showDropDown2
          ? "translate-y-[8%] opacity-100 z-10 pointer-events-auto"
          : "translate-y-0 opacity-0 pointer-events-none"
      } ${property ? "-bottom-[4.5rem]" : "-bottom-[11.8rem]"}`}
    >
      {property &&
        properties.map((property, index) => (
          <div
            key={index}
            onClick={() => selectedHandler(property)}
            className="flex w-full rounded-sm px-1 hover:bg-[--bg_color] cursor-pointer"
          >
            {property}
          </div>
        ))}

      {category &&
        categories.map((property, index) => (
          <div
            key={index}
            onClick={() => selectedHandler2(property)}
            className="flex w-full rounded-sm px-1 hover:bg-[--bg_color] cursor-pointer"
          >
            {property}
          </div>
        ))}
    </div>
  );
};

export default DropDown;
