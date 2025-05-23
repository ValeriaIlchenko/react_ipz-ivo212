import React, { useState } from "react";
import ConditionalLanguageList from "../components/ConditionalLanguageList";
import { languages } from "../utils/data";
import Button from "../components/common/Button";

const LanguageLearning = () => {
  const [popularOnly, setPopularOnly] = useState(false);

  return (
    <div>
      <h1>Language Learning</h1>
      <Button
        label={popularOnly ? "Show All Languages" : "Show Only Popular"}
        onClick={() => setPopularOnly((prev) => !prev)}
      />
      <ConditionalLanguageList
        languages={languages}
        showPopularOnly={popularOnly}
      />
    </div>
  );
};

export default LanguageLearning;
