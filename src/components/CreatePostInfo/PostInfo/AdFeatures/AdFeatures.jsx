import React, { useEffect } from "react";

const AdFeatures = ({ features, setFeatures, setSum }) => {
  const featureDatas = [
    "Air Condition",
    "Alarm",
    "Balcony",
    "Changing Room",
    "Elevator",
    "Garden",
    "Fitness",
    "Floor Heating",
    "Furnished",
    "Jacuzzi",
    "Laundry Room",
    "Natural Gas",
    "Parents Bathroom",
    "Park",
    "Pool",
    "Parquet",
    "Security",
    "Steel Door",
    "Terrace",
    "Thermal Insulation",
  ];

  const featuresChangeHandler = (name) => {
    setFeatures((prev) => [...prev, name]);
  };

  useEffect(() => {
    setSum((prevSum) => ({
      ...prevSum,
      specials: features,
    }));
  }, [features, setSum]);

  return (
    <div className="four form_box">
      <h1 className="text-sm md:text-lg font-semibold text-gray-800 mb-5">
        Ad Features
      </h1>
      <div className="w-full grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-3 md:items-start">
        {featureDatas.map((feature, index) => (
          <div key={index} className="w-44 flex items-center ">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="w-8 h-4"
              onChange={() => featuresChangeHandler(feature)}
            />
            <span className=" flex-1 text-xs md:text-sm text-gray-800">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdFeatures;
