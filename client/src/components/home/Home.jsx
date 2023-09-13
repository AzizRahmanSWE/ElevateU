import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../exerciseDemos/Exercises";
import Navbar from "../navbar/Navbar";
import SearchExercises from "../exerciseDemos/SearchExercises";
import HeroBanner from "./HeroBanner";
import Footer from "../footer/Footer";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  // console.log(bodyPart)
  return (
    <Box>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <HeroBanner />
          <SearchExercises
            setExercises={setExercises}
            bodyPart={bodyPart}
            setBodyPart={setBodyPart}
          />
          {/*<Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
  />*/}
        </div>
      </div>
      <Footer />
    </Box>
  );
};

export default Home;
