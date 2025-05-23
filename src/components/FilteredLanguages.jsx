import React, { useEffect, useState } from "react";
import { useFilteredLanguages } from "../hooks/useFilteredLanguages";
import LanguageCard from "./LanguageCard";

const FilteredLanguages = () => {
  const [allLanguages, setAllLanguages] = useState([]);
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    fetch("/languages.json")
      .then((res) => res.json())
      .then((data) => setAllLanguages(data))
      .catch((err) => console.error("Failed to load languages:", err));
  }, []);

  const filtered = useFilteredLanguages(allLanguages, difficulty);

  return (
    <div>
      <h2>Filter Languages by Difficulty</h2>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>

      {filtered.length > 0 ? (
        filtered.map((lang) => <LanguageCard key={lang.language} {...lang} />)
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default FilteredLanguages;
