import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../exerciseDemos/Exercises";
import SearchExercises from "../exerciseDemos/SearchExercises";
import HeroBanner from "./HeroBanner";
import Footer from "../bars/Footer";

const Home = () => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  // console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      {/*<SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />*/}
      <Footer />
    </Box>
  );
};

export default Home;
