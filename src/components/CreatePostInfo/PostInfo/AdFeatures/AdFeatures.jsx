import React from "react";

const AdFeatures = () => {
  const features = [
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

  return (
    <div className="four form_box">
      <h1 className="text-lg font-semibold text-gray-800 mb-5">Ad Features</h1>
      <div className="w-full flex flex-wrap gap-3 items-start">
        {features.map((feature, index) => (
          <div key={index} className="w-44 flex items-center ">
            <input
              type="checkbox"
              name="check"
              id="check"
              className="w-8 h-4"
            />
            <span className=" flex-1 text-sm text-gray-800">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdFeatures;
