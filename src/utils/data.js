export const languages = [
  {
    language: "Ukrainian",
    countries: [
      {
        name: "Ukraine",
        traditions: [
          {
            title: "Kupala Night",
            description: "An ancient Slavic summer solstice celebration.",
            isHoliday: true,
          },
          {
            title: "Malanka",
            description: "Folk New Year celebrated in January.",
            isHoliday: true,
          },
        ],
      },
    ],
    difficulty: "Medium",
    isPopular: true,
  },
  {
    language: "Japanese",
    countries: [
      {
        name: "Japan",
        traditions: [
          {
            title: "Tea Ceremony",
            description: "A ritualized preparation and presentation of tea.",
            isHoliday: false,
          },
        ],
      },
    ],
    difficulty: "Hard",
    isPopular: true,
  },
];

export const countries = [
  {
    name: "Ukraine",
    traditions: [
      {
        title: "Easter Egg Painting (Pysanka)",
        description: "Symbolic designs made using wax-resist method.",
        isHoliday: true,
      },
    ],
  },
  {
    name: "India",
    traditions: [
      {
        title: "Diwali",
        description: "Festival of lights celebrating good over evil.",
        isHoliday: true,
      },
    ],
  },
];

export const allTraditions = [
  {
    title: "Hutsul Wedding",
    description: "Colorful highland ceremony with music and dancing.",
    isHoliday: false,
  },
  {
    title: "Hanami",
    description: "Cherry blossom viewing in Japan.",
    isHoliday: false,
  },
  {
    title: "La Tomatina",
    description: "Spanish festival of tomato-throwing.",
    isHoliday: true,
  },
];
