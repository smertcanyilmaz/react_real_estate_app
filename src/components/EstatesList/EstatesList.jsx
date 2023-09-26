import React from "react";

import ProductCard from "../ProductCard/ProductCard";

const EstatesList = ({
  filter,
  selectedButtonsStatus,
  showHandler,
  filtersApplied,
  setFiltersApplied,
}) => {
  return (
    <div className="w-full">
      <ProductCard
        EstatesList={true}
        filter={filter}
        selectedButtonsStatus={selectedButtonsStatus}
        showHandler={showHandler}
        filtersApplied={filtersApplied}
        setFiltersApplied={setFiltersApplied}
      />
    </div>
  );
};

export default EstatesList;
