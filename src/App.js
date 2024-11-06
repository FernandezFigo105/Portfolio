import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Projects from './pages/Projects';
import ProjectKores from './pages/ProjectKores';
import ProjectYourHour from './pages/ProjectYourHour';
import ProjectFridge from './pages/ProjectFridge';
import ProjectPuptone from './pages/ProjectPuptone';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />

          {/* Projects Page Route */}
          <Route path="/projects" element={<Projects />} />

          {/* Individual Project Routes */}
          <Route path="/projects/kores" element={<ProjectKores />} />
          <Route path="/projects/your-hour" element={<ProjectYourHour />} />
          <Route path="/projects/fridge" element={<ProjectFridge />} />
          <Route path="/projects/puptone" element={<ProjectPuptone />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
