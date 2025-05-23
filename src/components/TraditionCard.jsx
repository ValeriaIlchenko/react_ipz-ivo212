import React, { useState } from "react";

const TraditionCard = ({ title, description, isHoliday }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card tradition">
      <h5>{title}</h5>
      <p>{isHoliday ? "National Holiday" : "Custom"}</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide Details" : "Show Details"}
      </button>
      {expanded && <p>{description}</p>}
    </div>
  );
};

export default TraditionCard;
