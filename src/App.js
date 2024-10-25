// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Hero from './component/Hero';
import About from './component/About';
import Portfolio from './component/portfolio';
import Project from './component/project';
import Contact from './component/contact';
const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <Hero />
        <About />
        <Portfolio />
        <Contact/>
        <Routes>
          <Route path="/project-1" element={<Project title="Project Title 1" />} />
          <Route path="/project-2" element={<Project title="Project Title 2" />} />
          <Route path="/project-3" element={<Project title="Project Title 3" />} />
          <Route path="/project-4" element={<Project title="Project Title 4" />} />
          <Route path="/project-5" element={<Project title="Project Title 5" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
