import React from "react";
import LanguageCard from "./LanguageCard";

const ConditionalLanguageList = ({ languages, showPopularOnly }) => {
  if (!languages || languages.length === 0)
    return <p>No languages available.</p>;

  return (
    <div>
      <h2>Language List</h2>
      {languages.map((lang) => {
        if (showPopularOnly && !lang.isPopular) return null;
        return <LanguageCard key={lang.language} {...lang} />;
      })}
    </div>
  );
};

export default ConditionalLanguageList;
