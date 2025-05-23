import React, { createContext, useContext, useState } from "react";

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

const AccessibilityProvider = ({ children }) => {
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFont = () => setFontScale((prev) => Math.min(prev + 0.1, 2));
  const decreaseFont = () => setFontScale((prev) => Math.max(prev - 0.1, 0.8));
  const toggleContrast = () => setHighContrast((prev) => !prev);

  return (
    <AccessibilityContext.Provider
      value={{
        fontScale,
        highContrast,
        increaseFont,
        decreaseFont,
        toggleContrast,
      }}
    >
      <div
        style={{
          fontSize: `${fontScale}em`,
          filter: highContrast ? "invert(1) grayscale(1)" : "none",
        }}
      >
        {children}
      </div>
    </AccessibilityContext.Provider>
  );
};

export default AccessibilityProvider;
