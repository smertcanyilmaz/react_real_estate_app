import Search from "./Search/Search";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const FirstLook = () => {
  return (
    <div className="max-w-6xl h-[90vh] flex flex-col gap-[10rem] ">
      {/* <div className="max-w-full max-h-[68vh] flex justify-between  ">
        <div className="flex-1 flex flex-col gap-12 justify-center items-center">
          <h1 className="text-5xl font-bold leading-snug">
            Modern Living For Everyone
          </h1>
          <p className="text-justify text-xl leading-normal">
            We provide a complete service for the sale, purchase or rental of
            real estate. We have been operating in all Europe more than 15
            years.
          </p>
          {/* <Search /> */}
      {/* </div>
        <div className="flex-1 flex justify-end relative">
          <img src="images\house.gif" />
        </div> */}
      {/* </div>  */}

      <div className="w-[50%] flex flex-col gap-5 mt-[10rem]">
        <h1 className="text-4xl font-bold leading-snug">
          Modern Living For Everyone
        </h1>
        <p className="text-justify leading-normal w-[95%]">
          We provide a complete service for the sale, purchase or rental of real
          estate. We have been operating in all Europe more than 15 years.
        </p>
      </div>
      <div className="w-[40rem] h-20 flex bg-gray-100/60 rounded-lg p-2 ">
        <input
          type="text"
          className="w-full h-full outline-none pl-5 bg-transparent text-lg"
          placeholder="Search any place.."
        />
        <button className="w-28 h-full">
          <SearchRoundedIcon
            style={{ width: "1.8rem", height: "1.8rem", color: "gray" }}
          />
        </button>
      </div>
      <img
        src="images/first_look.png"
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
      />
    </div>
  );
};

export default FirstLook;
