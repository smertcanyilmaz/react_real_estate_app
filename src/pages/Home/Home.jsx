import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import PopularOffersButton from "../../components/FirstLook/PopularOffersButton/PopularOffersButton";
import { useDispatch } from "react-redux";
import { visible } from "../../redux/popularOffersVisibleReducer";

const Home = () => {
  //const [popularOffersVisible, setPopularOffersVisible] = useState(false);
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    //setPopularOffersVisible(!popularOffersVisible);
    dispatch(visible());
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <FirstLook />
      <PopularOffersButton handleButtonClick={handleButtonClick} />
      <PopularOffers />
    </div>
  );
};

export default Home;
