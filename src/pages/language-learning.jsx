import React from "react";
import LanguageCard from "../components/LanguageCard";
import { languages } from "../utils/data";

const LanguageLearning = () => {
  return (
    <div>
      <h1>Language Learning</h1>
      {languages.map((lang, i) => (
        <LanguageCard key={i} {...lang} />
      ))}
    </div>
  );
};

export default LanguageLearning;
