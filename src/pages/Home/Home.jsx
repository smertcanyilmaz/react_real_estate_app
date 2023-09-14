import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import PopularOffersButton from "../../components/FirstLook/PopularOffersButton/PopularOffersButton";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <FirstLook />
      <PopularOffersButton />
      <PopularOffers />
    </div>
  );
};

export default Home;
