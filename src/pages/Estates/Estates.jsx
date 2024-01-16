import React, { useContext, useEffect, useState } from "react";
import "./Estates.css";
import EstatesFilters from "../../components/EstatesFilters/EstatesFilters";
import EstatesList from "../../components/EstatesList/EstatesList";
import OverlayFilters from "../../components/OverlayFilters/OverlayFilters";
import { ContextFilter } from "../../Context/FilterContext";

const Estates = () => {
  const [startEstatesTop, setStartEstatesTop] = useState(false);
  const {
    setFirstLookChecker,
    filter,
    setStatus,
    status,
    openFilters,
    openFiltersOverlay,
  } = useContext(ContextFilter);

  useEffect(() => {
    document.body.style.overflow = openFiltersOverlay ? "hidden" : "auto";
  }, [openFiltersOverlay]);

  useEffect(() => {
    // filters üzerinden filtreleme yapıldığı ise ve tekrar kategoriden seçim yapılacaksa all estates'in seçilmesini sağlar
    if (filter) {
      if (!status) {
        setStatus("all");
      }
    }
  }, [filter, status]);

  useEffect(() => {
    // sayfa eğer reload edilirse navbar'da all estates'in seçili olmasını sağlar
    if (!status) {
      setStatus("all");
    }
  }, []);

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
    <div className="w-screen px-5 md:px-0 md:max-w-6xl md:mt-10 flex flex-col gap-10">
      {startEstatesTop && <OverlayFilters />}

      <EstatesFilters />
      <EstatesList />
      <div //overlay
        onClick={() => openFilters()}
        className={`fixed left-0 top-0 w-full h-full bg-black duration-300  ${
          openFiltersOverlay ? "visible opacity-60 z-20" : "invisible opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default Estates;
