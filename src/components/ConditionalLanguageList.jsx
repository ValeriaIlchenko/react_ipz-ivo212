import React from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import LanguageCard from "./LanguageCard";

const ConditionalLanguageList = ({ showPopularOnly }) => {
  const { languages } = useLanguageStore();

  const filtered = showPopularOnly
    ? languages.filter((lang) => lang.isPopular)
    : languages;

  if (filtered.length === 0) return <p>Мов не знайдено</p>;

  return (
    <div>
      {filtered.map((lang) => (
        <LanguageCard key={lang.language} {...lang} />
      ))}
    </div>
  );
};

export default ConditionalLanguageList;
