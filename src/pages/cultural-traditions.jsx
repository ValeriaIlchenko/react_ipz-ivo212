import React from "react";
import CountryCard from "../components/CountryCard";
import { countries } from "../utils/data";

const CulturalTraditions = () => {
  return (
    <div>
      <h1>Cultural Traditions</h1>
      {countries.map((country, i) => (
        <CountryCard key={i} {...country} />
      ))}
    </div>
  );
};

export default CulturalTraditions;
