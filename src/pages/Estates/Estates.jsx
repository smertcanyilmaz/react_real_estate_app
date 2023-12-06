import React, { useContext, useEffect, useState } from "react";
import "./Estates.css";
import EstatesFilters from "../../components/EstatesFilters/EstatesFilters";
import EstatesList from "../../components/EstatesList/EstatesList";
import OverlayFilters from "../../components/OverlayFilters/OverlayFilters";
import { ContextFilter } from "../../Context/FilterContext";

const Estates = ({ setUnAuthNavbar }) => {
  const [openFiltersOverlay, setOpenFilterOverlay] = useState(false);

  const {
    setFirstLookChecker,
    selectedButton,
    setSelectedButtons,
    filter,
    setFilter,
    setStatus,
    status,
    selectedButtonsStatus,
    setSelectedButtonsStatus,
    selectedNumbers,
    setSelectedNumbers,
    selectedNumbers2,
    setSelectedNumbers2,
    selectedRoomNumbers,
    setSelectedRoomNumbers,
    selectedRoomNumbers2,
    setSelectedRoomNumbers2,
    filterPriceValues,
    setFilterPriceValues,
    filterTypes,
    setFilterTypes,
    clearHandler,
    filtersApplied,
    setFiltersApplied,
    filterTypeValue,
    setFilterTypeValue,
  } = useContext(ContextFilter);

  useEffect(() => {
    document.body.style.overflow = openFiltersOverlay ? "hidden" : "auto"; // TODO:scrollbar hidden yerine transparent olması için alternatif ara
    setUnAuthNavbar(false);
  }, [openFiltersOverlay]);

  // useEffect(() => {
  //   setUnAuthNavbar(false);
  // }, []);

  useEffect(() => {
    if (filter) {
      if (!status) {
        setStatus("all");
      }
    }
  }, [filter]);

  // useEffect(() => {
  //   if (!selectedButton) {
  //     if (!status && !filter) {
  //       setStatus("all");
  //     }
  //   }
  // }, [status, filter, selectedButton]);

  const openFilters = () => {
    // overlayFilters componentini açar ve kapatır
    setOpenFilterOverlay((prev) => !prev);
  };

  const selectedButtonHandler = (id, name) => {
    // quick section seçim
    if (selectedButton === id) {
      setSelectedButtons(null);
      setFilter("all");
    } else {
      setSelectedButtons(id);
      setFilter(name);
      clearHandler();
    }
    //setStatus("");
  };

  const handleAddItem = () => {
    //filters butonun seçilen filter sayısını göstermesini sağlayan fonksiyon
    if (filterTypeValue && !filterTypes.includes(filterTypeValue)) {
      setFilterTypes([...filterTypes, filterTypeValue]);
    }
    setFilterTypeValue("");
  };

  const showHandler = () => {
    // overlayFilter'da show places butonuna yazılan click fonksiyonu
    openFilters();
    setFiltersApplied(true);
    setSelectedButtons(null);
    setFilter("");
    setStatus("");
  };

  const [startEstatesTop, setStartEstatesTop] = useState(false);

  useEffect(() => {
    //eğer estates sayfasına böyle bir useEffect yazmazsak, estates render olduğu an overlayFilters da render oluyor ve scroll en aşağıdan sayfayı başlatıyor. hem bunu engellemek hem de sayfanın hızlı yüklenmesini sağlamak için bu kodu yazmam gerekti
    if (!openFiltersOverlay) {
      setStartEstatesTop(true);
    } else {
      setStartEstatesTop(false);
    }
  }, []);

  window.onload = () => {
    setFirstLookChecker(false);
  };

  return (
    <div className="max-w-6xl mt-10 flex flex-col gap-10">
      {startEstatesTop && (
        <OverlayFilters
          openFilters={openFilters}
          selectedButtonHandler={selectedButtonHandler}
          selectedButtonsStatus={selectedButtonsStatus}
          setSelectedButtonsStatus={setSelectedButtonsStatus}
          showHandler={showHandler}
          setSelectedRoomNumbers={setSelectedRoomNumbers}
          setSelectedRoomNumbers2={setSelectedRoomNumbers2}
          selectedNumbers={selectedNumbers}
          setSelectedNumbers={setSelectedNumbers}
          selectedNumbers2={selectedNumbers2}
          setSelectedNumbers2={setSelectedNumbers2}
          setFilterTypeValue={setFilterTypeValue}
          setFilterTypes={setFilterTypes}
          filterPriceValues={filterPriceValues}
          setFilterPriceValues={setFilterPriceValues}
          clearHandler={clearHandler}
          openFiltersOverlay={openFiltersOverlay}
          setFiltersApplied={setFiltersApplied}
        />
      )}

      <EstatesFilters
        openFilters={openFilters}
        selectedButton={selectedButton}
        selectedButtonHandler={selectedButtonHandler}
        filterTypes={filterTypes}
        handleAddItem={handleAddItem}
      />
      <EstatesList
        filter={filter}
        selectedButtonsStatus={selectedButtonsStatus}
        showHandler={showHandler}
        filtersApplied={filtersApplied}
        setFiltersApplied={setFiltersApplied}
        selectedRoomNumbers={selectedRoomNumbers}
        selectedRoomNumbers2={selectedRoomNumbers2}
        filterPriceValues={filterPriceValues}
        handleAddItem={handleAddItem}
      />
      <div //overlay
        onClick={() => openFilters()}
        className={`fixed left-0 top-0 w-full h-full bg-black duration-300  ${
          openFiltersOverlay ? "visible opacity-60" : "invisible opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Estates;
