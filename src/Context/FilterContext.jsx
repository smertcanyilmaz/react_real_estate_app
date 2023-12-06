import React, { createContext, startTransition } from "react";
import { useEffect, useState } from "react";
import { Country, State } from "country-state-city";
import useFetch from "../components/hooks/useFetch";
import { useNavigate } from "react-router-dom";

export const ContextFilter = createContext();

export const FilterContext = ({ children }) => {
  const [country, setCountry] = useState([]);
  const [cities, setCities] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);
  const [firstLookChecker, setFirstLookChecker] = useState(false);
  const [city, setCity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const datas = () => {
      const countryData = Country.getAllCountries().filter(
        (country) => country.name === "Turkey"
      );

      const euCountriesData = Country.getAllCountries().filter(
        (country) => country.currency === "EUR"
      );
      const sumCountries = countryData.concat(euCountriesData); // arrayleri birleştirdim

      setCountry(sumCountries);

      const temp = [];

      country.forEach((targetCountry) => {
        const selectedCountryIso = targetCountry.isoCode;

        const citiesData = State.getAllStates().filter(
          (city) => city?.countryCode === selectedCountryIso
        );
        temp.push(citiesData);
      });
      const sumTemp = [].concat.apply([], temp);

      const sumTempFilter = sumTemp?.map((city) => city?.name);

      setCities(sumTempFilter);
    };
    datas();

    const filteredCitiesData = cities?.filter((city) =>
      city.toLowerCase().includes(inputValue?.toLowerCase())
    );

    setFilteredCities(filteredCitiesData);

    if (inputValue?.length === 0) {
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }
  }, [inputValue]);

  const [status, setStatus] = useState("");
  const [cityStatus, setCityStatus] = useState("");

  const clickHandler = (city) => {
    setCityStatus(city);

    if (inputValue?.length !== 0) {
      setFirstLookChecker(true);
      navigate("/estates");
    }
    setShowDropDown((prev) => !prev);
  };

  //overlay filters global'a sonradan lift etmek zorunda kaldığım stateler ve fonksiyonlar

  const [selectedButtonsStatus, setSelectedButtonsStatus] = useState(null); // property type seçim
  const [selectedNumbers, setSelectedNumbers] = useState(null); // rooms butonlarını seçer. NOT: overlayFilters'da yapılmış filtrelemeler, estates sayfası tekrar render edilmeden kaybolmasın istedim. bundan dolayı bu ve selectedButtonsStatus stateleri estates içine yazılıp prop edildi.
  const [selectedNumbers2, setSelectedNumbers2] = useState(null);

  const [selectedRoomNumbers, setSelectedRoomNumbers] = useState(null); // overlayFilters bedroom numbers state
  const [selectedRoomNumbers2, setSelectedRoomNumbers2] = useState(null); // overlayFilters bathroom numbers state

  const [filterPriceValues, setFilterPriceValues] = useState({
    min: "",
    max: "",
  }); //overlayFilters minimum ve maximum price state
  const [filterTypes, setFilterTypes] = useState([]); // overlayFilters'da seçilen filtrelemelerin typelarını tutan state
  const [filtersApplied, setFiltersApplied] = useState(false); // property type tıklamadan önce listelemeyi engellemek için yazılan state

  const [filterTypeValue, setFilterTypeValue] = useState(""); // filterTypes içine pushlanacak typeları içeren state
  // const [filterTypes, setFilterTypes] = useState([]); // overlayFilters'da seçilen filtrelemelerin typelarını tutan state

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

  //navbar filter section

  const [navbarFiltering, setNavbarFiltering] = useState([]);
  const [navbarFilteringChecker, setNavbarFilteringChecker] = useState(false);
  const [filter, setFilter] = useState("");
  const [selectedButton, setSelectedButtons] = useState(null); // quick section butonlarını tutan state (estates sayfasından buraya lift etmem gerekti çünkü navbar filtrelemelerini yaparken quick seçimlerin resetlenmesi gerekiyordu)

  const navbarStatusClickHandler = (status) => {
    setCityStatus("");
    setSelectedButtons(null);
    setFilter("");
    clearHandler();
    if (status === "all") {
      setStatus("all");
    } else if (status === "sale") {
      setStatus("sale");
    } else if (status === "rent") {
      setStatus("rent");
    }
    setNavbarFilteringChecker(true);
    setFirstLookChecker(false);
    navigate("/estates");
  };

  const values = {
    setInputValue,
    showDropDown,
    setShowDropDown,
    filteredCities,
    clickHandler,
    showDropDown,
    firstLookChecker,
    setFirstLookChecker,
    inputValue,
    city,
    navbarFiltering,
    navbarFilteringChecker,
    navbarStatusClickHandler,
    setNavbarFilteringChecker,
    setNavbarFiltering,
    status,
    setStatus,
    cityStatus,
    setCityStatus,
    setCity: setCity,
    selectedButton,
    setSelectedButtons,
    filter,
    setFilter,
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
  };
  return (
    <ContextFilter.Provider value={values}>{children}</ContextFilter.Provider>
  );
};
