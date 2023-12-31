import React, { useEffect, useState } from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchDropDown from "../SearchDropDown/SearchDropDown";
import { Country, State } from "country-state-city";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const AdressInfo = ({ setSum, setSumChecker }) => {
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
    const sumCountries = countryData.concat(euCountriesData); // arrayleri birleştirdim

    //alfabetik olarak sıralama yaptım
    const sortingCountries = sumCountries.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    setCountry(sortingCountries);
  };

  useEffect(() => {
    datas();
  }, []);

  const selectedFilterHandler = (countrySelected) => {
    //hangi ülkeyi seçtiysek onunla ilgili filtrelemeleri yapan fonksiyon
    const countryInfo = country?.find(
      (country) => country?.name === countrySelected
    );

    const selectedCountryIso = countryInfo?.isoCode;

    console.log(countryInfo);

    const citiesData = State?.getAllStates()?.filter(
      // ülkelere göre il seçildi
      (city) => city?.countryCode === selectedCountryIso
    );

    setCities(citiesData);

    // const districtsData = City?.getCitiesOfCountry(selectedCountryIso);

    // .filter(
    //   (district) => district?.countryCode // ülkelerin ilçeleri seçildi
    // );

    //console.log(districtsData);

    //setDistricts(districtsData);
    setInputBoxCity("choose");
    setInputBoxDistricts("choose");
    console.log("test");
  };

  const [newDistricts, setNewDistricts] = useState(); // seçili ilçeleri tutan state

  const cityFilterHandler = (citySelected) => {
    //hangi ili seçtiysek onunla ilgili ilçe filtrelemelerini yapan fonksiyon

    const cityInfo = cities?.find((country) => country?.name === citySelected);
    const isoCode = cityInfo?.isoCode;
    const districtSelected = districts?.filter(
      (district) => district?.stateCode === isoCode
    );

    setNewDistricts(districtSelected);

    setInputBoxDistricts("choose");
  };

  const [arrowState, setArrowState] = useState({
    // searchDropDown componentini tutan state
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
    // arrow statelerini güncelledim. çünkü üç tane div için seçiyoruz. her biri için click sonrası için güncellemek gerekiyor
    if (arrowState[arrow]) {
      // Eğer zaten açıksa, kapat
      setArrowState({ ...arrowState, [arrow]: false });
    } else {
      // Değilse, açık olanları kapat, sadece tıklananı aç
      const updatedState = { country: false, city: false, district: false };
      updatedState[arrow] = true;
      setArrowState(updatedState);
    }
  };

  const [inputBoxCountry, setInputBoxCountry] = useState("choose"); // seçilen ülke, şehir ve ülkeye tıklandığında seçilen veriyi tutan state

  const [inputBoxCity, setInputBoxCity] = useState("choose"); // seçilen ülke, şehir ve ülkeye tıklandığında seçilen veriyi tutan state

  const [inputBoxDistricts, setInputBoxDistricts] = useState("choose");

  useEffect(() => {
    setSum((prevSum) => ({
      ...prevSum,
      place: {
        country: inputBoxCountry,
        city: inputBoxCity,
        district: inputBoxDistricts,
      },
    }));
    setSumChecker((prev) => ({
      ...prev,
      country: inputBoxCountry,
      city: inputBoxCity,
      district: inputBoxDistricts,
    }));
  }, [inputBoxCountry, inputBoxCity, inputBoxDistricts]);

  const forMobile = window.innerWidth <= 640;

  return (
    <form className="two form_box">
      <h1 className="text-sm md:text-lg font-semibold text-gray-800 mb-5">
        Ad Adress Information
      </h1>
      <div className="w-full flex bg-gray-50 md:bg-gray-100 rounded-[4px] flex-row gap-5 py-5  ">
        <div className="flex items-end gap-5">
          <div
            className={`hidden h-[4rem] md:flex items-end justify-center duration-500 bg-red-500`}
          ></div>
          <div className="flex flex-col gap-3 relative">
            <label className="text-xs md:text-base" htmlFor="country">
              Country
              <span className=" text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <div className="w-32 h-8 md:w-60 md:h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50">
                <div
                  onClick={() => arrowClickHandler("country")}
                  className={`w-full h-full bg-gray-50 flex items-center duration-300 text-xs md:text-[15px] ${
                    inputBoxCountry === "choose" && "text-gray-600"
                  }`}
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
                selectedFilterHandler={selectedFilterHandler}
              />
            </div>
          </div>
        </div>
        <div className="flex items-end  gap-2 md:gap-5   ">
          <div
            className={`h-[2rem] md:h-[4rem] flex items-center md:items-end justify-center duration-500 `}
          >
            <div className="md:w-8 md:h-8 bg-gray-50 border-2 border-gray-500/30 flex items-center justify-center rounded-full -ml-1 md:-ml-0 mr-1 md:-mr1">
              <ArrowForwardIcon
                style={{
                  color: "var(--bg_color)",
                  width: forMobile && "1rem",
                  height: forMobile && "1rem",
                }}
              />
            </div>
          </div>
          <div
            className={`flex flex-col gap-3 relative  ${
              inputBoxCountry === "choose"
                ? "opacity-50 cursor-default pointer-events-none"
                : "opacity-100 cursor-pointer pointer-events-auto"
            }`}
          >
            <label className="text-xs md:text-base" htmlFor="city">
              City <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <div className="w-32 h-8 md:w-60 md:h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50 ">
                <div
                  onClick={() => arrowClickHandler("city")}
                  className={`w-full h-full bg-gray-50 flex items-center duration-300 text-xs md:text-[15px] ${
                    inputBoxCity === "choose" && "text-gray-600"
                  }`}
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
                cityFilterHandler={cityFilterHandler}
              />
            </div>
          </div>
        </div>
        {/* //todo: ilçeleri aldığım paket iphonelarda çöktüğü için iptal etmek durumunda kaldım ama kodlarını silmek istemedim */}

        {/* <div className="flex items-end gap-5">
          <div
            className={`h-[4rem] flex items-end justify-center duration-500 `}
          >
            <div className="w-8 h-8 bg-gray-50 border-2 border-gray-400/30 flex items-center justify-center rounded-full ">
              <ArrowForwardIcon style={{ color: "var(--bg_color)" }} />
            </div>
          </div>
          <div
            className={`flex flex-col gap-3 relative  ${
              inputBoxCity === "choose"
                ? "opacity-50 cursor-default pointer-events-none"
                : "opacity-100 cursor-pointer pointer-events-auto"
            }`}
          > */}
        {/* <label htmlFor="district">
              District <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col">
              <div className="w-60 h-10 flex items-center px-2 border border-gray-500/50 rounded-[4px] cursor-pointer bg-gray-50 ">
                <div
                  onClick={() => arrowClickHandler("district")}
                  className={`w-full h-full bg-gray-50 flex items-center ${
                    inputBoxDistricts === "choose" &&
                    "text-gray-600 text-[15px]"
                  }`}
                >
                  {inputBoxDistricts}
                </div>
                {arrowFunc("district")}
              </div>
              <SearchDropDown
                id="districtId"
                districts={districts}
                arrowState={arrowState}
                setArrowState={setArrowState}
                setInputBoxDistricts={setInputBoxDistricts}
                arrowClickHandler={arrowClickHandler}
                newDistricts={newDistricts}
              />
            </div> */}
        {/* </div>
        </div> */}
      </div>
    </form>
  );
};

export default AdressInfo;
