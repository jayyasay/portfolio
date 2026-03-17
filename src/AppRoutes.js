import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import SystemDesign from "./components/SystemDesign";
import ScrollToTop from "./components/ScrollToTop";

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/design-system" element={<SystemDesign />} />
      </Routes>
    </>
  );
}

export default AppRoutes;