import React, { useState } from "react";
import "./Estates.css";
import EstatesFilters from "../../components/EstatesFilters/EstatesFilters";
import EstatesList from "../../components/EstatesList/EstatesList";
import OverlayFilters from "../../components/OverlayFilters/OverlayFilters";

const Estates = () => {
  const [openFiltersOverlay, setOpenFilterOverlay] = useState(false);
  const [selectedButton, setSelectedButtons] = useState(null);
  const [filter, setFilter] = useState("");

  const openFilters = () => {
    // overlayFilters componentini açar ve kapatır
    setOpenFilterOverlay((prev) => !prev);
  };

  const selectedButtonHandler = (id, name) => {
    // quick section seçim
    setSelectedButtons(id);
    setFilter(name);
  };

  const [selectedButtonsStatus, setSelectedButtonsStatus] = useState(null); // property type seçim
  const [filtersApplied, setFiltersApplied] = useState(false); // property type tıklamadan önce listelemeyi engellemek için yazılan state

  const showHandler = () => {
    // overlayFilter'da show places butonuna yazılan click fonksiyonu
    openFilters();
    setFiltersApplied(true);
  };

  const [selectedRoomNumbers, setSelectedRoomNumbers] = useState(null); // overlayFilters room numbers state
  const [selectedRoomNumbers2, setSelectedRoomNumbers2] = useState(null); // overlayFilters room numbers state

  return (
    <div className="max-w-6xl mt-10 flex flex-col gap-10">
      {openFiltersOverlay && (
        <>
          <div
            onClick={openFilters}
            className="overlay absolute top-0 left-0 w-full h-full  bg-black opacity-50 z-30"
          ></div>
          <OverlayFilters
            openFilters={openFilters}
            selectedButtonHandler={selectedButtonHandler}
            selectedButtonsStatus={selectedButtonsStatus}
            setSelectedButtonsStatus={setSelectedButtonsStatus}
            showHandler={showHandler}
            setSelectedRoomNumbers={setSelectedRoomNumbers}
            setSelectedRoomNumbers2={setSelectedRoomNumbers2}
          />
        </>
      )}
      <EstatesFilters
        openFilters={openFilters}
        selectedButton={selectedButton}
        selectedButtonHandler={selectedButtonHandler}
      />
      <EstatesList
        filter={filter}
        selectedButtonsStatus={selectedButtonsStatus}
        showHandler={showHandler}
        filtersApplied={filtersApplied}
        setFiltersApplied={setFiltersApplied}
        selectedRoomNumbers={selectedRoomNumbers}
        selectedRoomNumbers2={selectedRoomNumbers2}
      />
    </div>
  );
};

export default Estates;
