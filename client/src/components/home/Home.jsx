import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../exerciseDemos/Exercises";
import SearchExercises from "../exerciseDemos/SearchExercises";
import HeroBanner from "./HeroBanner";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  // console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
