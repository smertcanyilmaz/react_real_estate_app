import { useSelector } from "react-redux";
import Search from "./Search/Search";

const FirstLook = () => {
  const popularOffersVisible = useSelector(
    (state) => state.popularOffersVisible.visible
  );

  return (
    <div
      className={`w-full h-[100vh] mt-32 duration-1000 ${
        popularOffersVisible ? "-translate-y-[100%] opacity-0" : ""
      }`}
    >
      <div className="w-full h-[30.9rem] flex justify-between mt-20 ">
        <div className="flex-1 flex flex-col gap-10 justify-center items-center">
          <h1 className="text-5xl font-bold leading-snug">
            Modern Living For Everyone
          </h1>
          <p className="text-justify text-xl leading-normal">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in Madrid and Barcelona more
            than 15 years.
          </p>
          <Search />
        </div>
        <div className="flex-1 flex justify-end relative">
          <img src="src\assets\FirstLook\pexels-timur-saglambilek-87223 2.png" />
          <img
            src="src\assets\FirstLook\pexels-timur-saglambilek-87223 1.png"
            className="absolute bottom-0"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstLook;
