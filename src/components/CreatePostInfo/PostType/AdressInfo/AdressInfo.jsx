import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchDropDown from "../SearchDropDown/SearchDropDown";
import axios from "axios";
import { City, Country, State } from "country-state-city";

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
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const datas = () => {
    const countryData = Country.getAllCountries().filter(
      (country) => country.name === "Turkey"
    );

    const citiesData = State.getAllStates().filter(
      (city) => city.countryCode === "TR"
    );

    const districtsData = City.getAllCities().filter(
      (district) => district.countryCode === "TR"
    );

    setCountry(countryData);
    setCities(citiesData);
    setDistricts(districtsData);
  };
  useEffect(() => {
    datas();
  }, []);

  console.log(cities);

  return (
    <form className="two form_box">
      <h1 className="text-lg font-semibold text-gray-800 mb-5">
        Ad Adress Information
      </h1>
      <div className="info_boxes info_boxes_even flex-row gap-5">
        <div className="flex flex-col gap-3">
          <label htmlFor="country">
            Country <span className="text-red-500">*</span>
          </label>
          <div className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50"></div>
        </div>

        <div className="flex items-end gap-5">
          <div
            className={`h-[4rem] flex items-end justify-center duration-500 `}
          >
            <div className="w-8 h-8 bg-gray-50 border-2 border-gray-400/30 flex items-center justify-center rounded-full ">
              <ArrowForwardIcon style={{ color: "var(--bg_color)" }} />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="city">
              City <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <div className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50"></div>
              <SearchDropDown />
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
          <div className="flex flex-col gap-3">
            <label htmlFor="district">
              District <span className="text-red-500">*</span>
            </label>
            <div className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50"></div>
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
