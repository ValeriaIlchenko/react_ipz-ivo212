import React from "react";
import AppRouter from "./router/AppRouter";
import ThemeProvider from "./context/ThemeProvider";
import AccessibilityProvider from "./context/AccessibilityProvider";

const App = () => {
  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <AppRouter />
      </AccessibilityProvider>
    </ThemeProvider>
  );
};

export default App;
