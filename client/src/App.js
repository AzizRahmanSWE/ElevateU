import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
//import WorkoutPresetMain from "./components/workoutPresets/workoutPresetMain";
import ExerciseDetail from "./components/exercisesDetail/ExerciseDetail";
import PresetPage from "./components/workoutPlan/PresetPage";
//import LoginPage from "./components/login(na)/loginPage";

function App() {
  return (
    /*<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Goals" element={<Goals />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Exercises" element={<SearchExercises />} />
    </Routes>*/

    <Box width="400px" sx={{ width: { xl: "auto" } }} m="auto">
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path="/workout_presets" element={<PresetPage />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Box>
  );
}

export default App;
