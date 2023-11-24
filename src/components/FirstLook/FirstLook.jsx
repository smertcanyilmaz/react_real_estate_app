import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FirstLookDropDown from "../FirstLookDropDown/FirstLookDropDown";
import { useEffect, useState } from "react";
import { Country, State } from "country-state-city";
import useFetch from "../hooks/useFetch";

const FirstLook = () => {
  const [country, setCountry] = useState([]);
  const [cities, setCities] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredCities, setFilteredCities] = useState([]);

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

      const sumTempFilter = sumTemp?.map((city) => city.name);

      setCities(sumTempFilter);
    };
    datas();
    const filteredCitiesData = cities?.filter((city) =>
      city.toLowerCase().includes(inputValue.toLowerCase())
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
    // const temp = [];
    // estates.map((estate) => {
    //   temp.push(estate.place.city);
    // });
    // const cityData = temp.filter((estate) => estate === city);
    // console.log(cityData);

    const fetchEstates = estates.filter(
      (estates) => estates.place.city === city
    );
    console.log(fetchEstates);
  };

  return (
    <div className="max-w-6xl h-[90vh] flex flex-col gap-[10rem] ">
      <div className="w-[50%] flex flex-col gap-5 mt-[10rem]">
        <h1 className="text-4xl font-bold leading-snug">
          Modern Living For Everyone
        </h1>
        <p className="text-justify leading-normal w-[95%]">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in all Europe more than 15 years.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="w-[40rem] h-20 flex bg-gray-100/60 rounded-lg p-2 ">
          <input
            type="text"
            className="w-full h-full outline-none pl-5 bg-transparent text-lg"
            placeholder="Istanbul, Amsterdam, Rome, etc.."
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="w-28 h-full">
            <SearchRoundedIcon
              style={{ width: "1.8rem", height: "1.8rem", color: "gray" }}
            />
          </button>
        </div>
        {showDropDown && (
          <FirstLookDropDown
            filteredCities={filteredCities}
            clickHandler={clickHandler}
          />
        )}
      </div>
      <img
        src="images/first_look.png"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
    </div>
  );
};

export default FirstLook;
