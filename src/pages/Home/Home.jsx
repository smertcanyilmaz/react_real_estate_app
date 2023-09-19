import Navbar from "../../components/Navbar/Navbar";
import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import PopularOffersButton from "../../components/FirstLook/PopularOffersButton/PopularOffersButton";
import { useState } from "react";

const Home = () => {
  const [myClass, setMyClass] = useState("translate-y-0");

  return (
    <div className="max-w-6xl max-h-[300vh] mx-auto flex flex-col">
      <Navbar />
      <FirstLook />
      <PopularOffers sale={true} myClass={myClass} />
      <PopularOffersButton setMyClass={setMyClass} />
      <PopularOffers sale={false} myClass={myClass} />
    </div>
  );
};

export default Home;
