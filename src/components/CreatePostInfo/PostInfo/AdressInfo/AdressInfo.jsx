import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import axios from "axios";
import { City, Country, State } from "country-state-city";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchDropDown from "../SearchDropDown/SearchDropDown";

const AdressInfo = () => {
  //   const [europeanCountries, setEuropeanCountries] = useState([]);
  //   useEffect(() => {
  //     axios.get("https://restcountries.com/v3.1/all").then((response) => {
  //       const filteredCountries = response.data;
  //       setEuropeanCountries(filteredCountries);
  //     });

  //     const turkey = europeanCountries.filter(
  //       (country) => country.name.common === "Moldova"
  //     );
  //     console.log(turkey);
  //     const deneme = europeanCountries.map((name) => name.name.common);
  //     console.log(deneme);
  //   }, []);

  //   console.log(europeanCountries);

  const [country, setCountry] = useState([]);
  const [cities, setCities] = useState(null);
  const [districts, setDistricts] = useState([]);

  const datas = () => {
    const countryData = Country.getAllCountries().filter(
      (country) => country.name === "Turkey"
    );

    const euCountriesData = Country.getAllCountries().filter(
      (country) => country.currency === "EUR"
    );

    const citiesData = State.getAllStates().filter(
      (city) => city.countryCode === "TR"
    );

    const districtsData = City.getAllCities().filter(
      (district) => district.countryCode === "TR"
    );

    const countries = country.map((c) => c.isoCode);
    const citiesByCountry = [];

    // Tüm ülkelerin şehirlerini bulma
    countries.forEach((countryCode) => {
      const countryCities = State.getAllStates().filter(
        (city) => city.countryCode === countryCode
      );

      citiesByCountry[countryCode] = countryCities;
    });

    console.log(citiesByCountry);
    //setCities(citiesByCountry["TR"]);

    setCountry([...countryData, ...euCountriesData]);
    setCities(citiesData);
    setDistricts(districtsData);
  };

  useEffect(() => {
    datas();
  }, []);

  console.log(country);
  console.log(cities);

  const [arrowState, setArrowState] = useState({
    // searchDropDown componentini tutan stateler
    country: false,
    city: false,
    district: false,
  });

  const arrowFunc = (arrow) => {
    // searchDropDown componentini açan ve kapatan okları üç div arasından seçme
    if (arrowState[arrow] === false) {
      return (
        <KeyboardArrowDownIcon
          style={{ color: "gray" }}
          onClick={() => arrowClickHandler(arrow)}
        />
      );
    } else {
      return (
        <KeyboardArrowUpIcon
          style={{ color: "gray" }}
          onClick={() => arrowClickHandler(arrow)}
        />
      );
    }
  };

  const arrowClickHandler = (arrow) => {
    setArrowState({ ...arrowState, [arrow]: !arrowState[arrow] }); // arrow statelerini güncelledim. çünkü üç tane div için seçiyoruz. her biri için click sonrası için güncellemek gerekiyor
  };

  const [inputBoxCity, setInputBoxCity] = useState(""); // seçilen ülke, şehir ve ülkeye tıklandığında seçilen veriyi tutan state
  const [inputBoxCountry, setInputBoxCountry] = useState(""); // seçilen ülke, şehir ve ülkeye tıklandığında seçilen veriyi tutan state
  return (
    <form className="two form_box">
      <h1 className="text-lg font-semibold text-gray-800 mb-5">
        Ad Adress Information
      </h1>
      <div className="w-full flex info_boxes_even flex-row gap-5 py-5">
        <div className="flex items-end gap-5">
          <div
            className={`h-[4rem] flex items-end justify-center duration-500 `}
          ></div>
          <div className="flex flex-col gap-3 relative">
            <label htmlFor="country">
              Country <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <div className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50 ">
                <div
                  onClick={() => arrowClickHandler("country")}
                  className="w-full h-full bg-gray-50 flex items-center"
                >
                  {inputBoxCountry}
                </div>
                {arrowFunc("country")}
              </div>

              <SearchDropDown
                id="countryId"
                country={country}
                arrowState={arrowState}
                setArrowState={setArrowState}
                setInputBoxCountry={setInputBoxCountry}
                arrowClickHandler={arrowClickHandler}
              />
            </div>
          </div>
        </div>

        <div className="flex items-end gap-5">
          <div
            className={`h-[4rem] flex items-end justify-center duration-500`}
          >
            <div className="w-8 h-8 bg-gray-50 border-2 border-gray-400/30 flex items-center justify-center rounded-full ">
              <ArrowForwardIcon style={{ color: "var(--bg_color)" }} />
            </div>
          </div>
          <div className="flex flex-col gap-3 relative">
            <label htmlFor="city">
              City <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <div className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50">
                <div
                  onClick={() => arrowClickHandler("city")}
                  className="w-full h-full bg-gray-50 flex items-center"
                >
                  {inputBoxCity}
                </div>
                {arrowFunc("city")}
              </div>

              <SearchDropDown
                id="cityId"
                cities={cities}
                arrowState={arrowState}
                setArrowState={setArrowState}
                setInputBoxCity={setInputBoxCity}
                arrowClickHandler={arrowClickHandler}
              />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-5">
          <div
            className={`h-[4rem] flex items-end justify-center duration-500 `}
          >
            <div className="w-8 h-8 bg-gray-50 border-2 border-gray-400/30 flex items-center justify-center rounded-full ">
              <ArrowForwardIcon style={{ color: "var(--bg_color)" }} />
            </div>
          </div>
          <div className="flex flex-col gap-3 relative">
            <label htmlFor="district">
              District <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <div className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50 ">
                <div
                  onClick={() => arrowClickHandler("district")}
                  className="w-full h-full bg-gray-50 flex items-center"
                >
                  deneme
                </div>
                {arrowFunc("district")}
              </div>
              {arrowState.district && <SearchDropDown />}
            </div>
          </div>
        </div>
      </div>
      {/* {cities.map((city, index) => (
        <div key={index}>{city.name}</div>
      ))} */}
    </form>
  );
};

export default AdressInfo;