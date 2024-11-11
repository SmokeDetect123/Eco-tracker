// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import EcoTracker from './EcoTracker';
import './App.css';

function App() {
  return (
    <Router>
      
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-logo">
            <span className="logo-icon">🌍</span> Eco Footprint
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/footprint">Eco Tracker</Link></li>
            
          </ul>
        </nav>

        {/* Page Content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/footprint" element={<EcoTracker />} />
          <Route path="/my-journeys" element={
            <div style={{ padding: "20px", textAlign: "center" }}>
              <h1>My Journeys (Coming Soon)</h1>
              <p>Track your eco-friendly journeys and review your contributions here.</p>
            </div>
          } />
        </Routes>
      
    </Router>
  );
}

export default App;
