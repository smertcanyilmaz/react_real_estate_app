import Navbar from "../../components/Navbar/Navbar";
import FirstLook from "../../components/FirstLook/FirstLook";
import PopularOffers from "../../components/PopularOffers/PopularOffers";
import PopularOffersButton from "../../components/FirstLook/PopularOffersButton/PopularOffersButton";
import { useEffect, useRef, useState } from "react";

const Home = ({ ref0 }) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const [refStatus, setRefStatus] = useState(ref1);
  const [start, setStart] = useState(true);

  const handleButtonClick = () => {
    if (refStatus === ref1) {
      ref1.current?.scrollIntoView({ behavior: "smooth" });
      setRefStatus(ref2);
    } else if (refStatus === ref2) {
      ref2.current?.scrollIntoView({ behavior: "smooth" });
      setRefStatus(ref1);
    }
    setStart(false);
  };

  const handleGoTop = () => {
    ref0.current?.scrollIntoView({ behavior: "smooth" });
    setStart(true);
    setRefStatus(ref1);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <FirstLook />
      <PopularOffers sale={true} refStatus={ref1} />
      <PopularOffersButton
        handleButtonClick={handleButtonClick}
        handleGoTop={handleGoTop}
        start={start}
        ref1={ref1}
        refStatus={refStatus}
      />
      <PopularOffers sale={false} refStatus={ref2} />
    </>
  );
};

export default Home;
