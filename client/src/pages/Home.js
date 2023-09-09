import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/exerciseDemos/Exercises";
import SearchExercises from "../components/exerciseDemos/SearchExercises";
import HeroBanner from "../components/homePage/HeroBanner";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);
  
  return (
    <Box>
      <HeroBanner />
      {/* can be passed with useContext api */}
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
