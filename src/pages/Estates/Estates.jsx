import React, { useEffect, useState } from "react";
import "./Estates.css";
import EstatesFilters from "../../components/EstatesFilters/EstatesFilters";
import EstatesList from "../../components/EstatesList/EstatesList";
import OverlayFilters from "../../components/OverlayFilters/OverlayFilters";

const Estates = ({ setUnAuthNavbar }) => {
  const [openFiltersOverlay, setOpenFilterOverlay] = useState(false);
  const [selectedButton, setSelectedButtons] = useState(null);
  const [filter, setFilter] = useState("");

  const openFilters = () => {
    // overlayFilters componentini açar ve kapatır
    setOpenFilterOverlay((prev) => !prev);
  };

  const clearHandler = (e) => {
    // clear all fonksiyonu
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
  const [selectedNumbers, setSelectedNumbers] = useState(null); // rooms butonlarını seçer. NOT: overlayFilters'da yapılmış filtrelemeler, estates sayfası tekrar render edilmeden kaybolmasın istedim. bundan dolayı bu ve selectedButtonsStatus stateleri estates içine yazılıp prop edildi.
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
    setUnAuthNavbar(false);
  }, []);

  const showHandler = () => {
    // overlayFilter'da show places butonuna yazılan click fonksiyonu
    openFilters();
    setFiltersApplied(true);
    setSelectedButtons(null);
    setFilter("");
  };

  const [selectedRoomNumbers, setSelectedRoomNumbers] = useState(null); // overlayFilters bedroom numbers state
  const [selectedRoomNumbers2, setSelectedRoomNumbers2] = useState(null); // overlayFilters bathroom numbers state

  const [filterPriceValues, setFilterPriceValues] = useState({
    min: "",
    max: "",
  }); //overlayFilters minimum ve maximum price state

  useEffect(() => {
    document.body.style.overflow = openFiltersOverlay ? "hidden" : "auto"; // TODO:scrollbar hidden yerine transparent olması için alternatif ara
    setUnAuthNavbar(false);
  }, [openFiltersOverlay]);

  const [startEstatesTop, setStartEstatesTop] = useState(false);

  useEffect(() => {
    //eğer estates sayfasına böyle bir useEffect yazmazsak, estates render olduğu an overlayFilters da render oluyor ve scroll en aşağıdan sayfayı başlatıyor. hem bunu engellemek hem de sayfanın hızlı yüklenmesini sağlamak için bu kodu yazmam gerekti
    if (!openFiltersOverlay) {
      setStartEstatesTop(true);
    } else {
      setStartEstatesTop(false);
    }
  }, []);

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
