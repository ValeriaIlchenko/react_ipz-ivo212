import React, { useEffect, useState } from "react";
import { useLanguageStore } from "../store/useLanguageStore";
import LanguageCard from "./LanguageCard";

const FilteredLanguages = () => {
  const [difficulty, setDifficulty] = useState("");
  const { languages, setLanguages } = useLanguageStore();

  useEffect(() => {
    fetch("/languages.json")
      .then((res) => res.json())
      .then(setLanguages)
      .catch((err) => console.error("Помилка завантаження мов:", err));
  }, [setLanguages]);

  const filtered = difficulty
    ? languages.filter((l) => l.difficulty === difficulty)
    : languages;

  return (
    <div>
      <h2>Фільтрація мов</h2>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">Усі</option>
        <option value="Easy">Легкі</option>
        <option value="Medium">Середні</option>
        <option value="Hard">Складні</option>
      </select>
      {filtered.map((lang) => (
        <LanguageCard key={lang.language} {...lang} />
      ))}
    </div>
  );
};

export default FilteredLanguages;
