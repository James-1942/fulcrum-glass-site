import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShowerGlass from "./pages/ShowerGlass";
import CustomMirrors from "./pages/CustomMirrors";
import WindowGlass from "./pages/WindowGlass";
import GlassTabletops from "./pages/GlassTabletops";
import SpecialtyGlass from "./pages/SpecialtyGlass";
import Services from "./pages/Services";
import Showcase from "./pages/Showcase";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/shower-glass" element={<ShowerGlass />} />
        <Route path="/services/custom-mirrors" element={<CustomMirrors />} />
        <Route path="/services/window-glass-solutions" element={<WindowGlass />} />
        <Route path="/services/glass-tabletops" element={<GlassTabletops />} />
        <Route path="/services/specialty-glass" element={<SpecialtyGlass />} />
        <Route path="/services" element={<Services />} />
        <Route path="/showcase" element={<Showcase />} />
      </Routes>
    </>
  );
}
