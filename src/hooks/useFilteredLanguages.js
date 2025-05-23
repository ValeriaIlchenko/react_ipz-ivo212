import { useMemo } from "react";

export const useFilteredLanguages = (languages, difficultyFilter = "") => {
  return useMemo(() => {
    if (!difficultyFilter) return languages;
    return languages.filter((lang) => lang.difficulty === difficultyFilter);
  }, [languages, difficultyFilter]);
};
