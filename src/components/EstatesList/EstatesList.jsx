import React from "react";

import ProductCard from "../ProductCard/ProductCard";

const EstatesList = ({
  filter,
  selectedButtonsStatus,
  showHandler,
  filtersApplied,
  setFiltersApplied,
  selectedRoomNumbers,
  selectedRoomNumbers2,
  filterPriceValues,
  products,
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
        selectedRoomNumbers={selectedRoomNumbers}
        selectedRoomNumbers2={selectedRoomNumbers2}
        filterPriceValues={filterPriceValues}
      />
    </div>
  );
};

export default EstatesList;
