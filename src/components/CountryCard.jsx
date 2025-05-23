import React from "react";
import TraditionCard from "./TraditionCard";

const CountryCard = ({ name, traditions }) => {
  return (
    <div className="card country">
      <h4>{name}</h4>
      {traditions.map((t) => (
        <TraditionCard key={t.title} {...t} />
      ))}
    </div>
  );
};

export default CountryCard;
