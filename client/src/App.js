import React, { Fragment } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
// import Goals from './components/Goals';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Home" element={<Home />} />
    </Routes>
  )
}

export default App;