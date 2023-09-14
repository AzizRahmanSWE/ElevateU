import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "../../utils/Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: "50px", xs: "" } }}>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#FFF"
        mb="30px"
        ml="33px"
        mt="40px"
      >
        Exercises that Will <span style={{ color: "#5AFE73" }}>Elevate</span>{" "}
        the <span style={{ color: "Pink" }}>Same Muscle Group</span>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#FFF"
        mb="30px"
        ml="33px"
        mt="40px"
      >
        Exercises that <span style={{ color: "#5AFE73" }}>Uses </span>
        the<span style={{ color: "Pink" }}> Same Equipments</span>
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
