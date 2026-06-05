import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShowerGlass from "./pages/ShowerGlass";
import CustomMirrors from "./pages/CustomMirrors";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
  <Route path="/" element={<HomePage />} />

  <Route
    path="/services/shower-glass"
    element={<ShowerGlass />}
  />

  <Route
    path="/services/custom-mirrors"
    element={<CustomMirrors />}
  />
   </Routes>
    </>
  );
}
