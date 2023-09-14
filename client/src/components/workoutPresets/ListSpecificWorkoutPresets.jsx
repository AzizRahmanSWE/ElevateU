import React, { useEffect, useState } from 'react';
import { Stack, Box } from '@mui/material'
import WorkoutPresetPage from '../workoutPlan/WorkoutPresetPage';

const ListSpecificWorkoutPresets = (props) => {
  const { PresetId } = props;
  const [exercises, setExercises] = useState([]);
  const [presetID, setPresetID] = useState(PresetId);

  const getExercisesByDayPresetId = async (dayPresetId) => {
    try {
      const response = await fetch(`http://localhost:5000/workout_preset/${dayPresetId}`);
      const jsonData = await response.json();
      setExercises(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  
  useEffect(() => {
    getExercisesByDayPresetId(presetID)
  }, [presetID]);
  
  return (
    <Box>
      <Stack
        sx={{ mt: "100px" }}
        style={{ color: "white" }}>
      <table>
          <thead>
            <tr>
              <th>Exercise Day</th>
              <th>Exercise Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
          {exercises.map((exercise) => (
            <tr key={exercise.activity_id}>
              <td className="mt-5">{exercise.day_name}</td>
              <td>{exercise.activity_name}</td>
              <td>{exercise.activity_description}</td>
              <td>{exercise.targeted_muscle}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Stack>
    </Box>
  )
}
export default ListSpecificWorkoutPresets