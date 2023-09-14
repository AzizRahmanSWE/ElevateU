import React, { useEffect, useState, Fragment } from "react";
import { Box } from "@mui/material";

const ListWorkoutPresets = () => {
  const [preset, setPreset] = useState([]);

  const getWorkoutPresets = async () => {
    try {
      const response = await fetch("http://localhost:5000/workout_preset")
      const jsonData = await response.json();
      setPreset(jsonData);
    } catch (err) {
      console.err(err.message)
    }
  }
  
  return (
    <Box>
      <Fragment>
        ListWorkoutPresets
      </Fragment>
    </Box>
  )
}

export default ListWorkoutPresets
