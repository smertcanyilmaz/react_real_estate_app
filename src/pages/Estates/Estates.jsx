import React, { useState } from "react";
import "./Estates.css";
import EstatesFilters from "../../components/EstatesFilters/EstatesFilters";
import EstatesList from "../../components/EstatesList/EstatesList";
import OverlayFilters from "../../components/OverlayFilters/OverlayFilters";

const Estates = () => {
  const [openFiltersOverlay, setOpenFilterOverlay] = useState(false);

  const openFilters = () => {
    setOpenFilterOverlay((prev) => !prev);
  };
  return (
    <div className="max-w-6xl mt-10 flex flex-col gap-10">
      {openFiltersOverlay && (
        <>
          <div
            onClick={openFilters}
            className="overlay absolute top-0 left-0 w-full h-full  bg-black opacity-50 z-30"
          ></div>
          <OverlayFilters openFilters={openFilters} />
        </>
      )}
      <EstatesFilters openFilters={openFilters} />
      <EstatesList />
    </div>
  );
};

export default Estates;
