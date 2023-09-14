import React from 'react'
import ListSpecificWorkoutPresets from '../workoutPresets/ListSpecificWorkoutPresets';
import { useParams } from 'react-router-dom';

const WorkoutPresetPage = () => {
  const { id } = useParams()
  
  return (
    <ListSpecificWorkoutPresets PresetId={id} /> 
  )
}

export default WorkoutPresetPage