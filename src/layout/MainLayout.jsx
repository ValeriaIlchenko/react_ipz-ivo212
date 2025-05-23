import React from "react";
import { Outlet, Link } from "react-router-dom";
import ThemeSwitcher from "../components/ThemeSwitcher";
import AccessibilityControls from "../components/AccessibilityControls";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Головна</Link> |{" "}
          <Link to="/language-learning">Мови</Link> |{" "}
          <Link to="/heritage">Спадщина</Link> |{" "}
        </nav>
        <ThemeSwitcher />
        <AccessibilityControls />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
