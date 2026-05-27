import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ShowerGlass from "./pages/ShowerGlass";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/services/shower-glass"
        element={<ShowerGlass />}
      />
    </Routes>
  );
}
