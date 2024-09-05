import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandscapePage from "./pages/landscapePage";
import AuthPage from "./pages/authPage";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          {/* Default route */}
          <Route path="/" element={<LandscapePage />} />
          {/* Catch-all route to handle undefined routes */}
          <Route path="*" element={<Navigate to="/" />} />
          {/* Auth route */}
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
