import React from "react";
import { useAccessibility } from "../context/AccessibilityProvider";

const AccessibilityControls = () => {
  const { increaseFont, decreaseFont, toggleContrast } = useAccessibility();

  return (
    <div style={{ marginTop: "10px" }}>
      <button onClick={increaseFont}>🔼 Збільшити текст</button>{" "}
      <button onClick={decreaseFont}>🔽 Зменшити текст</button>{" "}
      <button onClick={toggleContrast}>🌓 Контрастність</button>
    </div>
  );
};

export default AccessibilityControls;
