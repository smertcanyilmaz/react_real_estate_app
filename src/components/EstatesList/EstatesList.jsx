import React from "react";

import ProductCard from "../ProductCard/ProductCard";

const EstatesList = ({ filter }) => {
  return (
    <div className="w-full">
      <ProductCard EstatesList={true} filter={filter} />
    </div>
  );
};

export default EstatesList;
