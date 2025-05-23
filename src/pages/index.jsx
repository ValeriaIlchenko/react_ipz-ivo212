import React from "react";
import LanguageCard from "../components/LanguageCard";

const languages = [
  {
    language: "Ukrainian",
    countries: [
      {
        name: "Ukraine",
        traditions: [
          {
            title: "Kupala Night",
            description: "Ancient Slavic holiday.",
            isHoliday: true,
          },
        ],
      },
    ],
    difficulty: "Medium",
    isPopular: true,
  },
];

export default function Home() {
  return (
    <div>
      <h1>Language and Heritage Explorer</h1>
      {languages.map((lang, idx) => (
        <LanguageCard key={idx} {...lang} />
      ))}
    </div>
  );
}
