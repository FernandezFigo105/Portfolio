import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import Projects from './pages/Projects';
import ProjectKores from './pages/ProjectKores';
import ProjectYourHour from './pages/ProjectYourHour';
import ProjectFridge from './pages/ProjectFridge';
import ProjectPuptone from './pages/ProjectPuptone';
import ProjectIztron from './pages/ProjectIztron';
import About from './pages/About.js';
import Resume from './pages/Resume.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />

          {/* Individual Project Routes */}
          <Route path="/projects/kores" element={<ProjectKores />} />
          <Route path="/projects/your-hour" element={<ProjectYourHour />} />
          <Route path="/projects/fridge" element={<ProjectFridge />} />
          <Route path="/projects/puptone" element={<ProjectPuptone />} />
          <Route path="/projects/iztron" element={<ProjectIztron />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
