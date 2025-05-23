import React from "react";
import { useTheme } from "../context/ThemeProvider";

const ThemeSwitcher = () => {
  const { dark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {dark ? "🌞 Світла тема" : "🌙 Темна тема"}
    </button>
  );
};

export default ThemeSwitcher;
