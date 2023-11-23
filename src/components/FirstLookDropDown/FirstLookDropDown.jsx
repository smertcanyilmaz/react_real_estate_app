import React, { useEffect, useState } from "react";
import { City, Country, State } from "country-state-city";

const FirstLookDropDown = () => {
  const [country, setCountry] = useState([]);
  const [cities, setCities] = useState(null);

  const datas = () => {
    const countryData = Country.getAllCountries().filter(
      (country) => country.name === "Turkey"
    );

    const euCountriesData = Country.getAllCountries().filter(
      (country) => country.currency === "EUR"
    );
    const sumCountries = countryData.concat(euCountriesData); // arrayleri birleştirdim

    setCountry(sumCountries);

    const countryIsoCodes = country.map((country) => country.isoCode);
    const cities = State.getAllStates().filter(
      (cities) => cities.countryCode === countryIsoCodes
    );
    setCities(cities);
  };
  useEffect(() => {
    datas();
  }, []);

  console.log(country);
  console.log(cities);

  return (
    <div className="w-[40rem] max-h-[12rem] overflow-y-auto bg-[#e8e8e9] rounded-lg p-2">
      <div className=" w-full h-full flex flex-col gap-2 pl-5">
        <p>mert</p>
        <p>mert</p>
        <p>mert</p>
        <p>mert</p>
        <p>mert</p>
        <p>mert</p>
        <p>mert</p>
      </div>
    </div>
  );
};

export default FirstLookDropDown;
