import React from "react";

import ProductCard from "../ProductCard/ProductCard";

const EstatesList = () => {
  return (
    <div className="w-full">
      <ProductCard EstatesList={true} />
    </div>
  );
};

export default EstatesList;
