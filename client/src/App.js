import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// components
import Home from './pages/Home';
import About from './pages/About';
import Goals from './pages/Goals';
import SearchExercises from './pages/Exercises';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Goals" element={<Goals />} />
      <Route path="/Exercises" element={<SearchExercises />} />
    </Routes>
  )
}

export default App;