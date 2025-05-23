import React from "react";
import TraditionCard from "../components/TraditionCard";
import { allTraditions } from "../utils/data";

const Heritage = () => {
  return (
    <div>
      <h1>World Heritage Traditions</h1>
      {allTraditions.map((trad, i) => (
        <TraditionCard key={i} {...trad} />
      ))}
    </div>
  );
};

export default Heritage;
