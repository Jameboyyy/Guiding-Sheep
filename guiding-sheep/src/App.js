import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/auth";

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
          {/* Default route */}
          <Route path="/" element={<Navigate to="/auth" />} />
          {/* Auth route */}
          <Route path="/auth" element={<Auth />} />
          {/* Catch-all route to handle undefined routes */}
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
