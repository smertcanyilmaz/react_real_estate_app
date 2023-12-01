import React, { createContext } from "react";
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

  const { estates } = useFetch();

  const clickHandler = (city) => {
    const fetchEstates = estates?.filter(
      (estates) => estates?.place?.city === city
    );
    console.log(fetchEstates);
    setCity(fetchEstates);

    if (inputValue?.length !== 0) {
      setFirstLookChecker(true);
      navigate("/estates");
    }
    setShowDropDown((prev) => !prev);
  };

  //navbar filter section

  const [navbarFiltering, setNavbarFiltering] = useState([]);
  const [navbarFilteringChecker, setNavbarFilteringChecker] = useState(false);

  const navbarStatusClickHandler = (status) => {
    const filterForSale = estates.filter(
      (estate) => estate.status === "sale" && estate.passivePosts === false
    );
    const filterToRent = estates.filter(
      (estate) => estate.status === "rent" && estate.passivePosts === false
    );

    const allEstates = estates.filter(
      (estate) => estate.passivePosts === false
    );

    if (status === "sale") {
      setNavbarFiltering(filterForSale);
    } else if (status === "rent") {
      setNavbarFiltering(filterToRent);
    } else if (status === "all") {
      setNavbarFiltering(allEstates);
    }

    setNavbarFilteringChecker(true);
    navigate("/estates");
  };

  const values = {
    setInputValue: setInputValue,
    showDropDown: showDropDown,
    setShowDropDown: setShowDropDown,
    filteredCities: filteredCities,
    clickHandler: clickHandler,
    showDropDown: showDropDown,
    setFirstLookChecker: setFirstLookChecker,
    inputValue: inputValue,
    city: city,
    navbarFiltering: navbarFiltering,
    navbarFilteringChecker: navbarFilteringChecker,
    navbarStatusClickHandler: navbarStatusClickHandler,
    setNavbarFilteringChecker: setNavbarFilteringChecker,
  };
  return (
    <ContextFilter.Provider value={values}>{children}</ContextFilter.Provider>
  );
};
