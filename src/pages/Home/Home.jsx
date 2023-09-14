import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FirstLook from "../../components/FirstLook/FirstLook";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar />
      <FirstLook />
    </div>
  );
};

export default Home;
