import React, { useEffect, useState } from "react";
import "./Estates.css";
import EstatesFilters from "../../components/EstatesFilters/EstatesFilters";
import EstatesList from "../../components/EstatesList/EstatesList";
import OverlayFilters from "../../components/OverlayFilters/OverlayFilters";
import useFetch from "../../components/hooks/useFetch";

const Estates = () => {
  const [openFiltersOverlay, setOpenFilterOverlay] = useState(false);
  const [selectedButton, setSelectedButtons] = useState(null);
  const [filter, setFilter] = useState("");
  const [checker, setChecker] = useState(false);
  const { estates } = useFetch();

  const openFilters = () => {
    // overlayFilters componentini açar ve kapatır
    setOpenFilterOverlay((prev) => !prev);
    //setChecker(false);
  };

  const clearHandler = (e) => {
    // clear all funksiyonu
    setSelectedButtonsStatus(null);
    setSelectedNumbers(null);
    setSelectedRoomNumbers(null);
    setSelectedNumbers2(null);
    setSelectedRoomNumbers2(null);
    setFilterPriceValues({
      min: "",
      max: "",
    });
    setFilterTypes((prev) => prev.filter((item) => item !== "property"));
    setFilterTypes((prev) => prev.filter((item) => item !== "bedrooms"));
    setFilterTypes((prev) => prev.filter((item) => item !== "bathrooms"));
    setFilterTypes((prev) => prev.filter((item) => item !== "price"));
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
  };
  const [selectedNumbers, setSelectedNumbers] = useState(null); // rooms butonlarını seçer. NOT: overlayFilters'da yapılmış filtrelemeler, estate sayfası tekrar render edilmeden kaybolmasın istedim. bundan dolayı bu ve selectedButtonsStatus stateleri estate içine yazılıp prop edildi.
  const [selectedNumbers2, setSelectedNumbers2] = useState(null);

  const [selectedButtonsStatus, setSelectedButtonsStatus] = useState(null); // property type seçim
  const [filtersApplied, setFiltersApplied] = useState(false); // property type tıklamadan önce listelemeyi engellemek için yazılan state

  const [filterTypeValue, setFilterTypeValue] = useState(""); // filterTypes içine pushlanacak typeları içeren state
  const [filterTypes, setFilterTypes] = useState([]); // overlayFilters'da seçilen filtrelemelerin typelarını tutan state

  const handleAddItem = () => {
    //filters butonun seçilen filter sayısını göstermesini sağlayan fonksiyon
    if (filterTypeValue && !filterTypes.includes(filterTypeValue)) {
      setFilterTypes([...filterTypes, filterTypeValue]);
    }
    setFilterTypeValue("");
  };

  useEffect(() => {
    console.log(filterTypes);
    handleAddItem();
  }, [openFilters]);

  const showHandler = () => {
    // overlayFilter'da show places butonuna yazılan click fonksiyonu
    openFilters();
    setFiltersApplied(true);
    setChecker(true);
    //handleAddItem();
  };

  const [selectedRoomNumbers, setSelectedRoomNumbers] = useState(null); // overlayFilters bedroom numbers state
  const [selectedRoomNumbers2, setSelectedRoomNumbers2] = useState(null); // overlayFilters bathroom numbers state

  const [filterPriceValues, setFilterPriceValues] = useState({
    min: "",
    max: "",
  }); //overlayFilters minimum ve maximum price state

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
            selectedNumbers={selectedNumbers}
            setSelectedNumbers={setSelectedNumbers}
            selectedNumbers2={selectedNumbers2}
            setSelectedNumbers2={setSelectedNumbers2}
            setFilterTypeValue={setFilterTypeValue}
            checker={checker}
            setChecker={setChecker}
            setFilterTypes={setFilterTypes}
            filterPriceValues={filterPriceValues}
            setFilterPriceValues={setFilterPriceValues}
            clearHandler={clearHandler}
          />
        </>
      )}
      <EstatesFilters
        openFilters={openFilters}
        selectedButton={selectedButton}
        selectedButtonHandler={selectedButtonHandler}
        filterTypes={filterTypes}
        handleAddItem={handleAddItem}
        setChecker={setChecker}
        checker={checker}
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
      />
    </div>
  );
};

export default Estates;
