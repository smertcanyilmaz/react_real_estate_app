import Search from "./Search/Search";

const FirstLook = () => {
  return (
    <div className="max-w-6xl h-[100vh]  mx-auto mt-20  duration-500">
      <div className="max-w-full max-h-[68vh] flex justify-between  ">
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
        </div>
        <div className="flex-1 flex justify-end relative">
          <img
            src="public\images\house.gif"
            //className="max-h-full  object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstLook;
