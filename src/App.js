import React from 'react';
import "./css/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Reset from "./pages/Reset";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
