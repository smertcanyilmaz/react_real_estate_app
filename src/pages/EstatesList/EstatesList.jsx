import React from "react";
import "./EstateList.css";
import EstatesFilters from "../../components/EstatesFilters/EstatesFilters";

const EstatesList = () => {
  return (
    <div className="max-w-6xl mt-10">
      <EstatesFilters />
      <div className="list"></div>
    </div>
  );
};

export default EstatesList;
