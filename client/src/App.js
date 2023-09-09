import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

// components
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import Navbar from "./components/homePage/Navbar";
import Footer from "./components/homePage/Footer";
import LoginPage from "./components/login/loginPage";

function App() {
  return (
    /*<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Goals" element={<Goals />} />
      <Route path="/Exercises" element={<SearchExercises />} />
    </Routes>*/

    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
