import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/index";
import LanguageLearning from "../pages/language-learning";
import Heritage from "../pages/heritage";
import CulturalTraditions from "../pages/cultural-traditions";
import Delivery from "../pages/delivery";
import Lab3Hooks from "../pages/lab3-hooks";
import NotFound from "../pages/not-found";
import MainLayout from "../layout/MainLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/language-learning" element={<LanguageLearning />} />
        <Route path="/heritage" element={<Heritage />} />
        <Route path="/cultural-traditions" element={<CulturalTraditions />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/lab3" element={<Lab3Hooks />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
