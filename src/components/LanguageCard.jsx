import React from "react";
import CountryCard from "./CountryCard";

const LanguageCard = ({ language, countries, difficulty, isPopular }) => {
  return (
    <div className="card">
      <h2>{language}</h2>
      <p>Difficulty: {difficulty}</p>
      <p>Popular: {isPopular ? "Yes" : "No"}</p>
      <h3>Spoken in:</h3>
      {countries.map((country) => (
        <CountryCard key={country.name} {...country} />
      ))}
    </div>
  );
};

export default LanguageCard;
