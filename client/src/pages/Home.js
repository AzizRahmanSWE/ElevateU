import React, { useState } from 'react';
import { Box } from '@mui/material';

import SearchExercises from '../components/exerciseDemos/SearchExercises'
import Exercises from '../components/exerciseDemos/Exercises';

const Home = () => {
  
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  
  return (
    <Box>
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
  )
}

export default Home;