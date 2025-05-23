import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  languages: [],
  setLanguages: (data) => set({ languages: data }),
  addLanguage: (lang) =>
    set((state) => ({ languages: [...state.languages, lang] })),
  filterByDifficulty: (level) =>
    set((state) => ({
      languages: state.languages.filter((l) => l.difficulty === level),
    })),
}));
