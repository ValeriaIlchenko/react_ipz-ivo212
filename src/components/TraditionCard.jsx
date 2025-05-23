import React, { useState } from "react";

const TraditionCard = ({ title, description, isHoliday }) => {
  const [expanded, setExpanded] = useState(false);

  if (!title) return null;

  return (
    <div className="card tradition">
      <h5>{title}</h5>
      <p>{isHoliday ? "National Holiday" : "Cultural Custom"}</p>
      <button onClick={() => setExpanded((prev) => !prev)}>
        {expanded ? "Hide Description" : "Show Description"}
      </button>
      {expanded && <p>{description}</p>}
    </div>
  );
};

export default TraditionCard;
