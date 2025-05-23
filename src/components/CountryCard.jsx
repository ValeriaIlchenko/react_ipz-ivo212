import React, { Suspense } from "react";

const TraditionCard = React.lazy(() => import("./TraditionCard"));

const CountryCard = ({ name, traditions }) => {
  if (!name) return null;

  return (
    <div className="card country">
      <h4>{name}</h4>
      <Suspense fallback={<p>Loading traditions...</p>}>
        {traditions?.length > 0 ? (
          traditions.map((t) => <TraditionCard key={t.title} {...t} />)
        ) : (
          <p>No traditions listed</p>
        )}
      </Suspense>
    </div>
  );
};

export default CountryCard;
