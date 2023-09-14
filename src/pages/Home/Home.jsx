import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import PopularOffersButton from "../../components/FirstLook/PopularOffersButton/PopularOffersButton";

const Home = () => {
  const [section2Visible, setSection2Visible] = useState(false);

  const handleButtonClick = () => {
    setSection2Visible(!section2Visible);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <FirstLook section2Visible={section2Visible} />
      <PopularOffersButton
        handleButtonClick={handleButtonClick}
        section2Visible={section2Visible}
      />
      <PopularOffers section2Visible={section2Visible} />
    </div>
  );
};

export default Home;
