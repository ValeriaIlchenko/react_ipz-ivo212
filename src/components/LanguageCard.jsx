import React from "react";
import CountryCard from "./CountryCard";

const LanguageCard = ({ language, countries, difficulty, isPopular }) => {
  if (!language || !countries) return null;

  return (
    <div className="card">
      <h2>{language}</h2>
      <p>Difficulty: {difficulty}</p>
      {isPopular && <p style={{ color: "green" }}>🌟 Popular language!</p>}
      {countries.length > 0 ? (
        <div>
          <h3>Spoken in:</h3>
          {countries.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </div>
      ) : (
        <p>No countries listed</p>
      )}
    </div>
  );
};

export default LanguageCard;
